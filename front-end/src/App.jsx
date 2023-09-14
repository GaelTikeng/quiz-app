import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './component/organism/Landing'
import SignUp from './component/organism/Sign_up/SignUp'
import UserLogin from './component/organism/UserLogin/UserLogin'
import ParticipantsLogin from './component/organism/ParticipantsLogin/ParticipantsLogin'
import UserDashboard from './component/organism/UserDashboard/UserDashboard'
import CreateExercise from './component/organism/CreateExercise/CreateExercise'

function App() {


  return (
<<<<<<< HEAD
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Route path="/signup" element={<SignUp />} /> */}
          <Route path="/student/1" element={<WelcomeSudent />} />
          <Route path="/student/2" element={<WelcomeSudent2 />} />
=======
      <div className='app'>
    <Router>
>>>>>>> 131041046206ebe0c6af43760166f442bd80e6bc

         <Routes>
             <Route path='/' element={<Landing/>}/>
             <Route path='/account/signup' element={<SignUp/>}/>
             <Route path='/account/login' element={<UserLogin/>}/>
             <Route path='/welcome' element={<ParticipantsLogin/>}/>
             <Route path='/dashboard:/userid' element={<UserDashboard/>}/>
             <Route path='/dashboard/createexercise' element={<CreateExercise/>}/>
           </Routes>
    </Router>

      </div>    
  )
} 

export default App
