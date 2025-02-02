import React from "react";


const Header = (props) => {
	return (

		<header className="header">
			<div className="header__container">
				<div className="header__logo">
					<img src="./img/header/logo.png" />
					<div className="header__info">
						<h3 className="header__title">React sneakers</h3>
						<p>Магазин лучших кроссовок</p>
					</div>
				</div>

				<div className="header__nav">
					<ul className="header__list">
						<li className="header__item" onClick={props.onClickCart}>
							<img src="./img/header/card.svg" />
							<span>1205 руб.</span>
						</li>
						<li className="header__item">
							<img src="./img/header/like.svg" />
							<a className="header__link" href="#!">Закладки</a>
						</li>
						<li className="header__item">
							<img src="./img/header/person.svg" />
							<a className="header__link" href="#!">Профиль</a>
						</li>
					</ul>
				</div>

			</div>
		</header>

	)
};

export default Header;