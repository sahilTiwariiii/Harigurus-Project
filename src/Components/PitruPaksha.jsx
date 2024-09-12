import React, { useState } from 'react'
import { Link, NavLink} from 'react-router-dom'
import "../styles/PitruPaksha.css"
import PitruPakshaImage from '../assets/PitruPaksha.jpg';
const PitruPaksha = () => {
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
						<Link to="/services/paurohitya/pitrupaksha" className="detailsssbutton">
                        Pitru Paksha
						</Link>
					</div>
				</div>


      {/* second aksharabhyasa container */}
      <div className="detailllssecondmaincontianer">
        {/* first second container -> grid */}
        <div className="detailstlssecondcontainer">
          {/* aksharabhyasa image container */}
          <div className="detailstlsprofileimagecontainer">
            <img className='detialsimage' src={PitruPakshaImage} alt="" />
          </div>
          {/* aksharabhyasa details container */}
          <div className="detailsdetailsdetailssecondcontainer">
           <h1 className='detaildetailsheading'>Pitru Paksha</h1>
           <p className='detaildetailsparagraph'>Pitru Paksha is a fortnight-long auspicious period before the Mahalaya Amavasya during which Hindus pay respects to their deceased ancestors by performing Shraddha and other poojas. The Shraddha ritual is performed to remember and pray for any deceased family member. During Pitru Paksha, prayers and ritualistic offering of food and water is performed for all the ancestors to appease their souls and wish for them to attain salvation.</p>
           <h1 className="detailsstartingprice">Starting From <span className='detailsstartingpricemoney'> ₹3,500 - ₹5,500</span> </h1>
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
                <p className='togglecontentparagraph'>Pitru Paksha is a fortnight-long auspicious period before the Mahalaya Amavasya during which Hindus pay respects to their deceased ancestors by performing Shraddha and other poojas. The Shraddha ritual is performed to remember and pray for any deceased family member. During Pitru Paksha, prayers and ritualistic offering of food and water is performed for all the ancestors to appease their souls and wish for them to attain salvation.</p>

                <p className='togglecontentparagraph'>During Pitru Paksha, it is believed that the souls of deceased ancestors visit their descendants in some form or other. To avoid offending them, people are required to follow a pious and disciplined routine during this time. It is also the time when people can do penance and follow Vedic customs to overcome Pitru Dosha by offering prayers to their ancestors.</p>

                <p className='togglecontentparagraph'>Most of the religious duties during the Pitru Paksha are carried out by the male family member. By seeking the guidance of learned purohits, appropriate rituals and remedies can be carried out during this period. The purohits will advise rituals to be performed during the fortnight and they will preside over the Shraddha ceremony to facilitate the repayment of spiritual and existential debt owed by the present descendants to previous generations.</p>

                <p className='togglecontentparagraph'>It is also a time for generosity and those who diligently follow the rituals will benefit from the blessings and protection offered by their ancestors.</p>
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

export default PitruPaksha