import React from "react";
import Button from "../../atoms/button/button";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import Logo from "../../../../public/image/college entrance exam-rafiki 1.png"
import Logo1 from "../../../../public/image/brand1.png"
import Logo2 from "../../../../public/image/brand2.png"
import Logo3 from "../../../../public/image/brand3.png"
import Logo4 from "../../../../public/image/brand4.png"
import Logo5 from "../../../../public/image/brand5.png"



function Hero() {
  const navigate = useNavigate();

  const navigatetoSignup = () => {
    navigate("/signup");
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

      <div className="brandLogo">
        <img src={Logo1} alt="brand_logo" className="logo" />
        <img src={Logo2} alt="brand_logo" className="logo" />
        <img src={Logo3} alt="brand_logo" className="logo" />
        <img src={Logo4} alt="brand_Logo" className="logo" />
        <img src={Logo5} alt="brand_logo" className="logo" />
      </div>
    </div>
  );
}

export default Hero;
