import React, { useState, useContext } from "react";
import "./ParticipantsLogin.css";
import Logo from "../../../../public/image/smartbrain.png";
import { VITE_AXIOS_BASE_URL } from "../../../services/contants";
import InputField from "../../atoms/InputFields/InputField";
import Button from "../../atoms/button/Button";
import { useNavigate } from "react-router-dom";
import axios from "../../../api/axios";
import { StudContext } from "../../../utiles/context";

function ParticipantsLogin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const quizId = useContext(StudContext);

  // let user = JSON.parse(infoUser);
  const token = localStorage.getItem("token");

  const handlenavigate = () => {
    setIsLoading(true);

    // post student/participant credentials
    axios
      .post(process.env.VITE_AXIOS_BASE_URL+`student`, { name, email })
      .then((res) => {
        console.log("Student credentials posted successfully", res);
        localStorage.setItem("studentName", JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log("Error occured while posting", err);
      });

    // get the student's id
    axios
      .post(process.env.VITE_AXIOS_BASE_URL+`getStudentInfo`, { name })
      .then((res) => {
        console.log("getting student id", res);
        localStorage.setItem("student", res.data);
        setIsLoading(false)
      })
      .catch((err) => {
        console.log("Error occured", err);
        throw err;
      })
    
    setTimeout(() => {
      navigate(`/student/${quizId.user.id}/${quizId.studentQuizId}/onboarding/1`)
    }, 2500)

    
  };

  return (
    <div className="particip_container">
      <div className="quiz_logo">
        <img src={Logo} alt="Quiz_app Logo" className="logo1" />
      </div>
      <div className="participant_cont">
        <div className="participants_container">
          <div className="welcome_div">
            <h1>
              Welcome to <span>Smart</span>Brain
            </h1>
            <div className="welcome_inputs">
              <InputField
                label="Full name"
                name="full name"
                onChange={(e) => setName(e.target.value)}
              />
              <InputField
                label="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Button
              title={isLoading ? "Loading..." : "Continue"}
              disabled={isLoading}
              className="welcome_btn"
              onClick={() => handlenavigate()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParticipantsLogin;
