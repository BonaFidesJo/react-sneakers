import React from "react";
import ReactDOM from "react-dom/client";

const Card = () => {
	return (
		<div className="card">
			<div className="card__like"> <img src="@img/card/heart-01.svg" alt="unlike" /></div>
			<img className="card__image" src="@img/card/sneakers/01.jpg" alt="Image" />
			<div className="card__name">
				Мужские Кроссовки Nike Blazer Mid Suede
			</div>
			<div className="card__bottom">
				<div className="card__price">
					<div className="card__subtitle">Цена:</div>
					<div className="card__amout">12 999 руб.</div>
				</div>
				<button className="card__pluse">
					<img src="@img/card/pluse-01.svg" alt="" className="card__pluse-img" />
				</button>
			</div>
		</div>
	)
};

export default Card;
