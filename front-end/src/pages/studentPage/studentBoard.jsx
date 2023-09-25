import React, { useContext, useState, useEffect, useRef } from "react";
import { StudContext } from "../../utiles/context";
import "./studentBoard.css";
import Usersnav from "../../component/molecule/Usersnav/Usersnav";
import { AXIOS_BASE_URL } from "../../services/contants";
import Timer from "../../utiles/timer/timer";
import axios from "axios";

export default function StudentBoard() {
  const validRef = useRef();
  const [timeOut, setTimeOut] = useState(false);
  const info = useContext(StudContext);
  const [question, setQuestion] = useState([]);
  const student = JSON.parse(localStorage.getItem("studentName"));
  const user = info.user;
  const quizId = info.studentQuizId;

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

  const handleToggleOption = (id) => {
    const newOpt = [...question.options];
    newOpt[id].checked = !newOpt[id].chacked;
  };

  // console.log("This is opt", question);
  // let { options } = opt;
  // console.log("object distructured", options);

  return (
    <div>
      <Usersnav />
      <div className="gray-section">
        <div className="main-section">
          <div className="name-time">
            <div className="two-h3">
              <h3>Name : {student.participantName}</h3>
              <h3>Subject : </h3>
            </div>
            <Timer seconds={15} ref={validRef} />
          </div>
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
          </div>
          {
            (ref = { ref } && (
              <Popup
                content={
                  <>
                    <h1>Congratulations</h1>
                  </>
                }
                handleClose={setTimeOut(!timeOut)}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}
