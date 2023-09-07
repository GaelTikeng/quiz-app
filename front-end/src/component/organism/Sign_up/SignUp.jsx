import React from 'react'
import InputField from '../../atoms/InputFields/InputField'
import Button from '../../atoms/button/Button'
// import Logo from '../../../../public/image/login_amico1.png'

function SignUp() {
  return (
    <div className='signUp_container'>
      <div className='sign_up'>
        <h1>Sign Up To SmartBrain</h1>
        <form action="">
            <InputField/>
            <InputField/>
            <InputField/>
            <Button/>
            <p>Have an account? <span>Login</span></p>
        </form>
        </div>
        <div className='login_amico'>
          <img src={Logo} alt="signup_amico" />
        </div>
    </div>
  )
}

export default SignUp