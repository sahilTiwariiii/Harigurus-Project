import React from 'react'
import "../styles/NotFoundPage.css"
import { Link } from 'react-router-dom'
const NotFoundPage = () => {
  return (
    <>
    <div className="mainfourzerofourcontainer">
    <h1 className='fourzerofourheaidng'>404</h1>
    <h1 className='fourfourpara'>Page not Found</h1>
    <p className='sorryforuforpara'>Sorry. We Can't Seem To Find The Page You're Looking For</p>
    <span className='fourfournotfoundorangebutton'>
        <Link to='/' className='bakctohomerealbutton'>BACK TO HOME</Link>
    </span>
    </div>
    </>
  )
}

export default NotFoundPage