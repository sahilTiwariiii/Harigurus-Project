import React, { useState } from 'react'
import "../styles/PaurohityaServices.css"
import { Link } from 'react-router-dom'
import AksharabhyasImage from '../assets/Aksharabhyasa.jpg';
import mundanImage from '../assets/Mundan.jpg';
import NamakaranaImage from '../assets/Namakarana.jpg';
import UpanayanaImage from '../assets/Upanayana.jpg';
import EngagementImage from '../assets/Engagement.jpg';
import weddingImage from '../assets/Wedding.jpg';
import SastiapoorthiImage from '../assets/Sastiapoorthi.jpeg';
import BhimarathiImage from '../assets/Bhimarathi.jpeg';
import GruhapraveshaImage from '../assets/Gruhapravesha.jpg';
import PitruPakshaImage from '../assets/PitruPaksha.jpg';
import ShraddhaImage from '../assets/Shraddha.jpg';
import UttaraKriyaKarmaImage from '../assets/UttaraKriyaKarma.jpg';
const PaurohityaServices = () => {
    const [showMoreAndLessAksDescription, setshowMoreAndLessAksDescription] = useState(false)
    const [showMoreAndlessMundan, setShowMoreAndlessMundan] = useState(false)
    const [showMoreAndLessNamakarna, setShowMoreAndLessNamakarna] = useState(false)
    const [showMoreAndLessUpanayana, setShowMoreAndLessUpanayana] = useState(false)
    const [showMoreAndLessEngagement, setShowMoreAndLessEngagement] = useState(false)
    const [showMoreAndlessWedding, setShowMoreAndWedding] = useState(false)
    const [showMoreAndlessShashtipoorthi, setShowMoreAndlessShashtipoorthi] = useState(false)
    const [showMoreAndLessBhimaratha, setShowMoreAndLessBhimaratha] = useState(false)
    const [showMoreAndLessGruhapravesha, setShowMoreAndLessGruhapravesha] = useState(false)
    const [showMoreAndLessPitruPaksha, setShowMoreAndLessPitruPaksha] = useState(false)
    const [showMoreAndLessShraddha, setShowMoreAndLessShraddha] = useState(false)
    const [showMoreAndLessUttaraKriyaKarma, setShowMoreAndLessUttaraKriyaKarma] = useState(false)

     // Akshayasha full  description
     const AksharabhyasaFullDescription="A ritual marking the beginning of a child’s formal education, Aksharabhyasa seeks the blessings of Saraswati – the goddess of knowledge, art, wisdom, and learning, on the child. During this ceremony, the child is introduced to the world of letters, often writing."
     // Akshaya less description
     const AksharabhyasalessDescription=AksharabhyasaFullDescription.slice(0,70)+"..."
     // mundan full description
     const mundanFullDescription="It is an auspicious ritual where the child’s hair is shaved for the first time to cleanse its soul of all the sins from past birth. Rooted in the belief that the eternal atman (soul) seeks rebirth until salvation, Mundan signifies a fresh start of a new life."
 // mundan less description
  const mundanlessDescription=mundanFullDescription.slice(0,70)+"..."
 
     // Namakarna full description
     const namakarnaFullDescription="Another important ritual, Namakarana is a ceremony in which the newborn is given an identity and introduced to the world. The name is carefully chosen based on the nakshatras and in accordance with the lineage of the family to which the child is born"
     // Namakarna less container
     const namakarnalessDescription=namakarnaFullDescription.slice(0,70)+"..."
     // astrology full description
     const upanayanaFullDescription="A sacred ritual that marks the beginning of an adolescent’s spiritual journey, the Upanayana ceremony is accompanied by recital of Gayatri mantra in the presence of a guru and concludes with the child offering guru dakshina.The ceremony also involves the wearing of the sacred thread, symbolizing the initiation into spiritual education."

     const upanayanalessDescription=upanayanaFullDescription.slice(0,70)+"..."
     
    //  Engagement
    const engagementFullDescription="A prelude to wedding, the engagement ceremony signifies a formal commitment by the prospective bride and the groom, in the presence of their parents, to marry each other. It is conducted by invoking the blessings of gods, exchange of gifts and choosing an auspicious day for the wedding under the guidance of a learned purohit."

    const engagementlessDescription=engagementFullDescription.slice(0,70)+"..."

//    Wedding
    const weddingFullDescription="A Hindu wedding is not just a grand celebration but a combination of various rituals and poojas performed in a particular order. Each ritual has its own significance, and the ceremony culminates with the bride and the groom exchanging vows over seven sacred steps (Saptapadi) in front of Agni as witness."

    const weddinglessDescription=weddingFullDescription.slice(0,70)+"..."
    // Shashtipoorthi
    const ShashtipoorthiFullDescription="The Shashtipoorthi Shanti is a ritual conducted when a Hindu male attains the age of 60. The ceremony marks the preparation of a person to the impending old age and seeks the blessing of gods to bestow good health and a long life. In this ceremony, the couple also renew their wedding vows, committing to stand by each other during this new phase of life."

     const shashtipoorthilessDescription=ShashtipoorthiFullDescription.slice(0,70)+"..."
    //  bhimaratha
     const bhimarathaFullDescription="A ceremony that marks the husband in married relationship reaching the age of 70, Bhima Ratha Shanti brings all the family members together to conduct a series of poojas and homas to seek divine blessings for a long, healthy and happy marital life ahead. The ceremony cleanses the person of any bad karma or sins committed during the lifetime."
       const bhimarathalessDescription=bhimarathaFullDescription.slice(0,70)+"..."
    //  Gruhapravesha
       const GruhapraveshaFullDescription="A cleansing ritual conducted whenever someone moves to a new house, Gruhapravesha involves a series of poojas performed on an auspicious day to cleanse the dwelling of any negative energy and seek the blessings of good fortune, love, happiness, and fulfilment from the deities.sanctification of the new home."

       const GruhapraveshalessDescription=GruhapraveshaFullDescription.slice(0,70)+"..."
    //    PitruPaksha
       const pitruPakshaFullDescription="Observed over a fortnight during the Mahalaya lunar phase, Pitru Paksha is considered a period when the ancestors visit their descendants. During this period, poojas and shraddha are performed as an act of remembrance and thanksgiving for their influence and blessings bestowed upon the present and future generations."
        const pitruPakshalessDescription=pitruPakshaFullDescription.slice(0,70)+"..."
       
        const ShraddhaFullDescription="A ceremony of remembrance and offerings to the departed family members, Shraddha is performed to bring peace to their souls. The rituals are carried out every year, preferably on the day their soul departed from earth as per the lunar calendar. The poojas are accompanied by an offering of food to appease their soul and receive blessings in return."
        const ShraddhalessDescription=ShraddhaFullDescription.slice(0,70)+"..."
    //    UttaraKriyaKarma
    const UttaraKriyaKarmaFullDescription="A set of rituals performed over a period of 14 days following a person’s demise. Starting with the preparation for cremation, the rituals address various processes that need to be fulfilled in order for the deceased’s soul to attain peace. These vedic rituals also help the bereaved cope with the loss of their dear ones. "
    const UttaraKriyaKarmalessDescription=UttaraKriyaKarmaFullDescription.slice(0,70)+"..."


//  Aksharbhasaya
     const showlessandmoreAkshContainer=()=>{
         // setshowMoreAndLessPurohitya((prev) => !prev);
         setshowMoreAndLessAksDescription(!showMoreAndLessAksDescription)
     }
    //  Mundan
     const showmoreandlessfunctionMundan=()=>{
        setShowMoreAndlessMundan(!showMoreAndlessMundan)
     }
    //  Namkarna
     const shwomoreandlessrfunctionNamkarna=()=>{
        setShowMoreAndLessNamakarna(!showMoreAndLessNamakarna)
     }
    //  Upanayana
     const showlessandmorefunctionUpanayana=()=>{
        setShowMoreAndLessUpanayana(!showMoreAndLessUpanayana)
     }
    //  Engagement
     const showlessandmorefunctionEngagement=()=>{
        setShowMoreAndLessEngagement(!showMoreAndLessEngagement)
     }
    //  Wedding
    const showlessandmorefunctionWedding=()=>{
        setShowMoreAndWedding(!showMoreAndlessWedding)
    }
    // shashtipoorthi
    const showmoreandlessfunctionShashtipoorthi=()=>{
        setShowMoreAndlessShashtipoorthi(!showMoreAndlessShashtipoorthi)
    }
    // Bhimaratha
    const showmoreandlessfunctionBhimaratha=()=>{
        setShowMoreAndLessBhimaratha(!showMoreAndLessBhimaratha)
    }
    // Gruhapravesha
    const showmoreandlessfunctionGruhapravesha=()=>{
        setShowMoreAndLessGruhapravesha(!showMoreAndLessGruhapravesha)
    }
    // Pitru Paksha
    const showmoreandlessfunctionPitruPaksha=()=>{
        setShowMoreAndLessPitruPaksha(!showMoreAndLessPitruPaksha)
    }
    // Shraddha
    const showmoreandlessfunctionShraddha=()=>{
        setShowMoreAndLessShraddha(!showMoreAndLessShraddha)
    }
    // Uttara Kriya Karma
    const showmoreandlessfunctionUttaraKriyaKarma=()=>{
        setShowMoreAndLessUttaraKriyaKarma(!showMoreAndLessUttaraKriyaKarma)
    }
  return (
    <>
    <div className="paurohityaservicesmaincontainer">
        {/* first Paurohitya Services container */}

        <div className="insidepurphityafirstcontainer">
					<h1 className="inpurohityaarheading">Paurohitya Services</h1>
					{/* navigation button */}
					<div className="purohityaaanavigationbutton">
						<Link to="/" className="inpurohityahomebutton">
							Home
						</Link>{' '}
						&nbsp; <span className="purohityabackslashspann">/</span> &nbsp;
						<Link to="/services" className="inpuropurohhbutton">
							Services
						</Link>{' '}
                        &nbsp;  <span className="purohityabackslashspann">/</span> &nbsp;
						<Link to="/paurohitya" className="inpuropurohhbutton">
                        Paurohitya
						</Link>
					</div>
				</div>

                {/* second Purohitya Services Container */}
                <div className="purohityasecondcontianer">
                    <div className="purohityaoutercontainer">

                    
					{/* first card Purohitya */}
                    {/* Aksharbhaya card <Link to='/services/paurohitya'> */}
                    <Link to='/aksharabhyasa'>
					<div className="purohityhaallcard">
                        {/* image container */}
                        <div className="purohityhaimagecontianer">

                       
						<img className="purohathiyaimages" src={AksharabhyasImage} alt="" />
                        </div>
                        {/* orangebutton here */}
                        <span className='seeallpurohityhaorangebutton'>BOOK NOW</span>
                        {/* second paragraph contianer */}
                        <div className="purohithyaafdetailscontainer">

                       
						<h3 className="nameofpurohityaservice">Aksharabhyasa</h3>
						<p className="putohitservicesaddress">{showMoreAndLessAksDescription?AksharabhyasaFullDescription:AksharabhyasalessDescription} 

                            <span onClick={showlessandmoreAkshContainer} className="showmoreepurohitya">{showMoreAndLessAksDescription?"Show Less":"Show More"}</span>
                            
                            </p>
                       
                        </div>
					</div>
                    </Link>
                    {/* </Link> */}
					{/* Mundan card second card */}
                    <Link to='/mundan'>
					<div className="purohityhaallcard">
                        {/* image container */}
                        <div className="purohityhaimagecontianer">

                       
						<img className="purohathiyaimages" src={mundanImage} alt="" />
                        </div>
                        {/* orangebutton here */}
                        <span className='seeallpurohityhaorangebutton'>BOOK NOW</span>
                        {/* second paragraph contianer */}
                        <div className="purohithyaafdetailscontainer">

                       
						<h3 className="nameofpurohityaservice">Mundan</h3>
						<p className="putohitservicesaddress">{showMoreAndlessMundan?mundanFullDescription:mundanlessDescription} 

                            <span onClick={showmoreandlessfunctionMundan} className="showmoreepurohitya">{showMoreAndlessMundan?"Show Less":"Show More"}</span>
                            
                            </p>
                       
                        </div>
					</div>
                    </Link>
					{/* third card Cook */}
                    {/* Namakarna Card */}
                    <Link to='/namakarna'>
					<div className="purohityhaallcard">
                        {/* image container */}
                        <div className="purohityhaimagecontianer">

                       
						<img className="purohathiyaimages" src={NamakaranaImage} alt="" />
                        </div>
                        {/* orangebutton here */}
                        <span className='seeallpurohityhaorangebutton'>BOOK NOW</span>
                        {/* second paragraph contianer */}
                        <div className="purohithyaafdetailscontainer">

                       
						<h3 className="nameofpurohityaservice">Namakarna</h3>
						<p className="putohitservicesaddress">{showMoreAndLessNamakarna?namakarnaFullDescription:namakarnalessDescription} 

                            <span onClick={shwomoreandlessrfunctionNamkarna} className="showmoreepurohitya">{showMoreAndLessNamakarna?"Show Less":"Show More"}</span>
                            
                            </p>
                       
                        </div>
					</div>
                    </Link>
					{/* fourth card Astrology */}
                    {/* Upanayana */}
                    <Link to='/upanayana'>
                    <div className="purohityhaallcard">
                        {/* image container */}
                        <div className="purohityhaimagecontianer">

                       
						<img className="purohathiyaimages" src={UpanayanaImage} alt="" />
                        </div>
                        {/* orangebutton here */}
                        <span className='seeallpurohityhaorangebutton'>BOOK NOW</span>
                        {/* second paragraph contianer */}
                        <div className="purohithyaafdetailscontainer">

                       
						<h3 className="nameofpurohityaservice">Upanayana</h3>
						<p className="putohitservicesaddress">{showMoreAndLessUpanayana?upanayanaFullDescription:upanayanalessDescription} 

                            <span onClick={showlessandmorefunctionUpanayana} className="showmoreepurohitya">{showMoreAndLessUpanayana?"Show Less":"Show More"}</span>
                            
                            </p>
                       
                        </div>
					</div>
                    </Link>
					{/* 5 card Astrology */}
                    {/* Engagement */}
                    <Link to='/engagement'>
                    <div className="purohityhaallcard">
                        {/* image container */}
                        <div className="purohityhaimagecontianer">

                       
						<img className="purohathiyaimages" src={EngagementImage} alt="" />
                        </div>
                        {/* orangebutton here */}
                        <span className='seeallpurohityhaorangebutton'>BOOK NOW</span>
                        {/* second paragraph contianer */}
                        <div className="purohithyaafdetailscontainer">

                       
						<h3 className="nameofpurohityaservice">Engagement</h3>
						<p className="putohitservicesaddress">{showMoreAndLessEngagement?engagementFullDescription:engagementlessDescription} 

                            <span onClick={showlessandmorefunctionEngagement} className="showmoreepurohitya">{showMoreAndLessEngagement?"Show Less":"Show More"}</span>
                            
                            </p>
                       
                        </div>
					</div>
                    </Link>
                    {/* 6 card Astrology */}
                    {/* Wedding  */}
                    <Link to='/wedding'>
                    <div className="purohityhaallcard">
                        {/* image container */}
                        <div className="purohityhaimagecontianer">

                       
						<img className="purohathiyaimages" src={weddingImage} alt="" />
                        </div>
                        {/* orangebutton here */}
                        <span className='seeallpurohityhaorangebutton'>BOOK NOW</span>
                        {/* second paragraph contianer */}
                        <div className="purohithyaafdetailscontainer">

                       
						<h3 className="nameofpurohityaservice">Wedding</h3>
						<p className="putohitservicesaddress">{showMoreAndlessWedding?weddingFullDescription:weddinglessDescription} 

                            <span onClick={showlessandmorefunctionWedding} className="showmoreepurohitya">{showMoreAndlessWedding?"Show Less":"Show More"}</span>
                            
                            </p>
                       
                        </div>
					</div>
                    </Link>
                     {/* 7 card Astrology */}
                    {/* Shashtipoorthi Shanti */}
                    <Link to='/shashtipoorthishanti'>
                    <div className="purohityhaallcard">
                        {/* image container */}
                        <div className="purohityhaimagecontianer">

                       
						<img className="purohathiyaimages" src={SastiapoorthiImage} alt="" />
                        </div>
                        {/* orangebutton here */}
                        <span className='seeallpurohityhaorangebutton'>BOOK NOW</span>
                        {/* second paragraph contianer */}
                        <div className="purohithyaafdetailscontainer">

                       
						<h3 className="nameofpurohityaservice">Shashtipoorthi Shanti</h3>
						<p className="putohitservicesaddress">{showMoreAndlessShashtipoorthi?ShashtipoorthiFullDescription:shashtipoorthilessDescription} 

                            <span onClick={showmoreandlessfunctionShashtipoorthi} className="showmoreepurohitya">{showMoreAndlessShashtipoorthi?"Show Less":"Show More"}</span>
                            
                            </p>
                       
                        </div>
					</div>
                    </Link>
                     {/* 8 card Astrology */}
                    {/* Bhimaratha Shanti */}
                    <Link to='/bhimarathashanti'>
                    <div className="purohityhaallcard">
                        {/* image container */}
                        <div className="purohityhaimagecontianer">

                       
						<img className="purohathiyaimages" src={BhimarathiImage} alt="" />
                        </div>
                        {/* orangebutton here */}
                        <span className='seeallpurohityhaorangebutton'>BOOK NOW</span>
                        {/* second paragraph contianer */}
                        <div className="purohithyaafdetailscontainer">

                       
						<h3 className="nameofpurohityaservice">Bhimaratha Shanti</h3>
						<p className="putohitservicesaddress">{showMoreAndLessBhimaratha?bhimarathaFullDescription:bhimarathalessDescription} 

                            <span onClick={showmoreandlessfunctionBhimaratha} className="showmoreepurohitya">{showMoreAndLessBhimaratha?"Show Less":"Show More"}</span>
                            
                            </p>
                       
                        </div>
					</div>
                    </Link>
                    {/* 9 card Astrology */}
                    {/* Gruhapravesha */}
                    <Link to='/gruhapravesha'>
                    <div className="purohityhaallcard">
                        {/* image container */}
                        <div className="purohityhaimagecontianer">

                       
						<img className="purohathiyaimages" src={GruhapraveshaImage} alt="" />
                        </div>
                        {/* orangebutton here */}
                        <span className='seeallpurohityhaorangebutton'>BOOK NOW</span>
                        {/* second paragraph contianer */}
                        <div className="purohithyaafdetailscontainer">

                       
						<h3 className="nameofpurohityaservice">Gruhapravesha</h3>
						<p className="putohitservicesaddress">{showMoreAndLessGruhapravesha?GruhapraveshaFullDescription:GruhapraveshalessDescription} 

                            <span onClick={showmoreandlessfunctionGruhapravesha} className="showmoreepurohitya">{showMoreAndLessGruhapravesha?"Show Less":"Show More"}</span>
                            
                            </p>
                       
                        </div>
					</div>
                    </Link>
                     {/* 10 card Astrology */}
                    {/* Pitru Paksha */}
                    <Link to='/pitrupaksha'>
                    <div className="purohityhaallcard">
                        {/* image container */}
                        <div className="purohityhaimagecontianer">

                       
						<img className="purohathiyaimages" src={PitruPakshaImage} alt="" />
                        </div>
                        {/* orangebutton here */}
                        <span className='seeallpurohityhaorangebutton'>BOOK NOW</span>
                        {/* second paragraph contianer */}
                        <div className="purohithyaafdetailscontainer">

                       
						<h3 className="nameofpurohityaservice">Pitru Paksha </h3>
						<p className="putohitservicesaddress">{showMoreAndLessPitruPaksha?pitruPakshaFullDescription:pitruPakshalessDescription} 

                            <span onClick={showmoreandlessfunctionPitruPaksha} className="showmoreepurohitya">{showMoreAndLessPitruPaksha?"Show Less":"Show More"}</span>
                            
                            </p>
                       
                        </div>
					</div>
                    </Link>
                      {/* 11 card Astrology */}
                    {/* Shraddha */}
                    <Link to='/shraddha'>
                    <div className="purohityhaallcard">
                        {/* image container */}
                        <div className="purohityhaimagecontianer">

                       
						<img className="purohathiyaimages" src={ShraddhaImage} alt="" />
                        </div>
                        {/* orangebutton here */}
                        <span className='seeallpurohityhaorangebutton'>BOOK NOW</span>
                        {/* second paragraph contianer */}
                        <div className="purohithyaafdetailscontainer">

                       
						<h3 className="nameofpurohityaservice">Shraddha</h3>
						<p className="putohitservicesaddress">{showMoreAndLessShraddha?ShraddhaFullDescription:ShraddhalessDescription} 

                            <span onClick={showmoreandlessfunctionShraddha} className="showmoreepurohitya">{showMoreAndLessShraddha?"Show Less":"Show More"}</span>
                            
                            </p>
                       
                        </div>
					</div>
                    </Link>
                     {/* 12 card Astrology */}
                    {/* Uttara Kriya Karma */}
                    <Link to='/uttarakriyakarma'>
                    <div className="purohityhaallcard">
                        {/* image container */}
                        <div className="purohityhaimagecontianer">

                       
						<img className="purohathiyaimages" src={UttaraKriyaKarmaImage} alt="" />
                        </div>
                        {/* orangebutton here */}
                        <span className='seeallpurohityhaorangebutton'>BOOK NOW</span>
                        {/* second paragraph contianer */}
                        <div className="purohithyaafdetailscontainer">

                       
						<h3 className="nameofpurohityaservice">Uttara Kriya Karma</h3>
						<p className="putohitservicesaddress">{showMoreAndLessUttaraKriyaKarma?UttaraKriyaKarmaFullDescription:UttaraKriyaKarmalessDescription} 

                            <span onClick={showmoreandlessfunctionUttaraKriyaKarma} className="showmoreepurohitya">{showMoreAndLessUttaraKriyaKarma?"Show Less":"Show More"}</span>
                            
                            </p>
                       
                        </div>
					</div>
                    </Link>
                    </div>
				</div>
    </div>
    </>
  )
}

export default PaurohityaServices