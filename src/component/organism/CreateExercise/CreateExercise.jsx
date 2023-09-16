import React, { useState } from "react";
import "./CreateExercise.css";
import Usersnav from "../../molecule/Usersnav/Usersnav";
import Sidebar from "../../molecule/Sidebar/Sidebar";
import InputField from "../../atoms/InputFields/InputField";
import { MdCancel } from "react-icons/md";
import { MdOutlineAddCircle } from "react-icons/md";
import Button from "../../atoms/button/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateExercise() {
  const navigate = useNavigate();

  const [quizTitle, setQuizTitle] = useState("");
  const [question, setQuestion] = useState([]);
  const [options, setOptions] = useState([]);
  const [checkedCheckboxes, setCheckedCheckboxes] = useState([]);
  const [items, setItems] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(1);

  const handleAddItem = () => {
    setItems([
      ...items,
      {
        checkbox: false,
        text: "",
      },
    ]);
  };

  const handleChange = (e) => {
    const checkbox = e.target;
    const value = checkbox.value;

    if (checkbox.checked) {
      setCheckedCheckboxes([...checkedCheckboxes, value]);
    } else {
      const index = checkedCheckboxes.indexOf(value);
      checkedCheckboxes.splice(index, 1);
    }
  };

  const navtoprevpage = () => {
    navigate("-1");
  };

  const navtonextpage = () => {
    navigate("1");
  };

  const handleClick = () => {
    navigate("/dashboard:/userid");
  };

  const createquiz = async (e) => {
    e.preventDefault();
    const data = {
      quizTitle,
      question,
      checkedCheckboxes,
      options,
      questionNumber,
    };

    await axios.post("url", data);
    setQuizTitle("");
    setQuestion("");
    setCheckedCheckboxes;
    setOptions([]);
    setQuestionNumber(questionNumber + 1);

    // .then((res) => {
    //   alert(res.data.message);
    // })
    // .catch(function (error) {
    //   if (error.response) {
    //   }git
    // });
  };

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
                  onChange={(e) => setQuizTitle(e.target.value)}
                />
              </div>
              <div className="texterea">
                <label
                  htmlFor="question"
                  className="textarea_label"
                  value={questionNumber}
                  onChange={(e) => setQuestionNumber(e.target.value)}
                >
                  Question
                </label>
                <textarea
                  name="question"
                  id="question"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                >
                  enter the que...
                </textarea>
              </div>
              <div className="iscorrrect_opt">
                <p>Correct</p>
                <p>Options</p>
              </div>
              <div className="opt_cont">
                {items.map((item, index) => (
                  <div className="options" key={index}>
                    <InputField
                      key="index"
                      type="checkbox"
                      value="value"
                      checked={checkedCheckboxes.includes()}
                      onChange={(e) => {
                        setItems([...items, { ...item, text: e.target.value }]);
                      }}
                      name="option"
                      className="checkbox_input"
                    />
                    <div className="answers">
                      <InputField
                        type="text"
                        name="option"
                        handleoptionshandleoptions
                        className="text_input"
                        value={options}
                        onChange={(e) => setOptions(e.target.value)}
                      />
                    </div>
                    <MdCancel
                      className="clear_btn"
                      onClick={() => setItems(items.filter((i) => i !== item))}
                    />
                  </div>
                ))}
              </div>
              <div className="adding">
                <div className="add_btn" onClick={handleAddItem}>
                  <MdOutlineAddCircle className="md_add" /> Add option
                </div>
              </div>
              <div className="buttom_btn">
                <div className="buttons">
                  <Button
                    title="cancel"
                    className="cancel"
                    onClick={handleClick}
                  />
                  <div className="three_btn">
                    <Button
                      title="Prev"
                      onClick={navtoprevpage}
                      className="previous"
                    />
                    <Button
                      title="Next"
                     
                      className="next_btn"
                      type="Submit"
                    />
                    <Button title="Done" className="done_btn" />
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
