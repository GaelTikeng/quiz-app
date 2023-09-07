import React from 'react'
import InputField from '../../atoms/InputFields/InputField'
import Button from '../../atoms/button/Button'

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
          <img src="" alt="signup_amico" />
        </div>
    </div>
  )
}

export default SignUp