import './header.css';
import { MdHotel, MdFlightTakeoff, MdAttractions } from 'react-icons/md';
import { AiFillCar } from 'react-icons/ai';
import { BsFillTaxiFrontFill } from 'react-icons/bs';

const Header = () => {
	return (
		<div className="header">
			<div className="headerContainer">
				<div className="headerList">
					<div className="headerListItem active">
						<MdHotel size={25}/>
						<span>Stays</span>
					</div>
					<div className="headerListItem">
						<MdFlightTakeoff size={25}/>
						<span>Flights</span>
					</div>
					<div className="headerListItem">
						<AiFillCar size={20}/>
						<span>Car rentals</span>
					</div>
					<div className="headerListItem">
						<MdAttractions size={30}/>
						<span>Arrractions</span>
					</div>
					<div className="headerListItem">
						<BsFillTaxiFrontFill size={20}/>
						<span>Airport taxis</span>
					</div>
				</div>
				<h1 className="headerTitle">Whole seson discount? It's Genius.</h1>
				<p className="headerDesc">
					Get reworded for your travels and get instant saving of 15% or
					more with a free Hsk.Hotel account
				</p>
				<button className="headerButton">Sign in / Register</button>
			</div>
		</div>
	);
};

export default Header;
