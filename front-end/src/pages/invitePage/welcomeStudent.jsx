import React from "react";
import './welcomeStudent.css'
import Button from "../../component/atoms/button/button";
import Logo from "../../../public/image/smartbrain.jpg"


export default function WelcomeSudent () {


  return (
    <div className="all">
      <div className="navImage">
        <img src={Logo} alt="quiz_app logo" />
      </div>

    </div>
  )
}