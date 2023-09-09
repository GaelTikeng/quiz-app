import React from "react";
import "./UserLogin.css";
import Navbar from "../../molecule/Navbar";
import InputField from "../../atoms/InputFields/InputField";
import Button from "../../atoms/button/Button";
import Logo from "../../../../public/image/login-amico1.png";

function UserLogin() {
  return (
    <>
      <Navbar />
      <div className="userlogin_container">
        <form action="submit" className="uselogin_formcontainer">
          <div className="userlogin_input">
            <h1 className="userlogin_title">Login</h1>
            <div className="userlogin_details">
              <InputField type="text" name="password" label="Email address" />
              <InputField type="text" name="password" label="Password" />
              <p className="userlogin_p">
                <span>Forgot Password?</span>
              </p>
              <div className="userloginbtn_container">
                <Button title="Login" className="userlogin_btn" />
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
