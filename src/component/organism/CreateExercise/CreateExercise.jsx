import React, { useState } from "react";
import "./CreateExercise.css";
import Usersnav from "../../molecule/Usersnav/Usersnav";
import Sidebar from "../../molecule/Sidebar/Sidebar";
import InputField from "../../atoms/InputFields/InputField";
import { MdCancel } from "react-icons/md";
import { MdOutlineAddCircle } from "react-icons/md";
import Button from "../../atoms/button/Button";
import { useNavigate } from "react-router-dom";

function CreateExercise() {
  const navigate = useNavigate();
   const [quiz, setQuiz] = ({
    quizTitle: "",
    question: "",
    option: "",
   })

  //set quiz_title function
  function handleChange(e) {
    setQuizTitle(e.target.value);
  }

  const deleteOption = (index) => {
    const updatedoption = [...options];
    updatedoption.splice(index, 1);
    setOptions(updatedoption);
  };

  const navtoprevpage = () => {
    navigate("-1");
  };

  const navtonextpage = () => {
    navigate("1");
  };

  createquiz = (e) => {
    e.preventDefault();
    const data ={
      quizTitle:quiz.quizTitle
      question:quiz.question
      option:quiz.option
    }
  }

  return (
    <>
      <Usersnav />
      <div className="createquiz_container">
        <Sidebar />
        <div className="right_side">
          <div className="quiz_header">
            <p>Dashboard</p>
          </div>
          <form onSubmit={createquiz}>
            <div className="inputs_container">
              <div className="creat_quiz">
                <InputField
                  label="Quiz title"
                  type="text"
                  className="quiz_title"
                  value={quizTitle}
                  onChange={handleChange}
                />
              </div>
              <div className="texterea">
                <label htmlFor="question" className="textarea_label">
                  Question
                </label>
                <textarea
                  name="question"
                  id="question"
                  value={question}
                  onChange={handlequestion}
                >
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
                      handleoptionshandleoptions
                      className="text_input"
                      value={newOption}
                      onChange={(event) => setNewOption(event.target.value)}
                    />
                  </div>
                  <MdCancel
                    className="clear_btn"
                    onClick={() => deleteOption(index)}
                  />
                </div>
              </div>
              <div className="adding">
                <div className="add_btn">
                  <MdOutlineAddCircle className="md_add" /> Add option
                </div>
              </div>
              <div className="buttom_btn">
                <div className="buttons">
                  <Button title="cancel" className="cancel" />
                  <div className="three_btn">
                    <Button
                      title="Prev"
                      onClick={navtoprevpage}
                      className="previous"
                    />
                    <Button
                      title="Next"
                      onClick={navtonextpage}
                      className="next_btn"
                    />
                    <Button title="Done" className="done_btn"  onClick={handleChange}/>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateExercise;
