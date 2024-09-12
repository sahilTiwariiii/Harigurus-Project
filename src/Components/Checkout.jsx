// import React from 'react';
import '../styles/Checkout.css';
import dateImage from '../assets/date.svg';
import ticketImage from '../assets/tickmark.svg';
import timeImage from '../assets/time.svg';
import { Link, Outlet } from 'react-router-dom';
import React, { useState } from 'react';
import Select from 'react-select';
const Checkout = () => {
	const [showAndHideChekbox, setShowAndHideChekbox] = useState(false)
	const showAndHideCheckboxFunction=()=>{
		setShowAndHideChekbox(!showAndHideChekbox)
	}
	const options = [
		{ value: 'kumkum', label: 'Kumkum' },
		{ value: 'sandlesticks', label: 'Sandle Sticks,Agara Batti' },
		{ value: 'grape', label: 'Sandle Paste/Gandha' },
		{ value: 'ghee', label: 'Ghee' },
		{ value: 'lavancha', label: 'Lavancha' },
		{ value: 'ninetypes', label: 'Nine type of Groceries/Nava Dhanya' },
		{ value: 'coppervesesls', label: 'Copper Vessel/tambige' },
		{ value: 'coppervessb', label: 'Copper Vessel/Bindige' },
		{ value: 'brassplates', label: 'Brass Plates' },
		{ value: 'brassbowls', label: 'Brass Bowls' },
		{ value: 'homamaterials', label: 'Homa Materials' },
		{ value: 'drythreadbill', label: 'Dry Thread Ball' },
		{ value: 'coppercoins', label: 'Copper Coins & Nails' },
		{ value: 'bec', label: 'Balamuri & Edamuri Conch' },
		{ value: 'kgah', label: 'kachora/Gandha Akshate Holder' },
		{ value: 'ap', label: ' Akshate Powder' },
		{ value: 'tp', label: ' Thritha Powder' },
		{ value: 'gm', label: ' Gow Mutra' },
		{ value: '', label: 'Pooja Broom Stick' },
		{ value: '', label: 'Camphor Stove' },
		{ value: '', label: 'Sankranti Items' },
		{ value: '', label: 'Chalkpiece' },
		{ value: '', label: 'Ananthana Dara/Thread' },
		{ value: '', label: 'Ananthana Vastra/Cloth' },
		{ value: '', label: 'Gomati Chakra' },
		{ value: '', label: 'Lotus Seeds' },
		{ value: '', label: 'Tulasi Beeds Chain' },
		{ value: '', label: 'Pooja Broom Stick' },
		{ value: '', label: 'Market bags' },
		{ value: '', label: 'Napkin' },
		{ value: '', label: 'Sanne Kallu' },
		{ value: '', label: 'White Naama' },
		{ value: '', label: 'Red Naama' },
		{ value: '', label: 'Kavade' },
		{ value: '', label: 'Ajwain Water' },
		{ value: '', label: 'Mudres' },
		{ value: '', label: 'Darbe Hagga' },
		{ value: '', label: 'Navaratana Set' },
		{ value: '', label: 'Bukkittu' },
		{ value: '', label: 'Mud Diyas' },
		{ value: '', label: 'Wedding Peta/Topi' },
		{ value: '', label: 'Umbrella' },
		{ value: '', label: 'Thaali Thread & Chain' },
		{ value: '', label: 'Baagina Items' },
		{ value: '', label: 'Towels' },
		{ value: '', label: 'Rangoli Sticks' },
		{ value: '', label: 'Rangoli Plates' },
		{ value: '', label: 'Agase Seeds' },
		{ value: '', label: 'Anta Vale Kayi' },
		{ value: '', label: 'Jaggery' },
		{ value: '', label: 'Copra' },
		{ value: '', label: 'Plastic Mat' },
		{ value: '', label: 'Darbe Mat' },
		{ value: '', label: 'Darbe' },
		{ value: '', label: 'Marad Jote' },
		{ value: '', label: 'Baasinga' },
		{ value: '', label: 'Calandar' },
		{ value: '', label: 'Brass Brundavana' },
		{ value: '', label: 'Designer Cotton Garland' },
		{ value: '', label: 'Chandra Powder' },
		{ value: '', label: 'Lime Box' },
		{ value: '', label: 'Peacock Feather/Navilu Gari' },
		{ value: '', label: 'Glass Bangles' },
		{ value: '', label: 'Goni Dara' },
		{ value: '', label: 'Edible Camphor/Paccha Karpura' },
		{ value: '', label: 'Nerale Juice' },
		{ value: '', label: 'Tamboola Covers' },
		{ value: '', label: 'Pooja Box' },
		{ value: '', label: 'Ziplock Covers-All Size' },
		{ value: '', label: 'Homa Cloth' },
		{ value: '', label: 'Navgraha Cloth' },
		{ value: '', label: 'Turmeric Sticks' },
		{ value: '', label: 'Sammittu' },
		{ value: '', label: 'Homa Sticks' },
		{ value: '', label: 'Goni Data' },
		{ value: '', label: 'Match Box' },
		{ value: '', label: 'Diye Kolave' },
		{ value: '', label: 'Mehandi Powder' },
		{ value: '', label: 'Baananti Items' },
		{ value: '', label: 'Bale Bicchale' },
		{ value: '', label: 'Dhoopa' },
		{ value: '', label: 'Coffee Cups' },
		{ value: '', label: 'Water Cups' },
		{ value: '', label: 'Paper plates' },
		{ value: '', label: 'Dining Leaf/Mutkada Ele' },
		{ value: '', label: 'Paper Plates' },
		{ value: '', label: 'Ganga Jal' },
		{ value: '', label: 'Panchanga' },
		{ value: '', label: 'Cotton' },
		{ value: '', label: 'Candle' },
		{ value: '', label: 'Gandha Tablet' },
		{ value: '', label: 'White Mustard' },
		{ value: '', label: 'Gopuram Haldi and Kumkum' },
		{ value: '', label: 'Jasmine Oil' },
		{ value: '', label: 'Cinamon Oil' },
		{ value: '', label: 'Dry Fruits' },
		{ value: '', label: 'Sugar Candy/Kallu Sakkare' },
		{ value: '', label: 'Grandige Items' },
		{ value: '', label: 'Ruperi Liquid' },
		{ value: '', label: 'Neem Oil' },
		{ value: '', label: 'Honge Oil' },
		{ value: '', label: 'Neelgiri Oil' },
		{ value: '', label: 'Caster Oil' },
		{ value: '', label: 'Diya Oil' },
		{ value: '', label: 'Pink Salt' },
		{ value: '', label: 'Spatikha' },
		{ value: '', label: 'Sandle Sticks Stand' },
		{ value: '', label: 'Iron frying Bowl' },
		{ value: '', label: 'Pitambari Powder' },
		{ value: '', label: 'Ruperi Liquid' },
		{ value: '', label: 'Small Wooden Stools/Mane' },
		{ value: '', label: 'Donne' },
		{ value: '', label: 'Adike Plates' },
		{ value: '', label: 'Rangoli' },
		{ value: '', label: 'Rangoli Color' },
		{ value: '', label: 'Red Mud/Kemmannu' },
		{ value: '', label: 'Astha Gandha' },
		{ value: '', label: 'Kasturi Turmeric' },
		{ value: '', label: 'Black Sesame' },
		{ value: '', label: 'Bress Diyas' },
		{ value: '', label: 'Bells/Ghante' },
		{ value: '', label: 'Halagarati' },
		{ value: '', label: 'Gejje Vasta' },
		{ value: '', label: 'Hoo Batti' },
		{ value: '', label: 'Mangalarati Batti' },
		{ value: '', label: 'Kaddi Batti' },
		{ value: '', label: 'Garland' },
		{ value: '', label: 'Honey' },
		{ value: '', label: 'Dhoti-9×5, 10×6, 2mtrs' },
		{ value: '', label: 'Madi Dhoti' },
		{ value: '', label: 'Blouse Piece' },
		{ value: '', label: 'Sambrani Powder' },
		{ value: '', label: 'All types of Beetlenut' },
		{ value: '', label: 'Gejje Vastra' },
		{ value: '', label: 'Cow Dung Cake' },
		{ value: '', label: 'Homa Pot' },
		{ value: '', label: 'Wool Thread' },
		{ value: '', label: 'Kankana Thread' },
		{ value: '', label: 'Paddy Aralu' },
	];
	const [ selectedOptions, setSelectedOptions ] = useState([]);

	const handleChange = (selected) => {
		setSelectedOptions(selected);
	};
	const customStyles = {
		// Styling for the select input box (control)
		control: (provided) => ({
			...provided,
			height: 'auto', // Adjust height to fit selected items
			minHeight: '50px', // Minimum height for the input box
			backgroundColor: '#17394F', // Custom background color for the input
			border: '1px solid rgba(255, 255, 255, 0.1)', // Custom border
			boxShadow: 'none', // Removes the default shadow
			display: 'flex', // Use flexbox to manage layout
			flexWrap: 'wrap', // Allow tags to wrap when they exceed the width
			overflow: 'hidden', // Hide overflowing selected options
			'&:hover': {
				border: '1px solid #888' // Custom border on hover
			}
		}),
	
		// Styling for the dropdown menu
		menu: (provided) => ({
			...provided,
			backgroundColor: '#09273C' // Custom background color for the dropdown menu
		}),
	
		// Styling for each option in the dropdown
		option: (provided, state) => ({
			...provided,
			backgroundColor: state.isSelected
				? '#1a485f' // Custom background color when option is selected
				: state.isFocused
					? '#1a485f' // Background color on hover (focused)
					: '#09273C', // Default background color for options
			color: state.isSelected ? '#ffffff' : '#cee1e8', // White text for selected option, light text otherwise
			padding: 10, // Add padding for a better clickable area
			cursor: 'pointer' // Cursor changes to pointer on hover
		}),
	
		// Styling for selected values (tags) in multi-select mode
		multiValue: (provided) => ({
			...provided,
			backgroundColor: '#09273C' // Custom background color for the selected tags
		}),
	
		// Styling for the text inside each selected tag
		multiValueLabel: (provided) => ({
			...provided,
			color: '#cee1e8', // Custom text color inside selected tags
			maxWidth: '100px', // Set a max width to avoid overflow of long labels
			whiteSpace: 'nowrap', // Prevent text wrapping
			overflow: 'hidden', // Hide overflowing text
			textOverflow: 'ellipsis' // Add ellipsis for long text
		}),
	
		// Styling for the remove (x) icon inside selected tags
		multiValueRemove: (provided) => ({
			...provided,
			color: '#0c5460', // Custom color for the "x" icon
			cursor: 'pointer', // Changes cursor to pointer on hover
			':hover': {
				backgroundColor: '#72c3d9', // Custom background color when hovering over "x"
				color: 'white' // Custom text color for "x" on hover
			}
		}),
	
		// Styling for the placeholder text
		placeholder: (provided) => ({
			...provided,
			color: '#cee1e8', // Custom placeholder color
			fontSize: '14px' // Custom font size for the placeholder
		})
	};
	

	return (

		<>
			<div className="checkoutmaincontainerboos">
				{/* first checkout contianer */}
				<div className="checkoutfirstcontainer">
					<h1 className="checkoutheading">Checkout</h1>
					{/* navigation button */}
					<div className="checkoutnavigationbutton">
						<Link to="/" className="checkouthomebutton">
							Home
						</Link>{' '}
						&nbsp; <span className="checkoutbackslashspann">/</span> &nbsp;
						<Link to="/checkout" className="checkoutservicebutton">
							Checkout
						</Link>
					</div>
				</div>

				{/* second chekcut container  */}
				<div className="checkoutsecondmaincontainer">
					<div className="checkoutsecondoutercontainer">
						{/* first div of three buttons */}
						<div className="firstdivofthreebuttonscontainer">
							{/* first button */}
							{/* orangebutton here */}
							<span className="checkoutorangebutton">BILLING DETAILS</span>
							{/* second button */}
							{/* orangebutton here */}
							<span className="checkoutpaymentorangebutton">PAYMENT</span>
							{/* thrid button */}
							{/* orangebutton here */}
							<span className="checkoutdoneorangebutton">DONE</span>
						</div>
						{/* second dib heaidng and proce */}
						<div className="headingandpricebooscontainer">
							<span className="checkoutcontainermainheading">Aksharabhyasa</span>
							<span className="contextpriceee">₹5,500</span>
						</div>
						{/* name phone email pincode address otp */}
						<div className="mainboosnpepao">
							<input className="contextinputstagshmm" type="text" placeholder="Name*" />
							<input className="contextinputstagshmm" type="number" placeholder="Phone*" />
							<input className="contextinputstagshmm" type="email" placeholder="Email*" />
							<input className="contextinputstagshmm" type="number" placeholder="Pincode*" />
							<input className="contextinputstagshmm" type="text" placeholder="Address*" />
							<div className="contextmobilenumber">
								<input placeholder="OTP*" type="text" className="contextgogajoga" />
								<div className="contextgetotpbutton">Get OTP</div>
							</div>
						</div>
						{/* caste and sub cast div */}
						<div className="casteandsubcastmainbooscontainer">
							{/* 1st first div container of 'caste' */}
							<div className="contextcastecontainer">
								<h1 className="casteheading">Caste</h1>
								<select className="selecttagcheckout" name="Brahmin" id="">
									<option className="optionsvalurcheckout" value="">
										Brahmin
									</option>
									<option className="optionsvalurcheckout" value="">
										Non Brahmin
									</option>
								</select>
							</div>
							{/* 2nd second div container of 'sub caste' */}
							<div className="contextsubcastecontainer">
								<h1 className="casteheading">Subcaste</h1>
								<select className="selecttagcheckout" name="Brahmin" id="">
									<option className="optionsvalurcheckout" value="">
										Madhwa
									</option>
									<option className="optionsvalurcheckout" value="">
										Smarata
									</option>
									<option className="optionsvalurcheckout" value="">
										Iyengar
									</option>
									<option className="optionsvalurcheckout" value="">
										Iyerr
									</option>
								</select>
							</div>
						</div>
						{/* date and time div */}
						<div className="contextdateandtimemainbooscontainer">
							{/* first date container */}
							<div className="checkoutdatecontainer">
								<h1 className="contextdateandtimeheading">Date</h1>
								<input placeholder="DD/MM/YYYY" className="checkoutdatemonthyear" type="date" />
								<img className="iconsofdateandtimecontaxt" src={dateImage} alt="" />
							</div>
							{/* second time container */}
							<div className="checkouttimecontainer">
								<h1 className="contextdateandtimeheading">Time</h1>
								<input className="checkoutdatemonthyear" type="time" />
								<img className="iconsofdateandtimecontaxt" src={timeImage} alt="" />
							</div>
						</div>
						{/* service mode and include puja item */}
						<div className="servicemodeandincludepujaitemmaincontext">
							{/* service mode div */}
							<div className="contextservicemodeerr">
								<h1 className="casteheading">Service Mode</h1>
								<select className="selecttagcheckout" name="Brahmin" id="">
									<option className="optionsvalurcheckout" value="">
										Offline
									</option>
									<option className="optionsvalurcheckout" value="">
										Online
									</option>
								</select>
							</div>
							{/* include puja item div */}
							<div className="includepujaitemcontext">
								<h1 className="casteheading">Include Pooja Items</h1>
								<select className="selecttagcheckout" name="Brahmin" id="">
									<option className="optionsvalurcheckout" value="">
										Yes
									</option>
									<option className="optionsvalurcheckout" value="">
										No
									</option>
								</select>
							</div>
						</div>
						{/* second last container 'Add Article' */}
						<div className="contextaddarticle">
							<h1 className="casteheading">Add Articles</h1>
							<Select
								isMulti
								value={selectedOptions}
								onChange={handleChange}
								placeholder="Add Article"
								options={options}
								styles={customStyles} // Apply custom styles
								closeMenuOnSelect={false}
							/>
						</div>
						{/* last container */}
						<div className="lastcontainercheckboxandbutton">
							{/* first chebox div */}
							<div className="checkoutcheckboxbox">
								<span onClick={showAndHideCheckboxFunction} className='contextspanbox'>
									{/* conditionall render the image */}
									{showAndHideChekbox && <img className='checkoutcheckimage' src={ticketImage} alt="" /> }
									
								</span>
								<span className='iagreeto'>I agree to</span>
								<span className="ternandconditons">Terms & Conditions</span>
							</div>
							{/* second button container */}
							<div className="checkoutbuttonscontainertwobuttons">
								{/* first buttons */}
								<Link to='/checkout/paylater' className="checkoutorangebutton">PAY LATER</Link>
								{/* second buttons */}
								<Link to='/checkout/qrcode' className="checkoutorangebutton">PAY NOW</Link>
							</div>
						</div>
					</div>
				</div>
				{/* Outlet for protected routes of Checkout */}
			</div>
		</>
		
	);
};

export default Checkout;
