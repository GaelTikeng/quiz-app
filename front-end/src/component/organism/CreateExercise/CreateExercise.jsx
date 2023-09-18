import React, { useState, useReducer } from "react";
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
  const [quiz, setQuiz] = useState("");
  const [question, setQuestion] = useState([]);
  const [options, setOptions] = useState([]);
  const [checkBoxes, setCheckBoxes] = useState(false);

  const reducer = (state, action) => {
    return { count: state.count + 1 };
  };
  const [state, dispatch] = useReducer(reducer, { count: 0 });
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
      setCheckBoxes([...checkBoxes, value]);
    } else {
      const index = checkBoxes.indexOf(value);
      // checkBoxes.splice(index, 1);
    }
  };

  const handleClick = () => {
    navigate(`/dashboard/${userId}`);
  };

  // const createquiz = async (e) => {
  //   e.preventDefault();
  //   const data = [
  //     {
  //       quizTitle,
  //       question,
  //       checkBoxes,
  //       options,
  //       questionNumber,
  //     },
  //   ];

  //   await axios.post("url", data);
  //   setQuizTitle("");
  //   setQuestion("");
  //   setCheckBoxes;
  //   setOptions([]);
  //   setQuestionNumber(questionNumber + 1);
  // };
  const incrementCount = () => {
    setQuestionNumber(questionNumber + 1);
  };

  const handleDone = () => {
    // post quiz
    axios
      .post(`http://localhost:3000/dashboard/${userId}/create-quiz`, quiz, {
        headers: { Authorization: `Bearer: ${token}` },
      })
      .then((res) => {
        console.log("The response is successfull", res);
      })
      .catch((err) => console.log("Could not create quiz", err));

    // post question
    axios
      .post(
        `http://localhost:3000/dashboard/${userId}/create-question/${quizId}`,
        question,
        {
          headers: { Authorization: `Bearer: ${token}` },
        }
      )
      .then((response) => {
        console.log("successfully post questions", response);
      })
      .catch((err) => {
        console.log("could not post question", err);
      });

    // post options
    axios
      .post(
        `http://localhost:3000/dashboard/${userId}/create-option/${quiz}`,
        options,
        {
          headers: { Authorization: `Bearer: ${token}` },
        }
      )
      .then((res) => {
        console.log("Options created successfuly", res);
      })
      .catch((error) => console.log("Could not post options", error));
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
          <form
          // onSubmit={createquiz}
          >
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
                <label htmlFor="question" className="textarea_label">
                  Question {state.count}
                </label>
                <textarea
                  name="question"
                  id="question"
                  value={question}
                  placeholder="Type the question..."
                  onChange={(e) => setQuestion(e.target.value)}
                ></textarea>
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
                      checked={checkBoxes}
                      onChange={(e) => setCheckBoxes(e.target.value)}
                      className="checkbox_input"
                    />
                    <div className="answers">
                      <InputField
                        type="text"
                        name="option"
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
                      // onClick={navtoprevpage}
                      className="previous"
                    />
                    <Button
                      title="Next"
                      type="Submit"
                      onChange={() => dispatch()}
                      className="next_btn"
                    />
                    <Button
                      title="Done"
                      className="done_btn"
                      type="Submit"
                      onClick={() => handleDone()}
                    />
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
