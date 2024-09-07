import React from 'react'
import "../styles/RecentEvents.css"
import Aksharabhyasa from '../assets/Aksharabhyasa.jpg'
import Mundan from '../assets/Mundan.jpg'
import Namakarana from '../assets/Namakarana.jpg'
import Uttarakk from '../assets/Uttarakk.jpg'
import Stars from '../assets/starts.png'
import { Link } from 'react-router-dom'

const RecentEvents = () => {
  return (
    <>
    <div className="recenteventsmain">
        <h2 className='recenteventsheading'>Recent Events</h2>
        <div className="recenteventsorangelinecontainer"></div>
        <p className='recenteventsparagraph'>HariGurus continues to be the preferred place for our users to find purohits and cooks who make their events a grand success. We take pride in connecting you with the best professionals, ensuring every occasion is memorable and seamless</p>

        <div className="recenteventscardscontainer">
         <div className="realcardrecentcard">
          <img className='recenteventimg' src={Aksharabhyasa} alt="" />
          <div className="hoverstripe">
           <Link className='viewdetailsorange'>View Details</Link>
          </div>
          {/* stars */}
          <img className='starsrating' src={Stars} alt="" />
          <h4 className='akramtikram'>Aksharabhyasa</h4>
          
         </div>
         <div className="realcardrecentcard">
          <img className='recenteventimg' src={Mundan} alt="" />
          <div className="hoverstripe">
           <Link className='viewdetailsorange'>View Details</Link>
          </div>
          {/* stars */}
          <img className='starsrating' src={Stars} alt="" />
          <h4 className='akramtikram'>Mundan</h4>
         </div>
         <div className="realcardrecentcard">
          <img className='recenteventimg' src={Namakarana} alt="" />
          <div className="hoverstripe">
           <Link className='viewdetailsorange'>View Details</Link>
          </div>
          {/* stars */}
          <img className='starsrating' src={Stars} alt="" />
          <h4 className='akramtikram'>Namakarana</h4>
         </div>
         <div className="realcardrecentcard">
          <img className='recenteventimg' src={Uttarakk} alt="" />
          <div className="hoverstripe">
           <Link className='viewdetailsorange'>View Details</Link>
          </div>
          {/* stars */}
          <img className='starsrating' src={Stars} alt="" />
          <h4 className='akramtikram'>Uttara Kriya Karma</h4>
         </div>
        </div>
        <div className="hrline">
      
      </div>
    </div>
   
    </>
  )
}

export default RecentEvents