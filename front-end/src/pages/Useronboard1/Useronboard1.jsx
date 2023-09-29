import React from "react";
import './Useronboard1.css';
import Welcome from "../../../public/image/onlineteacher1.png";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Usersnav from "../../component/molecule/Usersnav/Usersnav";

function Useronboard1() {
  const navigate = useNavigate();
  let signupId = JSON.parse(localStorage.getItem('currentUser'))
  const handleClickNext = () => {
    navigate('/user/onboard2/:userId')
  };

  return (
    <div>
      <Usersnav />
      <div className="grey-sec">
        <div className="grey-section">
          <div className="welcome">
            <div className="elt-holder">
              {/* <div> */}
              <h2>Welcome to Smart<span>Brain</span> admin panel</h2>
              {/* <h1>Welcome to SmartBrain</h1> */}  
              <img src={Welcome} alt="welcome image" className="image" />
              <p className="p-tag">
                Welcome to the Quiz App admin panel! Here, you can create, edit,
                and manage quizzes. You can also view user results and
                statistics. Start creating your own quizzes and helping others
                learn!
              </p>

              <div className="two-btns">
                <button
                  // onClick={handleClickPrev}
                  className="prev-butn"
                >
                  <FaAngleLeft />
                  Prev
                </button>
                <p>1/2</p>
                <button onClick={handleClickNext} className="next-btn">
                  Next
                  <FaAngleRight />
                </button>
              {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Useronboard1;