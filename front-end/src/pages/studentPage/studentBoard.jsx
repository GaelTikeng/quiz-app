import React, { useContext, useState, useEffect, useRef } from "react";
import { StudContext } from "../../utiles/context";
import "./studentBoard.css";
import Usersnav from "../../component/molecule/Usersnav/Usersnav";
import { AXIOS_BASE_URL } from "../../services/contants";
import Timer from "../../utiles/timer/timer";
import axios from "axios";
import Popup from "../../utiles/popup/popup";
import { useNavigate } from "react-router-dom";
import correction from "../../utiles/correction";

export default function StudentBoard() {
  // const validRef = useRef(ref);
  const [timeOut, setTimeOut] = useState(false);
  const [checkBox, setCheckBox] = useState(false);
  const [done, setDone] = useState(false)
  const [optionId, setOptionId] = useState(0);
  const info = useContext(StudContext);
  const [timeSpent, setTimeSpent] = useState("");
  const [question, setQuestion] = useState([]);
  const [answers, setAnswers] = useState([]);
  const childRef = useRef(null);
  const student = JSON.parse(localStorage.getItem("studentName"));
  const navigate = useNavigate();
  const user = info.user;
  const quizId = info.studentQuizId;
  let score = 0

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
    
  };

  const handleToggleOption = ({id, optIndx, checked, qusIndx}) => {
    setOptionId(id)
    const newOpt = [...question[qusIndx].options];

    setAnswers((prev) => [...prev, {optionId: optionId, isCorrect: checkBox}])

    newOpt[optIndx].checkBox = !newOpt[optIndx].checkBox;
    setCheckBox(checked)
  };

  const handleClose = () => {
    setTimeOut((prev) => !prev);
    setDone((prev) => !prev)
    navigate("/");
  };

  const handleClick = () => {
    childRef.current.childFunction();
    score = correction(question, answers)
    console.log("timespent", timeSpent)
    // post time spent by student and score optained
    // axios
    //   .post(AXIOS_BASE_URL + "update", {
    //     name: "ricardo",
    //     score: score,
    //     timeSpent: timeSpent,
    //   })
    //   .then((response) => {
    //     console.log("Here i the response from post score", response);
    //     setDone((prev) => !prev)
    //   })
    //   .catch((err) => {
    //     console.log("error occured", err);
    //   });
  };

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
            seconds={5400}
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
                  {kest.options?.map((opt, indice) => (
                    <li key={opt.id} className="list-options">
                      <input
                        key={opt.id}
                        value={checkBox}
                        type="checkbox"
                        className="check-boxx"
                        // checked={checkBox}
                        onChange={({target: {checked}}) => 
                        // {id, optIndx, checked, qusIndx}
                        handleToggleOption({id: opt.id, optIndx: indice, checked, qusIndx: index})}
                      />
                      <p>{opt.title}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <hr></hr>
            <div className="two-btns">
              <button className="done" onClick={() => handleClick()}>
                Submit
              </button>
            </div>
          </div>
          {done && (
            <Popup
              content={
                <>
                  <p style={{padding: "20px", color: "black"}}>Thanks <b>{student.participantName}</b> for have taken the for our demo Presentation.</p>
                  <p>Checkout your score from your teacher</p>
                </>
              }
              handleClose={() => handleClose()}
            />
          )}

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
