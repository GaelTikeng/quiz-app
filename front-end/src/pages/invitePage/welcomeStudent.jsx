import React, { useContext } from "react";
import "./welcomeStudent.css";
import Logo from "../../../public/image/smartbrain.png";
import Welcome from "../../../public/image/welcome-bro.png";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { StudQuizIdContext } from "../../utiles/context";

export default function WelcomeSudent() {
  const quizId = useContext(StudQuizIdContext);
  const navigate = useNavigate();
  const handleClickNext = () => {
    navigate(`/student/${quizId}/onboarding/2`);
    console.log(quizId);
  };

  return (
    <div className="all">
      <div className="nav-image">
        <img src={Logo} alt="quiz_app logo" />
      </div>
      <div className="grey-section">
        <div className="welcome">
          <h2>You are in !</h2>
          <h2>
            Welcome to <span>Smart</span>Brain
          </h2>
          {/* <h1>Welcome to SmartBrain</h1> */}
          <div className="tips">
            <h3>Tips: </h3>
            <ul>
              <li>
                Read the questions carefully before answering. Make sure you
                understand what the question is asking before you choose an
                answer.
              </li>
              <li>
                Eliminate the wrong answers first. This will increase your
                chances of choosing the correct answer.
              </li>
              <li>
                Use your time wisely. Don't spend too much time on any one
                question. If you're stuck, move on and come back to it later.
              </li>
            </ul>
            <p className="p-tag">
              Are you ready to test your knowledge? This quiz was created by your
              teacher to help you learn the material.
            </p>
          </div>
          
          <div className="two-btns">
            <button
              // onClick={handleClickPrev}
              className="prev-btns"
            >
              <FaAngleLeft />
              Prev
            </button>
            <p>1/2</p>
            <button onClick={handleClickNext} className="next-btn">
              Next
              <FaAngleRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
