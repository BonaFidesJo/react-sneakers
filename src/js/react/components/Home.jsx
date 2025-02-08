import Card from "./Card.jsx";
import React from "react";


// import { Link } from 'react-router-dom'

const Home = ({ items, searchValue, setSearchValue, onChangeSearchInput, onAddToFavourite, onAddToCart,isLoading }) => {

	const renderItems=()=>{
	// const filteredItems=items.filter((item) => item.title.includes(searchValue))
		return (isLoading 
			? [...Array(10)]
			: items)
			.map((item, index) => (
				<Card
					key={index}
					onPlus={(obj) => onAddToCart(obj)}
					onFavourite={(obj) => onAddToFavourite(obj)}
					// added={isItemAdded(item && item.id)}
					loading={isLoading}
					{...item}
				/>
			));
	}

	return (

		<div className="content">
			<div className="content__container">
				<div className="content__navbar">
					<h1 className="content__title">{searchValue ? `Поиск по запросу:"${searchValue}"` : `Все кроссовки`}</h1>
					<div className="content__search search-block">
						<div className="search-block__img"><img src="@img/card/search.svg" alt="search" /></div>
						<input value={searchValue || ' '} onChange={onChangeSearchInput} type="text" placeholder="Поиск..." className="search-block__placeholder" />
						{searchValue && <img onClick={() => setSearchValue('')} className="search-block__button" src="/img/btn.svg" alt="button" />}
					</div>
				</div>

				<div className="content__cards">
				{renderItems()}

				</div>
			</div>
		</div>

	)
}

export default Home;