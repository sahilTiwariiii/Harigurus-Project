import React, { useState } from 'react'
import { Link, NavLink} from 'react-router-dom'
import "../../styles/OfficePuja.css"
import OfficePujaImage from "../../assets/OfficePuja.jpg"
const OfficePuja = () => {
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
						<Link to="/services/pujas" className="inasksharbhyasabutton">
            Pujas
						</Link>
            &nbsp;  <span className="detailsssbackslashspann">/</span> &nbsp;
						<Link to="/services/pujas/officepuja" className="detailsssbutton">
                        OfficePuja
						</Link>
					</div>
				</div>


      {/* second aksharabhyasa container */}
      <div className="detailllssecondmaincontianer">
        {/* first second container -> grid */}
        <div className="detailstlssecondcontainer">
          {/* aksharabhyasa image container */}
          <div className="detailstlsprofileimagecontainer">
            <img className='detialsimage' src={OfficePujaImage} alt="" />
          </div>
          {/* aksharabhyasa details container */}
          <div className="detailsdetailsdetailssecondcontainer">
           <h1 className='detaildetailsheading'>Office Puja</h1>
           <p className='detaildetailsparagraph'>The poojas performed in the workplace are slightly different from those performed at homes. However, the aim and the rituals performed share a lot of similarities. With good luck, prosperity, and continuity of business as the main aim, Vedic rituals are conducted when a new office space is set up and on auspicious days at existing places of business.</p>
           <h1 className="detailsstartingprice">Starting From <span className='detailsstartingpricemoney'> ₹3,300</span> </h1>
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
                <p className='togglecontentparagraph'>The poojas performed in the workplace are slightly different from those performed at homes. However, the aim and the rituals performed share a lot of similarities. With good luck, prosperity, and continuity of business as the main aim, Vedic rituals are conducted when a new office space is set up and on auspicious days at existing places of business.</p>

                <p className='togglecontentparagraph'>Office Pooja involves multiple rituals, and it is conducted on an auspicious day by experienced purohits well versed in Vedic texts and traditions. The pooja starts with invocation of Ganapathi to seek his continued blessings to eliminate an obstruction to the business. It is followed by Navagraha pooja and homa, where prayers are offered to the planetary gods to ward off negative forces and ill effects from planetary influence. Mahalakshmi pooja is then performed to seek the goddess’ blessings for the success and profitability of the business. The rituals also seek blessings for the wellbeing of everyone associated with the business. During the pooja, the purohit also seeks divine blessings for the essential instruments and equipment in the office space to ensure reliability and trouble-free operations.</p>

                <p className='togglecontentparagraph'>The pooja is concluded with the distribution of prasadam and gifts to everyone in attendance. Traditional meals may also be arranged for everyone in the office.</p>

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

export default OfficePuja