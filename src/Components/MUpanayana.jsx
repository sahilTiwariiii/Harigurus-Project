import React, { useState } from 'react'
import UpanayanaImage from "../assets/Upanayana.jpg"
import "../styles/MUpanayana.css"
import { Link, NavLink} from 'react-router-dom'
const MUpanayana = () => {
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
						<Link to="/services/paurohitya/upanayana" className="detailsssbutton">
                        Upanayana
						</Link>
					</div>
				</div>


      {/* second aksharabhyasa container */}
      <div className="detailllssecondmaincontianer">
        {/* first second container -> grid */}
        <div className="detailstlssecondcontainer">
          {/* aksharabhyasa image container */}
          <div className="detailstlsprofileimagecontainer">
            <img className='detialsimage' src={UpanayanaImage} alt="" />
          </div>
          {/* aksharabhyasa details container */}
          <div className="detailsdetailsdetailssecondcontainer">
           <h1 className='detaildetailsheading'>Upanayana</h1>
           <p className='detaildetailsparagraph'>Namakarana is the fourth of the sixteen samskaras which is followed while naming a newborn. The ritual is conducted on the 11th day of the child’s birth or on any auspicious day until the child’s first birthday. Namakarana is the ceremonial naming of the child in a prescribed format as per the Hindu traditions.</p>
           <h1 className="detailsstartingprice">Starting From <span className='detailsstartingpricemoney'>₹11,000 - ₹22,000</span> </h1>
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
                <p className='togglecontentparagraph'>Upanayana is the tenth of sixteen samskaras which marks the initiation of a child’s spiritual journey through life. The ritual signifies the preparedness of a child through adolescence to attain Vedic knowledge and create their own spiritual identity. As a part of the ritual, the child becomes a ward of a spiritual teacher and receives a three-stranded thread to be always worn over the left shoulder, marking his spiritual birth.</p>

                <p className='togglecontentparagraph'>The Upanayana ceremony consists of multiple Vedic rituals which are conducted on an auspicious day chosen based on the child’s nakshatra. These rituals symbolize that the child is prepared to leave the comforts of home and care of their parents to pursue knowledge. The initiation is presided by a learned purohit who starts the ritual by invoking the blessings of gods and ancestors. The child is then fed by their mother, which will be followed by a homa or a kalasha pooja. After the pooja, the child receives the sacred thread from the father who places it across the left shoulder as per the purohit’s instructions. The three strands of the thread signify the Hindu Trinity of Shiva, Vishnu and Brahma while serving as a reminder of the child’s debt to the teacher, parents, and God. It is followed by Suryadarshanam and recital of Gayatri Mantra.</p>

                <p className='togglecontentparagraph'>The investiture ritual concludes with the child symbolically seeking alms from his parents as a mark of humility and complete submission to the pursuit of knowledge. The ceremony concludes with the child receiving the blessings of elders and performing Sandhyavandanam.</p>

                <p className='togglecontentparagraph'>Upanayana is an elaborate ceremony, and the guests are treated with a traditional feast in the end.</p>
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

export default MUpanayana