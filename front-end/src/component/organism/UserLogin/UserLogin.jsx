import React, { useState } from "react";
import "./UserLogin.css";
import Navbar from "../../molecule/navbar/Navbar";
import InputField from "../../atoms/InputFields/InputField";
import Button from "../../atoms/button/Button";
import Logo from "../../../../public/image/login-amico1.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("")
  const navigate = useNavigate()

  let userId = ""
  let token = ""
  const handleClick = (event) => {
    event.preventDefault()
    console.log(email)

    axios.post("http://localhost:3000/account/login", {
      email,
      password
    })
    .then((resp) => {
      console.log('this is the response', resp)
      setMessage(resp.data.message)
    })
    .catch((error) => console.log("error occured on fe", error))

    axios
      .post("http://localhost:3000/currentUser", {
        email,
      })
      .then((res) => {
        localStorage.setItem("currentUser", JSON.stringify(res.data))
        userId = res.data.id
        navigate(`/dashboard/${res.data.id}`)
        console.log("here is the current user", res)
      })
      .catch((err) => console.log('Could not get current user', err))
  };

  if (message === "welcome back") {
    setTimeout(() => {
      navigate(`/dashboard/${userId}`);
    }, "2000")
  }

  return (
    <>
      <Navbar/>
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
