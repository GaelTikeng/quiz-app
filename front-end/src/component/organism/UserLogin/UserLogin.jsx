import React, { useState } from "react";
import "./UserLogin.css";
import Navbar from "../../molecule/navbar/Navbar";
import InputField from "../../atoms/InputFields/InputField";
import Button from "../../atoms/button/Button";
import Logo from "../../../../public/image/Login-amico.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  let userId = "";
  const handleClick = (event) => {
    event.preventDefault();
    console.log("base url", process.env.VITE_AXIOS_BASE_URL)
    let mes = "";

    axios
      .post(process.env.VITE_AXIOS_BASE_URL+"account/login", {
        email,
        password,
      })
      .then((resp) => {
        console.log("this is the response", resp);
        localStorage.setItem("token", resp.data.token);
        mes = resp.data.message;
        setMessage(resp.data.message);
      })
      .catch((error) => console.log("error occured on fe", error));

    // getting currenct user
    setTimeout(() => {
      console.log("this is the message", mes);
      axios
        .post(process.env.VITE_AXIOS_BASE_URL + "currentUser", {
          email,
        })
        .then((res) => {
          localStorage.setItem("currentUser", JSON.stringify(res.data));
          userId = res.data.id;
          navigate(`/dashboard/${userId}`);
        })
        .catch((err) => console.log("Could not get current user", err))
      
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <div className="userlogin_container">
        <form action="submit" className="uselogin_formcontainer">
          <div className="userlogin_input">
            <h1 className="userlogin_title">Login</h1>
            <div className="userlogin_details">
              <p className="pi-tag">{message}</p>
              <InputField
                type="text"
                name="email"
                label="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputField
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                label="Password"
              />
              <p className="userlogin_p">
                <span>Forgot Password?</span>
              </p>
              <div className="userloginbtn_container">
                <Button
                  title="Login"
                  className="userlogin_btn"
                  onClick={(event) => handleClick(event)}
                />
              </div>
            </div>
          </div>
          <div className="userimage_container">
            <div className="userlogin_image">
              <img
                src={Logo}
                alt="userlogin_image"
                className="userlogin_image"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default UserLogin;
