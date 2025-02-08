import React from "react";
import ContentLoader from "react-content-loader"
import AppContext from "./context.jsx";

const Card = ({
	id,
	onFavourite,
	image,
	title,
	price,
	onPlus,
	favorited = false,
	// added = false,
	loading = false }) => {

	const { isItemAdded } = React.useContext(AppContext);
	const [isAdded, setIsAdded] = React.useState(false);
	const [isFavourite, setIsFavourite] = React.useState(favorited);
	const obj = { id, parentId: id, image, title, price };

	// console.log(title, isItemAdded(id))
	// console.log(isItemAdded(id))

	const onClickPlus = () => {
		onPlus(obj);

		// isItemAdded({})
		// AppContext(!{isItemAdded})
		// isItemAdded===(!isAdded)


		setIsAdded(!isAdded)
		// isItemAdded();


	};

	console.log(isAdded)
	// console.log(isItemAdded(id))
	const onClickFavourite = () => {
		onFavourite(obj);
		setIsFavourite(!isFavourite)
	};

	// React.useEffect(()=>{
	// 	console.log('ChNGE')
	// }),[isAdded]

	return (
		<div className="card">
			{
				loading ?
					(<ContentLoader
						speed={2}
						width={142}
						height={145}
						viewBox="0 0 150 260"
						backgroundColor="#f3f3f3"
						foregroundColor="#ecebeb"

					>
						<rect x="2" y="1" rx="10" ry="10" width="150" height="90" />
						<rect x="5" y="154" rx="5" ry="5" width="90" height="15" />
						<rect x="117" y="221" rx="10" ry="10" width="32" height="32" />
						<rect x="2" y="109" rx="5" ry="5" width="150" height="15" />
						<rect x="7" y="219" rx="7" ry="7" width="85" height="34" />
					</ContentLoader>) :
					(<>
						{onFavourite && <div className="card__like" > <img onClick={onClickFavourite} src={isFavourite ? "@img/card/heart-02.svg" : "@img/card/heart-01.svg"} alt="unlike" ></img></div>}
						<img className="card__image" src={image} alt="Image" ></img>
						<div className="card__name">
							{title}
						</div>
						<div className="card__bottom">
							<div className="card__price">
								<div className="card__subtitle">Цена:</div>
								<div className="card__amout">{price} руб.</div>
							</div>
							<button className="card__pluse" onClick={onClickPlus} >
								<img
									src={isAdded
										? "@img/card/pluse-02.svg"
										: "@img/card/pluse-01.svg"}
									alt="" className="card__pluse-img" />
							</button>
						</div>
					</>
					)
			}

		</div>
	)
};

export default Card;


