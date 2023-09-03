import './header.css';
import { useContext, useState } from 'react';
import { MdHotel, MdFlightTakeoff, MdAttractions } from 'react-icons/md';
import { AiFillCar } from 'react-icons/ai';
import { BsFillTaxiFrontFill, BsFillPersonFill } from 'react-icons/bs';
import { FaCalendarAlt } from 'react-icons/fa';
//DATE RANGE LINKS (npm i fns) also was used
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';
import { AuthContext } from '../../context/AuthContext';

const Header = ({ type }) => {
	const [destination, setDestination] = useState('');
	const [openDate, setOpenDate] = useState(false);
	const [dates, setDates] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection',
		},
	]);

	//options selections
	const [openOptions, setOpenOptions] = useState(false);
	const [options, setOptions] = useState({
		adult: 1,
		children: 0,
		room: 1,
	});
	const navigate = useNavigate();
	const { user } = useContext(AuthContext);

	//options counter function
	const handleOpion = (name, operations) => {
		setOptions((prev) => {
			return {
				...prev,
				[name]:
					operations === 'inc' ? options[name] + 1 : options[name] - 1,
			};
		});
	};

	//search click to navigate to list page
	const { dispatch } = useContext(SearchContext);
	const handleSearch = () => {
		dispatch({
			type: 'NEW_SEARCH',
			payload: { destination, dates, options },
		});
		navigate('/hotels', { state: { destination, dates, options } });
	};

	return (
		<div className="header">
			<div
				className={
					type === 'list' ? 'headerContainer listMode' : 'headerContainer'
				}
			>
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
						<span>Attractions</span>
					</div>
					<div className="headerListItem">
						<BsFillTaxiFrontFill size={20} />
						<span>Airport taxis</span>
					</div>
				</div>

				{type !== 'list' && (
					<>
						{' '}
						<h1 className="headerTitle">
							Whole season discount? It's Genius.
						</h1>
						<p className="headerDesc">
							Get reworded for your travels and get instant saving of 15%
							or more with a free Hsk.Hotel account
						</p>
						{!user && (
							<button className="headerButton">
								Sign in / Register
							</button>
						)}
						{/* HEADER SEARCH AREA */}
						<div className="headerSearch">
							<div className="headerSearchItem">
								<MdHotel size={25} className="headerIcon" />
								<input
									type="text"
									placeholder="your destination...?"
									className="headerSearchInput"
									onChange={(e) => setDestination(e.target.value)}
								/>
							</div>
							<div className="headerSearchItem">
								<FaCalendarAlt
									onClick={() => setOpenDate(!openDate)}
									size={25}
									className="headerIcon"
								/>
								<span
									onClick={() => setOpenDate(!openDate)}
									className="headerSearchText"
								>{`${format(
									dates[0].startDate,
									'MM/dd/yyyy'
								)} to ${format(dates[0].endDate, 'MM/dd/yyyy')}`}</span>
								{/* DATE RANGE FROM REACT DATE-RANGE */}
								{openDate && (
									<DateRange
										editableDateInputs={true}
										onChange={(item) => setDates([item.selection])}
										moveRangeOnFirstSelection={false}
										ranges={dates}
										className="date"
										minDate={new Date()}
									/>
								)}
							</div>
							<div className="headerSearchItem">
								<BsFillPersonFill
									onClick={() => setOpenOptions(!openOptions)}
									size={25}
									className="headerIcon"
								/>
								<span
									onClick={() => setOpenOptions(!openOptions)}
									className="headerSearchText"
								>
									{`${options.adult} adult . ${options.children} children . ${options.room} room`}
								</span>
								{openOptions && (
									<div className="options">
										<div className="optionItem">
											<span className="optionText">Adult</span>
											<div className="optionCounter">
												<button
													disabled={options.adult <= 1}
													className="optionCounterButton"
													onClick={() =>
														handleOpion('adult', 'dec')
													}
												>
													-
												</button>
												<span className="optionCounterNumber">
													{options.adult}
												</span>
												<button
													className="optionCounterButton"
													onClick={() =>
														handleOpion('adult', 'inc')
													}
												>
													+
												</button>
											</div>
										</div>
										<div className="optionItem">
											<span className="optionText">Children</span>
											<div className="optionCounter">
												<button
													disabled={options.children <= 0}
													className="optionCounterButton"
													onClick={() =>
														handleOpion('children', 'dec')
													}
												>
													-
												</button>
												<span className="optionCounterNumber">
													{options.children}
												</span>
												<button
													className="optionCounterButton"
													onClick={() =>
														handleOpion('children', 'inc')
													}
												>
													+
												</button>
											</div>
										</div>
										<div className="optionItem">
											<span className="optionText">Room</span>
											<div className="optionCounter">
												<button
													disabled={options.room <= 1}
													className="optionCounterButton"
													onClick={() =>
														handleOpion('room', 'dec')
													}
												>
													-
												</button>
												<span className="optionCounterNumber">
													{options.room}
												</span>
												<button
													className="optionCounterButton"
													onClick={() =>
														handleOpion('room', 'inc')
													}
												>
													+
												</button>
											</div>
										</div>
									</div>
								)}
							</div>
							<div className="headerSearchItem">
								<button className="headerButton" onClick={handleSearch}>
									Search
								</button>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Header;
