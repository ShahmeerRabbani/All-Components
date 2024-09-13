import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="login">
    <div className='Login-box'>
        <form action="" className='login-form'>
        <h1>Login</h1>
            <input type="email" required placeholder='Enter email' />
            <input type="password" required placeholder='Enter password' />
            <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', fontSize: 14}}>
                <span><input type="checkbox" name="" id="" /> Remember me</span>
                <span><a href="#">Forgot password?</a></span>

            </div>
            <button >Login</button>
            <p>Login with</p>
            <div className="social-login">
              <button><FcGoogle /></button>
              <button ><FaGithub /></button>
            </div>
            <span>Don't have account? <Link to='signUp'>Register</Link></span>
        </form>
    </div>
</div>
  )
}

export default Login
