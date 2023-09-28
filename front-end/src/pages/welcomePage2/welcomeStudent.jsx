import React, { useContext } from "react";
import "./welcomeStudent.css";
import Exam from "../../../public/image/Exams-bro.png";
import NextBtn from "../../component/atoms/nextbtn/nextBtn";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { GiBrain } from "react-icons/gi"
import { useNavigate } from "react-router-dom";
import { StudContext } from "../../utiles/context";
import Usersnav from "../../component/molecule/Usersnav/Usersnav";

export default function WelcomeSudent2() {
  const quizId = useContext(StudContext);
  const navigate = useNavigate();
  const handleClickPrev = () => {
    navigate(`/student/${quizId.user.id}/${quizId.studentQuizId}/onboarding/1`);
  };

  const handleClickNext = () => {
    navigate(`/student/${quizId.user.id}/${quizId.studentQuizId}/quiz`);
  };

  return (
    <>
      <Usersnav />
      <div className="grey-section">
        <div className="welcome">
          <div className="element-holder">
          <h2>Hey, did you know ?</h2>
          <h1>The only limit is your imagination</h1>
          <img src={Exam} alt="welcome image" className="image" />
          <p className="ptag">
            Each quiz has a variety of questions and 4 options for possible <br />
            answers, so be rest asured to find something challenging. <br />
            <b>Good luck</b> <GiBrain className="brain"/>
          </p>
          <div className="two-btns">
            <button onClick={handleClickPrev} className="previous-btn">
              <FaAngleLeft />
              Prev
            </button>
            <p>2/2</p>
            <button onClick={handleClickNext} className="next-btn">
              Start quiz
              <FaAngleRight />
            </button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
