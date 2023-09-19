import React from "react";
import "./Useronboardinga.css";
import Logo from "../../../public/image/smartbrain.jpg";
import Welcome from "../../../public/image/useronboard1.png";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

function Useronboardinga() {
  const navigate = useNavigate();
  const handleClickNext = () => {
    navigate("/useronboardingb");
  };

  const handleClickPrev = () => {
    navigate('/welcome')
  }

  return (
    <>
      <Usersnav />
      <div className="useronboard_container">
        <div className="div_elements">
          <div className="header">
            <h1>You are in</h1>
          </div>
          <div className="useronboarding_img">
            <img src={Logo} alt="img" />
          </div>
          <div>
            <p>
              Are you ready to test your knowledge? This quiz app was <br />{" "}
              created by your teacher to help you learn the material.
            </p>
          </div>
          <div className="btns">
            <p className="prev_navig"><GrFormPrevious/> Prev</p>
            <p>1/2</p>
            <p className="next_navig"><GrFormNext/> Next</p>
          </div>
        </div>
      </div>

    </>
  );
}

export default Useronboardinga;
