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
import { v4 as uuidv4 } from "uuid";

function CreateExercise() {
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState("");
  const [question, setQuestion] = useState([]);
  // const [options, setOptions] = useState([]);
  const [checkBoxes, setCheckBoxes] = useState(false);

  const reducer = (state, action) => {
    return { count: state.count + 1 };
  };
  const [state, dispatch] = useReducer(reducer, { count: 1 });
  const [items, setItems] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [questionId, setQuestionId] = useState(
    "4d27ea39-0324-4d5c-a3f2-593d7a67f470"
  );

  const token = localStorage.getItem("token");
  const quizId = JSON.parse(localStorage.getItem("quizId"));
  const userInfo = JSON.parse(localStorage.getItem("currentUser"));
  const userId = userInfo.id;
  // const questionId = uuidv4()

  const handleAddItem = () => {
    setItems([
      ...items,
      {
        questionId: questionId,
        isCorrect: checkBoxes,
        text: "",
      },
    ]);
    console.log("this items", items);
    console.log(question);
  };

  const handleAddQuestions = () => {
    setQuestion([...question, { id: uuidv4(), title: "" }]);
  };

  const handleClick = () => {
    navigate(`/dashboard/${userId}`);
  };

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
        items,
        {
          headers: { Authorization: `Bearer: ${token}` },
        }
      )
      .then((res) => {
        console.log("Options created successfuly", res);
      })
      .catch((error) => console.log("Could not post options", error));
  };

  const handlePrev = () => {

  }

  const handleNext = () => {
    dispatch();
    handleAddQuestions();
    setQuestionId(uuidv4())

    console.log("theseare the set questions", question)
  };

  const handleDelete = (index) => {
    const newItem = [...items];
    newItem.splice(index, 1);
    setItems([...newItem]);
  };

  const handleChecked = (index) => {
    const newCheck = [...items];
    newCheck[index].isCorrect = !newCheck[index].isCorrect;
    setItems(newCheck);
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
          <div
          // onSubmit={createquiz}
          >
            <div className="inputs_container">
              <div className="creat_quiz">
                <InputField
                  label="Quiz title"
                  type="text"
                  className="quiz_title"
                  // value={quizTitle}
                  onChange={(e) => setQuiz(e.target.value)}
                />
              </div>
              <div className="texterea">
                <label htmlFor="question" className="textarea_label">
                  Question {state.count}
                </label>
                <textarea
                  name="question"
                  id="question"
                  // value={question}
                  placeholder="Type the question..."
                  onChange={(e) =>
                    setQuestion((prev) => {
                      let update = [...prev];
                      update.title = e.target.value;
                      return update;
                    })
                  }
                ></textarea>
              </div>
              <div className="iscorrrect_opt">
                <p>Correct</p>
                <p>Options</p>
              </div>
              <div className="opt_cont">
                {items?.map((item, index) => (
                  <div className="options" key={index}>
                    <input
                      key={index}
                      type="checkbox"
                      // value={checkBoxes}
                      // checked={checkBoxes}
                      onChange={() => handleChecked(index)}
                      className="checkbox_input"
                    />
                    <div className="answers">
                      <InputField
                        type="text"
                        name="option"
                        className="text_input"
                        value={item.text}
                        key={index}
                        onChange={(e) =>
                          setItems((prev) => {
                            const update = [...prev];
                            update[index].text = e.target.value;
                            return update;
                          })
                        }
                      />
                    </div>
                    <MdCancel
                      className="clear_btn"
                      onClick={() => handleDelete(index)}
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
                      onClick={handlePrev()}
                      className="previous"
                    />
                    <Button
                      title="Next"
                      // type="Submit"
                      onClick={() => handleNext()}
                      className="next_btn"
                    />
                    <Button
                      title="Done"
                      className="done_btn"
                      type="button"
                      onClick={() => handleDone()}
                    />
                  </div>
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
