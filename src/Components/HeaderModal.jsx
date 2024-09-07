import React, { useState } from 'react';
import '../styles/HeaderModal.css';
import signinlogo from '../assets/signin.svg';
import { Link } from 'react-router-dom';
const HeaderModal = () => {
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

	return (
		<div className="modal">
			<div className="si-container">
				<div className="icon-signin">
					<img className="signinlogo" src={signinlogo} alt="" />
				</div>
				<h2 className="si">Sign In</h2>
			</div>
			{/* <div className="content-link" /> */}
			<div>
				<div className="cick">
					<Link>Home</Link>
					<hr />
				</div>

				<div className="cick">
					<Link>About</Link>
					<hr />
				</div>

				<div className="cick">
					<Link className="ssss">Services</Link>
					{/* toogl th logo */}

					{serviceContainer ? (
						<span onClick={opneInsideServiceContainer} className="mick">
							▲
						</span>
					) : (
						<span onClick={opneInsideServiceContainer} className="mick">
							▼
						</span>
					)}

					{/* click service and open the contianer */}
					{serviceContainer && (
						<div className="polo">
							<div className="ludo">
								<Link className="chi-chi">Purotiya</Link>

								{paurohityaContainer ? (
									<span onClick={changePaurohityaContainer} className="tick">
										▲
									</span>
								) : (
									<span onClick={changePaurohityaContainer} className="tick">
										▼
									</span>
								)}

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
								<Link className="pipi">Pujas</Link>

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
												<Link>Satyanarayana Puja</Link>
											</li>

											<li>
												<Link>Lakshmi Puja</Link>
											</li>

											<li>
												<Link>Office Puja</Link>
											</li>
										</ul>
									</div>
								)}
							</div>

							<div className="ludo">
								<Link className="vota">Cook</Link>

								{cookContainer ? (
									<span onClick={changeCookContainer} className="ticktwo">
										▲
									</span>
								) : (
									<span onClick={changeCookContainer} className="ticktwo">
										▼
									</span>
								)}

								{/* open cook dialog box */}

								{cookContainer && (
									<div className="cookklinks">
										<ul>
											<li>
												<Link>In-House Cooking</Link>
											</li>

											<li>
												<Link>Catering</Link>
											</li>
										</ul>
									</div>
								)}
							</div>
							<div className="ludo">
								<Link className="ncncn">Astrology</Link>

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
												<Link>Online Consultation</Link>
											</li>
											<li>
												<Link>Book & Visit</Link>
											</li>

											<li>
												<Link>Q & A</Link>
											</li>
										</ul>
									</div>
								)}
							</div>
						</div>
					)}
				</div>
				<hr />

				<div className="cick">
					<Link>Profiles</Link>
					<hr />
				</div>

				<div className="cick">
					<Link>Contact</Link>
					<hr />
				</div>
				{/* <div/> */}
				<div />
			</div>
		</div>
	);
};

export default HeaderModal;
