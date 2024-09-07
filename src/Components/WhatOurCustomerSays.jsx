import React from 'react';
import '../styles/WhatOutCustomerSays.css';
import useroneImage from '../assets/ramesh.jpeg';
import usertwoImage from '../assets/shruti.jpeg';
import userthreeImage from '../assets/gautham.webp';
import quotesImage from '../assets/quote.svg'
const WhatOurCustomerSays = () => {
	return (
		<>
			<div className="whatourcustomersaysmain">
				<h1 className="whatourcustomersaysheading">What Our Customers Say</h1>
				<div className="myorangelinewhatourcustomer" />
				{/* user contianer */}
				<div className="whatourcustomresaysuserscontainer">
					{/* all the cards */}
					<div className="justdivonly">
						<img className="imageuserimagewhy" src={useroneImage} alt="" />
           
            <div className="orangecirclequotesimg">
              <img className='whatourquoteimage' src={quotesImage} alt="" />
            </div>
          
						<div className="whatourcustomersayscard">
							<img className='qvoteoo' src={quotesImage} />
							<p className="whatoutcustomerparagrah">
								We engaged prohits for my 11th day karma of my deceased mother on 16 th November 21, the
								function was well arranged in total, by two pandits with reasonable cost. I am satisfied
								🙏
							</p>
							<h3 className="whatourcustomerusersays">Ramesh G.</h3>
						</div>
					</div>
					<div className="justdivonly">
						<img className="imageuserimagewhy" src={usertwoImage} alt="" />
            <div className="orangecirclequotesimg">
              <img className='whatourquoteimage' src={quotesImage} alt="" />
            </div>
						<div className="whatourcustomersayscard">
						<img className='qvoteoo' src={quotesImage} />
							<p className="whatoutcustomerparagrah">
              We liked your professionalism, you were on time with regard to the response. Thank you for arranging so nicely for us. The event turned out to be awesome than expected. Thank you.
							</p>
							<h3 className="whatourcustomerusersays">Shruthi Hebbar</h3>
						</div>
					</div>
					<div className="justdivonly">
						<img className="imageuserimagewhy" src={userthreeImage} alt="" />
            <div className="orangecirclequotesimg">
              <img className='whatourquoteimage' src={quotesImage} alt="" />
            </div>
						<div className="whatourcustomersayscard">
						<img className='qvoteoo' src={quotesImage} />
							<p className="whatoutcustomerparagrah">
              We are very happy with the outcome of your services, you are very patient and I’m convinced we can definitely leave our worries to you. I will recommend to my family and friends. Thank you!
							</p>
							<h3 className="whatourcustomerusersays">Gautham Chengappa</h3>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default WhatOurCustomerSays;
