import React from 'react'
import planetsImage from  "../assets/plantes.svg"
import "../styles/WhyChooseUs.css"
const WhyChooseUs = () => {
  return (
    <>
    <div className="whytochoosemaincontainer">
      <div className="whytochoosefirstcontainer">
        <h1 className="whytochooseusheading">Why Choose Us</h1>
        <div className="whytochooseusorangeline"></div>
        <p className="whytochooseusparagraph">Access our extensive network of scholarly purohits, experienced astrologers, qualified cooks and vendors to meet all your pooja related needs in one place</p>
      </div>
      <div className="whytochoosesecondcontainer">
        <div className="whytochoosefirstimagecontainer">
          <img className='whychoosetofirst' src={planetsImage} alt="" />
          <span className='whytochoooseusspann'>42+</span>
          <h3 className='whytochooseusheadingss'>Qualified Purohits</h3>
        </div>
        <div className="whytochoosesecondimagecontainer">
        <img className='whychoosetosecond' src={planetsImage} alt="" />
        <span className='whytochoooseusspane'>20+</span>
        <h3 className='whytochooseusheadingsss'>Qualified Cooks</h3>
        </div>
        <div className="whytochoosethirdimagecontainer">
           <img className='whychoosetothird' src={planetsImage} alt="" />
           <span className='whytochoooseusspanm'>45+</span>
           <h3 className='whytochooseusheadingssss'>Qualified Astrologers</h3>
        </div>
      </div>
    </div>
    </>
  )
}

export default WhyChooseUs