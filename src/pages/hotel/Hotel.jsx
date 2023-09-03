import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './hotel.css';
import { GrLocation } from 'react-icons/gr';
import MailList from '../../components/mailList/MailList';
import { useContext, useState } from 'react';
import { IoMdCloseCircle } from 'react-icons/io';
import {
	BsFillArrowLeftCircleFill,
	BsFillArrowRightCircleFill,
} from 'react-icons/bs';
import useFetch from '../../hooks/useFetch';
import { useLocation } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Reserve from '../../components/reserve/Reserve';

const Hotel = () => {
	const location = useLocation();
	const id = location.pathname.split('/')[2];
	const [slideIndex, setSlideIndex] = useState(0);
	const [open, setOpen] = useState(false);
	const [openModal, setOpenModal] = useState(false);

	const { data, loading } = useFetch(`/hotels/find/${id}`);
	const { user } = useContext(AuthContext);
	const navigate = useNavigate();

	const [date] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection',
		},
	]);
// useContext(SearchContext) couldn't find Dates' initial states
	const {dates, options } = useContext(SearchContext);

	const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
	function dayDifference(date1, date2) {
		const timeDiff = Math.abs(date2.getTime() - date1.getTime());
		const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
		return diffDays;
	}

	const days = dayDifference(dates[0].endDate, dates[0].startDate);

	// const photos = [
	// 	{
	// 		src: 'https://www.hilton.com/im/en/ISTIBHI/16064140/extrerior-12-.jpg?impolicy=crop&cw=4503&ch=1889&gravity=NorthWest&xposition=0&yposition=824&rw=1920&rh=806',
	// 	},
	// 	{
	// 		src: 'https://www.hilton.com/im/en/ISTIBHI/16055527/king-executive-room-with-sea-view-3-.jpg?impolicy=crop&cw=5000&ch=2098&gravity=NorthWest&xposition=0&yposition=22&rw=1920&rh=806',
	// 	},
	// 	{
	// 		src: 'https://www.hilton.com/im/en/ISTIBHI/16064149/indoor-pool-2-.jpg?impolicy=crop&cw=5000&ch=2098&gravity=NorthWest&xposition=0&yposition=22&rw=1920&rh=806',
	// 	},
	// 	{
	// 		src: 'https://www.hilton.com/im/en/ISTIBHI/16055497/istib-corner-suite-2-.jpg?impolicy=crop&cw=3580&ch=2143&gravity=NorthWest&xposition=709&yposition=0&rw=528&rh=316',
	// 	},
	// 	{
	// 		src: 'https://www.hilton.com/im/en/ISTIBHI/16055484/istib-grand-deluxe-suite-3-.jpg?impolicy=crop&cw=3580&ch=2143&gravity=NorthWest&xposition=709&yposition=0&rw=528&rh=316',
	// 	},
	// 	{
	// 		src: 'https://www.hilton.com/im/en/ISTIBHI/16064186/fitness-3-.jpg?impolicy=crop&cw=5000&ch=2098&gravity=NorthWest&xposition=0&yposition=22&rw=1920&rh=806',
	// 	},
	// 	{
	// 		src: 'https://www.hilton.com/im/en/ISTIBHI/16074007/king-guest-room-with-city-view-3-.jpg?impolicy=crop&cw=3580&ch=2143&gravity=NorthWest&xposition=709&yposition=0&rw=528&rh=316',
	// 	},
	// 	{
	// 		src: 'https://www.hilton.com/im/en/ISTIBHI/16064179/makri-restaurant-13-.jpg?impolicy=crop&cw=4500&ch=1889&gravity=NorthWest&xposition=0&yposition=555&rw=1920&rh=806',
	// 	},
	// 	{
	// 		src: 'https://www.hilton.com/im/en/ISTIBHI/16064121/executive-lounge-1-.jpg?impolicy=crop&cw=5000&ch=2098&gravity=NorthWest&xposition=0&yposition=22&rw=1920&rh=806',
	// 	},
	// ];

	const handleOpen = (i) => {
		setSlideIndex(i);
		setOpen(true);
	};

	const handleMove = (direction) => {
		if (direction === 'l') {
			setSlideIndex(slideIndex !== 0 ? slideIndex - 1 : 8);
		}
		if (direction === 'r') {
			setSlideIndex(slideIndex === 8 ? 0 : slideIndex + 1);
		}
	};

	const handleReserve = () => {
		if (user) {
			setOpenModal(true);
		} else {
			navigate('/login');
		}
	};

	return (
		<div>
			<Navbar />
			<Header type="list" />
			{loading ? (
				'Loading please wait...'
			) : (
				<div className="hotelMain">
					<div className="hotelContainer">
						{open && (
							<div className="slider">
								<IoMdCloseCircle
									size={30}
									className="close"
									onClick={() => setOpen(false)}
								/>
								<BsFillArrowLeftCircleFill
									size={50}
									className="arrow"
									onClick={() => handleMove('l')}
								/>
								<div className="slideWrapper">
									<img
										src={data?.photos[slideIndex]}
										alt=""
										className="slideImg"
									/>
								</div>
								<BsFillArrowRightCircleFill
									size={50}
									className="arrow"
									onClick={() => handleMove('r')}
								/>
							</div>
						)}
						<div className="hotelWrapper">
							<button className="bookNow">Reserve or Book Now!</button>
							<h1 className="hotelTitle">{data.name}</h1>
							<div className="hotelAddress">
								<GrLocation />
								<span>{data.address}</span>
							</div>
							<span className="hotelDistance">
								Best location - {data.distance} from the sea
							</span>
							<span className="hotelPriceHighlight">
								Book a stay over &#36;{data.cheapestPrice} at this
								property and get a free airport taxi service.
							</span>
							<div className="hotelImages">
								{data?.photos?.map((photo, i) => (
									<div key={i} className="hotelImgWrapper">
										<img
											onClick={() => handleOpen(i)}
											src={photo}
											alt=""
											className="hotelImg"
										/>
									</div>
								))}
							</div>
							<div className="hotelDetails">
								<div className="hotelDetailTexts">
									<h1 className="hotelTitle">{data.title}</h1>
									<p className="hotelDesc">{data.desc}</p>
								</div>
								<div className="hotelDetailPrice">
									<h1>Perfect for a {days} night stay</h1>
									<span>
										Lorem ipsum dolor sit amet consectetur adipisicing
										elit. Vitae, maiores et adipisci laudantium
										inventore aut!
									</span>
									<h2>
										<b>
											&#36;{days * data.cheapestPrice * options.room}
										</b>
										({days} nights)
									</h2>
									<button onClick={handleReserve} className="bookNow2">
										Reserve or Book Now!
									</button>
								</div>
							</div>
						</div>
					</div>
					<MailList />
					<Footer />
				</div>
			)}
			{openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
		</div>
	);
};

export default Hotel;
