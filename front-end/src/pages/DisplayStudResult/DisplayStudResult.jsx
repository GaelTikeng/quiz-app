import React, { useEffect, useState } from "react";
import "./DisplayStudResult.css";
import Usersnav from "../../component/molecule/Usersnav/Usersnav";
import Button from "../../component/atoms/button/Button";
import axios from "axios";
import { AXIOS_BASE_URL } from "../../services/contants";

function DisplayStudResult  () {
  const [quizResult, setQuizResult] = useState([]);
  const studentId = JSON.parse(localStorage.getItem("studentId"));
  const quizId = JSON.parse(localStorage.getItem("quizId"));
  

  const getQuizResult = async (studentId, quizId) => {
    const response = await axios.get(
      AXIOS_BASE_URL+ `dashboard/${studentId}/${quizId}`
    );
    return response.quizResult;
  };

  //fetching the quiz result when the result page mounts

  useEffect(() => {
    getQuizResult(studentId, quizId).then((result) => setQuizResult(result));
  }, []);

  const handleRestart = () => {};

  return (
    <div>
      <Usersnav />
      <div className="result-cont">
        <div className="result-div">
          <div className="flex-cont">
            <h1 className="stud-name">Student name: {quizResult.studentName}</h1>
            <div className="score-details">
              <p>Quiz title: {quizResult.score}</p>
              <p>Score: {quizResult.quizTitle}</p>
              <p>Time spent: {quizResult.timeSpent}</p>
            </div>           
            <div className="action-btn">
              <Button
                title="Restart"
                className="restart-btn"
                onClick={handleRestart}
              />
              <Button title="Exit" className="exit-btn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayStudResult;
