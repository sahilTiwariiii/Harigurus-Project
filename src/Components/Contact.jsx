import React from 'react'
import "../styles/Contact.css"
import callUsImage from "../assets/callabout.svg"
import addressImage from "../assets/mailabout.svg"
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
const Contact = () => {
  return (
    <>
    <Helmet>
        <title>Harigurus | Contact</title>
    </Helmet>
    <div className="contactmaincontainermain">
        	{/* first  container */}
				<div className="contactsfirstcontainer">
					<h1 className="incontactsheading">Contact</h1>
					{/* navigation button */}
					<div className="contactsnavigationbutton">
						<Link to="/" className="incontactshomebutton">
							Home
						</Link>{' '}
						&nbsp; <span className="backslashspannprocontact">/</span> &nbsp;
						<Link to="/contact" className="incontactsprofilebutton">
							Contact
						</Link>
					</div>
				</div>
                {/* seocnd container */}
                <div className="contactsecondcontainer">
                 {/* second container first container */}
                 <div className="secondoffirstcontainersecond">
                    {/* contact first div */}
                    <h1 className='contactusinformationheading'>Contact Information</h1>
                    {/* orange line */}
                    <div className="contactinformationdownorangeline"></div>
                    {/* callus hole */}
                    <div className="contactfirstdivofphonecallus">
                        {/* images inside */}
                    <div className="contactusdatacardcard">
                        <span className='contactorange'>
					<img className="contactusimageimagess" src={callUsImage} alt="" />
                    </span>
				</div>
                        <div className="contactphoneusdetails">
                            <h1 className='contactcallsus'>Call Us</h1>
                            <a className='footerparafooterpara' href="tel: +91 9353066802"> 9353066802</a>
                <a className='footerparafooterpara' href="tel: +91 8079687199"> 8079687199</a>
                        </div>
                        
                    </div>
                    {/* mail send  second  hole */}
                    <div className="contactfirstdivofphonecallus">
                        {/* images inside */}
                    <div className="contactusdatacardcard">
                        <span className='contactorange'>
					<img className="contactusimageimagess" src={addressImage} alt="" />
                    </span>
				</div>
                        <div className="contactphoneusdetails">
                            <h1 className='contactcallsus'>Mail Us</h1>
                            <a className='footerparafooterpara' href="mailto: harigurus@gmail.com" rel="noreferrer" target="_blank">harigurus2021@gmail.com</a>
                        </div>
                        
                    </div>
                    {/* contact third div */}
                    <div className="contactthirddivofboxcontainer">
                     <h1 className='contacthaveaquestionheading'>Have A Question / Feedback?</h1>
                     {/* name */}
                     <div className="contactnameee">
                        <h1 className='contactheaing'>Name</h1>
                        <input className='aboutnamenomu' type="name"  />
                     </div>
                     {/* mobile */}
                     <div className="contactnameee">
                        <h1 className='contactheaing'>Mobile</h1>
                        <input className='aboutnamenomu' type="number"  />
                     </div>
                     {/* email */}
                     <div className="contactnameee">
                        <h1 className='contactheaing'>Email</h1>
                        <input className='aboutnamenomu' type="email"  />
                     </div>
                     {/* Question / Feedback */}
                     <div className="contactnameee">
                        <h1 className='contactheaing'>Question / Feedback</h1>
                        <textarea style={{height:'150px'}} className='aboutnamenomu' type="text" rows="4"
        cols="50"   />
                     </div>
                     {/* submit button */}
                     <div className='submitbuttondivcontact'>
                     <span className='contactuscontactorangebutton'>Submit</span>
                     </div>
                    </div>
                 </div>
                </div>

                {/* google map */}
                <div className='googlemapcontactcontainer'>
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.247773206465!2d77.5632613148211!3d12.891782990908276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUzJzMwLjQiTiA3N8KwMzMnNTUuNiJF!5e0!3m2!1sen!2sin!4v1635180161361!5m2!1sen!2sin" width="100%" height="743px" allowFullScreen loading="lazy" style={{border: 0}} />

                </div>
    </div>
    </>
  )
}

export default Contact