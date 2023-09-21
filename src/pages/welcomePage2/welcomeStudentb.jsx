import React from "react";
import './welcomeStudentb.css'
import Logo from "../../../public/image/smartbrain.jpg"
import Exam from "../../../public/image/Exams-bro.png"
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'


export default function WelcomeSudentb () {

  const navigate = useNavigate()
  const handleClickPrev = () => {
    navigate('/welcomestuda')
  }

  const handleClickNext = () => {
    navigate('/dashboard/:userId/quiz-details/:quizId')
  }

  return (
    <div className="all">
      <div className="nav-image">
        <img src={Logo} alt="quiz_app logo" />
      </div>
      <div className="grey-section">
        <div className="welcome">
          <h2>Hey, did you know ?</h2>
          <h1>The only limit is your imagination</h1>
          <img src = {Exam} alt="welcome image" className="image"/>
          <p className="ptag">Each quiz has a variety of questions and 4 options for possible answers, so you'ill be sure to find something challenging. <b>Good luck</b> </p>
          <div className="two-btns">
            <button
              onClick={handleClickPrev}
              className="prev-btn"
            >
              <FaAngleLeft/>
              Prev
            </button>
            <p>2/2</p>
            <button
              onClick={handleClickNext}
              className="next-btn"
            >
              Start quiz
              <FaAngleRight/>
            </button>
          </div>
        </div>

      </div>

    </div>
  )
}