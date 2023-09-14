import React, { useState } from "react";
import InputField from "../../atoms/InputFields/InputField";
import Button from "../../atoms/button/button";
import "./SignUp.css";
import Navbar from "../../molecule/navbar/Navbar";
import Logo from "../../../../public/image/Sign up-amico1.png";
import { useNavigate } from "react-router-dom";
import axios from "../../../api/axios";



function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errPwd, setErrPwd] = useState("");
  const [errUsername, setErrUsername] = useState("");

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)

  let token = "";

  const navigatetoLogin = () => {
    navigate("/account/login");
  };

  function passwordValidate(value) {

    if (value < 6) {
      setErrPwd("Email should be atleast 6 characters")
    }
    if (value.search(/[a-z]/i) < 0) {
      setErrPwd("Your password must contain at least one letter.");
    }
    if (value.search(/[0-9]/) < 0) {
      setErrPwd("Your password must contain at least one digit."); 
    }
    if (!value.match(/(?=.*[^a-zA-Z0-9])(?!.*\s)/)) {
      setErrPwd("Your password must contain at least one special character")
    }
    else setErrPwd("")
    // value.length < 6
    //   ? setErrPwd("Email should be atleast 6 characters")
    //   : setErrPwd("");
  }

  const handleValidation = (e) => {
    e.preventDefault();
    setIsLoading(true)

    axios
      .post("http://localhost:3000/account/signup", {
        username,
        email,
        password,
      })
      .then((resp) => {
        token = resp.data.token;
        localStorage.setItem("token", JSON.stringify(token));
        console.log("this is the response", resp.data.token);
      })
      .catch((err) => console.log("An error occure at frontend", err))
      .finally(() => {
        setIsLoading(false)
      })
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
                onChange={(e) => setEmail(e.target.value)}
                className="signup_field"
                type="email"
                name=""
                label="Email Address"
              />
              {/* <p className="pi-tag">{}</p> */}
              <InputField
                onChange={(event) => {
                  passwordValidate(event.target.value);
                  setPassword(event.target.value);
                }}
                className="signup_field"
                type="password"
                name="password"
                label="Password"
              />
              <p className="pi-tag">{errPwd}</p>
              <div className="divsignup_btn">
                <Button
                  onClick={(e) => handleValidation(e)}
                  title={isLoading ? "signing up...": "sign up"}
                  className="signup_btn"
                  type="submit"
                  disable = {isLoading}
                />
                <p>
                  Have an account? <span onClick={navigatetoLogin}>Login</span>
                </p>
                {/* {isLoading && <Spinner/>} */}
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
