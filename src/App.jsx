import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./component/organism/Landing";
import SignUp from "./component/organism/Sign_up/SignUp";
import UserLogin from "./component/organism/UserLogin/UserLogin";
import ParticipantsLogin from "./component/organism/ParticipantsLogin/ParticipantsLogin";
import UserDashboard from "./component/organism/UserDashboard/UserDashboard";
import CreateExercise from "./component/organism/CreateExercise/CreateExercise";
import DisplayQuiz from "./pages/displayQuizDetails/displayQuizDetail";
import Useronboardinga from "./pages/Useronboardinga/Useronboardinga";
import Useronboardingb from "./pages/Useronboardingb/Useronboardingb";
import Takingquiz from "./pages/Takingquiz/Takingquiz";
import WelcomeSudenta from "./pages/invitePage/welcomeStudenta";
import WelcomeSudentb from "./pages/welcomePage2/welcomeStudentb";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/account/signup" element={<SignUp />} />
          <Route path="/account/login" element={<UserLogin />} />
          <Route path="/welcome" element={<ParticipantsLogin />} />
          <Route path="/dashboard/:userid" element={<UserDashboard />} />
          <Route
            path="/dashboard/createexercise"
            element={<CreateExercise />}
          />
          <Route path="/useronboardinga" element={<Useronboardinga/>}/>
          <Route path="/useronboardingb" element={<Useronboardingb/>}/>
          <Route path="/dashboard/:userId/quiz-details/:quizId" element={<DisplayQuiz/>}/>
          <Route path="/takingquiz" element={<Takingquiz/>}/>
          <Route path="/welcomestuda" element={<WelcomeSudenta/>}/>
          <Route path="/welcomestudb" element={<WelcomeSudentb/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
