import React, { useState } from 'react';
import '../styles/Profiles.css';
import { Link } from 'react-router-dom';
import downArrowImage from '../assets/downArrow.svg';
import rightArrowImage from '../assets/rightarrow.svg';
import purohitImage from '../assets/Purohit.svg';
import cooksImage from '../assets/CookProfile.svg';
import { Helmet } from 'react-helmet';
const Profiles = () => {
	const [ purohitsContainer, setPurohitsContainer ] = useState(true);
	const [ cooksContainer, setCooksContainer ] = useState(true);
    const [astrologyContainer, setAstrologyContainer] = useState(true)

	const openandClosePurohitsContainer = () => {
		setPurohitsContainer((prev) => !prev);
	};

	const openandCloseCooksContainer = () => {
		setCooksContainer((prev) => !prev);
	};
    
    const openandCloseAstrologyContainer=()=>{
        setAstrologyContainer((prev) => !prev)
    }
	return (
		<>
		<Helmet>
			<title>Harigurus | Profiles</title>
		</Helmet>
			<div className="profilemaincontainer">
				{/* first  container */}
				<div className="profilefirstcontainer">
					<h1 className="inprofilesheading">Profiles</h1>
					{/* navigation button */}
					<div className="profilesnavigationbutton">
						<Link to="/" className="inabouthomebutton">
							Home
						</Link>{' '}
						&nbsp; <span className="backslashspannpro">/</span> &nbsp;
						<Link to="/about" className="inprofileprofilebutton">
							Profiles
						</Link>
					</div>
				</div>
				{/* second container */}
				<div className="profilesecondcontainer">
					{/* first container of Purohits */}
					<div className="mainpurohitacontainer">
                        {/* first purohits container */}
						<div className="secondcontainerfirstwala" onClick={openandClosePurohitsContainer}>
							{/* switch between arrow */}

							{purohitsContainer ? (
								<img className="letmedown" src={downArrowImage} alt="" />
							) : (
								<img className="letmedown" src={rightArrowImage} alt="" />
							)}

							<h1 className="purohits">Purohits</h1>
						</div>

						{/* no need to create this containe into the purohit div because we have to just show the name and detials nothing else */}
						{/* click and open the container which is Purohits */}

						{purohitsContainer && (
							<div className="clickandopenpurohitscontainer">
								{/* first Card  */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Satyaprasannachar</h3>
									<p className="putohitaddress">Madhwa, Bangalore</p>
								</div>
								{/* second  */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Narasimhachar Kudli</h3>
									<p className="putohitaddress">Madhwa, Bangalore</p>
								</div>
								{/* third  */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Jeeveshachar</h3>
									<p className="putohitaddress">Madhwa, Bangalore</p>
								</div>
								{/* foutrh  */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Srinidhi Achar</h3>
									<p className="putohitaddress">Madhwa, Bangalore</p>
								</div>
								{/* fifth  */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Raghuveerachar</h3>
									<p className="putohitaddress">Madhwa, Bangalore</p>
								</div>
								{/* sixth  */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Aravindachar</h3>
									<p className="putohitaddress">Madhwa, Bangalore</p>
								</div>
								{/*  seventh */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Gundachar</h3>
									<p className="putohitaddress">Madhwa, Bangalore</p>
								</div>
								{/* eight */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Jithamitrachar</h3>
									<p className="putohitaddress">Madhwa, Bangalore</p>
								</div>
								{/* ninth */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Srinivasachar</h3>
									<p className="putohitaddress">Madhwa, Bangalore</p>
								</div>
								{/* 10 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Raghuachar</h3>
									<p className="putohitaddress">Madhwa, Bangalore</p>
								</div>
								{/* 11 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Balasubramaniam</h3>
									<p className="putohitaddress">Smartha, Nanjungud</p>
								</div>
								{/* 12 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Sudharshan Sharma</h3>
									<p className="putohitaddress">Smartha, Chenraypatna</p>
								</div>
								{/* 13 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Hiran Sharma</h3>
									<p className="putohitaddress">Smartha, Chenraypatna</p>
								</div>
								{/* 14 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Harivamshachar</h3>
									<p className="putohitaddress">Madhwa, Bangalore</p>
								</div>
								{/* 15 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Venkatachal H Gudi</h3>
									<p className="putohitaddress">Madhwa, Shiggon, Haveri</p>
								</div>
								{/* 16 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Girish Govindachar Mannari</h3>
									<p className="putohitaddress">Madhwa, Kadakol, Savanur, Haveri</p>
								</div>
								{/* 17 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Kanakachala Achar Odeyar</h3>
									<p className="putohitaddress">Madhwa, Mantralaya</p>
								</div>
								{/* 18 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Pavamanachar(Turahalli)</h3>
									<p className="putohitaddress">Madhwa, Bangalore</p>
								</div>
								{/* 19 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Harinathachar</h3>
									<p className="putohitaddress">Madhwa, Ananthpura AP</p>
								</div>
								{/* 20 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Arun Kumar</h3>
									<p className="putohitaddress">Smartha, Bangalore</p>
								</div>
								{/* 21 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Manjunath</h3>
									<p className="putohitaddress">Smartha, Bangalore</p>
								</div>
								{/* 22 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Chandrashekar</h3>
									<p className="putohitaddress">Smartha, Bangalore</p>
								</div>
								{/* 23 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Srinath L</h3>
									<p className="putohitaddress">Smartha, Bangalore</p>
								</div>
								{/* 24 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Balasubramaniam S</h3>
									<p className="putohitaddress">Smartha, Bangalore</p>
								</div>
								{/* 25 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Vinay S</h3>
									<p className="putohitaddress">Smartha, Bangalore</p>
								</div>
								{/* 26 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Subash Murthy</h3>
									<p className="putohitaddress">Smartha, Bangalore</p>
								</div>
								{/* 27 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Akshay S</h3>
									<p className="putohitaddress">Smartha, Bangalore</p>
								</div>
								{/* 28 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">M V Krishna Kulkarni</h3>
									<p className="putohitaddress">Madhwa, Tumkur</p>
								</div>
								{/* 29 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">M V Paddu</h3>
									<p className="putohitaddress">Madhwa, Tumkur</p>
								</div>
								{/* 30 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">PT Jayateerthachar</h3>
									<p className="putohitaddress">Madhwa, Tumkur</p>
								</div>
								{/* 31 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Uday Simha</h3>
									<p className="putohitaddress">Madhwa, Tumkur</p>
								</div>
								{/* 32 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Venkatesh</h3>
									<p className="putohitaddress">Madhwa, Tumkur</p>
								</div>
								{/* 33 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Venu Madhavachar</h3>
									<p className="putohitaddress">Madhwa, Udupi</p>
								</div>
								{/* 34 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Guru Venkatesha Vittala</h3>
									<p className="putohitaddress">Madhwa, Ananthapura</p>
								</div>

								{/* 35 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Yogeesh Sharma</h3>
									<p className="putohitaddress">Smartha, Bangalore</p>
								</div>
								{/* 36 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Lokesh</h3>
									<p className="putohitaddress">Smartha, Bangalore</p>
								</div>
								{/* 37 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Madhusudhan</h3>
									<p className="putohitaddress">Smartha, Bangalore</p>
								</div>
								{/* 38 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Ramesh Achar</h3>
									<p className="putohitaddress">Madhwa, Bangalore</p>
								</div>
								{/* 39 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Prakash GS</h3>
									<p className="putohitaddress">Smartha, Bangalore</p>
								</div>
								{/* 40 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Bharath</h3>
									<p className="putohitaddress">Smartha, Bangalore</p>
								</div>

								{/* 41 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Rameshachar</h3>
									<p className="putohitaddress">Madhwa, Mandya</p>
								</div>
								{/* 42 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Vedavyasachar</h3>
									<p className="putohitaddress">Madhwa, Udupi</p>
								</div>

								{/* 43 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Rishikeshachar</h3>
									<p className="putohitaddress">Madhwa, Udupi</p>
								</div>
								{/* 44 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Sridhar Vadya</h3>
									<p className="putohitaddress">Smartha, Bangalore</p>
								</div>
								{/* 45 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Ashwath A S</h3>
									<p className="putohitaddress">Smartha, Bangalore</p>
								</div>
								{/* 46 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Ramaswamy K L</h3>
									<p className="putohitaddress">Smartha, Bangalore</p>
								</div>
								{/* 47 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Kambalur Pavamanachar</h3>
									<p className="putohitaddress">Madhwa, Bangalore</p>
								</div>

								{/* 48 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Pavangiri Sharma</h3>
									<p className="putohitaddress">Smartha, Bangalore</p>
								</div>
							</div>
						)}
					</div>
					{/* Second container of Purohits */}
					<div className="secondcontainersecondwala" onClick={openandCloseCooksContainer}>
						{/* cooks first container */}
<div className="secondcontainercookswala">
						{cooksContainer ? (
							<img className="letmedown" src={downArrowImage} alt="" />
						) : (
							<img className="letmedown" src={rightArrowImage} alt="" />
						)}
						<h1 className="purohits">Cooks</h1>
                        </div>

                        {/* open cooks container  */}
                        {cooksContainer && (
  <div className="clickandopencookscontainer">
  {/* first card */}
  <div className="cookscardsss">
     <img src={cooksImage} alt="" />
     <h3 className="nameofpurohit">Gopalkrishna N</h3>
          <p className="putohitaddress">Madhwa, Tumkur</p>
  </div>
  {/* second card */}
  <div className="cookscardsss">
     <img src={cooksImage} alt="" />
     <h3 className="nameofpurohit">D V Ravikumar</h3>
          <p className="putohitaddress">Smartha, Bangalore</p>
  </div>
  {/* 3rd card */}
  <div className="cookscardsss">
     <img src={cooksImage} alt="" />
     <h3 className="nameofpurohit">Girish D R</h3>
          <p className="putohitaddress">Smartha, Bangalore</p>
  </div>
  {/* 4rd card */}
  <div className="cookscardsss">
     <img src={cooksImage} alt="" />
     <h3 className="nameofpurohit">Dinesh</h3>
          <p className="putohitaddress">Madhwa, Bangalore</p>
  </div>
  {/* 5rd card */}
  <div className="cookscardsss">
     <img src={cooksImage} alt="" />
     <h3 className="nameofpurohit">Dwarka</h3>
          <p className="putohitaddress">Madhwa, Tumkur</p>
  </div>
  {/* 6rd card */}
  <div className="cookscardsss">
     <img src={cooksImage} alt="" />
     <h3 className="nameofpurohit">Satish</h3>
          <p className="putohitaddress">Madhwa, Tumkur</p>
  </div>
  {/* 7rd card */}
  <div className="cookscardsss">
     <img src={cooksImage} alt="" />
     <h3 className="nameofpurohit">Shrinivas</h3>
          <p className="putohitaddress">Madhwa, Tumkur</p>
  </div>
  {/* 8rd card */}
  <div className="cookscardsss">
     <img src={cooksImage} alt="" />
     <h3 className="nameofpurohit">Suryanayanarao</h3>
          <p className="putohitaddress">Madhwa, Tumkur</p>
  </div>
  {/* 9rd card */}
  <div className="cookscardsss">
     <img src={cooksImage} alt="" />
     <h3 className="nameofpurohit">Guruprasad</h3>
          <p className="putohitaddress">Madhwa, Tumkur</p>
  </div>
  {/* 10rd card */}
  <div className="cookscardsss">
     <img src={cooksImage} alt="" />
     <h3 className="nameofpurohit">Thirumal Rao</h3>
          <p className="putohitaddress">Madhwa, Tumkur</p>
  </div>
  {/* 11rd card */}
  <div className="cookscardsss">
     <img src={cooksImage} alt="" />
     <h3 className="nameofpurohit">Ravi</h3>
          <p className="putohitaddress">Madhwa, Tumkur</p>
  </div>
  {/* 12rd card */}
  <div className="cookscardsss">
     <img src={cooksImage} alt="" />
     <h3 className="nameofpurohit">Umesh</h3>
          <p className="putohitaddress">Madhwa, Tumkur</p>
  </div>
  {/* 13rd card */}
  <div className="cookscardsss">
     <img src={cooksImage} alt="" />
     <h3 className="nameofpurohit">Girish</h3>
          <p className="putohitaddress">Madhwa, Tumkur</p>
  </div>
  {/* 14rd card */}
  <div className="cookscardsss">
     <img src={cooksImage} alt="" />
     <h3 className="nameofpurohit">Suresh</h3>
          <p className="putohitaddress">Madhwa, Tumkur</p>
  </div>
  {/* 15rd card */}
  <div className="cookscardsss">
     <img src={cooksImage} alt="" />
     <h3 className="nameofpurohit">Raghu</h3>
          <p className="putohitaddress">Madhwa, Shimoga</p>
  </div>
  {/* 16rd card */}
  <div className="cookscardsss">
     <img src={cooksImage} alt="" />
     <h3 className="nameofpurohit">Guru Venkatesha Vittala</h3>
          <p className="putohitaddress">Madhwa, Ananthapura</p>
  </div>
  {/* 17rd card */}
  <div className="cookscardsss">
     <img src={cooksImage} alt="" />
     <h3 className="nameofpurohit">Vijayeendra</h3>
          <p className="putohitaddress">Madhwa, Bhadravathi</p>
  </div>
  {/* 18rd card */}
  <div className="cookscardsss">
     <img src={cooksImage} alt="" />
     <h3 className="nameofpurohit">Gopalkrishna</h3>
          <p className="putohitaddress">Madhwa, Ballary</p>
  </div>
  {/* 19rd card */}
  <div className="cookscardsss">
     <img src={cooksImage} alt="" />
     <h3 className="nameofpurohit">Yoga Narasimha</h3>
          <p className="putohitaddress">Madhwa, Bangalore</p>
  </div>
  {/* 20rd card */}
  <div className="cookscardsss">
     <img src={cooksImage} alt="" />
     <h3 className="nameofpurohit">Seetaram</h3>
          <p className="putohitaddress">Madhwa, Bangalore</p>
  </div>
  {/* 21rd card */}
  <div className="cookscardsss">
     <img src={cooksImage} alt="" />
     <h3 className="nameofpurohit">Hayavadan Achar</h3>
          <p className="putohitaddress">Madhwa, Bangalore</p>
  </div>

</div>
                        )}
                      
					</div>
					{/* third container of Purohits */}
					<div className="secondcontainerthirdwala" onClick={openandCloseAstrologyContainer}>
                        {/* first container */}
                        <div className="firstastrologycontainer">
						{astrologyContainer ? (
							<img className="letmedown" src={downArrowImage} alt="" />
						) : (
							<img className="letmedown" src={rightArrowImage} alt="" />
						)}
						<h1 className="purohits">Astrologer</h1>
                        </div>
                        {/* open astrology container */}
                        {astrologyContainer &&(
 <div className="secondcontainerastrologywala">
	{/* first Card  */}
	<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Satyaprasannachar</h3>
									<p className="putohitaddress">Madhwa, Bangalore</p>
								</div>
								{/* second  */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Narasimhachar Kudli</h3>
									<p className="putohitaddress">Madhwa, Bangalore</p>
								</div>
								{/* third  */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Jeeveshachar</h3>
									<p className="putohitaddress">Madhwa, Bangalore</p>
								</div>
								{/* foutrh  */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Srinidhi Achar</h3>
									<p className="putohitaddress">Madhwa, Bangalore</p>
								</div>
								{/* fifth  */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Raghuveerachar</h3>
									<p className="putohitaddress">Madhwa, Bangalore</p>
								</div>
								{/* sixth  */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Aravindachar</h3>
									<p className="putohitaddress">Madhwa, Bangalore</p>
								</div>
								{/*  seventh */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Gundachar</h3>
									<p className="putohitaddress">Madhwa, Bangalore</p>
								</div>
								{/* eight */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Jithamitrachar</h3>
									<p className="putohitaddress">Madhwa, Bangalore</p>
								</div>
								{/* ninth */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Srinivasachar</h3>
									<p className="putohitaddress">Madhwa, Bangalore</p>
								</div>
								{/* 10 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Raghuachar</h3>
									<p className="putohitaddress">Madhwa, Bangalore</p>
								</div>
								{/* 11 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Balasubramaniam</h3>
									<p className="putohitaddress">Smartha, Nanjungud</p>
								</div>
								{/* 12 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Sudharshan Sharma</h3>
									<p className="putohitaddress">Smartha, Chenraypatna</p>
								</div>
								{/* 13 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Hiran Sharma</h3>
									<p className="putohitaddress">Smartha, Chenraypatna</p>
								</div>
								{/* 14 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Harivamshachar</h3>
									<p className="putohitaddress">Madhwa, Bangalore</p>
								</div>
								{/* 15 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Venkatachal H Gudi</h3>
									<p className="putohitaddress">Madhwa, Shiggon, Haveri</p>
								</div>
								{/* 16 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Girish Govindachar Mannari</h3>
									<p className="putohitaddress">Madhwa, Kadakol, Savanur, Haveri</p>
								</div>
								{/* 17 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Kanakachala Achar Odeyar</h3>
									<p className="putohitaddress">Madhwa, Mantralaya</p>
								</div>
								{/* 18 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Pavamanachar(Turahalli)</h3>
									<p className="putohitaddress">Madhwa, Bangalore</p>
								</div>
								{/* 19 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Harinathachar</h3>
									<p className="putohitaddress">Madhwa, Ananthpura AP</p>
								</div>
								{/* 20 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Arun Kumar</h3>
									<p className="putohitaddress">Smartha, Bangalore</p>
								</div>
								{/* 21 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Manjunath</h3>
									<p className="putohitaddress">Smartha, Bangalore</p>
								</div>
								{/* 22 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Chandrashekar</h3>
									<p className="putohitaddress">Smartha, Bangalore</p>
								</div>
								{/* 23 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Srinath L</h3>
									<p className="putohitaddress">Smartha, Bangalore</p>
								</div>
								{/* 24 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Balasubramaniam S</h3>
									<p className="putohitaddress">Smartha, Bangalore</p>
								</div>
								{/* 25 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Vinay S</h3>
									<p className="putohitaddress">Smartha, Bangalore</p>
								</div>
								{/* 26 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Subash Murthy</h3>
									<p className="putohitaddress">Smartha, Bangalore</p>
								</div>
								{/* 27 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Akshay S</h3>
									<p className="putohitaddress">Smartha, Bangalore</p>
								</div>
								{/* 28 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">M V Krishna Kulkarni</h3>
									<p className="putohitaddress">Madhwa, Tumkur</p>
								</div>
								{/* 29 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">M V Paddu</h3>
									<p className="putohitaddress">Madhwa, Tumkur</p>
								</div>
								{/* 30 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">PT Jayateerthachar</h3>
									<p className="putohitaddress">Madhwa, Tumkur</p>
								</div>
								{/* 31 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Uday Simha</h3>
									<p className="putohitaddress">Madhwa, Tumkur</p>
								</div>
								{/* 32 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Venkatesh</h3>
									<p className="putohitaddress">Madhwa, Tumkur</p>
								</div>
								{/* 33 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Venu Madhavachar</h3>
									<p className="putohitaddress">Madhwa, Udupi</p>
								</div>
								{/* 34 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Guru Venkatesha Vittala</h3>
									<p className="putohitaddress">Madhwa, Ananthapura</p>
								</div>

								{/* 35 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Yogeesh Sharma</h3>
									<p className="putohitaddress">Smartha, Bangalore</p>
								</div>
								{/* 36 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Lokesh</h3>
									<p className="putohitaddress">Smartha, Bangalore</p>
								</div>
								{/* 37 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Madhusudhan</h3>
									<p className="putohitaddress">Smartha, Bangalore</p>
								</div>
								{/* 38 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Ramesh Achar</h3>
									<p className="putohitaddress">Madhwa, Bangalore</p>
								</div>
								{/* 39 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Prakash GS</h3>
									<p className="putohitaddress">Smartha, Bangalore</p>
								</div>
								{/* 40 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Bharath</h3>
									<p className="putohitaddress">Smartha, Bangalore</p>
								</div>

								{/* 41 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Rameshachar</h3>
									<p className="putohitaddress">Madhwa, Mandya</p>
								</div>
								{/* 42 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Vedavyasachar</h3>
									<p className="putohitaddress">Madhwa, Udupi</p>
								</div>

								{/* 43 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Rishikeshachar</h3>
									<p className="putohitaddress">Madhwa, Udupi</p>
								</div>
								{/* 44 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Sridhar Vadya</h3>
									<p className="putohitaddress">Smartha, Bangalore</p>
								</div>
								{/* 45 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Ashwath A S</h3>
									<p className="putohitaddress">Smartha, Bangalore</p>
								</div>
								{/* 46 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Ramaswamy K L</h3>
									<p className="putohitaddress">Smartha, Bangalore</p>
								</div>
								{/* 47 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Kambalur Pavamanachar</h3>
									<p className="putohitaddress">Madhwa, Bangalore</p>
								</div>

								{/* 48 */}
								<div className="purohitscards">
									<img src={purohitImage} alt="" />
									<h3 className="nameofpurohit">Pavangiri Sharma</h3>
									<p className="putohitaddress">Smartha, Bangalore</p>
								</div>

</div>
                        )}
                       
					</div>
				</div>
			</div>
		</>
	);
};

export default Profiles;
