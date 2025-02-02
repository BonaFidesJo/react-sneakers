import React from "react";
import ReactDOM from "react-dom/client";
// import React, { useState } from 'react';

import Card from "./components/Card.jsx";
import Header from "./components/Header.jsx";
import Drawer from "./components/Drawer.jsx";







// const test = React.useState();
// console.log(test);

function App() {
	const [items, setItems] = React.useState([]);
	const [cartItems, setCartItems] = React.useState([]);

	const [cartOpened, setCartOpened] = React.useState(false);

	React.useEffect(() => {
		fetch('https://679e4c64946b0e23c06312ce.mockapi.io/items').then(res => {
			return res.json();
		}).then(json => {
			setItems(json);
		});
	}, []);

	const onAddToCart = (obj) => {
		setCartItems(prev => [...prev, obj]);
	}

	return (



		<div className="page__container">
			{cartOpened ? <Drawer
				onClickClose={() => setCartOpened(false)}
				items={cartItems}
			/> : null}


			<Header
				onClickCart={() => setCartOpened(true)}

			/>

			<div className="content">



				<div className="content__container">
					<div className="content__navbar">
						<h1 className="content__title">Все кроссовки</h1>
						<div className="content__search search-block">
							<div className="search-block__img"><img src="@img/card/search.svg" alt="search" /></div>
							<input type="text" placeholder="Поиск..." className="search-block__placeholder" />
						</div>
					</div>

					<div className="content__cards">
						{items.map(item =>
							<Card
								title={item.name}
								price={item.price}
								image={item.image}
								onPlus={(obj) => onAddToCart(obj)}
								onFavourite={() => console.log('Добавили в закладки')}
							/>
						)}

					</div>
				</div>
			</div>

		</div>
	);
}



const root = document.querySelector("#root")
	? document.querySelector("#root")
	: document.querySelector(".wrapper");

// Main rendering
ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
