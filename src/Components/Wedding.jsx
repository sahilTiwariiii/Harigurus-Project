import React, { useState } from 'react'
import WeddingImage from "../assets/Wedding.jpg"
import { Link, NavLink} from 'react-router-dom'
import "../styles/Wedding.css"
import { Helmet } from 'react-helmet'
const Wedding = () => {
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
      <title>Harigurus | Wedding</title>
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
						<Link to="/services/paurohitya/wedding" className="detailsssbutton">
                        Wedding
						</Link>
					</div>
				</div>


      {/* second aksharabhyasa container */}
      <div className="detailllssecondmaincontianer">
        {/* first second container -> grid */}
        <div className="detailstlssecondcontainer">
          {/* aksharabhyasa image container */}
          <div className="detailstlsprofileimagecontainer">
            <img className='detialsimage' src={WeddingImage} alt="" />
          </div>
          {/* aksharabhyasa details container */}
          <div className="detailsdetailsdetailssecondcontainer">
           <h1 className='detaildetailsheading'>Wedding</h1>
           <p className='detaildetailsparagraph'>A traditional Hindu wedding is a collection of various Vedic rituals which signifies an important transition in life. The wedding brings together the bride and the groom to a blissful union, blessed by the gods, families, and friends.</p>
           <h1 className="detailsstartingprice">Starting From <span className='detailsstartingpricemoney'>₹16,500 - ₹38,500</span> </h1>
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
                <p className='togglecontentparagraph'>A traditional Hindu wedding is a collection of various Vedic rituals which signifies an important transition in life. The wedding brings together the bride and the groom to a blissful union, blessed by the gods, families, and friends.</p>

                <p className='togglecontentparagraph'>The wedding rituals start much before the actual wedding ceremony. These rituals conducted by the bride and the groom’s families individually as well as collectively are performed to bring good luck and eliminate any obstacles to the wedding. These rituals are conducted as prescribed in Vedic texts and predominantly include poojas to the family deities and Ganapati.</p>

                <p className='togglecontentparagraph'>Some of the prominent pre-wedding rituals include Naandi, Hoovilya, Chappara Pooja and Vara Pooja. During these rituals, the families of the bride and groom reinforce their commitment and express their approval. All these rituals are performed under the guidance of a learned purohit.</p>

                <p className='togglecontentparagraph'>On the wedding day, the purohit cleanses the wedding altar by performing Mantapa Pooja. The bride and the groom, after having performed other rituals, will be made to sit on the altar within a sacred circle, in front of the fire, symbolizing the fire god Agni. The bride and the groom recite mantras and perform Akshatharopana, praying for their married life to be long and prosperous.</p>
                <p className='togglecontentparagraph'>At a predetermined auspicious time, the groom ties a sacred mangalya thread around the bride’s neck, promising happiness, and a long healthy future. The bride and the groom, with Agni as witness, promise each other of a lifelong friendship, love, and unwavering support to each other through the “thicks and thins” of life. The wedding is finally solemnized by the couple taking seven full circles around the fire, exchanging seven vows in a ritual known as Sapthapadi.</p>
                <p className='togglecontentparagraph'>The wedding ceremony is then concluded with the newlywed couple looking at Arundhati and Dhruva Nakshatras, considered to be the embodiments of the qualities of an ideal husband and wife.</p>
                <p className='togglecontentparagraph'>The wedding ceremony is usually attended by the immediate and extended families and friends of the bride and the groom. The event concludes with a full course meal and tamboola served to everyone in attendance.</p>
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

export default Wedding