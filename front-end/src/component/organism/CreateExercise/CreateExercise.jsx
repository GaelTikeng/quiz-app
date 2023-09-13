import React from "react";
import "./CreateExercise.css";
import Usersnav from "../../molecule/Usersnav/Usersnav";
import Sidebar from "../../molecule/Sidebar/Sidebar";
import InputField from "../../atoms/InputFields/InputField";
import { MdCancel } from "react-icons/md";
import { MdAddBox } from "react-icons/md";
import Button from "../../atoms/button/Button";

function CreateExercise() {
  return (
    <>
      <Usersnav />
      <div className="createquiz_container">
        <Sidebar />
        <div className="right_side">
          <div className="quiz_header">
              <p>Dashboard</p>
          </div>
          <div className="creat_quiz">
            <InputField />
          </div>
          <div className="texterea">
            <label htmlFor="question">Question</label>
            <textarea name="" id=""></textarea>
          </div>
          <div className="opt_cont">
            <div className="options">
              <InputField type="checkbox" name="opt" />
              <InputField type="type" name="option" />
              <MdCancel />
            </div>
            <p className="add_btn">
              <MdAddBox />
            </p>
          </div>
          <div className="buttom_btn">
            <Button title="cancel" />
            <div className="three_btn">
              <Button title="Prev" />
              <Button title="Next" />
              <Button title="Done" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateExercise;
