import React from "react";
import "./CreateExercise.css";
import Usersnav from "../../molecule/Usersnav/Usersnav";
import Sidebar from "../../molecule/Sidebar/Sidebar";
// import InputField from "../../atoms/InputFields/InputField";
import InputField from "../../atoms/InputFields/InputField";
import { MdCancel } from "react-icons/md";
import { MdOutlineAddCircle } from "react-icons/md";
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
          <div className="inputs_container">
            <div className="creat_quiz">
              <InputField label="Quiz title" type="text" className="quiz_title"/>
            </div>
            <div className="texterea">
              <label htmlFor="question" className="textarea_label">
                Question
              </label>
              <textarea name="" id="">
                enter the question...
              </textarea>
            </div>
            <div className="iscorrrect_opt">
              <p>Correct</p>
              <p>Options</p>
            </div>
            <div className="opt_cont">
              <div className="options">
                <InputField
                  type="checkbox"
                  name="opt"
                  className="checkbox_input"
                />
                <div className="answers">
                  <InputField
                    type="text"
                    name="option"
                    className="text_input"
                  />
                </div>
                <MdCancel className="clear_btn" />
              </div>
            </div>
            <div className="adding">
              <div className="add_btn">
                <MdOutlineAddCircle className="md_add"/> Add option
              </div>
            </div>
            <div className="buttom_btn">
              <div className="buttons">
                <Button title="cancel" className="cancel" />
                <div className="three_btn">
                  <Button title="Prev" className="previous" />
                  <Button title="Next" className="next_btn" />
                  <Button title="Done" className="done_btn" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateExercise;
