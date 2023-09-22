import React from "react";
import "./Useronboardinga.css";
import Usersnav from "../../component/molecule/Usersnav/Usersnav";
import Logo from "../../../public/image/useronboard1.png";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";


function Useronboardinga() {
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
