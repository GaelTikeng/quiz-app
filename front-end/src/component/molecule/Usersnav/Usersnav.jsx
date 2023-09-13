import React from "react";
import "./Usersnav";
import { useNavigate } from "react-router-dom";
import  Logo from '../../../../public/image/smartbrain.jpg'
import Button from "../../atoms/button/Button";


function Usersnav() {
const navigate = useNavigate();

const navigatetoLogin =()=> {
  navigate('/account/login')
}


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
    </div>
  );
}

export default Usersnav;
