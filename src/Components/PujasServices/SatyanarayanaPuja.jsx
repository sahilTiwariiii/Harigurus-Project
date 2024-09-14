import React, { useState } from 'react'
import { Link, NavLink} from 'react-router-dom'
import "../../styles/SatyanarayanaPuja.css"
import SatyaNarayanPujaImage from "../../assets/SatyaNarayanPuja.jpg"
import { Helmet } from 'react-helmet'
const SatyanarayanaPuja = () => {
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
      <title>Harigurus | Satyanarayana Puja</title>
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
						<Link to="/services/pujas" className="inasksharbhyasabutton">
            Pujas
						</Link>
            &nbsp;  <span className="detailsssbackslashspann">/</span> &nbsp;
						<Link to="/services/pujas/satyanarayanapuja" className="detailsssbutton">
                        Satyanarayana
						</Link>
					</div>
				</div>


      {/* second aksharabhyasa container */}
      <div className="detailllssecondmaincontianer">
        {/* first second container -> grid */}
        <div className="detailstlssecondcontainer">
          {/* aksharabhyasa image container */}
          <div className="detailstlsprofileimagecontainer">
            <img className='detialsimage' src={SatyaNarayanPujaImage} alt="" />
          </div>
          {/* aksharabhyasa details container */}
          <div className="detailsdetailsdetailssecondcontainer">
           <h1 className='detaildetailsheading'>Satyanarayana Puja</h1>
           <p className='detaildetailsparagraph'>Satyanarayana Pooja is performed by all practicing Hindus from all walks of life. The pooja involves invoking the blessings of the God Satyanarayana, an avatar of one of the Hindu trinity, God Vishnu. According to the scriptures, it is believed that the God Satyanarayana appointed himself as the designated protector of the people during Kaliyuga and anyone who performs the ritual will receive his blessings to overcome any challenges in life.</p>
           <h1 className="detailsstartingprice">Starting From <span className='detailsstartingpricemoney'> ₹6,600 - ₹11,000</span> </h1>
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
                <p className='togglecontentparagraph'>Satyanarayana Pooja is performed by all practicing Hindus from all walks of life. The pooja involves invoking the blessings of the God Satyanarayana, an avatar of one of the Hindu trinity, God Vishnu. According to the scriptures, it is believed that the God Satyanarayana appointed himself as the designated protector of the people during Kaliyuga and anyone who performs the ritual will receive his blessings to overcome any challenges in life.</p>

                <p className='togglecontentparagraph'>Satyanarayana Pooja is conducted as a mark of gratitude and to seek divine assistance during the happy as well as challenging times. By performing the pooja diligently, one can ensure happiness, harmony, prosperity, and good fortunes while eliminating negative energies and bad influences in life. The pooja is generally performed as part of almost all auspicious events in the Hindu tradition.</p>

                <p className='togglecontentparagraph'>The pooja is performed on a full moon day, at an auspicious time suggested by Vedic astrologers or purohits. On the pooja day, the participants will observe fasting until the rituals are completed. The pooja rituals are performed according to the sacred texts under the guidance of a purohit.</p>
                <p className='togglecontentparagraph'>Like all auspicious events, the Satyanarayana pooja ritual also begins with Gowri and Ganapati pooja, which will be followed by the recital of Satyanarayana Katha which is a collection of stories on miracles performed by the god. These stories underline the significance of the rituals and the importance of righteous living. It is followed by Ashtottara Pooja where the 108 names of Vishnu are recited to conclude the occasion.</p>
                <p className='togglecontentparagraph'>Depending on the practices and preferences, a homa is also conducted as part of the Satyanarayana pooja ritual. Some of the other prayers that are part of the ritual include Bhoomi pooja, Kalasha pooja, Navagraha pooja, Varuna pooja, Lakshmi Pooja and more.</p>
                <p className='togglecontentparagraph'>Prasadam is distributed to those in attendance once the pooja concludes to break the fast. It will be followed by a traditional meal which is usually prepared for festive occasions.</p>
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

export default SatyanarayanaPuja