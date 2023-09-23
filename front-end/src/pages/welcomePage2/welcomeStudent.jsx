import React, { useContext } from "react";
import './welcomeStudent.css'
import Logo from "../../../public/image/smartbrain.png"
import Exam from "../../../public/image/Exams-bro.png"
import NextBtn from "../../component/atoms/nextbtn/nextBtn";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import { StudQuizIdContext } from "../../utiles/context";


export default function WelcomeSudent2 () {

  const quizId = useContext(StudQuizIdContext)
  const navigate = useNavigate()
  const handleClickPrev = () => {
    navigate('/student/onboarding/1')
  }

  const handleClickNext = () => {

    navigate("/")
  }

  return (
    <div className="all">
      <div className="nav-image">
        <img src={Logo} alt="quiz_app logo" />
      </div>
      <div className="grey-section">
        <div className="welcome">
          <h2>Hey, did you know ?</h2>
          <h1>Then only limit is your imagination</h1>
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