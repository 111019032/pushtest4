import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div className='midbg'>
        <div className='midrange'>
          <div className='wordlogin'>
            <h1>L</h1>
            <h2>O</h2>
            <h1>G</h1>
            <h2>I</h2>
            <h1>N</h1>
          </div>
          <div className='slogan'>
          <h3>let</h3>
          <h4>J</h4>
          <h4>I</h4>
          <h4>U</h4>
          <h5>make your day</h5>
          </div>
          <div className='enter1'>
          <input type='text 'placeholder='Email' className='name'/>
          </div>
          <div className='enter2'>
          <input type='text 'placeholder='Password' className='name'/>
          </div>
          <div className='signin'>
          <button>
          Sign in
          </button>
          </div>
          <div className='orword'>
          <h6>OR LOGIN WITH</h6>
          </div>
          <div className='loginwith'>
          <a href="#"><img  className='logicon' src="images/log1.png" alt="kf1"/></a>
          <a href="#"><img  className='logicon' src="images/log2.png" alt="kf1" /></a>
          <a href="#"><img  className='logicon' src="images/log3.png" alt="kf1" /></a>
          </div>
          <div className='signupforgot'>
          <div className='2'><a href="#">SIGN UP</a></div>
          <div className='2'><a href="#">FORGOT PASSWORD?</a></div>
          </div>
        </div>
      </div>
  )
}

export default App



