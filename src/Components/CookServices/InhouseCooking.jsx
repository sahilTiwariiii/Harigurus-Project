import React, { useState } from 'react'
import { Link, NavLink} from 'react-router-dom'
import "../../styles/InhouseCooking.css"
import cookfirstImage from "../../assets/imagee.jpeg"
import { Helmet } from 'react-helmet'
// import CateringImage from "../assets/Catering.png"
const InhouseCooking = () => {
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
    <Helmet>
      <title>Harigurus | In-house Cooking</title>
    </Helmet>
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
						<Link to="/services/cook" className="inasksharbhyasabutton">
            Cook
						</Link>
            &nbsp;  <span className="detailsssbackslashspann">/</span> &nbsp;
						<Link to="/services/cook/inhousecooking" className="detailsssbutton">
                        InhouseCooking
						</Link>
					</div>
				</div>


      {/* second aksharabhyasa container */}
      <div className="detailllssecondmaincontianer">
        {/* first second container -> grid */}
        <div className="detailstlssecondcontainer">
          {/* aksharabhyasa image container */}
          <div className="detailstlsprofileimagecontainer">
            <img className='detialsimage' src={cookfirstImage} alt="" />
          </div>
          {/* aksharabhyasa details container */}
          <div className="detailsdetailsdetailssecondcontainer">
           <h1 className='detaildetailsheading'>In-house Cooking</h1>
           <p className='detaildetailsparagraph'>Our curated list includes some of the best cooks known to prepare quality food for any function in any quantity. They will prepare the food at your home or the function venue and serve it to the table.</p>
           <h1 className="detailsstartingprice">Starting From <span className='detailsstartingpricemoney'> ₹165/plate - ₹275/plate</span> </h1>
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
                <p className='togglecontentparagraph'>Our curated list includes some of the best cooks known to prepare quality food for any function in any quantity. They will prepare the food at your home or the function venue and serve it to the table.</p>
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

export default InhouseCooking