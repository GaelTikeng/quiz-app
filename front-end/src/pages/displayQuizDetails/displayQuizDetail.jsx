
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../public/image/smartbrain.png";

import Sidebar from "../../component/molecule/Sidebar/Sidebar";
import axios from "axios";
import { AXIOS_BASE_URL } from "../../services/contants";
import './displayQuizDetail.css'


export default function DisplayQuiz () {

  const [question, setQuestion] = useState([])
  const user = JSON.parse(localStorage.getItem('currentUser'))
  const quizTitle = JSON.parse(localStorage.getItem("quizTitle"))
  const navigate = useNavigate()
  const quizId = JSON.parse(localStorage.getItem("quizId"))
  let token = localStorage.getItem("token");
  
  useEffect(() => {
    // get all questions and corresponding options
    axios
    .get(process.env.AXIOS_BASE_URL+`dashboard/${user?.Id}/${quizId}`, {
      headers: {Authorization: `Bearer: ${token}`}
    })
    .then((response) => {
      setQuestion(response.data)
      console.log('Here are the questions', response)
    })
    .catch((err) => {
      console.log("Error while fetching questions", err)
    })
  }, [])

  const handleToggleOption = (id) => {
    const newOpt = [...question.options]
    newOpt[id].checked = !newOpt[id].chacked
  }

  return (
    <div>
      <div className="userDashboard-nav">
        <div className="nav_img">
          <img src={Logo} alt="logo" />
        </div>
      </div>
      <div className="userdashboard_container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main_dashboard">
          <div className="actions">
            <p>Dashboard</p>
          </div>
          <div className="second_part">
            <h3 onClick={() => navigate(`/dashboard/${user.id}`)} className="h3-quiz">Quizzes / <span>{quizTitle}</span></h3>
            <div className="quizes_details">
              {question?.map((ques, index) => (
                <div className="questions" key={index}>
                  <p className="p-quest"><span>{index + 1}</span>. {ques.question}</p>
                  <ul>
                    {ques.options?.map((opt) => (
                      <li key={opt.id} className="list-options">
                        <input
                          type="checkbox" className="check-box"
                          checked = {opt.checked}
                          onChange={() => handleToggleOption(opt.id)}
                        />
                        <p>{opt.title}</p>
                      </li>
                    ))}
                    
                  </ul>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>

    </div>
  )

}