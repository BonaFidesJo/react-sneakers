import Card from "./Card.jsx";
import React from "react";
import axios from "axios";
import AppContext from "./context.jsx";

// import { Link } from 'react-router-dom'

const Orders = () => {
	const { onAddToCart, onAddToFavourite } = React.useContext(AppContext);
	const [orders, setOrders] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		(async () => {
			try {
				const { data } = await axios.get("https://67a24121409de5ed5254d2d5.mockapi.io/orders");
				// console.log(data.map(obj => obj.items).flat());
				setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
				setIsLoading(false);

			} catch (error) {
				alert("Ошибка при запросе заказов")
			}

		})();
	}, []);

	return (

		<div className="content">
			<div className="content__container">
				<div className="content__navbar">
					<h1 className="content__title">Мои покупки</h1>

				</div>

				<div className="content__cards">
					{(isLoading
						? [...Array(10)]
						: orders).map((item, index) => (
							<Card
								key={index}
							
								// added={isItemAdded(item && item.id)}
								loading={isLoading}
								{...item}
							/>)
						)}

				</div>
			</div>
		</div>

	)
}

export default Orders;