import React, { useState } from 'react';
import '../styles/Services.css';
import { Link, Outlet } from 'react-router-dom';
import ShashtipoorthiImage from '../assets/Shashtipoorthi.jpeg';
import SatyaNarayanPujaImage from '../assets/SatyaNarayanPuja.jpg';
import cookImage from '../assets/imagee.jpeg';
import astrologyImage from '../assets/astrology.jpg';
import { Helmet } from 'react-helmet';
const Services = () => { 
    const [showMoreAndLessPurohitya, setshowMoreAndLessPurohitya] = useState(false)
   const [showMoreAndLessPujas, setShowMoreAndLessPujas] = useState(false)
   const [showMoreAndLessCook, setShowMoreAndLessCook] = useState(false)
   const [showMoreAndLessAstrology, setshowMoreAndLessAstrology] = useState(false)

    // purohitya full  description
    const putohityaFullDescription="Vedic rituals hold an important place in our lives. Conducting them in a pious and prescribed way by itself rejuvenates the surroundings with positive cleansing energy. We have searched and listed some of the most qualified and knowledgeable purohits willing to conduct sacred rituals for you."
    // purohitya less description
    const purohityalessDescription=putohityaFullDescription.slice(0,70)+"..."
    // pujas full description
    const pujasFullDescription="Pooja means something in Hinduism, Sanskrit, Hindi. If you want to know the exact meaning, history, etymology or English translation of this term then check out the descriptions on this page.he practice of Pooja involves various rituals and ceremonies, each with its own symbolic meaning."
// pujas less description
 const pujaslessDescription=pujasFullDescription.slice(0,70)+"..."

    // cook full description
    const cookFullDescription="We are what we consume, and every sacred ritual is followed by a befitting offering to gods and loved ones and the community. Our collection of chefs offers tailored, quality recipes to suit each specific occasion. No matter the gathering size, they prepare safe, hygienic, and delightful foods."
    // cook less container
    const cooklessDescription=cookFullDescription.slice(0,70)+"..."
    // astrology full description
    const astrologyFullDescription="The earth, moon and the stars, and all celestial bodies are connected to each other in this universe. An experienced astrologer can decipher the predictable movement of these heavenly bodies and correlate it at a personal level. Find such experts here and let them help you guide you through the “thicks and thins” of life."
    const astrologylessDescription=cookFullDescription.slice(0,70)+"..."

    const showlessandmorePurohityaContainer=()=>{
        // setshowMoreAndLessPurohitya((prev) => !prev);
        setshowMoreAndLessPurohitya(!showMoreAndLessPurohitya)
    }
    const showlessandmorePujasContainer=()=>{
        setShowMoreAndLessPujas(!showMoreAndLessPujas)
    }
    const showlessandmoreCookContainer=()=>{
        setShowMoreAndLessCook(!showMoreAndLessCook)
    }
    const showlessandmoreAstrologyContainer=()=>{
        setshowMoreAndLessAstrology(!showMoreAndLessAstrology)
    }
	return (
		<>
        <Helmet>
            <title>Harigurus | Services</title>
        </Helmet>
			<div className="servicesmaincontainer">
				{/* first container */}
				<div className="insideservicefirstcontainer">
					<h1 className="inservicesheading">Services</h1>
					{/* navigation button */}
					<div className="servicesnavigationbutton">
						<Link to="/" className="inservicehomebutton">
							Home
						</Link>{' '}
						&nbsp; <span className="backslashspann">/</span> &nbsp;
						<Link to="/services" className="inserviceservicebutton">
							Services
						</Link>
					</div>
				</div>

				{/* second continaer */}
				<div className="serviceesecondcontianer">
                    <div className="serviceoutercontainer">

                    
					{/* first card Purohitya */}
                    <Link to='/services/paurohitya'>
					<div className="serviceallcard">
                        {/* image container */}
                        <div className="serviceimagecontianer">

                       
						<img className="servicesimages" src={ShashtipoorthiImage} alt="" />
                        </div>
                        {/* orangebutton here */}
                        <span className='seeallservicesorangebutton'>See All Services</span>
                        {/* second paragraph contianer */}
                        <div className="servicesdetailscontainer">

                       
						<h3 className="nameofservice">Paurohitya</h3>
						<p className="putohitaddress">{showMoreAndLessPurohitya?putohityaFullDescription:purohityalessDescription} 

                            <Link onClick={showlessandmorePurohityaContainer} className="showmoree">{showMoreAndLessPurohitya?"Show Less":"Show More"}</Link>
                            
                            </p>
                       
                        </div>
					</div>
                    </Link>
					{/* second card Satyanarayan Puja */}
                    <Link to='/services/pujas'>
					<div className="serviceallcard">
                        {/* image container */}
                        <div className="serviceimagecontianer">

                       
						<img className="servicesimages" src={SatyaNarayanPujaImage} alt="" />
                        </div>
                         {/* orangebutton here */}
                         <span className='seeallservicesorangebutton'>See All Services</span>
                        {/* second paragraph contianer */}
                        <div className="servicesdetailscontainer">

                       
						<h3 className="nameofservice">Pujas</h3>
						<p className="putohitaddress">{showMoreAndLessPujas?pujasFullDescription:pujaslessDescription} 

                            <Link onClick={showlessandmorePujasContainer} className="showmoree">{showMoreAndLessPujas?"Show Less":"Show More"}</Link>
                            
                            </p>
                        </div>
					</div>
                    </Link>
					{/* third card Cook */}
                    <Link to='/services/cook'>
					<div className="serviceallcard">
                        {/* image container */}
                        <div className="serviceimagecontianer">

                       
						<img className="servicesimages" src={cookImage} alt="" />
                        </div>
                         {/* orangebutton here */}
                         <span className='seeallservicesorangebutton'>See All Services</span>
                        {/* second paragraph contianer */}
                        <div className="servicesdetailscontainer">

                       
						<h3 className="nameofservice">Cook</h3>
						<p className="putohitaddress">{showMoreAndLessCook?cookFullDescription:cooklessDescription} 

                            <Link onClick={showlessandmoreCookContainer} className="showmoree">{showMoreAndLessCook?"Show Less":"Show More"}</Link>
                            
                            </p>
                        </div>
					</div>
                    </Link>
					{/* fourth card Astrology */}
                    <Link to='/services/astrology'>
					<div className="serviceallcard">
                        {/* image container */}
                        <div className="serviceimagecontianer">

                       
						<img className="servicesimages" src={astrologyImage} alt="" />
                        </div>
                         {/* orangebutton here */}
                         <span className='seeallservicesorangebutton'>See All Services</span>
                        {/* second paragraph contianer */}
                        <div className="servicesdetailscontainer">

                       
						<h3 className="nameofservice">Astrology</h3>
						<p className="putohitaddress">{showMoreAndLessAstrology?astrologyFullDescription:astrologylessDescription} 

                            <Link onClick={showlessandmoreAstrologyContainer} className="showmoree">{showMoreAndLessAstrology?"Show Less":"Show More"}</Link>
                            
                            </p>
                        </div>
					</div>
                    </Link>
                    </div>
				</div>
                <Outlet/>
			</div>
            
		</>
	);
};

export default Services;
