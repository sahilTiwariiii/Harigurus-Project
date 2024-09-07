import React, { useState } from 'react'
import NamakaranaImage from "../assets/Namakarana.jpg"
import { Link, NavLink} from 'react-router-dom'
import "../styles/Namakarna.css"
const Namakarna = () => {
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
						<Link to="/namakarna" className="detailsssbutton">
                        Namakarna
						</Link>
					</div>
				</div>


      {/* second aksharabhyasa container */}
      <div className="detailllssecondmaincontianer">
        {/* first second container -> grid */}
        <div className="detailstlssecondcontainer">
          {/* aksharabhyasa image container */}
          <div className="detailstlsprofileimagecontainer">
            <img className='detialsimage' src={NamakaranaImage} alt="" />
          </div>
          {/* aksharabhyasa details container */}
          <div className="detailsdetailsdetailssecondcontainer">
           <h1 className='detaildetailsheading'>Namakarna</h1>
           <p className='detaildetailsparagraph'>Namakarana is the fourth of the sixteen samskaras which is followed while naming a newborn. The ritual is conducted on the 11th day of the child’s birth or on any auspicious day until the child’s first birthday. Namakarana is the ceremonial naming of the child in a prescribed format as per the Hindu traditions.</p>
           <h1 className="detailsstartingprice">Starting From <span className='detailsstartingpricemoney'>₹7,700 - ₹13,200</span> </h1>
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
                <p className='togglecontentparagraph'>Namakarana is the fourth of the sixteen samskaras which is followed while naming a newborn. The ritual is conducted on the 11th day of the child’s birth or on any auspicious day until the child’s first birthday. Namakarana is the ceremonial naming of the child in a prescribed format as per the Hindu traditions.</p>

                <p className='togglecontentparagraph'>The Namakarana ritual is influenced by Vedic astrology and carried out amid poojas offering salutations to the gods, ancestors and then Navagraha homa. The ceremony is generally performed during the first half of the day and the child’s name is chosen based on the family deity, the astrological date and time of the child’s birth and the preference of parents and family members.</p>

                <p className='togglecontentparagraph'>A traditional Hindu name consists of four parts, each signifying one of the qualities imbibed in the child by way of its birth into the family. The first name, “Kuladaiva Nama” refers to the family deity, then “Masa Nama” representing the lunar month in which the child was born, then the “Nakshatra Nama” based on the star under which the child is born and finally the “Vyavahara Nama” which is the preferred name. It is a common practice to use “Vyavahara Nama” as the first name in day-to-day life. The Namakarana ceremony bestows the child with an identity which it will use until the end and remembered for long in the future.</p>

                <p className='togglecontentparagraph'>The Namakarana rituals will be conducted by a learned purohit with in-depth knowledge of Vedic astrology, who will suggest appropriate names based on the child’s horoscope. The child, accompanied by its parents, participates in the pooja conducted in front of a kalasha placed on a plate of rice. All the four names of the child are written on rice using a dried turmeric root. Following the pooja, offerings are given to the purohits, and the chosen name is whispered into the child’s right ear three times by the parents.</p>

                <p className='togglecontentparagraph'>The Namakarana rituals are concluded by distributing prasadam to the participating family and friends.</p>
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

export default Namakarna