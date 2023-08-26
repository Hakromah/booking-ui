import './searchItem.css';

const SearchItem = () => {
	return (
		<div className="searchItem">
			<img
				src="https://cf.bstatic.com/xdata/images/hotel/square600/219678884.webp?k=157c38ddc243fa7cb18562a9eb64197bba6c5ed52adfd792a1d623b8bef28144&o="
				alt=""
				className="siImg"
			/>
			<div className="siDesc">
				<h1 className="siTitle">A great choice of villas in Destin</h1>
				<span className="siDistance">600m from the sea</span>
				<span className="siTaxiOp">Free airport taxi</span>
				<span className="siSubtitle">
					Studio Apartments with Air conditioning
				</span>
				<span className="siFeatures">
					Entire studio . 1 bathroom . 21m2 1 full bed
				</span>
				<span className="siCancelOp">Free Cancellation</span>
				<span className="siCancelOpSubtitle">
					You can cancel later, so lock in this great price today
				</span>
			</div>
			<div className="siDetails">
				<div className="siRating">
					<span>Excellent</span>
					<button>7.9</button>
				</div>
				<div className="siDetailTexts">
					<span className="siPrice">&#36;145</span>

					<span className="siTaxOp">Includes taxes and fees</span>
					<button className="siCheckBtn">See availability</button>
				</div>
			</div>
		</div>
	);
};

export default SearchItem;
