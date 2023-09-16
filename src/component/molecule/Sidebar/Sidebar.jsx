import React from "react";
import "./Sidebar.css";
import quiz from "../../../../public/image/quiz_button.png";
import Scores from "../../../../public/image/scores_button.png";
import Logout from "../../../../public/image/logout_button.png";
import Avatar from 'react-avatar';
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("currentUser"))
  const handlequiz = () => {
    navigate(`/dashboard/${user.id}`) 
  };

  const currentUser = JSON.parse(localStorage.getItem('currentUser'))

  const handlescores = () => {
    navigate("/account/scores");
  };

  const handlelogout = () => {
    localStorage.removeItem("token")
    navigate("/");
  };

  return (
    <div className="side_container">
      <div className="avatar_container">
        <div className="avatar_infos">
          <Avatar
            className="avatar"
            name= {currentUser.username}
            color="#D9D9D9"
            round={true}
          />
          <p>{currentUser.username}</p>
        </div>
      </div>
      <div className="dashboard_btn">
        <div className="side_midle">
          <img
            src={quiz}
            alt="quiz_button"
            onClick={handlequiz}
            className="quiz_btn"
          />
          <img
            src={Scores}
            alt="score_btn"
            onClick={handlescores}
            className="scores_btn"
          />
        </div>
        <div className="logout">
          <img src={Logout} alt="logout_btn" onClick={handlelogout} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
