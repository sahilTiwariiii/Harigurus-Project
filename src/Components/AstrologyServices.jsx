import React, { useState } from 'react'
import "../styles/AstrologyServices.css"
import astrologyFirstImage from "../assets/astrology.jpg"
import astrologySecondImage from "../assets/astrologysecond.jpg"
import astrologyThirdImage from "../assets/astrologythird.jpg"
import { Link } from 'react-router-dom'
const AstrologyServices = () => {
    const [showMoreAndLessOnlineConsultation, setShowMoreAndLessOnlineConsultation] = useState(false)
    const [showMoreAndLessBookVisit, setShowMoreAndLessBookVisit] = useState(false)
    const [showMoreAndLessQAndA, setShowMoreAndLessQAndA] = useState(false)

    // OnlineConsultation
    const onlineConsultationFullDescription="You can now avail the services of some of the top notch astrologers from the comfort of your home or office. Book a slot with any of the listed astrologers to gain insights into your past, present and future. You can seek their astrological and spiritual guidance on things of importance and plan accordingly. "
const onlineConsultationlessdescription=onlineConsultationFullDescription.slice(0,70)+"..."
 
//   BookVisit
const bookVisitFullDescription="Browse through our list of qualified astrologers along with their expertise and location to find those who meet your requirements. Once you have found what you are looking for, book an appointment and visit them.If you want more personalized guidance, we suggest you opt for online consultation. "
const bookVisitlessdescription=bookVisitFullDescription.slice(0,70)+"..."
 
// Q and A
const qAndAFullDescription="Do you have any questions that are bothering you, or curiosity that is making you restless? You can ask them on HariGurus and get relevant answers from qualified astrologers. This service is ideal for quick questions and clarifications.If you want more personalized guidance. "
const qAndAlessdescription=qAndAFullDescription.slice(0,70)+"..."

    // OnlineConsultation function
    const OnlineConsultationFunction=()=>{
        setShowMoreAndLessOnlineConsultation(!showMoreAndLessOnlineConsultation)
    }
    // BookVisit function
    const BookVisitFunction=()=>{
        setShowMoreAndLessBookVisit(!showMoreAndLessBookVisit)
    }
    // Q and A function
    const QandAFunction=()=>{
        setShowMoreAndLessQAndA(!showMoreAndLessQAndA)
    }


  return (
    <>
    <div className="astrologyservicemaincontainer">
              {/* first astrology conatiner */}
    <div className="insideastrologyfirstcontainer">
					<h1 className="inastrologyserheading">Puja Services</h1>
					{/* navigation button */}
					<div className="astrologynavigationbutton">
						<Link to="/" className="inastrologyhomebutton">
							Home
						</Link>{' '}
						&nbsp; <span className="astrologyabackslashspann">/</span> &nbsp;
						<Link to="/services" className="astrologgyahbutton">
							Services
						</Link>{' '}
                        &nbsp;  <span className="astrologyabackslashspann">/</span> &nbsp;
						<Link to="/astrology" className="inapoastrologybutton">
                        Astrology
						</Link>
					</div>
				
                </div>
                {/* second astrology container */}
                <div className="astrologysecondcontainer">
                    <div className="astrologyoutercontainer">

                  {/* first card */}
                        {/* Online Consultation */}
                        <Link to='/onlineconsultation'>
                        <div className="astrologyaallcard">
                        {/* image container */}
                        <div className="astrologyimagecontianer">

                       
						<img className="astrologyimages" src={astrologyFirstImage} alt="" />
                        </div>
                        {/* orangebutton here */}
                        <span className='seeallastrologyshaorangebutton'>BOOK NOW</span>
                        {/* second paragraph contianer */}
                        <div className="astrologyfdetailscontainer">

                       
						<h3 className="nameofastrologysservice">Online Consultation</h3>
						<p className="astrologyservicesaddress">{showMoreAndLessOnlineConsultation?onlineConsultationFullDescription:onlineConsultationlessdescription} 

                            <span onClick={OnlineConsultationFunction} className="showmoreeastrology">{showMoreAndLessOnlineConsultation?"Show Less":"Show More"}</span>
                            
                            </p>
                       
                        </div>
					</div>
                    </Link>
                  {/* second card */}
                        {/* Book & Visit */}
                        <Link to='/bookavisit'>
                        <div className="astrologyaallcard">
                        {/* image container */}
                        <div className="astrologyimagecontianer">

                       
						<img className="astrologyimages" src={astrologySecondImage} alt="" />
                        </div>
                        {/* orangebutton here */}
                        <span className='seeallastrologyshaorangebutton'>BOOK NOW</span>
                        {/* second paragraph contianer */}
                        <div className="astrologyfdetailscontainer">

                       
						<h3 className="nameofastrologysservice">Book & Visit</h3>
						<p className="astrologyservicesaddress">{showMoreAndLessBookVisit?bookVisitFullDescription:bookVisitlessdescription} 

                            <span onClick={BookVisitFunction} className="showmoreeastrology">{showMoreAndLessBookVisit?"Show Less":"Show More"}</span>
                            
                            </p>
                       
                        </div>
					</div>
                    </Link>
                  {/* third card */}
                        {/* Q & A */}
                        <Link to='/qanda'>
                        <div className="astrologyaallcard">
                        {/* image container */}
                        <div className="astrologyimagecontianer">

                       
						<img className="astrologyimages" src={astrologyThirdImage} alt="" />
                        </div>
                        {/* orangebutton here */}
                        <span className='seeallastrologyshaorangebutton'>BOOK NOW</span>
                        {/* second paragraph contianer */}
                        <div className="astrologyfdetailscontainer">

                       
						<h3 className="nameofastrologysservice">Q & A</h3>
						<p className="astrologyservicesaddress">{showMoreAndLessQAndA?qAndAFullDescription:qAndAlessdescription} 

                            <span onClick={QandAFunction} className="showmoreeastrology">{showMoreAndLessQAndA?"Show Less":"Show More"}</span>
                            
                            </p>
                       
                        </div>
					</div>
                    </Link>


                    </div>
                </div>


    </div>
    </>
  )
}

export default AstrologyServices