import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../public/image/smartbrain.jpg";

import Sidebar from "../../component/molecule/Sidebar/Sidebar";
import axios from "axios";
import './displayQuizDetail.css'


export default function DisplayQuiz () {



  const user = JSON.parse(localStorage.getItem('currentUser'))
  const quizTitle = JSON.parse(localStorage.getItem("quizTitle"))
  const navigate = useNavigate()


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
              
            </div>
            
          </div>
        </div>
      </div>

    </div>
  )

}