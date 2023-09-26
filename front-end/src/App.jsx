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
import { TokenContext, StudQuizIdContext } from "./utiles/context";
import WelcomeSudent2 from "./pages/welcomePage2/welcomeStudent";
import Useronboard1 from "./pages/Useronboard1/Useronboard1";
import Useronboard2 from "./pages/Useronboard2/Useronboard2";
import DisplayStudResult from "./pages/DisplayStudResult/DisplayStudResult";
import StudPerformance from "./pages/StudPerformance/StudPerformance";

function App() {
  const studentQuizId = localStorage.getItem("studQuizId");

  return (
    <div className="app">
      <StudQuizIdContext.Provider value={studentQuizId}>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/account/signup" element={<SignUp />} />
            <Route path="/account/login" element={<UserLogin />} />
            <Route path="/welcome" element={<ParticipantsLogin />} />
            <Route path="/dashboard/:userid" element={<UserDashboard />} />
            <Route path="/dashboard/create-quiz" element={<CreateExercise />} />
            <Route
              path="/dashboard/:userId/quiz-details/:quizId"
              element={<DisplayQuiz />}
            />
            <Route path="/student/onboarding/1" element={<WelcomeSudent/>} />
            <Route path="/student/onboarding/2" element={<WelcomeSudent2/>} />
            <Route path="/user/onboard1" element={<Useronboard1/>} />
            <Route path="/User/onboard2" element={<Useronboard2/>} />
            <Route path="/student/result" element={<DisplayStudResult/>} />
            <Route path="/user/student/ans" element={<StudPerformance/>} />
          </Routes>
        </Router>
      </StudQuizIdContext.Provider>
    </div>
  );
}

export default App;
