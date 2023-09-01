import useFetch from '../../hooks/useFetch';
import './featuredProperties.css';

const FeaturedProperties = () => {
	const { data, loading } = useFetch('/hotels?featured=true&limit=4');

	return (
		<div className="fp">
			{loading ? (
				'Loading please wait...'
			) : (
				<>
					{data.map((item) => (
						<div className="fpItem" key={item._id}>
							<img src={item.photos[0]} alt="" className="fpImg" />
							<span className="fpName">{item.name}</span>
							<span className="fpCity">{item.city} </span>
							<span className="fpPrice">&#36;{item.cheapestPrice} </span>
							{item.rating && (
								<div className="fpRating">
									<button>{item.rating}</button>
									<span>Excellent</span>
								</div>
							)}
						</div>
					))}
				</>
			)}
			{/* <div className="fpItem">
				<img
					src="https://cf.bstatic.com/xdata/images/hotel/square200/303890276.webp?k=ca49b12c9fc6a04f1cb0f94e3812f08d5e055c5bb6f54d8e79c0616ca8298edb&o="
					alt=""
					className="fpImg"
				/>
				<span className="fpName">Nikis Collection Navona</span>
				<span className="fpCity">Italy </span>
				<span className="fpPrice">Starting from 90$ </span>
				<div className="fpRating">
					<button>7.8</button>
					<span>Excellent</span>
				</div>
			</div>
			 */}
		</div>
	);
};

export default FeaturedProperties;
