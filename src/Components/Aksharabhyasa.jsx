import React, { useState } from 'react'
import "../styles/Aksharabhyasa.css"
import AksharabhyasaImage from "../assets/Aksharabhyasa.jpg"
import { Link, NavLink} from 'react-router-dom'
const Aksharabhyasa = () => {
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
						<Link to="/services/paurohitya/aksharabhyasa" className="detailsssbutton">
            Aksharabhyasa
						</Link>
					</div>
				</div>


      {/* second aksharabhyasa container */}
      <div className="detailllssecondmaincontianer">
        {/* first second container -> grid */}
        <div className="detailstlssecondcontainer">
          {/* aksharabhyasa image container */}
          <div className="detailstlsprofileimagecontainer">
            <img className='detialsimage' src={AksharabhyasaImage} alt="" />
          </div>
          {/* aksharabhyasa details container */}
          <div className="detailsdetailsdetailssecondcontainer">
           <h1 className='detaildetailsheading'>Aksharabhyasa</h1>
           <p className='detaildetailsparagraph'>Aksharabhyasa is one of the sixteen important Vedic rites of life, referred to as "samskaras''. It is generally conducted when a child is two to five years old, and the ritual marks the beginning of the child's formal education. During the ceremony, the parents under the guidance of a learned purohit perform Ganapati and Saraswati pooja to ensure the child is blessed by the revered gods to have a smooth and enriching learning experience throughout the life, devoid of any obstacles.</p>
           <h1 className="detailsstartingprice">Starting From <span className='detailsstartingpricemoney'>₹2,750 - ₹5,500</span> </h1>
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
                <p className='togglecontentparagraph'>Aksharabhyasa is one of the sixteen important Vedic rites of life, referred to as "samskaras''. It is generally conducted when a child is two to five years old, and the ritual marks the beginning of the child's formal education. During the ceremony, the parents under the guidance of a learned purohit perform Ganapati and Saraswati pooja to ensure the child is blessed by the revered gods to have a smooth and enriching learning experience throughout the life, devoid of any obstacles.</p>

                <p className='togglecontentparagraph'>After the pooja, the parents (commonly the father or any other elder male family member) make the child write the letter ॐ with its index finger on a plate of rice. It is then followed by the names of gods and alphabets of their preferred language.</p>

                <p className='togglecontentparagraph'>The ceremony is followed by the distribution of prasadam among those in attendance. In addition to Ganapati and Saraswati pooja, praying to Hayagriva – an avatar of Vishnu also known as the god of knowledge is considered auspicious for the child’s prospects. The Aksharabhyasa ceremony can be a simple or an elaborate affair depending on the preferences of the parents.</p>
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

export default Aksharabhyasa