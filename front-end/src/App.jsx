import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './component/organism/Landing'
import SignUp from './component/organism/Sign_up/SignUp'
import UserLogin from './component/organism/UserLogin/UserLogin'
import ParticipantsLogin from './component/organism/ParticipantsLogin/ParticipantsLogin'
import UserOnboard from './component/organism/Onboarding1/UserOnboard'

function App() {


  return (
      <div className='app'>
    <Router>

         <Routes>
             <Route path='/' element={<Landing/>}/>
             <Route path='/signup' element={<SignUp/>}/>
             <Route path='/userlogin' element={<UserLogin/>}/>
             <Route path='/welcome' element={<ParticipantsLogin/>}/>
             <Route path='/useronboard' element={<UserOnboard/>}/>
           </Routes>
    </Router>

      </div>
  )
} 

export default App
