import React, { useState } from 'react';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import './list.css';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchItem/SearchItem';
import useFetch from '../../hooks/useFetch';

const List = () => {
	const location = useLocation();

	const [destination, setDestination] = useState(location.state.destination); //setDestination will be used later
	const [dates, setDates] = useState(location.state.dates);
	const [openDate, setOpenDate] = useState(false);
	const [options] = useState(location.state.options); //setOptions will be used later
	const [min, setMin] = useState(undefined);
	const [max, setMax] = useState(undefined);
	const { data, loading, reFetch } = useFetch(
		`/hotels?city=${destination.toLowerCase()}&min=${min || 0}&max=${
			max || 999
		}`
	);

	//search buuton click
	const handleSearch = () => {
		reFetch();
	};
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
							<input
								type="text"
								placeholder={destination}
								onChange={(e) => setDestination(e.target.value)}
							/>
						</div>
						{/* dates and it table */}
						<div className="lsItem">
							<label>Check-in Date</label>
							<span onClick={() => setOpenDate(!openDate)}>{`${format(
								dates[0].startDate,
								'MM/dd/yyyy'
							)} to ${format(dates[0].endDate, 'MM/dd/yyyy')}`}</span>
							{openDate && (
								<DateRange
									onChange={(item) => setDates([item.selection])}
									minDate={new Date()} //this will hilight all the previus dates
									ranges={dates}
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
										type="number"
										className="lsOptionInput"
										onChange={(e) => setMin(e.target.value)}
										placeholder="min"
									/>
								</div>
								<div className="lsOptionItem">
									<span className="lsOptionText">
										Max price <small>per night</small>
									</span>
									<input
										onChange={(e) => setMax(e.target.value)}
										type="number"
										className="lsOptionInput"
										placeholder="max"
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
						<button onClick={handleSearch}>Search</button>
					</div>
					<div className="listResult">
						{loading ? (
							'loading plese wait...'
						) : (
							<>
								{data?.map((item) => (
									<SearchItem item={item} key={item._id} />
								))}
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default List;
