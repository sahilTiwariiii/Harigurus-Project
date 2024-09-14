import React, { useState } from 'react'
import "../styles/Mundan.css"
import MundanImage from "../assets/Mundan.jpg"
import { Link, NavLink} from 'react-router-dom'
import { Helmet } from 'react-helmet'
const Mundan = () => {
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
      <title>Harigurus | Mundan</title>
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
						<Link to="/services/paurohitya" className="inasksharbhyasabutton">
            Paurohitya
						</Link>
            &nbsp;  <span className="detailsssbackslashspann">/</span> &nbsp;
						<Link to="/services/paurohitya/mundan" className="detailsssbutton">
            Mundan
						</Link>
					</div>
				</div>


      {/* second aksharabhyasa container */}
      <div className="detailllssecondmaincontianer">
        {/* first second container -> grid */}
        <div className="detailstlssecondcontainer">
          {/* aksharabhyasa image container */}
          <div className="detailstlsprofileimagecontainer">
            <img className='detialsimage' src={MundanImage} alt="" />
          </div>
          {/* aksharabhyasa details container */}
          <div className="detailsdetailsdetailssecondcontainer">
           <h1 className='detaildetailsheading'>Mundan</h1>
           <p className='detaildetailsparagraph'>According to the Vedic literature, Mundan, also known as Chudakarana is the eighth of sixteen samskaras. The Mundan ritual is generally conducted when the child is one year old. However, depending on the culture and the preferences, the ceremony can be conducted in any odd year until the child attains the age of seven.</p>
           <h1 className="detailsstartingprice">Starting From <span className='detailsstartingpricemoney'>₹1,100 - ₹3,300</span> </h1>
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
                <p className='togglecontentparagraph'>According to the Vedic literature, Mundan, also known as Chudakarana is the eighth of sixteen samskaras. The Mundan ritual is generally conducted when the child is one year old. However, depending on the culture and the preferences, the ceremony can be conducted in any odd year until the child attains the age of seven.</p>

                <p className='togglecontentparagraph'>The Mundan ritual signifies the elimination of any sin or bad karma associated with the child from its past life. It will allow the child’s soul to start its journey in the new life in pursuit of its own destiny without the negative influences associated with the previous births.</p>

                <p className='togglecontentparagraph'>In this ritual, the child’s hair from birth is shaved for the first time on an auspicious date and time under the supervision of a purohit. The purohit performs a pooja or a homa with the child seated in front on its mother’s lap to invoke the blessings of the gods. Following the pooja, the purohit will either cut a portion of hair or shave the child’s head leaving a small tuft of hair while chanting the sacred mundan samskara mantra. However, it is also common for a professional barber to shave the child’s head once the purohit completes the shastra by symbolically cutting a small portion of the hair during pooja.</p>

                <p className='togglecontentparagraph'>The shaven head of the child is then washed with holy water and a paste of sandalwood and turmeric is applied. The hair removed during the ceremony is then disposed of as per the purohit’s advice.</p>
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

export default Mundan