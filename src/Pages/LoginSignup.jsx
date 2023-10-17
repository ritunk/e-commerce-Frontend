import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = ()=>{

    return (

        <div className='loginsignup'>
          <div className='loginsignup-container'>

            <h1>
                Sign up
            </h1>
            <div className='loginsignup-fields'>
              <input type='text' placeholder='Your Name '></input>
              <input type='email' placeholder='Email Address'></input>
              <input type='password' placeholder='Password'></input>

            </div>

            <button>Continue</button>
            <p className='loginsignup-login'> Already have an account? <span>Login here</span></p>
            <div className='loginsignup-agree'>
              <input type='checkbox' name='' id=''></input>
              <p>By continuing, i agree to the terms of use & privacy policy</p>
            </div>

            
          </div>

        </div>
    )
}

export default LoginSignup
