import React from "react";
import Button from "../../atoms/button/button";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../../../public/image/smartbrain.jpg"

function Navbar() {
  const navigate = useNavigate();

  const navigatetoHome = () => {
    navigate("/home");
  };

  const navigatetoLogin = () => {
    navigate("/login");
  };

  const navigatetoSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="nav_container">
      <div className="navImage">
        <img src={Logo} alt="quiz_app logo" />
      </div>
      <div className="leftNav">
        <div className="navParagraph">
          <p className="homeBtn" onClick={navigatetoHome}>
            Home
          </p>
          <p className="homeBtn" >About</p>
          <p className="homeBtn" >Features</p>
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
  );
}

export default Navbar;
