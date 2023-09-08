import React from 'react';
import './UserLogin.css';
import Navbar from '../../molecule/Navbar';
import InputField from '../../atoms/InputFields/InputField';
import Button from '../../atoms/button/Button';
import Logo from '../../../../public/image/Authentication-pana1.png'

function UserLogin() {
  return (
    <>
       <Navbar/> 
       <div className='userlogin_container'>
        <form action="submit" className='uselogin_form'>
          <h1>Login</h1>
          <div className='userlogin_details'>
            <InputField/>
            <InputField/>
            <p><span>Forgot Password?</span></p>
            <Button title="Login"/>
          </div>
          <div className='userlogin_image'>
            <img src={Logo} alt="userlogin_image" />
          </div>
          </form>
       </div>
    </>
  )
}

export default UserLogin