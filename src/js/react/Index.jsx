import React from "react";
import ReactDOM from "react-dom/client";
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import React, { useState } from 'react';
import AppContext from "./components/context.jsx";

import Header from "./components/Header.jsx";
import Drawer from "./components/Drawer.jsx";
import Favourites from "./components/Favourites.jsx";
import Orders from "./components/Orders.jsx";
// import Card from "./components/Card.jsx";
import Home from "./components/Home.jsx";




function App() {
	const [items, setItems] = React.useState([]);
	const [cartItems, setCartItems] = React.useState([]);
	const [favourites, setFavourites] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);
	const [searchValue, setSearchValue] = React.useState();
	const [cartOpened, setCartOpened] = React.useState(false);




	const isItemAdded = (id) => {
		return cartItems.some((obj) => Number(obj.parentId) === Number(id));
	}
	// console.log(isItemAdded)

	React.useEffect(() => {
		// fetch('https://679e4c64946b0e23c06312ce.mockapi.io/items').then(res => {
		// 	return res.json();
		// }).then(json => {
		// 	setItems(json);
		// });

		async function fetchData() {
			try {
				// setIsLoading(true);
				const [cartResponse, favouritesResponse, itemsResponse] = await Promise.all([axios.get('https://679e4c64946b0e23c06312ce.mockapi.io/cart'),
				axios.get('https://67a24121409de5ed5254d2d5.mockapi.io/favourites'),
				axios.get('https://679e4c64946b0e23c06312ce.mockapi.io/items')]);


				// const cartResponse = await ;
				// const favouritesResponse = await 
				// const itemsResponse = await ;

				setIsLoading(false);
				setCartItems(cartResponse.data)
				setFavourites(favouritesResponse.data);
				setItems(itemsResponse.data);

			} catch (error) {
				alert('Ошибка при запросе данных')
			}


		}
		fetchData();

	}, []);



	const onAddToCart = async (obj) => {
		try {
			const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
			if (findItem) {
				// if (isItemAdded(obj.id)) {
				setCartItems(prev => prev.filter(item => Number(item.parentId) !== Number(obj.id)))
				await axios.delete(`https://679e4c64946b0e23c06312ce.mockapi.io/cart/${findItem.id}`);

				// axios.post('https://679e4c64946b0e23c06312ce.mockapi.io/cart', obj).then(res => {
				// setCartItems((prev) => [...prev, obj])});

			} else {
				const { data } = await axios.post('https://679e4c64946b0e23c06312ce.mockapi.io/cart', obj)
				setCartItems((prev) => [...prev, data]);
			}


			// else{
			// 	// const { item } = await axios.post('https://67a24121409de5ed5254d2d5.mockapi.io/cart', obj)
			// 	// setCartItems((prev) => [...prev, data]);
			// }
			// )

		} catch (error) {
			alert("Не удалось добавить в корзину");
			console.error(error);
		}


	}


	// const onAddToCart = async (obj) => {
	// 	try {
	// 		const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
	// 		if (findItem) {
	// 			// if (isItemAdded(obj.id)) {
	// 			setCartItems(prev => prev.filter(item => Number(item.parentId) !== Number(obj.id)))
	// 			await axios.delete(`https://679e4c64946b0e23c06312ce.mockapi.io/cart/${findItem.id}`);

	// 			// axios.post('https://679e4c64946b0e23c06312ce.mockapi.io/cart', obj).then(res => {
	// 			// setCartItems((prev) => [...prev, obj])});

	// 		} else {
	// 			setCartItems((prev) => [...prev, obj]);
	// 			const { data } = await axios.post('https://679e4c64946b0e23c06312ce.mockapi.io/cart', obj)
	// 			setCartItems((prev) =>prev.map(item => {
	// 				if(item.parentId === data.parentId){
	// 					return {
	// 						...item,
	// 						id: data.id
	// 					};
	// 				}
	// 				return item;
	// 			}));
	// 		}

	// 	} catch (error) {
	// 		alert("Не удалось добавить в корзину");
	// 		console.error(error);
	// 	}


	// }
	// console.log(onAddToCart)

	const onRemoveItem = (id) => {
		try {
			axios.delete(`https://679e4c64946b0e23c06312ce.mockapi.io/cart/${id}`);
			setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(id)));

		} catch (error) {
			alert('Не удалось удалить из корзины');
			console.error(error);
		}

	}

	const onAddToFavourite = async (obj) => {
		try {

			if (favourites.find(favObj => Number(favObj.id) === Number(obj.id))) {
				await axios.delete(`https://679e4c64946b0e23c06312ce.mockapi.io/favourites/${obj.id}`);
				// setFavourites((prev) => prev.filter(item => item.id !== obj.id));
				setFavourites(prev => prev.filter((item) => Number(item.id) !== Number(obj.id)))
			} else {
				const { data } = await axios.post('https://67a24121409de5ed5254d2d5.mockapi.io/favourites', obj)
				setFavourites((prev) => [...prev, data]);
			}
		} catch (error) {
			alert("не уадлось добавить в фавориты");
			console.error(error);
		}

	}

	function onChangeSearchInput(event) {
		setSearchValue(event.target.value)
		// console.log(event.target.value)
	}

	return (

		<AppContext.Provider value={{ items, cartItems, favourites, isItemAdded, onAddToFavourite, setCartOpened, setCartItems, onAddToCart }}>
			<div className="page__container">

				<Drawer
					onClickClose={() => setCartOpened(false)}
					items={cartItems}
					onRemove={onRemoveItem}
					opened={cartOpened}
				/>


				<Header onClickCart={() => setCartOpened(true)} />

				<Routes>
					<Route
						path="/"
						element={
							<Home
								items={items}
								cartItems={cartItems}
								searchValue={searchValue}
								setSearchValue={setSearchValue}
								onChangeSearchInput={onChangeSearchInput}
								onAddToFavourite={onAddToFavourite}
								onAddToCart={onAddToCart}
								isLoading={isLoading}
							/>
						}
						exact
					/>

					<Route
						path="/favourites"
						element={<Favourites />}
						exact
					/>

					<Route
						path="/orders"
						element={<Orders />}
						exact
					/>

				</Routes>




			</div>
		</AppContext.Provider>
	);
}

// .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase())


const root = document.querySelector("#root")
	? document.querySelector("#root")
	: document.querySelector(".wrapper");

// Main rendering
ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<Router>
			<App />
		</Router>
	</React.StrictMode>
);
