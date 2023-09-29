import React from "react";
import Button from "../../atoms/button/Button";
// import Button from "../../atoms/button/button";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../../images/smartbrain.png";

function Navbar() {
  const navigate = useNavigate();

  const navigatetoHome = () => {
    navigate("/");
  };

  const navigatetoLogin = () => {
    navigate("/account/login");
  };

  const navigatetoSignup = () => {
    navigate("/account/signup");
  };

  const handleClickLanding = () => {
    navigate("/");
  };

  return (
    <div className="nav-big-cont">
      <div className="nav_container">
        <div className="navImage" onClick={handleClickLanding}>
          <img src={Logo} alt="quiz_app logo" />
        </div>
        <div className="leftNav">
          <div className="navParagraph">
            <p className="mainbtn" onClick={navigatetoHome}>
              Home
            </p>
            <p className="homeBtn">About</p>
            <p className="homeBtn">Features</p>
          </div>

          <div className="navBtn">
            <Button
              className="loginBtn"
              onClick={navigatetoLogin}
              title="Login"
            />
            <Button
              className="signupBtn"
              onClick={navigatetoSignup}
              title="Sign Up"
            />
          </div>
        </div>
      </div>

      {/* Media query */}
      <div className="nav-query-container">
        <div>
          <div className="nav_query">
            <div className="navImage" onClick={handleClickLanding}>
              <img src={Logo} alt="quiz_app logo" />
            </div>
            <div className="navBtn">
              <Button
                className="loginBtn"
                onClick={navigatetoLogin}
                title="Login"
              />
              <Button
                className="signupBtn"
                onClick={navigatetoSignup}
                title="Sign Up"
              />
            </div>
          </div>
          <div className="standard">
            <div className="navParagraph">
              <p className="mainbtn" onClick={navigatetoHome}>
                Home
              </p>
              <p className="homeBtn">About</p>
              <p className="homeBtn">Features</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
