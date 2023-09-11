import React from "react";
import "./UserDashboard.css";
import Logo from "../../../../public/image/smartbrain.jpg";
import Button from "../../atoms/button/Button";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../molecule/Sidebar/Sidebar";

function UserDashboard() {
  const navigate = useNavigate();

  const navigatetoLogin = () => {
    navigate("/account/login");
  };

  return (
    <div>
      <div className="userDashboard-nav">
        <div className="nav_img">
          <img src={Logo} alt="logo" />
        </div>
        <div className="logbtn">
        <Button title="Login" onClick={navigatetoLogin} className="log_btn" />
        </div>
        </div>
        <div className="userdashboard_container">
          <div className="sidebar">
            <Sidebar/>
          </div>
      </div>
    </div>
  );
}

export default UserDashboard;
