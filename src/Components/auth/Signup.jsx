import React from 'react'
import "../../styles/Signup.css"
import googleImage from "../../assets/google.svg"
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <div className='signupkabapcontainerrealme'>
    {/* login container */}
   <div className="signupmaincontainer">
        {/* login heading and close icon container */}
        <div className="loginandcloseiconcontainer">
        <h1 className='loginmainheading'>Sign Up</h1>
        {/* croos button */}
          <div className='crossbuttonhai'>
            <span className='crossiconspecial'>×</span>
          </div>
        </div>
        {/* light line  */}
        <div className="lightlinelineline"></div>
        {/* first placeholder */}
        <input placeholder='Enter your name' type="text" className='inputstagshmm' />
        {/* second placeholder */}
        <div className='mobilenumber'>
            
        <input placeholder='Enter mobile number' type="text" className='inputstagshmm' />
        <div className='getotpbutton'>Get OTP</div>
        </div>
        {/* third placeholder */}
        <input placeholder='Enter four digit OTP' type="text" className='inputstagshmm' />
        {/* foutrh placeholder */}
        <input placeholder='Enter new password' type="text" className='inputstagshmm' />
        {/* buttons container */}
        <div className="buttonscontainerofligin">
        <div className="signbuttoninlogincontainer">SIGN UP</div>

        <div className='boththelink'>
        <Link className='createnewaccount'>Have An Account? </Link>
        <Link className='signupoption'>Login</Link>
        </div>
        {/* google button */}
        <div className="googlebuttonandbutton">
         <img src={googleImage} alt="" className="" />
         <span className="signupwithgoogle">Sign in with Google</span>
        </div>
        </div>
     </div>
    </div>
  )
}

export default Signup