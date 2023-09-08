import React from "react";
import InputField from "../../atoms/InputFields/InputField";
import Button from "../../atoms/button/Button";
import "./SignUp.css";
import Navbar from "../../molecule/Navbar";
import Logo from "../../../../public/image/Sign up-amico1.png";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const navigatetoLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <Navbar />
      <div className="signUp_container">
        <div className="signUp_div">
          <div className="sign_up">
            <div className="signup_title">
              <h1>
                Sign Up To <span>Smart</span>Brain
              </h1>
            </div>
            <form action="submit" className="signup_form">
              <InputField
                className="signup_field"
                type="text"
                // value="Full Name"
                name="Full name"
                label="Full Name"
              />
              <InputField
                className="signup_field"
                type="text"
                name=""
                label="Email Address"
              />
              <InputField
                className="signup_field"
                type="text"
                name="password"
                label="Password"
              />
              <div className="divsignup_btn">
                <Button title="Sign me up" className="signup_btn" />
                <p>
                  Have an account? <span onClick={navigatetoLogin}>Login</span>
                </p>
              </div>
            </form>
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
