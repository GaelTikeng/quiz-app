import React from "react";
import "./Useronboardingb.css";
import Logo from "../../../public/image/smartbrain.jpg";
import Welcome from "../../../public/image/onboardinga.png";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Useronboardingb() {
  const navigate = useNavigate();
  const handleClickNext = () => {
    navigate("/dashboard/:userid");
  };

  const handleClickPrev = () => {
    navigate("/useronboardinga");
  };

  return (
    <div>
      <div className="nav-img">
        <img src={Logo} alt="quiz_app logo" />
      </div>
      <div className="grey-sec">
        <div className="grey-section">
          <div className="welcome">
            <div className="elt-holder">
              <h2>Welcome quizmaster !</h2>
              {/* <h1>Welcome to SmartBrain</h1> */}
              <img src={Welcome} alt="welcome image" className="image" />
              <p className="p-tag">
                Welcome to the Quiz App admin panel! Here, you can create, edit,
                and manage quizzes. You can also view user results and
                statistics. Start creating your own quizzes and helping others
                learn!
              </p>
              <div className="two-btns">
                <button onClick={handleClickPrev} className="prev-btns">
                  <FaAngleLeft />
                  Prev
                </button>
                <p>2/2</p>
                <button onClick={handleClickNext} className="next-btn">
                  Next
                  <FaAngleRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Useronboardingb;
