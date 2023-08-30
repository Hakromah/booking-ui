import useFetch from '../../hooks/useFetch';
import './featuredProperties.css';

const FeaturedProperties = () => {
	const { data, loading } = useFetch('/hotels?featured=true');
	console.log(data);
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
			<div className="fpItem">
				<img
					src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/137605453.jpg?k=e4905524c0b39a36ed9fe6660a52425a9490e07068e22b963ce6a05a56cd95e9&o=&hp=1"
					alt=""
					className="fpImg"
				/>
				<span className="fpName">Le Tsuba Hotel</span>
				<span className="fpCity">Paris </span>
				<span className="fpPrice">Starting from 80$ </span>
				<div className="fpRating">
					<button>6.8</button>
					<span>Excellent</span>
				</div>
			</div>
			<div className="fpItem">
				<img
					src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/177954582.jpg?k=ff6f19fa263f9b3afac23df3338d5858bc21639cbcc510c57223c1ae8a3ecd2d&o=&hp=1"
					alt=""
					className="fpImg"
				/>
				<span className="fpName">Eden Hotel Amsterdam </span>
				<span className="fpCity">Amsterdam </span>
				<span className="fpPrice">Starting from 100$ </span>
				<div className="fpRating">
					<button>8.8</button>
					<span>Excellent</span>
				</div>
			</div> */}
		</div>
	);
};

export default FeaturedProperties;
