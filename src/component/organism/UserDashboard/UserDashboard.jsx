import React from "react";
import "./UserDashboard.css";
import Logo from "../../../../public/image/smartbrain.jpg";
import Button from "../../atoms/button/Button";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../molecule/Sidebar/Sidebar";
import Dashboard from "../../../../public/image/Dashboard.png";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

function UserDashboard() {
  const navigate = useNavigate();

  const navigatetoLogin = () => {
    navigate("/account/login");
  };

  const navigtosetquiz = () => {
    navigate("/createquiz");
  };

  const handlePrev = () => {
    navigate("/-1");
  };

  const handlenext = () => {
    navigate("/1");
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
          <Sidebar />
        </div>
        <div className="main_dashboard">
          <div className="actions">
            <p>Dashboard</p>
            <div className="create_quiz">
              <Button
                title="Create Quiz"
                onClick={navigtosetquiz}
                className="createquiz_btn"
              >
                <img src={Dashboard} alt="icon" />
              </Button>
            </div>
          </div>
          <div className="second_part">
            <h3>Quizzes</h3>
            <hr />
            <div className="quizes_details"></div>
            <div className="next_prev">
              <div className="prev">
                <p onClick={handlePrev}>
                  <GrPrevious  className="fa_icons"/> Prev
                </p>
              </div>
              <div className="next">
                <p onClick={handlenext}>
                  Next <GrNext  className="fa_icons"/>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
