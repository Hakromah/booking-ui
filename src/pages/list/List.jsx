import React, { useState } from 'react';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import './list.css';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchItem/SearchItem';

const List = () => {
	const location = useLocation();

	const [destination] = useState(location.state.destination); //setDestination will be used later
	const [date, setDate] = useState(location.state.date);
	const [openDate, setOpenDate] = useState(false);
	const [options] = useState(location.state.options); //setOptions will be used later

	return (
		<div>
			<Navbar />
			<Header type="list" />
			<div className="listContainer">
				<div className="listWrapper">
					<div className="listSearch">
						<h1 className="listTitle">Search</h1>
						<div className="lsItem">
							<label>Destination</label>
							<input type="text" placeholder={destination} />
						</div>
						{/* date and it table */}
						<div className="lsItem">
							<label>Check-in Date</label>
							<span onClick={() => setOpenDate(!openDate)}>{`${format(
								date[0].startDate,
								'MM/dd/yyyy'
							)} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
							{openDate && (
								<DateRange
									onChange={(item) => setDate([item.selection])}
									minDate={new Date()} //this will hilight all the previus dates
									ranges={date}
								/>
							)}
						</div>
						<div className="lsItem">
							<div className="lsOptions">
								<label className="lsOp">Options</label>
								<div className="lsOptionItem">
									<span className="lsOptionText">
										Min price <small>per night</small>
									</span>
									<input
										min={0}
										type="number"
										className="lsOptionInput"
									/>
								</div>
								<div className="lsOptionItem">
									<span className="lsOptionText">
										Max price <small>per night</small>
									</span>
									<input
										min={0}
										type="number"
										className="lsOptionInput"
									/>
								</div>
								<div className="lsOptionItem">
									<span className="lsOptionText">Adult</span>
									<input
										min={1}
										type="number"
										className="lsOptionInput"
										placeholder={options.adult}
									/>
								</div>
								<div className="lsOptionItem">
									<span className="lsOptionText">Children</span>
									<input
										min={0}
										type="number"
										className="lsOptionInput"
										placeholder={options.children}
									/>
								</div>
								<div className="lsOptionItem">
									<span className="lsOptionText">Room</span>
									<input
										min={1}
										type="number"
										className="lsOptionInput"
										placeholder={options.room}
									/>
								</div>
							</div>
						</div>
						<button>Search</button>
					</div>
					<div className="listResult">
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
						<SearchItem />
					</div>
				</div>
			</div>
		</div>
	);
};

export default List;
