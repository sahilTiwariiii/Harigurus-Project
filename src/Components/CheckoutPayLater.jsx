import React from 'react'
import "../styles/CheckoutPayLater.css"
import { Link } from 'react-router-dom'
const CheckoutPayLater = () => {
  return (
    <>
    <div className="maincheckoutpaylatercontainerboos">
        {/* first payout contianer */}
				<div className="paylaterfirstcontainer">
					<h1 className="paylateroutheading">Checkout</h1>
					{/* navigation button */}
					<div className="paylaternavigationbutton">
						<Link to="/" className="paylaterhomebutton">
							Home
						</Link>{' '}
						&nbsp; <span className="paylaterbackslashspann">/</span> &nbsp;
						<Link to="/checkout" className="paylaterservicebutton">
							Checkout
						</Link>
					</div>
				</div>
                {/*  second payout container*/}
                <div className="secondpayoutcontainerboos">
                    {/* inside the container */}
                    <div className="secondpaylaterindieoutercontaienr">
                        {/* first div of three buttons */}
						<div className="paylaterthreebuttonsimpo">
							{/* first button */}
							{/* orangebutton here */}
							<span className="paylatercheckoutbutton">BILLING DETAILS</span>
							{/* second button */}
							{/* orangebutton here */}
							<span className="paylatercheckoutbutton">PAYMENT</span>
							{/* thrid button */}
							{/* orangebutton here */}
							<span className="paylatercheckoutbutton">DONE</span>
						</div>
                         
                            {/* heading */}
                    <h1 className='paylaterthankyouforyour'>THANK YOU FOR YOUR BOOKING!</h1>
                    {/* small heading */}
                    <h1 className="smallhedingpaylater">We'll contact you soon.</h1>
                    <h1 className="tillthenyoucanseepaylater">Till then you can see the list of our Purohits and Cooks <Link to='/profiles' className='paylaterhere'>here</Link></h1>
                    </div>
                 
                </div>

    </div>
    </>
  )
}

export default CheckoutPayLater