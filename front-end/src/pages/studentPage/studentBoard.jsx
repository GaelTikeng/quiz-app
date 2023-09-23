import React, { useContext, useState, useEffect } from "react";
import { StudContext } from "../../utiles/context";
import "./studentBoard.css";
import Usersnav from "../../component/molecule/Usersnav/Usersnav";
import { AXIOS_BASE_URL } from "../../services/contants";
import axios from "axios";

export default function StudentBoard() {
  const info = useContext(StudContext);
  const [questiion, setQuestion] = useState([])
  const student = JSON.parse(localStorage.getItem("studentName"));
  const user = info.user
  const quizId = info.studentQuizId

  useEffect(() => {
    // get all questions and corresponding options
    axios
    .get(AXIOS_BASE_URL+`dashboard/${user?.Id}/${quizId}`)
    .then((response) => {
      setQuestion(response.data)
      console.log('Here are the questions', response)
    })
    .catch((err) => {
      console.log("Error while fetching questions", err)
    })
  }, [])

  console.log("this ies the questions", questiion)

  return (
    <div>
      <Usersnav />
      <div className="gray-section">
        <div className="main-section">
          <div className="name-time">
            <h3>Name : {student.participantName}</h3>
            <h3>Time left : 00:21:01</h3>
          </div>
          <div className="quiz">

          </div>
        </div>
      </div>
    </div>
  );
}
