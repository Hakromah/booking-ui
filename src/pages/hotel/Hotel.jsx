import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './hotel.css';
import { GrLocation } from 'react-icons/gr';
import MailList from '../../components/mailList/MailList';
import { useState } from 'react';
import { IoMdCloseCircle } from 'react-icons/io';
import {
	BsFillArrowLeftCircleFill,
	BsFillArrowRightCircleFill,
} from 'react-icons/bs';

const Hotel = () => {
	const [slideIndex, setSlideIndex] = useState(0);
	const [open, setOpen] = useState(false);

	const photos = [
		{
			src: 'https://www.hilton.com/im/en/ISTIBHI/16064140/extrerior-12-.jpg?impolicy=crop&cw=4503&ch=1889&gravity=NorthWest&xposition=0&yposition=824&rw=1920&rh=806',
		},
		{
			src: 'https://www.hilton.com/im/en/ISTIBHI/16055527/king-executive-room-with-sea-view-3-.jpg?impolicy=crop&cw=5000&ch=2098&gravity=NorthWest&xposition=0&yposition=22&rw=1920&rh=806',
		},
		{
			src: 'https://www.hilton.com/im/en/ISTIBHI/16064149/indoor-pool-2-.jpg?impolicy=crop&cw=5000&ch=2098&gravity=NorthWest&xposition=0&yposition=22&rw=1920&rh=806',
		},
		{
			src: 'https://www.hilton.com/im/en/ISTIBHI/16055497/istib-corner-suite-2-.jpg?impolicy=crop&cw=3580&ch=2143&gravity=NorthWest&xposition=709&yposition=0&rw=528&rh=316',
		},
		{
			src: 'https://www.hilton.com/im/en/ISTIBHI/16055484/istib-grand-deluxe-suite-3-.jpg?impolicy=crop&cw=3580&ch=2143&gravity=NorthWest&xposition=709&yposition=0&rw=528&rh=316',
		},
		{
			src: 'https://www.hilton.com/im/en/ISTIBHI/16064186/fitness-3-.jpg?impolicy=crop&cw=5000&ch=2098&gravity=NorthWest&xposition=0&yposition=22&rw=1920&rh=806',
		},
		{
			src: 'https://www.hilton.com/im/en/ISTIBHI/16074007/king-guest-room-with-city-view-3-.jpg?impolicy=crop&cw=3580&ch=2143&gravity=NorthWest&xposition=709&yposition=0&rw=528&rh=316',
		},
		{
			src: 'https://www.hilton.com/im/en/ISTIBHI/16064179/makri-restaurant-13-.jpg?impolicy=crop&cw=4500&ch=1889&gravity=NorthWest&xposition=0&yposition=555&rw=1920&rh=806',
		},
		{
			src: 'https://www.hilton.com/im/en/ISTIBHI/16064121/executive-lounge-1-.jpg?impolicy=crop&cw=5000&ch=2098&gravity=NorthWest&xposition=0&yposition=22&rw=1920&rh=806',
		},
	];

	const handleOpen = (i) => {
		setSlideIndex(i);
		setOpen(true);
	};

	const handleMove = (direction) => {
		// let newSlideIndex;
		// if (direction === 'l') {
		// 	newSlideIndex =
		// 		slideIndex === 0 ? slideIndex.length - 1 : slideIndex - 1;
		// } else {
		// 	newSlideIndex =
		// 		slideIndex === slideIndex.length - 1 ? 0 : slideIndex + 1;
		// }
		// setSlideIndex(newSlideIndex);

		if (direction === 'l') {
			setSlideIndex(slideIndex !== 0 ? slideIndex - 1 : 8);
		}
		if (direction === 'r') {
			setSlideIndex(slideIndex === 8 ? 0 : slideIndex + 1);
		}
	};

	return (
		<div>
			<Navbar />
			<Header type="list" />
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
									src={photos[slideIndex].src}
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
						<h1 className="hotelTitle">Hilton Hotel IST</h1>
						<div className="hotelAddress">
							<GrLocation />
							<span>2045 sk Bakırköy Istanbul</span>
						</div>
						<span className="hotelDistance">
							Best location - 600m from the sea
						</span>
						<span className="hotelPriceHighlight">
							Book a stay over &#36;100 at the this property and get a
							free airport taxi service.
						</span>
						<div className="hotelImages">
							{photos.map((photo, i) => (
								<div key={i} className="hotelImgWrapper">
									<img
										onClick={() => handleOpen(i)}
										src={photo.src}
										alt=""
										className="hotelImg"
									/>
								</div>
							))}
						</div>
						<div className="hotelDetails">
							<div className="hotelDetailTexts">
								<h1 className="hotelTitle">
									Stay in the heart of Istanbul
								</h1>
								<p className="hotelDesc">
									Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Dolor voluptatibus nisi quos. Fugit qui aliquid
									commodi sequi distinctio facere a eum quaerat
									expedita, ratione, repellat odit nihil quia impedit
									esse itaque doloremque deleniti, quo totam deserunt
									rerum corporis sint consequuntur necessitatibus!
									Aspernatur minus ut nihil. Lorem ipsum dolor sit,
									amet consectetur adipisicing elit. Similique
									voluptates expedita ab libero officia deleniti nemo
									nihil voluptatibus quaerat numquam?
								</p>
							</div>
							<div className="hotelDetailPrice">
								<h1>Perfect for a 8 night stay</h1>
								<span>
									Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Vitae, maiores et adipisci laudantium inventore
									aut!
								</span>
								<h2>
									<b>&#36;850</b> (8 nights)
								</h2>
								<button className="bookNow2">
									Reserve or Book Now!
								</button>
							</div>
						</div>
					</div>
				</div>
				<MailList />
				<Footer />
			</div>
		</div>
	);
};

export default Hotel;
