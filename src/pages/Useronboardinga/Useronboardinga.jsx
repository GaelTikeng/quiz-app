import React from "react";
import "./Useronboardinga.css";
import Welcome from "../../../public/image/Online learning-bro.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import Usersnav from "../../component/molecule/Usersnav/Usersnav";

function Useronboardinga() {
  const navigate = useNavigate();
  const handleClickNext = () => {
    navigate("/useronboardingb");
  };

  // const handleClick = () => {
  //   navigate('/welcome')
  // }

  const calculateEndTime = (durationInMinutes) => {
    const now = new Date();
    const endTime = new Date(now.getTime() + durationInMinutes * 60 * 1000);
    console.log('duration is', endTime)
    // setEndTime(endTime); 
  };


  return (
    <>
       <Usersnav/>
      <div className="grey-section">
        <div className="welcome">
          <h2>You are in !</h2>
          <img src = {Welcome} alt="welcome image" className="image"/>
          <p className="p-tag">Welcome to the quiz app admin panel! <br /> Here you can manage quizzes, questions, and users.

</p>
          <div className="two-btns">
            <button
              // onClick={handleClickPrev}
              className="prev-btn"
            >
              <FaAngleLeft/>
              Prev
            </button>
              <p>1/2</p>
            <button
              // onClick={handleClickNext}
              onClick={calculateEndTime(10)}
              className="next-btn"
            >
              Next
              <FaAngleRight/>
            </button>
          </div>
          
        </div>

      </div>

    </>
  );
}

export default Useronboardinga;
