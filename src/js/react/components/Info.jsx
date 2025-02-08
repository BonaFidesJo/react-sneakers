import React from 'react';
import AppContext from './context.jsx';

const Info = ({ image, title, description }) => {
	const {setCartOpened } = React.useContext(AppContext);
	return (
		<div className="drawer__empty empty-drawer">
			<div className="empty-drawer__image"><img src={image} alt="Image"></img></div>
			<h3 className="empty-drawer__title">{title}</h3>
			<div className="empty-drawer__text">{description}</div>
			<button onClick={()=>setCartOpened(false)} className="empty-drawer__button">
				<img src="@img/arrow-02.png" alt="Image"></img>
				<span>Вернуться назад</span>
			</button>
		</div>
	)
}
export default Info;