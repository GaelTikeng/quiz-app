import React from "react";
import "./Sidebar.css";
import Avatar from "react-avatar";
import { useNavigate } from "react-router-dom";
import { GrScorecard } from "react-icons/gr";
import { PiNotebookFill } from "react-icons/pi";
import { BiLogOutCircle } from "react-icons/bi";

function Sidebar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("currentUser"));

  const handlequiz = () => {
    navigate(`/dashboard/${user.id}`);
  };

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handlescores = () => {
    navigate("/dashboard/score");
  };

  const handlelogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="side_container">
      <div className="avatar_container">
        <div className="avatar_infos">
          <Avatar
            className="avatar"
            name={currentUser.username}
            color="#D9D9D9"
            round={true}
          />
          <p>{currentUser.username}</p>
        </div>
      </div>
      <div className="dashboard_btn">
        <div className="side_midle">
          <p onClick={() => handlequiz()} className="p1">
            <PiNotebookFill className="quiz_btn" /> Quiz
          </p>
          <p className="p2" onClick={() => handlescores()}>
            <GrScorecard alt="score_btn" className="scores_btn" /> Score
          </p>
        </div>
        <div className="logout" onClick={() => handlelogout()}>
          <BiLogOutCircle className="bi" />
          <p className="p3">LogOut</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
