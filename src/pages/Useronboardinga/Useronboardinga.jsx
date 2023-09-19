import React from "react";
import "./Useronboardinga.css";
import Logo from "../../../public/image/useronboard1.png";


function Useronboardinga() {
  return (
    <div className="all">
      <div className="nav-img">
        <img src={Logo} alt="quiz_app logo" />
      </div>
      <div className="grey-section">
        <div className="welcome">
          <h2>You are almost there !</h2>
          {/* <h1>Welcome to SmartBrain</h1> */}
          <img src={Welcome} alt="welcome image" className="image" />
          <p className="p-tag">
            Are you ready to test your knowledge? This quiz was created by your
            teacher to help you learn the material.
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
  );
}

export default Useronboardinga;
