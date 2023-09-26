import React, { useContext, useState, useEffect, useRef } from "react";
import { StudContext } from "../../utiles/context";
import "./studentBoard.css";
import Usersnav from "../../component/molecule/Usersnav/Usersnav";
import { AXIOS_BASE_URL } from "../../services/contants";
import Timer from "../../utiles/timer/timer";
import axios from "axios";
import Popup from "../../utiles/popup/popup";
import { useNavigate } from "react-router-dom";

export default function StudentBoard() {
  // const validRef = useRef(ref);
  const [timeOut, setTimeOut] = useState(false);
  const info = useContext(StudContext);
  const [timeSpent, setTimeSpent] = useState("");
  const [question, setQuestion] = useState([]);
  const childRef = useRef(null);
  const student = JSON.parse(localStorage.getItem("studentName"));
  const navigate = useNavigate();
  const user = info.user;
  const quizId = info.studentQuizId;
  // let timeSpent = ""

  useEffect(() => {
    // get all questions and corresponding options
    axios
      .get(AXIOS_BASE_URL + `dashboard/${user?.Id}/${quizId}`)
      .then((response) => {
        setQuestion(response.data);
        console.log("Here are the questions", response);
      })
      .catch((err) => {
        console.log("Error while fetching questions", err);
      });
  }, []);

  const handleSubmit = () => {
    // post time spent by student and score optained
    axios
      .post(AXIOS_BASE_URL + "update", {
        name: student.participantName,
        // score: score,
        timeSpent: timeSpent,
      })
      .then((response) => {
        console.log("Here i the response from post score", response);
      })
      .catch((err) => {
        console.log("error occured", err);
      });
  };

  const handleToggleOption = (id) => {
    const newOpt = [...question.options];
    newOpt[id].checked = !newOpt[id].chacked;
  };

  const handleClose = () => {
    setTimeOut((prev) => !prev);
    navigate("/");
  };

  const handleClick = () => {
    childRef.current.childFunction();
  };

  console.log("timeSpent from child", timeSpent);

  return (
    <div>
      <Usersnav className="user-nav" />
      <div className="gray-section">
        <div className="name-time">
          <div className="two-h3">
            <h3>Name : {student.participantName}</h3>
            <h3>Subject : </h3>
          </div>
          <Timer
            seconds={5430}
            timeOut={timeOut}
            setTimeOut={setTimeOut}
            timeSpent={timeSpent}
            setTimeSpent={setTimeSpent}
            ref={childRef}
          />
        </div>
        <div className="main-section">
          <div className="quizz">
            {question?.map((kest, index) => (
              <div className="kuestions" key={index}>
                <p className="p-element">
                  <span>{index + 1}</span>. {kest.question}
                </p>
                <ul>
                  {kest.options?.map((opt) => (
                    <li key={opt.id} className="list-options">
                      <input
                        type="checkbox"
                        className="check-boxx"
                        checked={opt.checked}
                        onChange={() => handleToggleOption(opt.id)}
                      />
                      <p>{opt.title}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <hr></hr>
            <div className="two-btns">
              <button
                className="done"
                onClick={() => handleClick()}
              >
                Submit
              </button>
            </div>
          </div>

          {timeOut && (
            <Popup
              content={
                <>
                  <h1 style={{ color: "red" }}>Time out</h1>
                  <p style={{ textAlign: "center", padding: "20px 0" }}>
                    Checkout your results from your teacher
                  </p>
                </>
              }
              handleClose={() => handleClose()}
            />
          )}
        </div>
      </div>
    </div>
  );
}
