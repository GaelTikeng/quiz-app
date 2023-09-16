import React from "react";
import Button from "../../atoms/button/Button";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import Logo from "../../../../public/image/college entrance exam-rafiki 1.png"

function Hero() {
  const navigate = useNavigate();

  const navigatetoSignup = () => {
    navigate("/account/signup");
  };

  return (
    <div className="heroContainer">
      <div className="text">
        <div className="header">
          <h1>The Quiz Maker That Will Help You Ace Your Exams</h1>
          <h4>
            Create engaging and interactive quizzes that will assess your
            students knowledge and understanding your subject matter.{" "}
          </h4>
          <Button
            className="heroBtn"
            onClick={navigatetoSignup}
            title=" GET
          STARTED"
          />
        </div>

        <div className="heroLogo">
          <img src={Logo} alt="hero_image" />
        </div>
      </div>

    </div>
  );
}

export default Hero;
