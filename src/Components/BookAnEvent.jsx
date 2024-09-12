import React from 'react'
import "../styles/BookAnEvent.css"
import dateImage from '../assets/date.svg'
import timeImage from '../assets/time.svg'
import { useNavigate } from 'react-router-dom'
const BookAnEvent = () => {
    const navigate=useNavigate();
    const BookAnEventButtonFunction=()=>{
        navigate('/checkout')
    }
  return (
    <>
    <section>
        <div className="bookmaincontainer">
            <div className="bookfirstcontainer">
                <h1 className='bookaneventheading'>Book An Event</h1>
                <div className="orangeline"></div>
                <p className="bookandeventparagraph">
                Find professional purohits, cooks, catering service for any religious function or a traditional event at your home,"<br/>"
                office or an event venue. Select a date and event to learn more
                </p>
            </div>
            <div className="dateandtimecontainer">
                <div className="date">
                    <h3 className='dateee'>Date</h3>
                    {/* <DatePicker/> */}
                    <input placeholder='DD/MM/YYYY' className='dating' type="date" />
                    <img className='mydateimage' src={dateImage} alt="" />
                    
                   
                </div>
                <div className="time">
                    <h3 className='dateee'>Time</h3>
                    <input className='timing' type="time" />
                    <img className='mytimeimage' src={timeImage} alt="" />
                </div>
                <div className="event">
                    <h3 className='dateee'>Event</h3>
                    <select className='eventing' name="" id="">
                        <option value="">Aksharabhyasa</option>
                        <option value="">Mundan</option>
                        <option value="">Namakaran</option>
                        <option value="">Upanayana</option>
                        <option value="">Engagement</option>
                        <option value="">Wedding</option>
                        <option value="">Shashtipoorti Shanti</option>
                        <option value="">Bhimaratha Shanti</option>
                        <option value="">Gruhapravesha</option>
                        <option value="">Pitru Paksha</option>
                        <option value="">Pitru Shraddha</option>
                        <option value="">Uttara Kriya Karma</option>
                        <option value="">Satyanarayana Puja</option>
                        <option value="">Lakshmi Puja</option>
                        <option value="">Office Puja</option>
                    </select>
                </div>
                <button onClick={BookAnEventButtonFunction} className="orangebuttonevent">Boot Event</button>
            </div>
        </div>
    </section>
 
    </>
  )
}

export default BookAnEvent