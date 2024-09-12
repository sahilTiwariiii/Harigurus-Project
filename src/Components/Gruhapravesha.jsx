import React, { useState } from 'react'
import GruhapraveshaImage from "../assets/Gruhapravesha.jpg"
import { Link, NavLink} from 'react-router-dom'
import "../styles/Gruhapravesha.css"
const Gruhapravesha = () => {
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
						<Link to="/services/paurohitya" className="inasksharbhyasabutton">
            Paurohitya
						</Link>
            &nbsp;  <span className="detailsssbackslashspann">/</span> &nbsp;
						<Link to="/services/paurohitya/gruhapravesha" className="detailsssbutton">
                        Gruhapravesha
						</Link>
					</div>
				</div>


      {/* second aksharabhyasa container */}
      <div className="detailllssecondmaincontianer">
        {/* first second container -> grid */}
        <div className="detailstlssecondcontainer">
          {/* aksharabhyasa image container */}
          <div className="detailstlsprofileimagecontainer">
            <img className='detialsimage' src={GruhapraveshaImage} alt="" />
          </div>
          {/* aksharabhyasa details container */}
          <div className="detailsdetailsdetailssecondcontainer">
           <h1 className='detaildetailsheading'>Gruhapravesha</h1>
           <p className='detaildetailsparagraph'>The term “Gruhapravesha'' translates to “entering a house”, and as the name signifies, it is a ritual performed when someone moves into a new place of dwelling. The ritual is performed irrespective of whether the house itself is newly constructed or someone else was previously residing there. When performed by an experienced purohit, the ritual cleanses any presence of negative energy and fills the dwelling with positive energy.</p>
           <h1 className="detailsstartingprice">Starting From <span className='detailsstartingpricemoney'> ₹16,500 - ₹38,500</span> </h1>
           <p className='detailspricemay'>*Prices may vary based on the family's rituals. Please <span className='callusinpara'>call us</span> call us for more details.</p>
           {/* orange Button */}
           <div className="buttonsdetailspage">
           <Link to='/checkout' className="detailspageorangebutton">BOOK NOW</Link>
           <Link to='/services/cook'>
           <h1 className="detailspagesecondbutton">Need a Cook?</h1>
           </Link>
           <Link to='/services/astrology'>
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
                <p className='togglecontentparagraph'>The term “Gruhapravesha'' translates to “entering a house”, and as the name signifies, it is a ritual performed when someone moves into a new place of dwelling. The ritual is performed irrespective of whether the house itself is newly constructed or someone else was previously residing there. When performed by an experienced purohit, the ritual cleanses any presence of negative energy and fills the dwelling with positive energy.</p>

                <p className='togglecontentparagraph'>The purohit will follow Vedic astrology to identify the auspicious date and time at which the pooja may be commenced. The traditional Gruhapravesha rituals span over a period of two days, starting with Ganapati pooja, Navagraha pooja, Vaastu pooja, Vaastu Rakshogana homa, Purnahuti and Mahamangalarthi on the first day. These rituals will help rectify any shortcomings in the Vaastu of the house. On the second day, during the Pravesham muhurat, the purohit will perform a purification ritual by chanting Vedic mantras. It is followed by Gau pooja, and the milk boiling ritual. As a part of the Gruhapravesha ritual, Lakshmi pooja, Lakshmi-Kuber homa, Kula devata homa and Satyanarayana pooja are conducted. Through these poojas, the purohit invokes the blessings of the occupant’s family deity, goddess Lakshmi, Kuber and Vishnu to ensure that the residents are bestowed with good fortune, happiness and health while being protected from negative energies.</p>

                <p className='togglecontentparagraph'>In addition to the pooja, the purohit may also suggest the ideal placement of various articles and areas for different purposes within the home as per the Vaastu shastra.</p>
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

export default Gruhapravesha