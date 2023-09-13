import React, { useState } from "react";
import InputField from "../../atoms/InputFields/InputField";
import Button from "../../atoms/button/button";
import "./SignUp.css";
import Navbar from "../../molecule/navbar/Navbar";
import Logo from "../../../../public/image/Sign up-amico1.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errPwd, setErrPwd] = useState("");
  const [errUsername, setErrUsername] = useState("");

  const navigate = useNavigate();

  const navigatetoLogin = () => {
    navigate("/account/login");
  };

  const handleValidation = (e) => {
    e.preventDefault();
    const RegExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (username === "") {
      setErrUsername("Please enter full name");
      return;
    }
    if (password.length < 6) {
      setErrPwd("Password must be atleast 6 characters long");
      return;
    } else if (!RegExp.test(password)) {
      setErrPwd("Invalid password");
      return;
    }
    axios
      .post("http://localhost:3000/account/signup", {
        username,
        email,
        password,
      })
      .then((resp) => {
        console.log("this is the response", resp);
      })
      .catch((err) => console.log("An error occure at frontend", err));
    console.log({ username: username, email: email, pwd: password });

    navigate("/account/login");
  };

  return (
    <>
      <Navbar />
      <div className="signUp_container">
        <div className="signUp_div">
          <div className="sign_up">
            <div className="signup_title">
              <h1 className="h1">
                Sign Up To <span>Smart</span>Brain
              </h1>
            </div>
            <div className="signup_form">
              <InputField
                className="signup_field"
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                name="Full name"
                label="Full Name"
              />
              <p className="pi-tag">{errUsername}</p>
              <InputField
                onChange={(ev) => setEmail(ev.target.value)}
                className="signup_field"
                type="email"
                name=""
                label="Email Address"
              />
              <p className="pi-tag">{}</p>
              <InputField
                onChange={(event) => setPassword(event.target.value)}
                className="signup_field"
                type="password"
                name="password"
                label="Password"
              />
              <p className="pi-tag">{errPwd}</p>
              <div className="divsignup_btn">
                <Button
                  onClick={(e) => handleValidation(e)}
                  title="Sign me up"
                  className="signup_btn"
                  type="submit"
                />
                <p>
                  Have an account? <span onClick={navigatetoLogin}>Login</span>
                </p>
              </div>
            </div>
          </div>
          <div className="login_amico">
            <img src={Logo} alt="signup_amico" className="signup_log" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
