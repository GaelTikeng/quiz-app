import React, { useEffect, useState } from "react";
import Usersnav from "../../component/molecule/Usersnav/Usersnav";
import "./Takingquiz.css";
import Button from "../../component/atoms/button/Button";
import QuizTimer from "../../component/atoms/QuizTimer";

function Takingquiz() {
  // Declaring the state to store the quiz data
  const [quizData, setQuizData] = useState([]);

  // Function to fetch data from the api
  const fetchquizdata = async () => {
    const response = await fetch("Url");
    const data = await response.json();
    return data;
  };

  // Use the useEffect hook to fetch the quiz data when the component mounts.
  useEffect(() => {
    fetchquizdata().then((data) => {
      setQuizData(data);
    });

  }, []);

  const handleClick =() =>{
    
  }



  return (
    <>
      <Usersnav />
      <div className="taking_quiz">
        <div className="quiz_cont ">
          <div className="name_time">
            <p>Name :</p>
            <div>Time left :<QuizTimer durationInMinutes={60}/></div>
          </div>
          <div className="div_ques">
            <ol>
              {quizData.map((question, index) => (
                <li key={index}>
                  <h2>{question.title}</h2>
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
            <Button title="Done" className="quiz-button" onClick={handleClick}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Takingquiz;
