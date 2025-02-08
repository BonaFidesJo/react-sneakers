import React from "react";
import Info from "./Info.jsx";
// import AppContext from './context.jsx';
import axios from "axios";
import { useCart } from "./hooks/useCart.js";


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Drawer = ({ onClickClose, items, onRemove = [], opened }) => {
	const [isOrderComplete, setIsOrderComplete] = React.useState(false)
	const [orderId, setOrderId] = React.useState(null)
	const { cartItems, setCartItems, totalPrice } = useCart();
	const [isLoading, setIsLoading] = React.useState(false)


	const onClickOrder = async () => {
		try {
			setIsLoading(true);
			const { data } = await axios.post('https://67a24121409de5ed5254d2d5.mockapi.io/orders', { items: cartItems });
			// await axios.put('https://679e4c64946b0e23c06312ce.mockapi.io/cart', []);
			setOrderId(data.id)
			setIsOrderComplete(true);
			setCartItems([]);

			for (let index = 0; index < cartItems.length; index++) {
				const item = cartItems[index];
				await axios.delete(`https://679e4c64946b0e23c06312ce.mockapi.io/cart/${item.id}`);
				await delay(1000);
			}

		} catch (error) {
			alert('Ошибка при создании заказа :(')
		}
		setIsLoading(false);


	}
	return (
		<div className={`${"overlay"} ${opened ? "overlayVisible" : ''}`}>


			<div className={"drawer"} >
				<div className="drawer__name">
					<h2>Корзина</h2>
					<img onClick={onClickClose} className="drawer__button" src="/img/btn.svg" alt="button" />
				</div>

				{
					items.length > 0 ?
						(<>
							<div className="drawer__body">
								{items.map((obj) => (
									<div key={(obj.id)} className="drawer__item">
										<a href="#!"><img className="drawer__image" src={obj.image} alt="sneakers" /></a>
										<div className="drawer__text">
											<p width={70}>{obj.title}</p>
											<div className="drawer__amout">{obj.price} руб.</div>
										</div>

										<img onClick={() => onRemove(obj.id)} className="drawer__button" src="/img/btn.svg" alt="button" />
									</div>
								))}

							</div>
							<ul className="drawer__count count-drawer">
								<li className="count-drawer__item">
									<div className="count-drawer__text">Итого</div>
									<div className="count-drawer__dash"></div>
									<div className="count-drawer__summ">{totalPrice} руб.</div>
								</li>
								<li className="count-drawer__item">
									<div className="count-drawer__text">Налог 5%</div>
									<div className="count-drawer__dash"></div>
									<div className="count-drawer__summ">{totalPrice / 100 * 5} руб.</div>
								</li>
							</ul>

							<button disabled={isLoading} onClick={onClickOrder} className="drawer__button button-green">
								<div className="button-green__text"><span>Оформить заказ</span></div>
								<a className="button-green__arrow"><img src="@img/arrow.svg" alt="Image"></img></a>
							</button>
						</>
						) :
						(<Info
							title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}
							description={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
							image={isOrderComplete ? "@img/order.svg" : "@img/empty.png"}
						/>

						)

				}









			</div>
		</div>
	)
};

export default Drawer;
