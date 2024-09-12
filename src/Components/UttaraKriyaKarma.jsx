import React, { useState } from 'react'
import { Link, NavLink} from 'react-router-dom'
import "../styles/UttaraKriyaKarma.css"
import UttaraKriyaKarmaImage from '../assets/UttaraKriyaKarma.jpg';
const UttaraKriyaKarma = () => {
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
						<Link to="/services/paurohitya/uttarakriyakarma" className="detailsssbutton">
            Uttara Kriya
						</Link>
					</div>
				</div>


      {/* second aksharabhyasa container */}
      <div className="detailllssecondmaincontianer">
        {/* first second container -> grid */}
        <div className="detailstlssecondcontainer">
          {/* aksharabhyasa image container */}
          <div className="detailstlsprofileimagecontainer">
            <img className='detialsimage' src={UttaraKriyaKarmaImage} alt="" />
          </div>
          {/* aksharabhyasa details container */}
          <div className="detailsdetailsdetailssecondcontainer">
           <h1 className='detaildetailsheading'>Uttara Kriya Karma</h1>
           <p className='detaildetailsparagraph'>Uttara Kriya Karma is a collection of rituals to be carried out to mark the end of life and facilitate the transition of recently deceased souls from the physical to a metaphysical world. These rituals help the soul attain salvation while helping the loved ones cope with the loss of a family member or a friend.</p>
           <h1 className="detailsstartingprice">Starting From <span className='detailsstartingpricemoney'> ₹77,000</span> </h1>
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
                <p className='togglecontentparagraph'>Uttara Kriya Karma is a collection of rituals to be carried out to mark the end of life and facilitate the transition of recently deceased souls from the physical to a metaphysical world. These rituals help the soul attain salvation while helping the loved ones cope with the loss of a family member or a friend.</p>

                <p className='togglecontentparagraph'>Traditional Uttara Kriya Karma rituals can extend for a duration of fourteen days, starting with funeral preparation to Vaikunta Samaradhane. The rituals are performed by one or more purohits, and the ceremony may vary depending on different factors. In the event of a death, the purohit will conduct Uttara Kriya Karma by performing Apara Kriya Samskara, Prayaschitta homa and other poojas to prepare the body for cremation. It is followed by the collection of ashes during the next two days, and a few daily rituals at the venue of cremation. The collected ashes, known as “Asthi” is then dispersed in a water body by offering prayers. Under the guidance of the purohit, the bereaved family members make offerings of food to the departed soul in the form of Pinda for the next few days as the soul is said to have begun its journey to the gates of Yamaloka – abode of the God of Death. The purohit will perform Yama homa and Shraddha ceremonies to ensure peace and tranquility to the soul.</p>

                <p className='togglecontentparagraph'>On the thirteenth and the fourteenth day, Masika Shraddha and Vaikunta Samaradhane are performed, and a feast is organized for everyone in attendance.</p>
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

export default UttaraKriyaKarma