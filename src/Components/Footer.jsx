import React from 'react'
import logoImageee from '/src/assets/logo.png'
import "../styles/Footer.css"
import facebooksImage from '../assets/facebook.svg'
import instagramImage from '../assets/instagram.svg'
import youtubeImage from '../assets/youtube.svg'
import addressImage from '../assets/address.svg'
import locationImage from '../assets/map.svg'
import callImage from '../assets/call.svg'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
 <footer>
    <div className="mainfooterandfooter">
        <div className="firstsmallfootercontainer">
            <img className='llllogoimage' src={logoImageee} alt="" />
            <p className='footerfirstparagraph'>Following your customs and traditions is not difficult anymore. HariGurus is a one-stop-shop for all Hindu religious, customs and traditional requirements.</p>
            <div className="follwusandsocialmediaicon">
                <p className='footerfollwous'>Follow Us</p>
                <a target="_blank" href="https://www.facebook.com/harigurus2021"  className='socialmedialinks'>
                <img src={facebooksImage} alt="facebook" />
                </a>
                <a href="https://instagram.com/hari_gurus?utm_medium=copy_link" target="_blank" className='socialmedialinks'>
                <img src={instagramImage} alt="instagram" />
                </a>
                <a href="https://www.youtube.com/channel/UCa1qcU6MURrjTjXSjHjxJrg" target="_blank" className='socialmedialinks'>
                <img src={youtubeImage} alt="youtube" />
                </a>
            </div>
        </div>
        <div className="secondsmallfootercontainer">
            <h1 className='footerquick'>Quick Links</h1>
            <div className="footerorangelineee"></div>
            <div className="linkscontaineroffooter">
                {/* first link */}
                <div className="firstlinkoffooter">
                <svg className='linkssvgfootericons'  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="8" height="12" viewBox="0 0 8 12"><path d="M8.000,5.998 L-0.002,11.997 L1.292,5.998 L-0.002,-0.001 L8.000,5.998 ZM1.265,9.924 L6.502,5.998 L1.265,2.071 L2.112,5.998 L1.265,9.924 ZM5.451,5.998 L2.496,8.213 L2.974,5.998 L2.496,3.783 L5.451,5.998 Z" ></path></svg>
                <Link to='/' className='linksskinkl'>Home</Link>
                </div>
                {/* second link */}
                <div className="secondlinkoffooter">
                <svg className='linkssvgfootericons'  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="8" height="12" viewBox="0 0 8 12"><path d="M8.000,5.998 L-0.002,11.997 L1.292,5.998 L-0.002,-0.001 L8.000,5.998 ZM1.265,9.924 L6.502,5.998 L1.265,2.071 L2.112,5.998 L1.265,9.924 ZM5.451,5.998 L2.496,8.213 L2.974,5.998 L2.496,3.783 L5.451,5.998 Z" ></path></svg>
                <Link to='/about' className='linksskinkl'> About Us</Link>
                </div>
                {/* third link */}
                <div className="thirdlinkoffooter">
                <svg className='linkssvgfootericons'  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="8" height="12" viewBox="0 0 8 12"><path d="M8.000,5.998 L-0.002,11.997 L1.292,5.998 L-0.002,-0.001 L8.000,5.998 ZM1.265,9.924 L6.502,5.998 L1.265,2.071 L2.112,5.998 L1.265,9.924 ZM5.451,5.998 L2.496,8.213 L2.974,5.998 L2.496,3.783 L5.451,5.998 Z" ></path></svg>
                <Link to='/services' className='linksskinkl'> Services
                </Link>
                </div>
                {/* fourth link */}
                <div className="fourthlinkoffooter">
                <svg className='linkssvgfootericons'  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="8" height="12" viewBox="0 0 8 12"><path d="M8.000,5.998 L-0.002,11.997 L1.292,5.998 L-0.002,-0.001 L8.000,5.998 ZM1.265,9.924 L6.502,5.998 L1.265,2.071 L2.112,5.998 L1.265,9.924 ZM5.451,5.998 L2.496,8.213 L2.974,5.998 L2.496,3.783 L5.451,5.998 Z" ></path></svg>
                <Link to='/profiles' className='linksskinkl'>Profiles
                </Link>
                </div>
                {/* fifth link */}
                <div className="fifthlinkoffooter">
                <svg className='linkssvgfootericons'  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="8" height="12" viewBox="0 0 8 12"><path d="M8.000,5.998 L-0.002,11.997 L1.292,5.998 L-0.002,-0.001 L8.000,5.998 ZM1.265,9.924 L6.502,5.998 L1.265,2.071 L2.112,5.998 L1.265,9.924 ZM5.451,5.998 L2.496,8.213 L2.974,5.998 L2.496,3.783 L5.451,5.998 Z" ></path></svg>
                <Link to='/contact' className='linksskinkl'>Contact Us
                </Link>
                </div>
            </div>
        </div>
        <div className="thirdsmallfootercontainer">
            <h1 className='footercontactusss'>Contact Us</h1>
            <div className="footerorangelineee"></div>
            {/* footer first paragraph */}
            <div className="footerfirstparagraph">
                <img className='locationimage' src={locationImage} alt="location" />
                <p className='footerparafooterpara'>Block A A-804, Century Central, Kanakapura Rd, Mango Garden Layout, Bikasipura, Bengaluru, 560078</p>
            </div>
            {/* footer second paragraph */}
            <div className="footersecondparagraph">
                <img className='locationimagetttt' src={addressImage} alt="location" />
                <p className='footerparafooterpara'>
                <a className='footerparafooterpara' href="mailto: harigurus@gmail.com" rel="noreferrer" target="_blank">harigurus2021@gmail.com</a>
                </p>
            </div>
            {/* footer third paragraph */}
            <div className="footerthirdparagraph">
                <img className='gsfg' src={callImage} alt="location" />
                <div className="twophonediv">

                <p>
                <a className='footerparafooterpara' href="tel: +91 9353066802">+91 9353066802</a> <br />
                <a className='footerparafooterpara' href="tel: +91 8079687199">+91 8079687199</a>
                </p>
                </div>
               
            </div>
        </div>
    </div>
 </footer>
  )
}

export default Footer