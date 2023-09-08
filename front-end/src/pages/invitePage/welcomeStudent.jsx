import React from "react";
import './welcomeStudent.css'
import Button from "../../component/atoms/button/button";
import Logo from "../../../public/image/smartbrain.jpg"
import Welcome from "../../../public/image/welcome-bro.png"
import NextBtn from "../../component/atoms/nextbtn/nextBtn";
import { useNavigate } from 'react-router-dom'



export default function WelcomeSudent () {


  return (
    <div className="all">
      <div className="nav-image">
        <img src={Logo} alt="quiz_app logo" />
      </div>
      <div className="grey-section">
        <div className="welcome">
          <h2>You are in !</h2>
          <h1>Welcome to SmartBrain</h1>
          <img src = {Welcome} alt="welcome image" className="image"/>
          <p className="p-tag">Are you ready to test your knowledge? This quiz was created by your teacher to help you learn the mateial.</p>
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