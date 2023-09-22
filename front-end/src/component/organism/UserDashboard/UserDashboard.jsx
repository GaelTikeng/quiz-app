import React, { useState, useEffect } from "react";
import "./UserDashboard.css";
import Logo from "../../../../public/image/smartbrain.jpg";
import Button from "../../atoms/button/Button";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../molecule/Sidebar/Sidebar";
import axios from "axios";
import { FaPlusCircle } from "react-icons/fa";
import { timeAgo } from "../../../utiles/timeStamp";
import { BASE_URL, AXIOS_BASE_URL } from "../../../services/contants";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UserDashboard () {
  const [quizzes, setQuizzes] = useState([]);

  const navigate = useNavigate();

  const notify = () => toast("Copied!");
  let infoUser = localStorage.getItem("currentUser");
  let token = localStorage.getItem("token");

  let user = JSON.parse(infoUser);

  useEffect(() => {
    // get all quizzes by userId
    axios
      .get(AXIOS_BASE_URL+`dashboard/${user?.id}`, {
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

  const navigtosetquiz = () => {
    navigate("/dashboard/create-quiz");
  };

  const handleQuiz = (quizId, title) => {

    localStorage.setItem("quizTitle", JSON.stringify(title))
    localStorage.setItem("quizId", JSON.stringify(quizId))
    navigate(`/dashboard/${user.id}/quiz-details/${quizId}`)

  }

  const handleCopie = (quizId) => {
    const link = BASE_URL+`student/${user.id}/${quizId}`
    toast("Copied!");
    navigator.clipboard.writeText(link)
      .then(() => console.log("link copied"))
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
                <FaPlusCircle/>
                {/* <img src={Dashboard} alt="icon" /> */}
              </Button>
            </div>
          </div>
          <div className="second_part">
            <h3>Quizzes</h3>
            <div className="quizes_details">
              {quizzes?.map((quis) => (
                <div key={quis.id} className="single-quiz">
                  <p className="p-quiz" onClick={() => handleQuiz(quis.id, quis.title)}>{quis.title}</p>
                  <div className="two-details">
                    <p>{timeAgo((quis.createdAt))}</p>
                    <div>
                      <span onClick={() => handleCopie(quis.id)}>copy link</span>
                      <ToastContainer autoClose={500} />
                    </div>
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
