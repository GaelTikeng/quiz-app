import React, { useState, useEffect } from "react";
import "./UserDashboard.css";
import Logo from "../../../../public/image/smartbrain.jpg";
import Button from "../../atoms/button/Button";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../molecule/Sidebar/Sidebar";
import Dashboard from "../../../../public/image/Dashboard.png";
import axios from "axios";

function UserDashboard () {
  const [quizzes, setQuizzes] = useState([]);

  const navigate = useNavigate();

  let infoUser = localStorage.getItem("currentUser");
  let token = localStorage.getItem("token");

  let user = JSON.parse(infoUser);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/dashboard/${user?.id}`, {
        headers: { Authorization: `Bearer: ${token}` },
      })
      .then((response) => {
        console.log("this are all quizzes", response);
        setQuizzes(response.data);
      })
      .catch((err) => {
        console.log("An erroror occur", err);
      });

  },[]);

  console.log(quizzes)

  const navigtosetquiz = () => {
    navigate("/createquiz");
  };

  const handleQuiz = (id) => {

    
    navigate(`/dashboard/${user.id}/quiz-details/${id}`)

  }

  const handleCopie = (id) => {
    let link = `http://localhost:5173/student/${user.id}/${id}`
  }

  return (
    <div>
      <div className="userDashboard-nav">
        <div className="nav_img">
          <img src={Logo} alt="logo" />
        </div>
        {/* <div className="logbtn">
          <Button title="Login" onClick={navigatetoLogin} className="log_btn" />
        </div> */}
      </div>
      <div className="userdashboard_container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main_dashboard">
          <div className="actions">
            <h2>Dashboard</h2>
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
            <div className="quizes_details">
              {quizzes?.map((quis) => (
                <div key={quis.id} className="single-quiz">
                  <p className="p-quiz" onClick={() => handleQuiz(quis.id)}>{quis.title}</p>
                  <div className="two-details">
                    <p>15 days ago</p>
                    <span onClick={() => handleCopie(quis.id)}>copy link</span>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="next_prev">
              <div className="prev">
                <div onClick={handlePrev}>
                  <GrPrevious className="fa_icons" /> Prev
                </div>
              </div>
              <div className="next">
                <div onClick={handlenext}>
                  Next <GrNext className="fa_icons" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
