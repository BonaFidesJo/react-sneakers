import React from "react";


const Card = (props) => {


	return (
		<div className="card">
			<div className="card__like" onClick={props.onFavourite} > <img src="@img/card/heart-01.svg" alt="unlike" /></div>
			<img className="card__image" src={props.image} alt="Image" />
			<div className="card__name">
				{props.title}
			</div>
			<div className="card__bottom">
				<div className="card__price">
					<div className="card__subtitle">Цена:</div>
					<div className="card__amout">{props.price} руб.</div>
				</div>
				<button className="card__pluse" onClick={props.onPluse} >
					<img src="@img/card/pluse-01.svg" alt="" className="card__pluse-img" />
				</button>
			</div>
		</div>
	)
};

export default Card;
