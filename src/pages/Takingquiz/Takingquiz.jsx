import React from "react";
import Usersnav from "../../component/molecule/Usersnav/Usersnav";
import "./Takingquiz.css";
import Button from "../../component/atoms/button/Button";

function Takingquiz() {
  return (
    <>
      <Usersnav />
      <div className="taking_quiz">
        <div className="quiz_cont ">
          <div className="name_time">
            <p>Name :</p>
            <p>Time left :</p>
          </div>
          <div className="div_ques"></div>
          <div className="btn_done">
            <Button title="Done" className="quiz-button" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Takingquiz;
