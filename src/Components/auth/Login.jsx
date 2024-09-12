import React from 'react'
import "../../styles/Login.css"
import googleImage from "../../assets/google.svg"
import { Link } from 'react-router-dom'
const Login = () => {
  return (
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
        <Link className='signupoption'>Sign Up</Link>
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

export default Login