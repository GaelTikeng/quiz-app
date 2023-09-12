import React from "react";
import "./Usersnav";

function Usersnav() {
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
