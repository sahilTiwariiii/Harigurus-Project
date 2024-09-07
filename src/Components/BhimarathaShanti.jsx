import React, { useEffect, useState } from 'react'
import BhimarathiImage from "../assets/Bhimarathi.jpeg"
import { Link, NavLink} from 'react-router-dom'
import "../styles/BhimarathaShanti.css"
const BhimarathaShanti = () => {

    const [howdoweHelp, setHowdoweHelp] = useState(false)

    const activeFunctionContent = () => {
      // Check if howdoweHelp is already true, if it is, do nothing
      if (!howdoweHelp) {
        setHowdoweHelp(true);
      }
    };
    const descriptionactiveFunctionContent = () => {
      // Check if howdoweHelp is already true, if it is, do nothing
      if (howdoweHelp) {
        setHowdoweHelp(false);
      }
    };
  return (
    <>
    <div className="detailsamaincontainerr">
      {/* first aksharabhyasa contianer */}
      <div className="detailsssfirstcontainer">
					{/* navigation button */}
					<div className="detailsssnavigationbutton">
						<Link to="/" className="detailsshomebutton">
							Home
						</Link>{' '}
						&nbsp; <span className="detailsssbackslashspann">/</span> &nbsp;
						<Link to="/services" className="inasksharbhyasabutton">
							Services
						</Link>{' '}
                        &nbsp;  <span className="detailsssbackslashspann">/</span> &nbsp;
						<Link to="/paurohitya" className="inasksharbhyasabutton">
            Paurohitya
						</Link>
            &nbsp;  <span className="detailsssbackslashspann">/</span> &nbsp;
						<Link to="/bhimarathashanti" className="detailsssbutton">
                        Bhimaratha
						</Link>
					</div>
				</div>


      {/* second aksharabhyasa container */}
      <div className="detailllssecondmaincontianer">
        {/* first second container -> grid */}
        <div className="detailstlssecondcontainer">
          {/* aksharabhyasa image container */}
          <div className="detailstlsprofileimagecontainer">
            <img className='detialsimage' src={BhimarathiImage} alt="" />
          </div>
          {/* aksharabhyasa details container */}
          <div className="detailsdetailsdetailssecondcontainer">
           <h1 className='detaildetailsheading'>Bhimaratha Shanti</h1>
           <p className='detaildetailsparagraph'>Bhima Ratha Shanti is a ceremony conducted when a male family member attains the age of seventy. The rituals involve poojas and homas, seeking the blessings of health and longevity from the family deity and other gods of choice. The ritual is performed with the involvement of the elderly couple in the presence of their family members by a learned purohit who is also well versed in vedic astrology.</p>
           <h1 className="detailsstartingprice">Starting From <span className='detailsstartingpricemoney'>₹16,500 - ₹27,500</span> </h1>
           <p className='detailspricemay'>*Prices may vary based on the family's rituals. Please <span className='callusinpara'>call us</span> call us for more details.</p>
           {/* orange Button */}
           <div className="buttonsdetailspage">
           <div className="detailspageorangebutton">BOOK NOW</div>
           <Link to='/cook'>
           <h1 className="detailspagesecondbutton">Need a Cook?</h1>
           </Link>
           <Link to='/astrology'>
           <h1 className="detailspagethirdbutton">Fix Muhurtham?</h1>
           </Link>
           </div>
          </div>
        </div>
        {/* second second container */}
        <div className="detailssecondsecondcontaineree">
          {/* toogle tab */}
          <div className="detailstogletabtab">
            <NavLink to='#'  onClick={descriptionactiveFunctionContent} className={({isActive})=>
        isActive?"nav-link":""}>Description</NavLink>
            <NavLink to='#'   onClick={activeFunctionContent} className={({isActive})=>
        isActive?"nav-link":""} >How do we help?</NavLink>
          </div>
          {/* content description box */}
          <div className="contentboxconditionrendering">
            <h1 className='tooglecontenttitle'>{howdoweHelp?"How do we help?":"Description"}</h1>
            {/* <p className="togglecontentparagraph"> */}
              {howdoweHelp?(
                <>
                <p className='togglecontentparagraph'>On HariGurus, we list purohits who are well versed in Vedic rituals. Based on their availability and your convenience, you can choose the one who meets the criteria and book their services for your child’s Aksharabhyasa on a particular date and time. If you are unsure about the auspicious date and time, our list of astrologers will help.</p>

                <p className='togglecontentparagraph'>The purohits will give you a detailed description of the rituals and make necessary preparation, including the necessary pooja material to conduct the ceremony. They will arrive at your location on the preferred date and time and conduct the rituals as prescribed by sacred texts.</p>
                </>
              ):(
                <>
                <p className='togglecontentparagraph'>Bhima Ratha Shanti is a ceremony conducted when a male family member attains the age of seventy. The rituals involve poojas and homas, seeking the blessings of health and longevity from the family deity and other gods of choice. The ritual is performed with the involvement of the elderly couple in the presence of their family members by a learned purohit who is also well versed in vedic astrology.</p>

                <p className='togglecontentparagraph'>To seek good health, longevity, and a comfortable fulfilling life for the subject, the Purohit will perform Ganapati, Aayush, Lakshmi, Amritha, Mrithyunjaya and Dhanvantari homas, along with Kalashabisheka. These homas will appease the gods responsible for the health, wealth, and life force.</p>

                <p className='togglecontentparagraph'>The rituals are said to remedy negative planetary influences and influence good health.</p>
                </>
              )}
            {/* </p> */}
          </div>
        </div>
      </div>
    </div>
{/* hr line */}
    <div className="detailspageushrline">
      
      </div>
    </>
  )
}

export default BhimarathaShanti