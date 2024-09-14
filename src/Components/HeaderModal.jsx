import React, { useState } from 'react';
import '../styles/HeaderModal.css';
import signinlogo from '../assets/signin.svg';
import { Link, useNavigate } from 'react-router-dom';
const HeaderModal = () => {
	const navigate=useNavigate()
	const [ serviceContainer, setServiceContainer ] = useState(false);
	const [ paurohityaContainer, setPaurohityaContainer ] = useState(false);
	const [ pujasContainer, setPujasContainer ] = useState(false);
	const [ cookContainer, setCookContainer ] = useState(false);
	const [ astrologyContainer, setAstrologyContainer ] = useState(true);
 
	const opneInsideServiceContainer = () => {
		setServiceContainer((prev) => !prev);
	};

	const changePaurohityaContainer = () => {
		setPaurohityaContainer((prev) => !prev);
	};

	const changePujasContainer = () => {
		setPujasContainer((prev) => !prev);
	};

	const changeCookContainer = () => {
		setCookContainer((prev) => !prev);
	};

	const changeAstrologyContainer = () => {
		setAstrologyContainer((prev) => !prev);
	};
    const navigateintoLoginandignupRegisterFunction=()=>{
		navigate('/auth')
	}
	return (
		<div className="modal">
			<div className="si-container">
				<div className="icon-signin">
					<img onClick={navigateintoLoginandignupRegisterFunction}  className="signinlogo" src={signinlogo} alt="" />
				</div>
				<h2 onClick={navigateintoLoginandignupRegisterFunction} className="si">Sign In</h2>
			</div>
			{/* <div className="content-link" /> */}
			<div>
				<div className="cick">
					<Link to='/'>Home</Link>
					<hr />
				</div>

				<div className="cick">
					<Link to='/about'>About</Link>
					<hr />
				</div>

				<div className="cick">
					<Link onClick={opneInsideServiceContainer} to='/services' className="ssss">Services</Link>
					{/* toogl th logo */}

					{serviceContainer ? (
						<span onClick={opneInsideServiceContainer} className="mick">
							▲
						</span>
					) : (
						<span onClick={opneInsideServiceContainer}  className="mick">
							▼
						</span>
					)}

					{/* click service and open the contianer */}
					{serviceContainer && (
						<div className="polo">
							<div className="ludo">
								<Link onClick={changePaurohityaContainer} to='/services/paurohitya' className="chi-chi">Purotiya</Link>

								{paurohityaContainer ? (
									<span onClick={changePaurohityaContainer} className="tick">
										▲
									</span>
								) : (
									<span onClick={changePaurohityaContainer} className="tick">
										▼
									</span>
								)}
								{/* 1st line  */}
<span className='hrlinksofservicemagicbox' />
								{/* puro links */}

								{paurohityaContainer && (
									<div className="puurolinks">
										<ul>
											<li>
												<Link to="/services/paurohitya/aksharabhyasa">Aksharabhyasa</Link>
											</li>

											<li>
												<Link to="services/paurohitya/mundan">Mundan</Link>
											</li>
											<li>
												<Link to="/services/paurohitya/namakarna">Namakaran</Link>
											</li>
											<li>
												<Link to="/services/paurohitya/upanayana">Upanayana</Link>
											</li>
											<li>
												<Link to="services/paurohitya/engagement">Engagement</Link>
											</li>
											<li>
												<Link to="/services/paurohitya/wedding">Wedding</Link>
											</li>
											<li>
												<Link to="/services/paurohitya/shashtipoorthiShanti">
													Shashtipoorti Shanti
												</Link>
											</li>
											<li>
												<Link to="/services/paurohitya/bhimarathaShanti">
													Bhimaratha Shanti
												</Link>
											</li>
											<li>
												<Link to="/services/paurohitya/gruhapravesha">Gruhapravesha</Link>
											</li>
											<li>
												<Link to="/services/paurohitya/pitruPaksha">Pitru Paksha</Link>
											</li>
											<li>
												<Link to="/services/paurohitya/shraddha">Shraddha</Link>
											</li>
											<li>
												<Link to="/services/paurohitya/uttaraKriyaKarma">
													Uttara Kriya Karma
												</Link>
											</li>
										</ul>
									</div>
								)}
							</div>
							
							<div className="ludo">
								<Link onClick={changePujasContainer} to='/services/pujas' className="pipi">Pujas</Link>

								{pujasContainer ? (
									<span onClick={changePujasContainer} className="tickone">
										▲
									</span>
								) : (
									<span onClick={changePujasContainer} className="tickone">
										▼
									</span>
								)}
								{/* inside pujas container */}

								{pujasContainer && (
									<div className="pujjalinks">
										<ul>
											<li>
												<Link to='/services/pujas/satyanarayanapuja'>Satyanarayana Puja</Link>
											</li>

											<li>
												<Link to='/services/pujas/lakshmipuja'>Lakshmi Puja</Link>
											</li>

											<li>
												<Link to='/services/pujas/officepuja'>Office Puja</Link>
											</li>
										</ul>
									</div>
								)}
							</div>
							{/* 2nd line */}
							<span className='hrlinksofservicemagicbox' />
							<div className="ludo">
								<Link onClick={changeCookContainer} to='/services/cook' className="vota">Cook</Link>

								{cookContainer ? (
									<span onClick={changeCookContainer} className="ticktwo">
										▲
									</span>
								) : (
									<span onClick={changeCookContainer} className="ticktwo">
										▼
									</span>
								)}
								{/* 3rd line */}
<span className='hrlinksofservicemagicbox' />
								{/* open cook dialog box */}

								{cookContainer && (
									<div className="cookklinks">
										<ul>
											<li>
												<Link to='/services/cook/inhousecooking'>In-House Cooking</Link>
											</li>

											<li>
												<Link to='/services/cook/catering'>Catering</Link>
											</li>
										</ul>
									</div>
								)}
							</div>
							<div className="ludo">
								<Link  onClick={changeAstrologyContainer} to='/services/astrology' className="ncncn">Astrology</Link>

								{astrologyContainer ? (
									<span onClick={changeAstrologyContainer} className="tickthree">
										▲
									</span>
								) : (
									<span onClick={changeAstrologyContainer} className="tickthree">
										▼
									</span>
								)}

								{astrologyContainer && (
									<div className="astrooolinks">
										<ul>
											<li>
												<Link to='/services/astrology/onlineconsultation'>Online Consultation</Link>
											</li>
											<li>
												<Link to='/services/astrology/bookavisit'>Book & Visit</Link>
											</li>

											<li>
												<Link to='/services/astrology/qanda'>Q & A</Link>
											</li>
										</ul>
									</div>
								)}
							</div>
							{/* 4th line */}
							<span className='hrlinksofservicemagicbox' />
						</div>
					)}
				</div>
				<hr />

				<div className="cick">
					<Link to='/profiles'>Profiles</Link>
					<hr />
				</div>

				<div className="cick">
					<Link to='/contact'>Contact</Link>
					<hr />
				</div>
				{/* <div/> */}
				<div />
			</div>
		</div>
	);
};

export default HeaderModal;
