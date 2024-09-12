import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import '../src/App.css';
import Footer from './Components/Footer';
import Copyright from './Components/Copyright';
import About from './Components/About';
import Profiles from './Components/Profiles';
import Services from './Components/Services';
import PaurohityaServices from './Components/PaurohityaServices';
import PujasServices from './Components/PujasServices';
import CooksServices from './Components/CooksServices';
import AstrologyServices from './Components/AstrologyServices';
import Aksharabhyasa from './Components/Aksharabhyasa';
import Mundan from './Components/Mundan';
import Namakarna from './Components/Namakarna';
import MUpanayana from './Components/MUpanayana';
import Engagement from './Components/Engagement';
import Wedding from './Components/Wedding';
import ShashtipoorthiShanti from './Components/ShashtipoorthiShanti';
import BhimarathaShanti from './Components/BhimarathaShanti';
import ScrollToTop from './Components/ScrollToTop';
import Gruhapravesha from './Components/Gruhapravesha';
import PitruPaksha from './Components/PitruPaksha';
import Shraddha from './Components/Shraddha';
import UttaraKriyaKarma from './Components/UttaraKriyaKarma';
import SatyanarayanaPuja from './Components/PujasServices/SatyanarayanaPuja';
import LakshmiPuja from './Components/PujasServices/LakshmiPuja';
import OfficePuja from './Components/PujasServices/OfficePuja';
import InhouseCooking from './Components/CookServices/InhouseCooking';
import Catering from './Components/CookServices/Catering';
import OnlineConsultation from './Components/AstrologyServices/OnlineConsultation';
import BookaVisit from './Components/AstrologyServices/BookaVisit';
import RQuestionandAnswer from './Components/AstrologyServices/RQuestionandAnswer';
import NotFoundPage from './Components/NotFoundPage';
import Contact from './Components/Contact';
import Login from './Components/auth/Login';
import Signup from './Components/auth/Signup';
import AuthDialog from './Components/AuthDialog';
import Checkout from './Components/Checkout';
import CheckoutPayLater from './Components/CheckoutPayLater';
import QrCodePage from './Components/QrCodePage';

const App = () => {
	return (
		<BrowserRouter>
			{/* scrool to top when route changes  */}
			<ScrollToTop />
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/profiles" element={<Profiles />} />
				<Route path="/services" element={<Services />} />
				<Route path="/services/paurohitya" element={<PaurohityaServices />} />
				<Route path="/services/pujas" element={<PujasServices />} />
				<Route path="/services/cook" element={<CooksServices />} />
				<Route path="/services/astrology" element={<AstrologyServices />} />
				{/* Purohitya services */}
                
				<Route path="/services/paurohitya/aksharabhyasa" element={<Aksharabhyasa />} />
				<Route path="/services/paurohitya/mundan" element={<Mundan />} />
				<Route path="/services/paurohitya/namakarna" element={<Namakarna />} />
				<Route path="/services/paurohitya/upanayana" element={<MUpanayana />} />
				<Route path="/services/paurohitya/engagement" element={<Engagement />} />
				<Route path="/services/paurohitya/wedding" element={<Wedding />} />
				<Route path="/services/paurohitya/shashtipoorthishanti" element={<ShashtipoorthiShanti />} />
				<Route path="/services/paurohitya/bhimarathashanti" element={<BhimarathaShanti />} />
				<Route path="/services/paurohitya/gruhapravesha" element={<Gruhapravesha />} />
				<Route path="/services/paurohitya/pitrupaksha" element={<PitruPaksha />} />
				<Route path="/services/paurohitya/shraddha" element={<Shraddha />} />
				<Route path="/services/paurohitya/uttarakriyakarma" element={<UttaraKriyaKarma />} />

				{/* pujas route */}
				<Route path="/services/pujas/satyanarayanapuja" element={<SatyanarayanaPuja />} />
				<Route path="/services/pujas/lakshmipuja" element={<LakshmiPuja />} />
				<Route path="/services/pujas/officepuja" element={<OfficePuja />} />
				{/* cooks service */}
				<Route path="/services/cook/inhousecooking" element={<InhouseCooking />} />
				<Route path="/services/cook/catering" element={<Catering />} />
				{/* astrology services */}
				<Route path="/services/astrology/onlineconsultation" element={<OnlineConsultation />} />
				<Route path="/services/astrology/bookavisit" element={<BookaVisit />} />
				<Route path="/services/astrology/qanda" element={<RQuestionandAnswer />} />

				
				<Route path="/contact" element={<Contact />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/auth" element={<AuthDialog />} />
				<Route path="/checkout" element={<Checkout/>}/>
 
					<Route path="/checkout/paylater" element={<CheckoutPayLater />} />
					<Route path="/checkout/qrcode" element={<QrCodePage />} />

        
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
			<Footer />
			<Copyright />
		</BrowserRouter>
	);
};

export default App;
