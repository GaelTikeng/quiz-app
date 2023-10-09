import React from "react";
import "./Useronboard2.css";
import Welcome from "../../../public/image/onlineteacher2.png";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Usersnav from "../../component/molecule/Usersnav/Usersnav";

function Useronboard2() {
  const navigate = useNavigate();
  let signupId = JSON.parse(localStorage.getItem('currentUser'))

  const handleClickNext = () => {
    navigate(`/dashboard/${signupId.id}`);
  };

  const handleClickPrev = () => {
    navigate(`/user/onboard1/${signupId?.id}`);
  };

  return (
    <div>
      <Usersnav/>
      <div className="grey-sec">
        <div className="grey-section">
          <div className="welcome">
            <div className="elmt-holder">
              <div>
              <h2>You are almost there !</h2>
              {/* <h1>Welcome to SmartBrain</h1> */}
              <img src={Welcome} alt="welcome image" className="image" />
              <p className="pa-tag">
                Now that you're familiar with the basics, let's dive deeper into managing quizzes, questions, and users.
              </p>
              <div className="two-butns">
                <button onClick={handleClickPrev} className="prev-butn">
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
    </div>
  );
}

export default Useronboard2;