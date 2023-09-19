import React from 'react'
import './ParticipantsLogin.css'
import Logo from '../../../../public/image/smartbrain.jpg'
import InputField from '../../atoms/InputFields/InputField'
import Button from '../../atoms/button/Button'
import { useNavigate } from 'react-router-dom'


function ParticipantsLogin() {
  const navigate = useNavigate()
  
  const handlenavigate=() => {
    navigate('/useronboardinga');
  }

  return (
    <div className='particip_container'>
        <div className='quiz_logo'>
            <img src={Logo} alt="Quiz_app Logo" className='logo1'/>
        </div>
        <div className='participant_cont'>
        <div className='participants_container'>
            <div className='welcome_div'>
                 <h1>
                  Welcome to <span>Smart</span>Brain
                 </h1>
                 <div className='welcome_inputs'>
                  <InputField  
                  label="Full name"
                  name="full name"
                  />
                  <InputField 
                  label="Email address"
                  />
                 </div>
                 <Button title="Continue" className="welcome_btn" onClick={handlenavigate}/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ParticipantsLogin