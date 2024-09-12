import React, { useState } from 'react'
import { Link, NavLink} from 'react-router-dom'
import ShraddhaImage from '../assets/Shraddha.jpg';
import "../styles/Shraddha.css"
const Shraddha = () => {
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
						<Link to="/services/paurohitya/shraddha" className="detailsssbutton">
                        Shraddha
						</Link>
					</div>
				</div>


      {/* second aksharabhyasa container */}
      <div className="detailllssecondmaincontianer">
        {/* first second container -> grid */}
        <div className="detailstlssecondcontainer">
          {/* aksharabhyasa image container */}
          <div className="detailstlsprofileimagecontainer">
            <img className='detialsimage' src={ShraddhaImage} alt="" />
          </div>
          {/* aksharabhyasa details container */}
          <div className="detailsdetailsdetailssecondcontainer">
           <h1 className='detaildetailsheading'>Shraddha</h1>
           <p className='detaildetailsparagraph'>Shraddha is a ritual for remembrance of dead ancestors performed every year on the day of their demise. The Shraddha ceremony is marked by prayers and offerings to ensure the well-being of the departed souls. By honoring the ancestors and wishing for their souls to attain salvation, Shraddha rituals acts as a way to show indebtedness for their role in making the present and future lives possible.</p>
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
                <p className='togglecontentparagraph'>Shraddha is a ritual for remembrance of dead ancestors performed every year on the day of their demise. The Shraddha ceremony is marked by prayers and offerings to ensure the well-being of the departed souls. By honoring the ancestors and wishing for their souls to attain salvation, Shraddha rituals acts as a way to show indebtedness for their role in making the present and future lives possible.</p>

                <p className='togglecontentparagraph'>Those performing the Shraddha ritual will receive the blessings of good luck and fortunes from the ancestors who wish the well-being of the descendants.</p>

                <p className='togglecontentparagraph'>The day to perform Shraddha each year is calculated by a learned purohit or a Vedic astrologer. The day of Shraddha each year is chosen such that it coincides with the death anniversary of the person as per the lunar calendar. On the day of ceremony, the purohit will offer prayers to the gods and ancestors by reciting Vedic mantras, which will be followed by the ritualistic offering of food called Pindadaan to the deceased souls. The offering is prepared by mixing rice, barley, milk, honey, ghee, sugar, and other ingredients, which is then fed to a cow or immersed in a water body.</p>

                <p className='togglecontentparagraph'>The Pindadaan is followed by Tarpan, an offering of water mixed with sesame seeds, barley, darbhe grass and flour to the departed ancestors. The pinda and tarpan offerings will bring satisfaction and peace to the departed souls and bring blessings and good fortunes to the descendants who perform the ceremony.</p>

                <p className='togglecontentparagraph'>The Shraddha ceremony is concluded by offering food to brahmins, followed by family members who were part of the ceremony.</p>
                <p className='togglecontentparagraph'>Depending on the preference, the Shraddha ceremony can be performed either at home or in holy places of religious significance.</p>
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

export default Shraddha