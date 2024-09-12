import React, { useState } from 'react'
import "../styles/CooksServices.css"
import cookfirstImage from "../assets/imagee.jpeg"
import CateringImage from "../assets/Catering.png"
import { Link } from 'react-router-dom'
const CooksServices = () => {
    const [showMoreAndLessFirstImage, setShowMoreAndLessFirstImage] = useState(false)
    const [showMoreAndLessSecondImage, setShowMoreAndLessSecondImage] = useState(false)
    // In-house Cooking
   const inhouseCookingFullDescription="Our curated list includes some of the best cooks known to prepare quality food for any function in any quantity. They will prepare the food at your home or the function venue and serve it to the table."
   const inhouseCookinglessdescription=inhouseCookingFullDescription.slice(0,70)+"..."
// Catering 
const cateringFullDescription="Our list of professional caterers have years of experience preparing and serving traditional all kinds religious events. Select and order food based on the type of function  customize selection on available options."
const cateringlessdescription=cateringFullDescription.slice(0,70)+"..."
  
    // In-house Cooking
    const inHouseCookingFunction=()=>{
        setShowMoreAndLessFirstImage(!showMoreAndLessFirstImage)
    }
    // Catering 
    const cateringCookingFunction=()=>{
        setShowMoreAndLessSecondImage(!showMoreAndLessSecondImage)
    }
  return (
    <>
    <div className="cookservicemaincontainer">
        {/* first cook conatiner */}
    <div className="insidecooksfirstcontainer">
					<h1 className="incooksarheading">Cook Services</h1>
					{/* navigation button */}
					<div className="cooksnavigationbutton">
						<Link to="/" className="incooksshomebutton">
							Home
						</Link>{' '}
						&nbsp; <span className="cooksabackslashspann">/</span> &nbsp;
						<Link to="/services" className="cookssahbutton">
							Services
						</Link>{' '}
                        &nbsp;  <span className="cooksabackslashspann">/</span> &nbsp;
						<Link to="/services/cook" className="inapocooksbutton">
                        Cook
						</Link>
					</div>
				</div>
                {/* second cook container */}

                <div className="cookkssecondcontainer">
                    <div className="cookksouterconatiner">


                        {/* first card */}
                        {/* In-house Cooking */}
                        <Link to='/services/cook/inhousecooking'>
                        <div className="cooksshallcard">
                        {/* image container */}
                        <div className="cooksimagecontianer">

                       
						<img className="cokkssimages" src={cookfirstImage} alt="" />
                        </div>
                        {/* orangebutton here */}
                        <Link to='/checkout' className='seeallcookshaorangebutton'>BOOK NOW</Link>
                        {/* second paragraph contianer */}
                        <div className="cooksaafdetailscontainer">

                       
						<h3 className="nameofcookssservice">In-house Cooking</h3>
						<p className="cookssservicesaddress">{showMoreAndLessFirstImage?inhouseCookingFullDescription:inhouseCookinglessdescription} 

                            <span onClick={inHouseCookingFunction} className="showmoreecookss">{showMoreAndLessFirstImage?"Show Less":"Show More"}</span>
                            
                            </p>
                       
                        </div>
					</div>
                    </Link>

                         {/* second card */}
                        {/* Catering */}
                        <Link to='/services/cook/catering'>
                        <div className="cooksshallcard">
                        {/* image container */}
                        <div className="cooksimagecontianer">

                       
						<img className="cokkssimages" src={CateringImage} alt="" />
                        </div>
                        {/* orangebutton here */}
                        <Link to='/checkout' className='seeallcookshaorangebutton'>BOOK NOW</Link>
                        {/* second paragraph contianer */}
                        <div className="cooksaafdetailscontainer">

                       
						<h3 className="nameofcookssservice">Catering</h3>
						<p className="cookssservicesaddress">{showMoreAndLessSecondImage?cateringFullDescription:cateringlessdescription} 

                            <span onClick={cateringCookingFunction} className="showmoreecookss">{showMoreAndLessSecondImage?"Show Less":"Show More"}</span>
                            
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

export default CooksServices