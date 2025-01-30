import React from "react";


const Drawer = () => {
	return (
		<div className="overlay">


			<div className="drawer">
				<div className="drawer__name">
					<h2>Корзина</h2>
					<img className="drawer__button" src="/img/btn.svg" alt="button" />
				</div>

				<div className="drawer__body">
					<div className="drawer__item">
						<a href="#!"><img className="drawer__image" src="/img/card/sneakers/01.jpg" alt="sneakers" /></a>
						<div className="drawer__text">
							<p width={70}>Мужские Кроссовки Nike Air Max 270</p>
							<b>12 999 руб.</b>
						</div>
						<img className="drawer__button" src="/img/btn.svg" alt="button" />
					</div>

					<div className="drawer__item">
						<a href="#!"><img className="drawer__image" src="/img/card/sneakers/01.jpg" alt="sneakers" /></a>
						<div className="drawer__text">
							<p width={70}>Мужские Кроссовки Nike Air Max 270</p>
							<b>12 999 руб.</b>
						</div>
						<img className="drawer__button" src="/img/btn.svg" alt="button" />
					</div>
					<div className="drawer__item">
						<a href="#!"><img className="drawer__image" src="/img/card/sneakers/01.jpg" alt="sneakers" /></a>
						<div className="drawer__text">
							<p width={70}>Мужские Кроссовки Nike Air Max 270</p>
							<b>12 999 руб.</b>
						</div>
						<img className="drawer__button" src="/img/btn.svg" alt="button" />
					</div><div className="drawer__item">
						<a href="#!"><img className="drawer__image" src="/img/card/sneakers/01.jpg" alt="sneakers" /></a>
						<div className="drawer__text">
							<p width={70}>Мужские Кроссовки Nike Air Max 270</p>
							<b>12 999 руб.</b>
						</div>
						<img className="drawer__button" src="/img/btn.svg" alt="button" />
					</div><div className="drawer__item">
						<a href="#!"><img className="drawer__image" src="/img/card/sneakers/01.jpg" alt="sneakers" /></a>
						<div className="drawer__text">
							<p width={70}>Мужские Кроссовки Nike Air Max 270</p>
							<b>12 999 руб.</b>
						</div>
						<img className="drawer__button" src="/img/btn.svg" alt="button" />
					</div><div className="drawer__item">
						<a href="#!"><img className="drawer__image" src="/img/card/sneakers/01.jpg" alt="sneakers" /></a>
						<div className="drawer__text">
							<p width={70}>Мужские Кроссовки Nike Air Max 270</p>
							<b>12 999 руб.</b>
						</div>
						<img className="drawer__button" src="/img/btn.svg" alt="button" />
					</div><div className="drawer__item">
						<a href="#!"><img className="drawer__image" src="/img/card/sneakers/01.jpg" alt="sneakers" /></a>
						<div className="drawer__text">
							<p width={70}>Мужские Кроссовки Nike Air Max 270</p>
							<b>12 999 руб.</b>
						</div>
						<img className="drawer__button" src="/img/btn.svg" alt="button" />
					</div><div className="drawer__item">
						<a href="#!"><img className="drawer__image" src="/img/card/sneakers/01.jpg" alt="sneakers" /></a>
						<div className="drawer__text">
							<p width={70}>Мужские Кроссовки Nike Air Max 270</p>
							<b>12 999 руб.</b>
						</div>
						<img className="drawer__button" src="/img/btn.svg" alt="button" />
					</div><div className="drawer__item">
						<a href="#!"><img className="drawer__image" src="/img/card/sneakers/01.jpg" alt="sneakers" /></a>
						<div className="drawer__text">
							<p width={70}>Мужские Кроссовки Nike Air Max 270</p>
							<b>12 999 руб.</b>
						</div>
						<img className="drawer__button" src="/img/btn.svg" alt="button" />
					</div><div className="drawer__item">
						<a href="#!"><img className="drawer__image" src="/img/card/sneakers/01.jpg" alt="sneakers" /></a>
						<div className="drawer__text">
							<p width={70}>Мужские Кроссовки Nike Air Max 270</p>
							<b>12 999 руб.</b>
						</div>
						<img className="drawer__button" src="/img/btn.svg" alt="button" />
					</div><div className="drawer__item">
						<a href="#!"><img className="drawer__image" src="/img/card/sneakers/01.jpg" alt="sneakers" /></a>
						<div className="drawer__text">
							<p width={70}>Мужские Кроссовки Nike Air Max 270</p>
							<b>12 999 руб.</b>
						</div>
						<img className="drawer__button" src="/img/btn.svg" alt="button" />
					</div><div className="drawer__item">
						<a href="#!"><img className="drawer__image" src="/img/card/sneakers/01.jpg" alt="sneakers" /></a>
						<div className="drawer__text">
							<p width={70}>Мужские Кроссовки Nike Air Max 270</p>
							<b>12 999 руб.</b>
						</div>
						<img className="drawer__button" src="/img/btn.svg" alt="button" />
					</div>



				</div>
				<ul className="drawer__count count-drawer">
					<li className="count-drawer__item">
						<div className="count-drawer__text">Итого</div>
						<div className="count-drawer__dash"></div>
						<div className="count-drawer__summ">21 498 руб.</div>
					</li>
					<li className="count-drawer__item">
						<div className="count-drawer__text">Налог 5%</div>
						<div className="count-drawer__dash"></div>
						<div className="count-drawer__summ">1074 руб.</div>
					</li>
				</ul>

				<button className="drawer__button button-green">
					<div className="button-green__text"><span>Оформить заказ</span></div>
					<a className="button-green__arrow"><img src="@img/arrow.svg" alt="Image"></img></a>
				</button>

			</div>
		</div>
	)
};

export default Drawer;
