import React from "react";
import "./DisplayStudResult.css";
import Usersnav from "../../component/molecule/Usersnav/Usersnav";
import Button from "../../component/atoms/button/Button";

const DisplayStudResult = ({studentName, score, quizTitle, timeSpent}) => {
  return (
    <div>
      <Usersnav />
      <div className="result-cont">
        <div className="result-div">
          <h1 className="stud-name">Student name: {studentName}</h1>
          <div className="score-details">
            <p>Quiz title : {score}</p>
            <p>Score : {quizTitle}</p>
            <p>Time spent : {timeSpent}</p>
          </div>
          <div className="action-btn">
            <Button title="Restart" className="restart-btn" />
            <Button title="Exit" className="exit-btn" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayStudResult;
