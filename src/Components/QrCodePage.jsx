import React, { useState } from 'react'
import "../styles/QrCodePage.css"
import phonePeLogo from "../assets/phonePeLogo.svg"
import qrCodePeLogo from "../assets/PhonePeqr.jpeg"
import { Link } from 'react-router-dom'
const QrCodePage = () => {
  // Main Checkout
  
  // Checkout Paylater
  // QrCodePage
  return (
    <>
    <div className="maindivqrcodepagebossmaincontainer">
        {/* first qrcode page first container */}
        <div className="qrcodepagefirstbosscontainer">
					<h1 className="qrcodepageoutheading">Checkout</h1>
					{/* navigation button */}
					<div className="qrcodepagenavigationbutton">
						<Link to="/" className="qrcodepagehomebutton">
							Home
						</Link>{' '}
						&nbsp; <span className="qrcodepagebackslashspann">/</span> &nbsp;
						<Link to="/checkout" className="qrcodepageservicebutton">
							Checkout
						</Link>
					</div>
				</div>
                   {/*  second qr code page container*/}
                   <div className="secondqrcodepagecontainerboos">
                    {/* inside the container */}
                    <div className="secondqrcodepageindieoutercontaienr">
                        {/* first div of three buttons */}
						<div className="qrcodepagethreebuttonsimpo">
							{/* first button */}
							{/* orangebutton here */}
							<span className="qrcodepagecheckoutbutton">BILLING DETAILS</span>
							{/* second button */}
							{/* orangebutton here */}
							<span className="qrcodepagecheckoutbutton">PAYMENT</span>
							{/* thrid button */}
							{/* orangebutton here */}
							<span className="qrcodethirdimagecheckoutbutton">DONE</span>
						</div>
                         
                            {/* heading */}
                    <h1 className='qrcodepagethankyouforyour'>Amount</h1>
                     {/* qr code comntainer */}
                     <div className="qrcodescannermaincontainer">
                        {/* img and text container */}
                        <div className="phonepaylogoyaplogo">

                     
                        {/* img of phone pay */}
                         <img className='phonepelogoofqcode' src={phonePeLogo} alt="" />
                         <h1 className="acceptedheretexthey">Accepted Here</h1>
                         <h1 className="blackheadingbetterandbetter">Scan & Pay Using PhonePe App</h1>
                         {/* qr image */}
                         <img className='qrscannerimageandgolo' src={qrCodePeLogo} alt="" />
                         <p className='upiidofqrscanner'>UPI ID: 93530668021@axl</p>
                         </div>
                        
                     </div>
                     <div className="outerorangebutoonqrcodecontainer">

                    
                     <Link to='/checkout/paylater' className="qrcodemainpaidcontainer">PAID</Link>
                    </div>
                    </div>
                    
                </div>
    </div>
    </>
  )
}

export default QrCodePage