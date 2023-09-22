import React, { useState } from "react";
import "./ParticipantsLogin.css";
import Logo from "../../../../public/image/smartbrain.jpg";
import { AXIOS_BASE_URL } from "../../../services/contants";
import InputField from "../../atoms/InputFields/InputField";
import Button from "../../atoms/button/Button";
import { useNavigate } from "react-router-dom";
import axios from "../../../api/axios";

function ParticipantsLogin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handlenavigate = () => {
    axios
      .post(
        AXIOS_BASE_URL+`student`,
        { name, email },
        {
          headers: { Authorization: `Bearer: ${token}` },
        }
      )
      .then((res) => {
        console.log("Student credentials posted successfully", res);
        localStorage.setItem("studentName", JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log("Error occured while posting", err);
      });

    // navigate("/useronboard");
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
              title="Start quiz"
              className="welcome_btn"
              onClick={handlenavigate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParticipantsLogin;
