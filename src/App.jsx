import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Components/Home'
import Header from './Components/Header'
import "../src/App.css"
import Footer from './Components/Footer'
import Copyright from './Components/Copyright'
import About from './Components/About'
import Profiles from './Components/Profiles'
import Services from './Components/Services'
import PaurohityaServices from './Components/PaurohityaServices'
import PujasServices from './Components/PujasServices'
import CooksServices from './Components/CooksServices'
import AstrologyServices from './Components/AstrologyServices'
import Aksharabhyasa from './Components/Aksharabhyasa'
import Mundan from './Components/Mundan'
import Namakarna from './Components/Namakarna'
import MUpanayana from './Components/MUpanayana'
import Engagement from './Components/Engagement'
import Wedding from './Components/Wedding'
import ShashtipoorthiShanti from './Components/ShashtipoorthiShanti'
import BhimarathaShanti from './Components/BhimarathaShanti'
import ScrollToTop from './Components/ScrollToTop'
import Gruhapravesha from './Components/Gruhapravesha'
import PitruPaksha from './Components/PitruPaksha'
import Shraddha from './Components/Shraddha'
import UttaraKriyaKarma from './Components/UttaraKriyaKarma'
import SatyanarayanaPuja from './Components/PujasServices/SatyanarayanaPuja'
import LakshmiPuja from './Components/PujasServices/LakshmiPuja'
import OfficePuja from './Components/PujasServices/OfficePuja'
import InhouseCooking from './Components/CookServices/InhouseCooking'
import Catering from './Components/CookServices/Catering'
import OnlineConsultation from './Components/AstrologyServices/OnlineConsultation'
import BookaVisit from './Components/AstrologyServices/BookaVisit'
import RQuestionandAnswer from './Components/AstrologyServices/RQuestionandAnswer'
import NotFoundPage from './Components/NotFoundPage'

const App = () => {
 
     
  return (
    <BrowserRouter>
    {/* scrool to top when route changes  */}
    <ScrollToTop />
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/profiles" element={<Profiles/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/paurohitya" element={<PaurohityaServices/>}/>
        <Route path="/pujas" element={<PujasServices/>}/>
        <Route path="/cook" element={<CooksServices/>}/>
        <Route path="/astrology" element={<AstrologyServices/>}/>
        {/* Purohitya services */}
        <Route path="/aksharabhyasa" element={<Aksharabhyasa/>}/>
        <Route path="/mundan" element={<Mundan/>}/>
        <Route path="/namakarna" element={<Namakarna/>}/>
        <Route path="/upanayana" element={<MUpanayana/>}/>
        <Route path="/engagement" element={<Engagement/>}/>
        <Route path="/wedding" element={<Wedding/>}/>
        <Route path="/shashtipoorthishanti" element={<ShashtipoorthiShanti/>}/>
        <Route path="/bhimarathashanti" element={<BhimarathaShanti/>}/>
        <Route path="/gruhapravesha" element={<Gruhapravesha/>}/>
        <Route path="/pitrupaksha" element={<PitruPaksha/>}/>
        <Route path="/shraddha" element={<Shraddha/>}/>
        <Route path="/uttarakriyakarma" element={<UttaraKriyaKarma/>}/>
        {/* pujas route */}
        <Route path="/satyanarayanapuja" element={<SatyanarayanaPuja/>}/>
        <Route path="/lakshmipuja" element={<LakshmiPuja/>}/>
        <Route path="/officepuja" element={<OfficePuja/>}/>
        {/* cooks service */}
        <Route path="/inhousecooking" element={<InhouseCooking/>}/>
        <Route path="/catering" element={<Catering/>}/>
        {/* astrology services */}
        <Route path="/onlineconsultation" element={<OnlineConsultation/>}/>
        <Route path="/bookavisit" element={<BookaVisit/>}/>
        <Route path="/qanda" element={<RQuestionandAnswer/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
        

        
      </Routes>
      <Footer/>
      <Copyright/>
    </BrowserRouter>
  )
}

export default App