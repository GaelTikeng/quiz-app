import React, { useState } from "react";
import InputField from "../../atoms/InputFields/InputField";
import Button from "../../atoms/button/button";
import "./SignUp.css";
import Navbar from "../../molecule/navbar/Navbar";
import Logo from "../../../../public/image/Sign up-amico1.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errPwd, setErrPwd] = useState("");
  const [errUsername, setErrUsername] = useState("");

  const navigate = useNavigate();

  const navigatetoLogin = () => {
    navigate("/login");
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
      password: Yup.string()
        .min(8, "Password must be 8 characters long")
        .matches(/[0-9]/, "Password requires a number")
        .matches(/[a-z]/, "Password requires a lowercase letter")
        .matches(/[A-Z]/, "Password requires an uppercase letter")
        .matches(/[^\w]/, "Password requires a symbol"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleClick = () => {
    axios
      .post("http://localhost:3000/account/signup", {
        username,
        email,
        password,
      })
      .then((resp) => {
        "this is the response", resp;
      })
      .catch((err) => console.log("An error occure", err));
  };

  const handleValidation = () => {
    // const RegExp =
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    // if (username === "") {
    //   setErrUsername("Please enter full name");
    // }
    // if (password.length < 6) {
    //   setErrPwd("Password must be atleast 6 characters long");
    // } else if (!RegExp.test(password)) {
    //   setErrPwd("Invalid password");
    // } else setErrPwd("");
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
            <form onSubmit={formik.handleSubmit} className="signup_form">
              <InputField
                className="signup_field"
                type="text"
                // onChange={(e) => setUsername(e.target.value)}
                onChange={formik.handleChange}
                name="Full name"
                label="Full Name"
              />
              {formik.touched.username && formik.errors.username ? (<div>{formik.errors.username}</div>) : null}
              <p className="pi-tag">{errUsername}</p>
              <InputField
                // onChange={(ev) => setEmail(ev.target.value)}
                onChange={formik.handleChange}
                className="signup_field"
                type="email"
                name=""
                label="Email Address"
              />
              {formik.touched.email && formik.errors.email ? (<div>{formik.errors.email}</div>) : null}
              <p className="pi-tag">{}</p>
              <InputField
                // onChange={(event) => setPassword(event.target.value)}
                onChange={formik.handleChange}
                className="signup_field"
                type="password"
                name="password"
                label="Password"
              />
              {formik.touched.password && formik.errors.password ? (<div>{formik.errors.password}</div>) : null}
              <p className="pi-tag">{errPwd}</p>
              <div className="divsignup_btn">
                <Button
                  // onClick={handleValidation}
                  title="Sign me up"
                  className="signup_btn"
                  type = "submit"
                />
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
