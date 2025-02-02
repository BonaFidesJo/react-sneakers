import React from "react";


function Card ({onFavourite, image, title,price,onPlus}) {

	const[isAdded, setIsAdded] = React.useState(false);

	const onClickPlus=()=>{
		onPlus({image, title, price});
		setIsAdded(!isAdded)
	};

	// React.useEffect(()=>{
	// 	console.log('ChNGE')
	// }),[isAdded]

	return (
		<div className="card">
			<div className="card__like" onClick={onFavourite} > <img src="@img/card/heart-01.svg" alt="unlike" /></div>
			<img className="card__image" src={image} alt="Image" />
			<div className="card__name">
				{title}
			</div>
			<div className="card__bottom">
				<div className="card__price">
					<div className="card__subtitle">Цена:</div>
					<div className="card__amout">{price} руб.</div>
				</div>
				<button className="card__pluse"  >
					<img onClick={onClickPlus} src={isAdded ? "@img/card/pluse-02.svg" : "@img/card/pluse-01.svg"} alt="" className="card__pluse-img" />
				</button>
			</div>
		</div>
	)
};

export default Card;
