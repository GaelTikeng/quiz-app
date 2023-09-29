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
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

function CreateExercise() {
  const navigate = useNavigate();
  const [quizTitle, setQuizTitle] = useState("");
  const [quisId, setQuisId] = useState("");
  const [quiz, setQuiz] = useState([]);
  const [question, setQuestion] = useState("");
  const [items, setItems] = useState([]);
  const [allQuestion, setAllQuestion] = useState([]);
  const [options, setOptions] = useState([]);
  const [checkBoxes, setCheckBoxes] = useState(false);

  const reducer = (state, action) => {
    return { count: state.count + 1 };
  };
  const [state, dispatch] = useReducer(reducer, { count: 1 });
  const [questionId, setQuestionId] = useState(uuidv4());

  const token = localStorage.getItem("token");
  const quizId = JSON.parse(localStorage.getItem("quizId"));
  const userInfo = JSON.parse(localStorage.getItem("currentUser"));
  const userId = userInfo.id;
  // const questionId = uuidv4()

  const handleAddItem = () => {
    setItems((prev) => [
      ...prev,
      { isCorrect: checkBoxes, text: "", questionId: questionId },
    ]);
    // setOptions(items)
    console.log("this are items", items);
  };

  const handleAddQuestions = () => {
    setAllQuestion((prev) => [
      ...prev,
      {
        id: questionId,
        title: question,
        quizId: quisId,
        questionId: questionId,
      },
    ]);
  };

  const handleClick = () => {
    navigate(`/dashboard/${userId}`);
  };

  const handleDone = () => {
    // post quiz
    axios
      .post(
        process.env.VITE_AXIOS_BASE_URL + `dashboard/${userId}/create-quiz`,
        { quiz },
        {
          headers: { Authorization: `Bearer: ${token}` },
        }
      )
      .then((res) => {
        console.log("The create quiz request is successfull", res);

        // post questions
        axios
          .post(
            process.env.VITE_AXIOS_BASE_URL + `dashboard/${userId}/create-question`,
            { allQuestion },
            {
              headers: { Authorization: `Bearer: ${token}` },
            }
          )
          .then((response) => {
            console.log("successfully post questions", response);

            // post options
            axios
              .post(
                process.env.VITE_AXIOS_BASE_URL +`dashboard/${userId}/create-option`,
                { options },
                {
                  headers: { Authorization: `Bearer: ${token}` },
                }
              )
              .then((res) => {
                console.log("Options created successfuly", res);
                toast("Quizz created successfully!");
              })
              .catch((error) => console.log("Could not post options", error));
          })
          .catch((err) => {
            console.log("could not post question", err);
          });
      })
      .catch((err) => console.log("Could not create quiz", err));

    setTimeout(() => {
      navigate(`/dashboard/${userId}`);
    }, 2500);
  };

  const handlePrev = () => {};

  const handleNext = () => {
    //set quiz object
    setQuiz((prev) => [
      ...prev,
      { id: quisId, userId: userId, title: quizTitle },
    ]);

    dispatch();

    handleAddQuestions();

    setQuestionId(uuidv4());
    setQuestion("");
    // let newOption = [...items];
    setOptions((prev) => [...prev, ...items]);

    setItems([]);
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
                  onChange={(e) => {
                    setQuizTitle(e.target.value);
                    setQuisId(uuidv4());
                  }}
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
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
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
                            let update = [...prev];
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
                <div className="add_btn" onClick={() => handleAddItem()}>
                  <MdOutlineAddCircle className="md_add" /> Add option
                </div>
              </div>
              <div className="buttom_btn">
                <div className="buttons">
                  <Button
                    title="cancel"
                    className="cancel"
                    onClick={() => handleClick()}
                  />
                  <div className="three_btn">
                    <Button
                      title="Prev"
                      onClick={() => handlePrev()}
                      className="previous"
                    />
                    <Button
                      title="Next"
                      // type="Submit"
                      onClick={() => handleNext()}
                      className="next_btn"
                    />
                    <div>
                      <Button
                        title="Done"
                        className="done_btn"
                        type="button"
                        onClick={() => handleDone()}
                      />
                      <ToastContainer autoClose={1500} />
                    </div>
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
