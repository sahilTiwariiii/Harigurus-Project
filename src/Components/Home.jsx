import React, { useState } from 'react'
import "../styles/Home.css"
import firstImage from '../assets/imagee.jpeg'
import astroImage from '../assets/astrology.jpg'
import havImage from '../assets/hav.jpg'
import BookAnEvent from './BookAnEvent'
import MostPopularEvents from './MostPopularEvents'
import WhyChooseUs from './WhyChooseUs'
import WhatOurCustomerSays from './WhatOurCustomerSays'
import RecentEvents from './RecentEvents'
const Home = () => {
  // for the first heading orange color heading
  const [firstImageHover, setFirstImageHover] = useState("What’s your Event?");
  // for second heading 
  const [subHeadingHover, setSubHeadingHover] = useState("Book your Cook Today")
  // for first paragraph
  const [firstParagraphChange, setFirstParagraphChange] = useState("No event is complete without food offerings to the divine, and prasadam to the guests.")
  // for second paragraph
  const [secondParagraphChange, setSecondParagraphChange] = useState("Get healthy, hygienic, and scrumptious traditional meals prepared at your place or catered to your doorstep.")

  
  const changeFirstImageContent=()=>{
    setFirstImageHover("What’s your Event?")
    setSubHeadingHover("Book your Cook Today")
    setFirstParagraphChange("No event is complete without food offerings to the divine, and prasadam to the guests.")
    setSecondParagraphChange("Get healthy, hygienic, and scrumptious traditional meals prepared at your place or catered to your doorstep.")
  }
  const changeSecondImageContent=()=>{
    setFirstImageHover("What’s the Occasion?")
    setSubHeadingHover("Consult your Astrologer")
    setFirstParagraphChange("Heavenly bodies guide the universe. Doing the right thing at a right time makes a huge difference when it comes to success.")
    setSecondParagraphChange("Let our learned astrologers suggest auspicious dates and times, and guide you in your journey through life.")
  }

  const changeThirdImageContent=()=>{
    setFirstImageHover("Any occasion at home or office?")
    setSubHeadingHover("Book your Purohit Today")
    setFirstParagraphChange("Seek blessing or offer thanksgiving to the divine by performing poojas and homas without any hassle.")
    setSecondParagraphChange("Book the services of knowledgeable purohits online, to conduct rituals as prescribed by the vedas and scriptures.")
  }

  
  return (
    <>
 
    <div className="booscontainer">
      <div className="sortcontainer">

    
      <div className="firstchilderncontainer">
        {/* <h2 className='whatsup'>What’s your Event?</h2> */}
        <h2 className='whatsup'>{firstImageHover}</h2>
        <h1 className='book'>{subHeadingHover}</h1>
        {/* <h1 className='today'>Today</h1> */}
        <p className='firstpararaph'>{firstParagraphChange}</p>
        <p className="secondparagraph">{secondParagraphChange}</p>

<button className='mubuttonn'>BOOK APPOINTMNT</button>
      </div>
      <div className="secondchilderncontainer">
        <img className='fistImage' onMouseEnter={changeFirstImageContent} src={firstImage} alt="" />
        <img className='secondImage' onMouseLeave={changeFirstImageContent} onMouseEnter={changeSecondImageContent} src={astroImage} alt="" />
        <img className='thirdImage' onMouseLeave={changeFirstImageContent} onMouseEnter={changeThirdImageContent} src={havImage} alt="" />
      </div>
    </div>
    </div>
    <BookAnEvent/>
    <MostPopularEvents/>
    <WhyChooseUs/>
    <WhatOurCustomerSays/>
    <RecentEvents/>
    </>
    
  )
}

export default Home