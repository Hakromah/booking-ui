import './featured.css';

const Featured = () => {
	return (
		<div className="featured">
			<div className="featuredItem">
				<img
					src="https://media.cntraveller.com/photos/611bf21536358776d9492c1e/4:3/w_1704,h_1278,c_limit/Aerial-view-of-vancouver-british-columbia-canada-conde-nast-traveller-21feb17-tourism-canada.jpg"
					alt=""
					className="featuredImg"
				/>
				<div className="featuredTitles">
					<h1>Vancouver Canada</h1>
					<h2>123 properties</h2>
				</div>
			</div>
			<div className="featuredItem">
				<img
					src="https://piirsglobalseminars.princeton.edu/wp-content/uploads/sites/301/2015/05/iStock_000028373558_Medium.jpg"
					alt=""
					className="featuredImg"
				/>
				<div className="featuredTitles">
					<h1>Berlin Germany</h1>
					<h2>123 properties</h2>
				</div>
			</div>
			<div className="featuredItem">
				<img
					src="https://img1.goodfon.com/original/2000x1333/a/e8/rome-italy-vatican-rim-italiya-2216.jpg"
					alt=""
					className="featuredImg"
				/>
				<div className="featuredTitles">
					<h1>Rome Italy</h1>
					<h2>123 properties</h2>
				</div>
			</div>
		</div>
	);
};

export default Featured;
