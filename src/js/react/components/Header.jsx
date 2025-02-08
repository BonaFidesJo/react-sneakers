import React from "react";
import { Link } from 'react-router-dom';
import { useCart } from "./hooks/useCart.js";

const Header = (props) => {
	const { totalPrice } = useCart();



	return (

		<header className="header">
			<div className="header__container">
				<Link to="/">
					<div className="header__logo">

						<img src="./img/header/logo.png" />
						<div className="header__info">
							<h3 className="header__title">React sneakers</h3>
							<p>Магазин лучших кроссовок</p>
						</div>

					</div>
				</Link>
				<div className="header__nav">
					<ul className="header__list">
						<li className="header__item" onClick={props.onClickCart}>
							<img src="./img/header/card.svg" />
							<span>{totalPrice} руб.</span>
						</li>



						<Link to="/favourites">
							<li className="header__item">
								<span className="header__link" >Закладки</span>
								<img src="./img/header/like.svg" />
							</li>
						</Link>

						<Link to="/orders">
							<li className="header__item">
									<span>Профиль</span>
									<img src="./img/header/person.svg" />
							</li>
						</Link>
					</ul>
				</div>

			</div>
		</header >

	)
};

export default Header;