import React from 'react'
import "../styles/AuthDialog.css"
import googleImage from "../assets/google.svg"
import { Link } from 'react-router-dom'
import { useState } from 'react'

const AuthDialog = () => {
    const [isLogin, setIsLogin] = useState(true)
    const changeFunction=()=>{
        setIsLogin(!isLogin)
        console.log(isLogin)
    }
  return (
    <>
    {isLogin?(<>
        <div className='loginkabapcontainerrealme'>
    {/* login container */}
   <div className="loginmaincontainer">
        {/* login heading and close icon container */}
        <div className="loginandcloseiconcontainer">
        <h1 className='loginmainheading'>Login</h1>
        {/* croos button */}
          <div className='crossbuttonhai'>
            <span className='crossiconspecial'>×</span>
          </div>
        </div>
        {/* light line  */}
        <div className="lightlinelineline"></div>
        {/* first placeholder */}
        <input placeholder='Enter mobile number' type="text" className='inputstagshmm' />
        {/* second placeholder */}
        <input placeholder='Enter mobile password' type="text" className='inputstagshmm' />
        {/* buttons container */}
        <div className="buttonscontainerofligin">
        <Link className='loginwithotp'>Login With Otp</Link>
        <div className="loginbuttoninlogincontainer">LOGIN</div>

        <div className='boththelink'>
        <Link className='createnewaccount'>Create An Account? </Link>
        <Link onClick={changeFunction} className='signupoption'>Sign Up</Link>
        </div>
        {/* google button */}
        <div className="googlebuttonandbutton">
         <img src={googleImage} alt="" className="" />
         <span className="signupwithgoogle">Sign in with Google</span>
        </div>
        </div>
     </div>
    </div>
    
    </>):(<>
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
        <Link onClick={changeFunction} className='signupoption'>Login</Link>
        </div>
        {/* google button */}
        <div className="googlebuttonandbutton">
         <img src={googleImage} alt="" className="" />
         <span className="signupwithgoogle">Sign in with Google</span>
        </div>
        </div>
     </div>
    </div>
    </>)}
    </>
  )
}

export default AuthDialog