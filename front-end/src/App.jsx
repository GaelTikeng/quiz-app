import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './component/organism/Landing'
import SignUp from './component/organism/Sign_up/SignUp'
import WelcomeSudent from './pages/invitePage/welcomeStudent'

function App() {


  return (
      <div className='app'>
    <Router>

         <Routes>
             <Route path='/' element={<Landing/>}/>
             <Route path='/signup' element={<SignUp/>}/>
             <Route path = '/student/1' element = {<WelcomeSudent/>}/>
           </Routes>
    </Router>

      </div>
  )
} 

export default App
