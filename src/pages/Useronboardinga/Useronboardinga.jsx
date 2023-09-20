import React from "react";
import "./Useronboardinga.css";
import Welcome from "../../../public/image/useronboard1.png";
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


  return (
    <>
       <Usersnav/>
      <div className="grey-section">
        <div className="welcome">
          <h2>You are in !</h2>
          <img src = {Welcome} alt="welcome image" className="image"/>
          <p className="p-tag">Are you ready to test your knowledge? This quiz was created by your teacher to help you learn the material.</p>
          <div className="two-btns">
            <button
              // onClick={handleClickPrev}
              className="prev-btns"
            >
              <FaAngleLeft/>
              Prev
            </button>
              <p>1/2</p>
            <button
              onClick={handleClickNext}
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
