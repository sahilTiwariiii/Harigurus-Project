import React, { useState } from 'react'
import { Link, NavLink} from 'react-router-dom'
import "../../styles/LakshmiPuja.css"
import LakshmiPujaImage from "../../assets/LakshmiPooja.jpg"
import { Helmet } from 'react-helmet'
const LakshmiPuja = () => {
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
      <title>Harigurus | 
      Lakshmi Puja</title>
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
						<Link to="/services/pujas/lakshmipuja" className="detailsssbutton">
                        Lakshmi Puja
						</Link>
					</div>
				</div>


      {/* second aksharabhyasa container */}
      <div className="detailllssecondmaincontianer">
        {/* first second container -> grid */}
        <div className="detailstlssecondcontainer">
          {/* aksharabhyasa image container */}
          <div className="detailstlsprofileimagecontainer">
            <img className='detialsimage' src={LakshmiPujaImage} alt="" />
          </div>
          {/* aksharabhyasa details container */}
          <div className="detailsdetailsdetailssecondcontainer">
           <h1 className='detaildetailsheading'>Lakshmi Puja</h1>
           <p className='detaildetailsparagraph'>Lakshmi Pooja is an auspicious ceremony in which people show reverence and offer thanks to the God Vishnu’s consort and the goddess of wealth and prosperity. By performing the pooja as per established traditions, people will benefit from the goddess’ blessings, resulting in good fortunes and prosperity. Lakshmi pooja is generally performed during Deepawali, Vara Mahalakshmi Vratha, Akshaya Tritiya and Dantheras festivals. The pooja can also be performed at other times, on an auspicious day as per the advice of a purohit. The purohit will suggest suitable days and time to perform the pooja based on Vedic astrology after taking the horoscope of the person performing the pooja into account.</p>
           <h1 className="detailsstartingprice">Starting From <span className='detailsstartingpricemoney'> ₹2,750</span> </h1>
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
                <p className='togglecontentparagraph'>Lakshmi Pooja is an auspicious ceremony in which people show reverence and offer thanks to the God Vishnu’s consort and the goddess of wealth and prosperity. By performing the pooja as per established traditions, people will benefit from the goddess’ blessings, resulting in good fortunes and prosperity. Lakshmi pooja is generally performed during Deepawali, Vara Mahalakshmi Vratha, Akshaya Tritiya and Dantheras festivals. The pooja can also be performed at other times, on an auspicious day as per the advice of a purohit. The purohit will suggest suitable days and time to perform the pooja based on Vedic astrology after taking the horoscope of the person performing the pooja into account.</p>

                <p className='togglecontentparagraph'>The purohit will conduct Lakshmi pooja as per the Vedic rituals. Before performing the pooja, the entire house will be cleaned and decorated with mango leaves, flowers, and lamps to invite the goddess. The rituals start with Ganapathi pooja, which is followed by Punya Vachana and Maha Sankalpa. A Kalasha will be set up along with the offering of fruits, puffed rice, corn and other items of significance. The purohit will perform Kalasha pooja, followed by Mahalakshmi pooja while chanting Lakshmi mantra. The pooja is concluded by performing Mahamangalaarathi and distribution of prasadam to everyone in attendance.</p>
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

export default LakshmiPuja