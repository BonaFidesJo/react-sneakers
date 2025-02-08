import Card from "./Card.jsx";
import React from "react";
import AppContext from "./context.jsx";

// import { Link } from 'react-router-dom'

const Favourites = () => {
const {favourites,onAddToFavourite} = React.useContext(AppContext)



	return (

		<div className="content">
			<div className="content__container">
				<div className="content__navbar">
					<h1 className="content__title">Мои закладки</h1>
					
				</div>

				<div className="content__cards">
				{favourites.map((item, index) => (
						<Card
							key={index}
							// id={item.id}
							// title={item.name}
							// price={item.price}
							// image={item.image}
							favorited={true}
							onFavourite={onAddToFavourite}
							{...item}
							// onPlus={(obj) => onAddToCart(obj)}
							// onFavourite={(obj) => onAddToFavourite(obj)}
						/>)
					)}

				</div>
			</div>
		</div>

	)
}

export default Favourites;