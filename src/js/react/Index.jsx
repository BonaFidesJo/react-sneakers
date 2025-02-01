import React from "react";
import ReactDOM from "react-dom/client";
// import React, { useState } from 'react';

import Card from "./components/Card.jsx";
import Header from "./components/Header.jsx";
import Drawer from "./components/Drawer.jsx";

const arr = [
	{
		name: "Мужские Кроссовки Nike Air Max 270",
		price: 12999,
		image: "@img/card/sneakers/01.jpg"
	},
	{
		name: "Мужские Кроссовки Nike Blazer Mid Suede",
		price: 8498,
		image: "@img/card/sneakers/02.jpg"
	},
	{
		name: "Мужские Кроссовки Nike Blazer Mid Suede",
		price: 8499,
		image: "@img/card/sneakers/03.jpg"
	},
	{
		name: "Кроссовки Puma X Aka Boku Future Rider",
		price: 8499,
		image: "@img/card/sneakers/04.jpg"
	},
	{
		name: "Мужские Кроссовки Under Armour Curry 8",
		price: 15199,
		image: "@img/card/sneakers/05.jpg"
	},
	{
		name: "Мужские Кроссовки Nike Kyrie 7",
		price: 112999,
		image: "@img/card/sneakers/06.jpg"
	},
	{
		name: "Мужские Кроссовки Jordan Air Jordan 11",
		price: 10799,
		image: "@img/card/sneakers/07.jpg"
	},
	{
		name: "Мужские Кроссовки Nike LeBron XVIII",
		price: 16499,
		image: "@img/card/sneakers/08.jpg"
	}, {
		name: "Мужские Кроссовки Nike Lebron XVIII Low",
		price: 16499,
		image: "@img/card/sneakers/09.jpg"
	}, {
		name: "Мужские Кроссовки Nike Blazer Mid Suede",
		price: 16499,
		image: "@img/card/sneakers/10.jpg"
	},
	{
		name: "Кроссовки Puma X Aka Boku Future Rider",
		price: 16899,
		image: "@img/card/sneakers/01.jpg"
	},
	{
		name: "Мужские Кроссовки Nike Kyrie Flytrap IV",
		price: 10899,
		image: "@img/card/sneakers/05.jpg"
	},
];


// React.useState(5);
// function test() {


// }
// console.log(test);

// let count = 5;

// const plus = () => {
// 	count++;
// }

// const minus = () => {
// 	count--;
// 	console.log(count);
// }


// const test = React.useState();
// console.log(test);

function App() {
	return (



		/* <center>
			<h1>{count}</h1>
			<button onClick={plus}>+</button>
			<button onClick={() => minus(1)}>-</button>

		</center> */
		<div className="contain">
			<Drawer />
			<Header />
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
						{arr.map(obj =>
							<Card
								title={obj.name}
								price={obj.price}
								image={obj.image}
								onPluse={() => console.log('Добавили в коризну')}
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
