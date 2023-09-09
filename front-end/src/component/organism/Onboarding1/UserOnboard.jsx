import React from "react";
import "./UserOnboard.css";
import Logo from "../../../../public/image/smartbrain.jpg";
import Logo1 from "../../../../public/image/Welcome-bro1.png";
import Vector1 from '../../../../public/image/Vector1.png'

function UserOnboard() {
  return (
    <div className="useronboard_container">
      <div className="useronboard_log">
        <img src={Logo} alt="logo" />
      </div>
      <div className="div_onboard">
        <h2>You are in !</h2>
        <img src={Logo1} alt="logo1" />
        <p>
          Are you ready to test your knowledge? This quiz was <br /> set by your
          teacher to help you learn the material.
        </p>
        <div className="navig_btns">
          <p><img src={Vector1} alt="vector" />  prev</p>
          <p><img src={Vector2} alt="vector" /> prev</p>
        </div>
      </div>
    </div>
  );
}

export default UserOnboard;
