import React from "react";
import "./Sidebar.css";
import Ellipse from "../../../../public/image/Ellipse1.png";
import quiz from "../../../../public/image/quiz_button.png";
import Scores from "../../../../public/image/scores_button.png";
import Logout from "../../../../public/image/logout_button.png";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const handlequiz = () => {
    navigate("/account/quiz");
  };

  const handlescores = () => {
    navigate("/account/scores");
  };

  const handlelogout = () => {
    navigate("/");
  };

  return (
    <div className="side_container">
      <div className="avatar_container">
        <div className="avatar_infos">
          <img src={Ellipse} alt="Avatar_image" className="avatar_img" />
          <p>Avatar name</p>
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
