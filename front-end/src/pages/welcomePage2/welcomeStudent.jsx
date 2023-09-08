import React from "react";
import './welcomeStudent.css'
import Button from "../../component/atoms/button/button";
import Logo from "../../../public/image/smartbrain.jpg"
import Exam from "../../../public/image/Exams-bro.png"
import NextBtn from "../../component/atoms/nextbtn/nextBtn";


export default function WelcomeSudent2 () {


  return (
    <div className="all">
      <div className="nav-image">
        <img src={Logo} alt="quiz_app logo" />
      </div>
      <div className="grey-section">
        <div className="welcome">
          <h2>You are in !</h2>
          <h1>Welcome to SmartBrain</h1>
          <img src = {Exam} alt="welcome image" className="image"/>
          <p className="ptag">Each quiz has a variety of questions and 4 options for possible answers, so you'ill be sure to find something challenging. <b>Good luck</b> </p>
          <div>
            {/* <NextBtn
              text = 'Next'
              onClick={handleClick}
              className="next"
            /> */}
          </div>
          
        </div>

      </div>

    </div>
  )
}