import { useContext, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import './reserve.css';
import { IoMdCloseCircle } from 'react-icons/io';
import { SearchContext } from '../../context/SearchContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Reserve = ({ setOpen, hotelId }) => {
	const [selectedRooms, setSelectedRooms] = useState([]);
	const { data } = useFetch(`/hotels/room/${hotelId}`);
	const { dates } = useContext(SearchContext);

	const getDatesInRange = (startDate, endDate) => {
		const start = new Date(startDate);
		const end = new Date(endDate);

		const date = new Date(start.getTime());
		const dates = [];

		while (date <= end) {
			dates.push(new Date(date).getTime());
			date.setDate(date.getDate() + 1);
		}
		return dates;
	};

	const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

	const isAvailable = (roomNumber) => {
		const isFound = roomNumber.unavailableDates.some((date) =>
			alldates.includes(new Date(date).getTime())
		);

		return !isFound;
	};

	const handleSelect = (e) => {
		const checked = e.target.checked;
		const value = e.target.value;
		setSelectedRooms(
			checked
				? [...selectedRooms, value]
				: selectedRooms.filter((item) => item !== value)
		);
	};
	const navigate = useNavigate();
	const handleClick = async () => {
		try {
			await Promise.all(
				selectedRooms.map((roomId) => {
					const res = axios.put(`/rooms/availability/${roomId}`, {
						dates: alldates,
					});
					return res.data;
				})
			);
			setOpen(false);
			navigate('/');
		} catch (error) {}
	};

	return (
		<div className="reserve">
			<div className="rContainer">
				<IoMdCloseCircle
					size={30}
					className="closeRoom"
					onClick={() => setOpen(false)}
				/>
				<span>Select your rooms:</span>
				{data?.map((item) => (
					<div className="rItem" key={item._id}>
						<div className="rItemInfo">
							<div className="rTitle">{item.title}</div>
							<div className="rDesc">{item.desc}</div>
							<div className="rMax">
								Max people: <b>{item.maxPeople}</b>
							</div>
							<div className="rPrice">
								Price: <b>{item.price}</b>
							</div>
						</div>
						<div className="rSelectRoom">
							{item?.roomNumbers.map((roomNumber) => (
								<div className="rRoom" key={roomNumber._id}>
									<label>{roomNumber.number}</label>
									<input
										type="checkbox"
										value={roomNumber._id}
										onChange={handleSelect}
										disabled={!isAvailable(roomNumber)}
									/>
								</div>
							))}
						</div>
					</div>
				))}
				<div className="rButton" onClick={handleClick}>
					Reserve Now!
				</div>
			</div>
		</div>
	);
};

export default Reserve;
