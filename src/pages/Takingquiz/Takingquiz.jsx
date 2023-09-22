import React, { useEffect, useState } from "react";
import Usersnav from "../../component/molecule/Usersnav/Usersnav";
import "./Takingquiz.css";
import Button from "../../component/atoms/button/Button";
import QuizTimer from "../../component/atoms/QuizTimer";
import axios from "axios";

function Takingquiz() {
  // Declaring the state to store the quiz data
  const [quizData, setQuizData] = useState([]);
  const url = "http://localhost:5173/student/:userId/:quizId";
  // Use the useEffect hook to fetch the quiz data when the component mounts.
  const getData = () => {
    axios.get(url).then((response) => 
      // console.log(response);
      // const mydata = response.data;
      setQuizData(response.quizData)
  );
  };

  useEffect(() => getData(), []);

  const handleClick = () => {};

  return (
    <>
      <Usersnav />
      <div className="taking_quiz">
        <div className="quiz_cont ">
          <div className="name_time">
            <p>Name :</p>
            <div>
              Time left :<QuizTimer durationInMinutes={10} />
            </div>
          </div>
          <div className="div_ques">
            <ol>
              {quizData.map((dataObj, index) => (
                <li key={dataObj.index}>
                  <h2>{dataObj.title}</h2>
                  <ul>
                    {question.options.map((option, index) => (
                      <li key={index}>{option}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
          <div className="btn_done">
            <Button
              title="Done"
              className="quiz-button"
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Takingquiz;
