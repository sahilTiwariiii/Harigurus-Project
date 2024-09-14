import React, { useState } from 'react'
import "../styles/PujasServices.css"
import SatyaNarayanPujaImage from "../assets/SatyaNarayanPuja.jpg"
import LakshmiPujaImage from "../assets/LakshmiPooja.jpg"
import OfficePujaImage from "../assets/OfficePuja.jpg"
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
const PujasServices = () => {
    const [showMoreAndLessSatyanarayanaPuja, setShowMoreAndLessSatyanarayanaPuja] = useState(false)
    const [showMoreAndLessLakshmiPuja, setShowMoreAndLessLakshmiPuja] = useState(false)
    const [showMoreAndLessOfficePuja, setShowMoreAndLessOfficePuja] = useState(false)
   
     
// Satyanarayana Puja Full Description
const SatyanarayanaPujaFullDescription="Performing Satyanarayana Pooja places one in the good graces of God Vishnu. It is an important part of most Hindu ceremonies and brings the blessings of good health, wealth, happiness and alleviates all the troubles."

const satyanarayanaPujalessDescription=SatyanarayanaPujaFullDescription.slice(0,70)+"..."


//  Lakshmi Puja Full Description
const  lakshmiPujaFullDescription="Also known as Mahalakshmi pooja, the ritual is performed seeking the blessings of the goddess of wealth and prosperity. The pooja also signifies thanksgiving for all the good fortunes bestowed by her grace.and the blessings of god"

const lakshmiPujalessDescription=lakshmiPujaFullDescription.slice(0,70)+"..."
// Office Puja Full Description
const officePujaFullDescription="Offices are places of business that support the livelihood of employers and employees.To prosper and conduct the business without obstacles, it is practice to seek divine blessings.it includes invocation of Ganapathi, Lakshmi and the Navagrahas."
const officePujalessDescription=officePujaFullDescription.slice(0,70)+"..."

    // Satyanarayana Puja function
    const SatyanarayanaPujaFunction=()=>{
        setShowMoreAndLessSatyanarayanaPuja(!showMoreAndLessSatyanarayanaPuja)
    }

    const LakshmiPujaFunction=()=>{
        setShowMoreAndLessLakshmiPuja(!showMoreAndLessLakshmiPuja)
    }

    const OfficePujaFunction=()=>{
        setShowMoreAndLessOfficePuja(!showMoreAndLessOfficePuja)
    }

  return (
    <>
    <Helmet>
        <title>Harigurus | Pujas</title>
    </Helmet>
    <div className="pujasservicemaincontainer">
          {/* first Pujas Services container */}

          <div className="insidepurpujasfirstcontainer">
					<h1 className="inpujjasarheading">Puja Services</h1>
					{/* navigation button */}
					<div className="pujjasanavigationbutton">
						<Link to="/" className="inpujjjshomebutton">
							Home
						</Link>{' '}
						&nbsp; <span className="pujjasabackslashspann">/</span> &nbsp;
						<Link to="/services" className="inpujjapujjahbutton">
							Services
						</Link>{' '}
                        &nbsp;  <span className="pujjasabackslashspann">/</span> &nbsp;
						<Link to="/services/pujas" className="inpujjapujjahbutton">
                        Pujas
						</Link>
					</div>
				</div>


                {/* second Pujas Services container */}
                <div className="pujjassecondcontainer">
                    <div className="pujjasoutercontainer">
                        {/* first card */}
                        {/* Satyanarayana Puja */}
                        <Link to='/services/pujas/satyanarayanapuja'>
                        <div className="pujjjashaallcard">
                        {/* image container */}
                        <div className="pujjashaimagecontianer">

                       
						<img className="pujjassimages" src={SatyaNarayanPujaImage} alt="" />
                        </div>
                        {/* orangebutton here */}
                        <Link to='/checkout'  className='seeallpujjasshaorangebutton'>BOOK NOW</Link>
                        {/* second paragraph contianer */}
                        <div className="pujjassssaafdetailscontainer">

                       
						<h3 className="nameofpujjasservice">Satyanarayana Puja</h3>
						<p className="pujjasservicesaddress">{showMoreAndLessSatyanarayanaPuja?SatyanarayanaPujaFullDescription:satyanarayanaPujalessDescription} 

                            <Link onClick={SatyanarayanaPujaFunction} className="showmoreepujjjas">{showMoreAndLessSatyanarayanaPuja?"Show Less":"Show More"}</Link>
                            
                            </p>
                       
                        </div>
					</div>
                    </Link>
                         
                          {/* second card */}
                        {/* Lakshmi Puja  */}
                        <Link to='/services/pujas/lakshmipuja'>
                        <div className="pujjjashaallcard">
                        {/* image container */}
                        <div className="pujjashaimagecontianer">

                       
						<img className="pujjassimages" src={LakshmiPujaImage} alt="" />
                        </div>
                        {/* orangebutton here */}
                        <Link to='/checkout'  className='seeallpujjasshaorangebutton'>BOOK NOW</Link>
                        {/* second paragraph contianer */}
                        <div className="pujjassssaafdetailscontainer">

                       
						<h3 className="nameofpujjasservice">Lakshmi Puja</h3>
						<p className="pujjasservicesaddress">{showMoreAndLessLakshmiPuja?lakshmiPujaFullDescription:lakshmiPujalessDescription} 

                            <Link onClick={LakshmiPujaFunction} className="showmoreepujjjas">{showMoreAndLessLakshmiPuja?"Show Less":"Show More"}</Link>
                            
                            </p>
                       
                        </div>
					</div>
                    </Link>
                         



                         {/* third card */}
                        {/* Office Puja  */}
                        <Link to='/services/pujas/officepuja'>
                        <div className="pujjjashaallcard">
                        {/* image container */}
                        <div className="pujjashaimagecontianer">

                       
						<img className="pujjassimages" src={OfficePujaImage} alt="" />
                        </div>
                        {/* orangebutton here */}
                        <Link to='/checkout'  className='seeallpujjasshaorangebutton'>BOOK NOW</Link>
                        {/* second paragraph contianer */}
                        <div className="pujjassssaafdetailscontainer">

                       
						<h3 className="nameofpujjasservice">Office Puja </h3>
						<p className="pujjasservicesaddress">{showMoreAndLessOfficePuja?officePujaFullDescription:officePujalessDescription} 

                            <Link onClick={OfficePujaFunction} className="showmoreepujjjas">{showMoreAndLessOfficePuja?"Show Less":"Show More"}</Link>
                            
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

export default PujasServices