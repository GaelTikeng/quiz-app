import React from "react";
import "./Useronboardinga.css";
import Logo from "../../../public/image/smartbrain.jpg";
import Welcome from "../../../public/image/useronboard1.png";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

function Useronboardinga() {
  const navigate = useNavigate();
  const handleClickNext = () => {
    navigate("/student/2");
  };

  return (
    <div className="all">
      <div className="nav-img">
        <img src={Logo} alt="quiz_app logo" />
      </div>
      <div className="grey-sec">
        <div className="grey-section">
          <div className="welcome">
            <div className="elt-holder">
            <h2>You are almost there !</h2>
            {/* <h1>Welcome to SmartBrain</h1> */}
            <img src={Welcome} alt="welcome image" className="image" />
            <p className="p-tag">
              Manage your quizzes, users and results from here
            </p>
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
      </div>
    </div>
  );
}

export default Useronboardinga;
