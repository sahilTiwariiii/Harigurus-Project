import React from 'react';
import AksharabhyasaImage from '../assets/events/Aksharabhyasa.svg';
import mundanImage from '../assets/events/mundan.svg';
import NamakarnaImage from '../assets/events/Namakarna.svg';
import UpanayanaImage from '../assets/events/Upanayana.svg';
import EngagementImage from '../assets/events/Engagement.svg';
import WeddingImage from '../assets/events/Wedding.svg';
import ShashtipoortiShantiImage from '../assets/events/ShashtipoortiShanti.svg';
import BhimarathashanthiImage from '../assets/events/Bhimarathashanthi.svg';
import '../styles/CardComponent.css';
import { Link } from 'react-router-dom';
const CardComponent = () => {
	return (
		<>
			<div className="datacardcomponent">
				<div className="particulardatacardcard">
					<img className="imageimageimagess" src={AksharabhyasaImage} alt="" />
				</div>
				<h2 className="headingheading">Aksharabhyasa</h2>
				<div className="cardcomponentorangelineinthis"></div>
				<p className="paragraphofcardcomponent">
					Start your child’s formal education with goddess Saraswati’s blessings.
				</p>
				<Link className="readmorecardcomponent">Read More</Link>
			</div>
			<div className="datacardcomponent">
				<div className="particulardatacardcard">
					<img className="imageimageimagess" src={mundanImage} alt="" />
				</div>
				<h2 className="headingheading">Mundan</h2>
				<div className="cardcomponentorangelineinthis"></div>
				<p className="paragraphofcardcomponent">
					Cleansing your child’s soul of the past karma as it begins the journey through life.
				</p>
				<Link className="readmorecardcomponent">Read More</Link>
			</div>
			<div className="datacardcomponent">
				<div className="particulardatacardcard">
					<img className="imageimageimagess" src={NamakarnaImage} alt="" />
				</div>
				<h2 className="headingheading">Namakarna</h2>
				<div className="cardcomponentorangelineinthis"></div>
				<p className="paragraphofcardcomponent">
					Give your child the name blessed by the divine, as they go ahead to forge their destiny.
				</p>
				<Link className="readmorecardcomponent">Read More</Link>
			</div>

			<div className="datacardcomponent">
				<div className="particulardatacardcard">
					<img className="imageimageimagess" src={UpanayanaImage} alt="" />
				</div>
				<h2 className="headingheading">Upanayana</h2>
				<div className="cardcomponentorangelineinthis"></div>
				<p className="paragraphofcardcomponent">
					Introduce your child to spirituality and the way of life as they enter adolescence.
				</p>
				<Link className="readmorecardcomponent">Read More</Link>
			</div>

			<div className="datacardcomponent">
				<div className="particulardatacardcard">
					<img className="imageimageimagess" src={EngagementImage} alt="" />
				</div>
				<h2 className="headingheading">Engagement</h2>
				<div className="cardcomponentorangelineinthis"></div>
				<p className="paragraphofcardcomponent">
					Enable the bride’s and the groom’s consensual commitment to marriage under the guidance of
					well-versed purohits.
				</p>
				<Link className="readmorecardcomponent">Read More</Link>
			</div>
			<div className="datacardcomponent">
				<div className="particulardatacardcard">
					<img className="imageimageimagess" src={WeddingImage} alt="" />
				</div>
				<h2 className="headingheading">Wedding</h2>
				<div className="cardcomponentorangelineinthis"></div>
				<p className="paragraphofcardcomponent">
					Perform the wedding of your dear ones with all the key vedic rituals by experienced purohits.
				</p>
				<Link className="readmorecardcomponent">Read More</Link>
			</div>
			<div className="datacardcomponent">
				<div className="particulardatacardcard">
					<img className="imageimageimagess" src={ShashtipoortiShantiImage} alt="" />
				</div>
				<h2 className="headingheading">Shashtipoorthi</h2>
				<div className="cardcomponentorangelineinthis"></div>
				<p className="paragraphofcardcomponent">
					Mark the completion of 60 fruitful years by renewing marriage vows along with divine blessings of a
					healthy, long life..
				</p>
				<Link className="readmorecardcomponent">Read More</Link>
			</div>
			<div className="datacardcomponent">
				<div className="particulardatacardcard">
					<img className="imageimageimagess" src={BhimarathashanthiImage} alt="" />
				</div>
				<h2 className="headingheading">Bhimaratha Shanti</h2>
				<div className="cardcomponentorangelineinthis"></div>
				<p className="paragraphofcardcomponent">
					Celebrate the 70th birthday while seeking the blessings of health, happiness and long life.
				</p>
				<Link className="readmorecardcomponent">Read More</Link>
			</div>
		</>
	);
};

export default CardComponent;
