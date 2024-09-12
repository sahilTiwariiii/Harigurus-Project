import React, { useState } from 'react'
import EngagementImage from "../assets/Engagement.jpg"
import { Link, NavLink} from 'react-router-dom'
import "../styles/Engagement.css"
const Engagement = () => {
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
						<Link to="/services/paurohitya/engagement" className="detailsssbutton">
                        Engagement
						</Link>
					</div>
				</div>


      {/* second aksharabhyasa container */}
      <div className="detailllssecondmaincontianer">
        {/* first second container -> grid */}
        <div className="detailstlssecondcontainer">
          {/* aksharabhyasa image container */}
          <div className="detailstlsprofileimagecontainer">
            <img className='detialsimage' src={EngagementImage} alt="" />
          </div>
          {/* aksharabhyasa details container */}
          <div className="detailsdetailsdetailssecondcontainer">
           <h1 className='detaildetailsheading'>Engagement</h1>
           <p className='detaildetailsparagraph'>An Engagement is a prelude to the wedding and is a significant ceremony in the Hindu tradition. It brings together not only the future bride and groom, but also their respective families. The rituals conducted as part of the ceremony signifies a mutual agreement of the family members to the impending wedding between the bride and the groom. Usually, the ceremony is held after seeking the counsel of Vedic astrologers to ensure that the horoscopes of the soon to be bride and the groom are compatible with each other.</p>
           <h1 className="detailsstartingprice">Starting From <span className='detailsstartingpricemoney'>₹11,000 - ₹16,500</span> </h1>
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
                <p className='togglecontentparagraph'>An Engagement is a prelude to the wedding and is a significant ceremony in the Hindu tradition. It brings together not only the future bride and groom, but also their respective families. The rituals conducted as part of the ceremony signifies a mutual agreement of the family members to the impending wedding between the bride and the groom. Usually, the ceremony is held after seeking the counsel of Vedic astrologers to ensure that the horoscopes of the soon to be bride and the groom are compatible with each other.</p>

                <p className='togglecontentparagraph'>The engagement ceremony is conducted on an auspicious date as per the lunar calendar. The ceremony is presided by a purohit who initiates the formalities by performing Ganapati pooja. The respective families exchange gifts amid the chants of Vedic mantras as a gesture of mutual affection to the betrothed couple. The exchange of gifts will be followed by an exchange of Nischithartha tamboola, which is a collection of fruits and other auspicious material to formalize the commitment.</p>

                <p className='togglecontentparagraph'>After considering the auspicious dates, the purohit will then draft a “Lagna Patrika” containing the details of the soon to be bride and the groom and their families along with the date and time for the wedding. It is then read out loud, seeking affirmation from both the families. Once the contents are approved by both the families, they are considered to have committed to the wedding, which is further sealed by an exchange of rings between the bride and the groom.</p>

                <p className='togglecontentparagraph'>The engagement is usually a small ceremony with immediate family members and close friends in attendance. Vedic astrology plays a huge role in the ceremony.</p>
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

export default Engagement