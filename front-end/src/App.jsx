import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./component/organism/Landing";
import SignUp from "./component/organism/Sign_up/SignUp";
import UserLogin from "./component/organism/UserLogin/UserLogin";
import ParticipantsLogin from "./component/organism/ParticipantsLogin/ParticipantsLogin";
import UserDashboard from "./component/organism/UserDashboard/UserDashboard";
import CreateExercise from "./component/organism/CreateExercise/CreateExercise";
import DisplayQuiz from "./pages/displayQuizDetails/displayQuizDetail";
import WelcomeSudent from "./pages/invitePage/welcomeStudent";
import { TokenContext, StudContext } from "./utiles/context";
import WelcomeSudent2 from "./pages/welcomePage2/welcomeStudent";
import StudentBoard from "./pages/studentPage/studentBoard";

function App() {
  const studentQuizId = localStorage.getItem("studQuizId");
  const user = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <div className="app">
      <StudContext.Provider value={{ studentQuizId, user }}>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/account/signup" element={<SignUp />} />
            <Route path="/account/login" element={<UserLogin />} />
            <Route path="/student/:userId/:quizId/login" element={<ParticipantsLogin />} />
            <Route path="/dashboard/:userid" element={<UserDashboard />} />
            <Route path="/dashboard/create-quiz" element={<CreateExercise />} />
            <Route
              path="/dashboard/:userId/quiz-details/:quizId"
              element={<DisplayQuiz />}
            />
            <Route
              path="/student/:userId/:quizId/onboarding/1"
              element={<WelcomeSudent />}
            />
            <Route
              path="/student/:userId/:quizId/onboarding/2"
              element={<WelcomeSudent2 />}
            />
            <Route
              path="/student/:userId/:quizId/quiz"
              element={<StudentBoard />}
            />
          </Routes>
        </Router>
      </StudContext.Provider>
    </div>
  );
}

export default App;
