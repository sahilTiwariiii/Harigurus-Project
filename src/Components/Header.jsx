import React, { useState } from 'react'
import "../styles/Header.css"
import applogo from '../assets/logo.png'
import headphone from "../assets/headphone.svg"
import signinlogo from "../assets/signin.svg"
import hamburger from "../assets/hamburger.svg"
import {Link, NavLink, useNavigate} from "react-router-dom"
import HeaderModal from './HeaderModal'



const Header = () => {
  const navigate=useNavigate();
const [isOpen, setIsOpen] = useState(false);

const clickedOnHamburger=()=>{
  setIsOpen(prev => !prev);
}

const onLogoClickFunction=()=>{
  navigate('/')
}
const onHeadPhoneClickFunction=()=>{
  navigate('/contact')
}
const onSigninandRegisterIconClickFuntion=()=>{
  navigate('/auth')
}
  return (
    <>
    <header>
        <div className="container"  >
            <div className="containerone">

           
         <img onClick={onLogoClickFunction} className='imgg' src={applogo} alt="logo" />
         <div className="icon-background">
            {/* icon */}
            <img onClick={onHeadPhoneClickFunction} className='headphone' src={headphone} alt="headphone" />
         </div>
         </div>
       

        <div className="containertwo">

            <div className="one">
         <NavLink id='home' to='/' className={({isActive})=>
        isActive?"nav-link active":"nav-link"}>Home</NavLink>
         <NavLink id='home' to='/about'  className={({isActive})=>
        isActive?"nav-link active":"nav-link"}>About</NavLink>


{/* <div className="service"> */}

         <NavLink to='/services'  className={({isActive})=>
       `${ isActive?"nav-link active":"nav-link" } service`
         
        } service>Services
               <div className="dropdownmaincontainer">
                
          <div className='minks'>
          <Link to='/services/paurohitya' className='pau'>Pauohitya
          <div className="pauohitya-dopdown-container">
            <Link to='/services/paurohitya/aksharabhyasa' className='pinks'>Aksharabhyasa</Link>
            <Link to='services/paurohitya/mundan' className='pinks'>Mundan</Link>
            <Link to='/services/paurohitya/namakarna' className='pinks'>Namakaran</Link>
            <Link to='/services/paurohitya/upanayana' className='pinks'>Upanayana</Link>
            <Link to='services/paurohitya/engagement' className='pinks'>Engagement</Link>
            <Link to='/services/paurohitya/wedding' className='pinks'>Wedding</Link>
            <Link to='/services/paurohitya/bhimarathaShanti' className='pinks'>Bhimaratha Shanti</Link>
            <Link to='/services/paurohitya/gruhapravesha' className='pinks'>Gruhapravesha</Link>
            <Link to='/services/paurohitya/pitruPaksha' className='pinks'>Pitru Paksha</Link>
            <Link to='/services/paurohitya/shraddha' className='pinks'>Shraddha</Link>
            <Link to='/services/paurohitya/uttaraKriyaKarma' className='pinks'>Uttara Kriya Karma</Link>
          </div>

          </Link>
          </div>
          <div className='minks'>
          <Link className='pujas' to='/services/pujas'>Pujas
          <div className="pujas-dopdown-container">
          <Link to='/services/pujas/satyanarayanaPuja' className='kinks'>Satyanarayana Puja</Link>
          <Link to='/services/pujas/lakshmiPuja' className='kinks'>Lakshmi Puja</Link>
          <Link to='/services/pujas/officePuja' className='kinks'>Office Puja</Link>
          </div>
          
          </Link>
          </div>
          <div className='minks'>
          <Link className='cooking' to='/services/cook'>Cook
          
          <div className="cook-dopdown-container">
            <Link to='/services/cook/inHouseCooking' className='kinks'>In-House Cooking</Link>
            <Link to='/services/cook/catering' className='kinks'>Catering</Link>
          </div>
          
          </Link>
          </div>
          <div className='minks'>
          <Link className='astro' to='/services/astrology'>Astrology
          <div className="astrology-dopdown-container">
            <Link className='kinks' to='/services/astrology/onlineConsultation'>Online Consultation</Link>
            <Link className='kinks' to='/services/astrology/bookAndVisit'>Book & Visit</Link>
            <Link className='kinks' to='/services/astrology/qAndA'>Q & A</Link>
          </div>
          </Link>
          </div>
        </div>
        
        </NavLink>
       

        {/* </div> */}
        
         <NavLink id='home' to='profiles' className={({isActive})=>
        isActive?"nav-link active":"nav-link"}>Profiles</NavLink>
         <NavLink id='home' to='contact' className={({isActive})=>
        isActive?"nav-link active":"nav-link"}>Contact</NavLink>
         <NavLink id='home'  to='auth' className={({isActive})=>
        isActive?"nav-link active":"nav-link"}>Sign In{">"}</NavLink>
            </div>

            <div onClick={onSigninandRegisterIconClickFuntion} className='icon-backgroundtwo'>
                <img className='headphone'  src={signinlogo} alt="" />
            </div>
        
           
            {/* <div className='icon-backgroundtwo'> */}
            {/* </div> */}


        </div>
        {/* <div className='hamburgercontainer'> */}
                <img isOpen={isOpen} onClick={clickedOnHamburger} className='hamburger'  src={hamburger} alt="" />
        {/* </div> */}
        
        
          
        </div>
    </header>

{isOpen?<HeaderModal/>:null}
    </>
    
  )
}

export default Header