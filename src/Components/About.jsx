import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import AboutusImage from '../assets/about2.jpg'
import phoneSvg from '../assets/phone.svg'
import "../styles/About.css"
const About = () => {
  return (
    <>
    <Helmet>
      <title>Harigurus | About</title>
    </Helmet>
    <div className="aboutmaincontainerr">
      <div className="firstcontainerinaboutus">
      <h1 className='inaboutheading'>About</h1>
      {/* navigation button */}
      <div className='aboutusnavigationbutton'>
        <Link to='/' className='inabouthomebutton'>
        Home</Link> &nbsp; <span className='backslashspan'>/</span> &nbsp;
        <Link to='/about' className='inaboutaboutbutton'>About</Link>
      </div>
      </div>
{/* image container */}
<div className="imagecontainerandparagraphabout">
  <div className="aboutusimagecontainer">
    <img className='aboutususaimage' src={AboutusImage} alt="" />
  </div>
  <div className="aboutusparagraphcontainer">
    <h1 className='knowmoreaboutus'>Know More About Us</h1>
    {/* paragraph continaer */}
    <div className="aboutusorangelinejj"></div>
    <p className="aboutusparagraphtagsss">
    On HariGurus, we are striving to keep the rich culture and traditions of our land alive by making it easier for everyone to observe important rituals amid their busy, fast paced lifestyle. While everyone wishes to remain connected to their spiritual side and stay blessed throughout. However, the lack of time, knowledge about the rituals and their significance, limited access to learned purohits who can conduct these rituals or offer spiritual guidance and availability of other services to conduct a successful ceremony prevents them from following their desire to stay connected to the roots.
    </p>
    <p className="aboutusparagraphtagsss">
    We understand the challenges faced by many households when it comes to managing the religious, spiritual, and traditional requirements. That’s why we have built HariGurus as a solution to address accessibility of quality services that will enable everyone to observe age-old traditional practice
    </p>
    <p className="aboutusparagraphtagsss">
    We have brought together the knowledgeable purohits with deep understanding of the vedas and samskaras, quality catering and cooking services, experienced astrologers and other providers of the objects and articles critical to performing sacred rituals to one place so our users don’t have to go looking.
    </p>

    {/* callus container */}
  <div className="callusmeaboutus">
    {/* orangecircleof image */}
    <div className="orangecircleofaboutsphone">
      <img src={phoneSvg} alt="" />
    </div>
    {/* second container  */}
    <div className="secondcontainerinsidecallus">
      <h1 className='ustctatnt'>Contact Us</h1>
      <span><a className="assscallorange" href="tel: +91 9353066802">+91 9353066802</a></span>
    </div>
    </div>
  </div>
  
</div>
<div className="aboutushrline">
      
      </div>
    </div>
   
    </>
  )
}

export default About