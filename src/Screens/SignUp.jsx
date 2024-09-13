import { Link } from 'react-router-dom'

const SignUp = () => {

  return (
    <div className='sign-up'>
      <div className='signUp-box'>
            <form action="#" className='signUp-form'>
            <h1 style={{color:'white'}}>Sign Up</h1>
                <input type="text" required placeholder='Enter your name' />
                <input type="email" required placeholder='Enter email' />
                <input type="password" required placeholder='Create password'/>
                <button>Sign Up</button>
                <span>Already have account? <Link to='/'>Login</Link></span>
            </form>
        </div>
    </div>
  )
}

export default SignUp