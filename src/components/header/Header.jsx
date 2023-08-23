import './header.css';
import { MdHotel, MdFlightTakeoff, MdAttractions } from 'react-icons/md';
import { AiFillCar } from 'react-icons/ai';
import { BsFillTaxiFrontFill, BsFillPersonFill } from 'react-icons/bs';
import { FaCalendarAlt } from 'react-icons/fa';

const Header = () => {
	return (
		<div className="header">
			<div className="headerContainer">
				<div className="headerList">
					<div className="headerListItem active">
						<MdHotel size={25} />
						<span>Stays</span>
					</div>
					<div className="headerListItem">
						<MdFlightTakeoff size={25} />
						<span>Flights</span>
					</div>
					<div className="headerListItem">
						<AiFillCar size={20} />
						<span>Car rentals</span>
					</div>
					<div className="headerListItem">
						<MdAttractions size={30} />
						<span>Arrractions</span>
					</div>
					<div className="headerListItem">
						<BsFillTaxiFrontFill size={20} />
						<span>Airport taxis</span>
					</div>
				</div>
				<h1 className="headerTitle">Whole seson discount? It's Genius.</h1>
				<p className="headerDesc">
					Get reworded for your travels and get instant saving of 15% or
					more with a free Hsk.Hotel account
				</p>
				<button className="headerButton">Sign in / Register</button>
				{/* HEADER SEARCH AREA */}
				<div className="headerSearch">
					<div className="headerSearchItem">
						<MdHotel size={25} className="headerIcon" />
						<input
							type="text"
							placeholder="your destination...?"
							className="headerSearchInput"
						/>
					</div>
					<div className="headerSearchItem">
						<FaCalendarAlt size={25} className="headerIcon" />
						<span className="headerSearchText">date to date</span>
					</div>
					<div className="headerSearchItem">
						<BsFillPersonFill size={25} className="headerIcon" />
						<span className="headerSearchText">
							2 adults 2 children 1 room
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
