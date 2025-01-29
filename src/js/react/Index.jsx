import React from "react";
import ReactDOM from "react-dom/client";



const App = () => (
	<>

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
		<div className="wrapper">



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
							<li className="header__item">
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

			<div className="content">
				<div className="content__container">
					<div className="content__navbar">
						<h1 className="content__title">Все кроссовки</h1>
						<div className="content__search search-block">
							<div className="search-block__img"><img src="@img/card/search.svg" alt="search" /></div>
							<input type="text" placeholder="Поиск..." className="search-block__placeholder" />
						</div>
					</div>

					<div className="content__cards">
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

						<div className="card">
							<img className="card__image" src="@img/card/sneakers/02.jpg" alt="Image" />
							<div className="card__name">
								Мужские Кроссовки Nike Air Max 270
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

						<div className="card">
							<img className="card__image" src="@img/card/sneakers/03.jpg" alt="Image" />
							<div className="card__name">
								Мужские Кроссовки Nike Blazer Mid Suede
							</div>
							<div className="card__bottom">
								<div className="card__price">
									<div className="card__subtitle">Цена:</div>
									<div className="card__amout">8 499 руб.</div>
								</div>
								<button className="card__pluse">
									<img src="@img/card/pluse-01.svg" alt="" className="card__pluse-img" />
								</button>
							</div>
						</div>

						<div className="card">
							<img className="card__image" src="@img/card/sneakers/04.jpg" alt="Image" />
							<div className="card__name">
								Кроссовки Puma X Aka Boku Future Rider
							</div>
							<div className="card__bottom">
								<div className="card__price">
									<div className="card__subtitle">Цена:</div>
									<div className="card__amout">8 999 руб.</div>
								</div>
								<button className="card__pluse">
									<img src="@img/card/pluse-01.svg" alt="" className="card__pluse-img" />
								</button>
							</div>
						</div>

						<div className="card">
							<img className="card__image" src="@img/card/sneakers/05.jpg" alt="Image" />
							<div className="card__name">
								Мужские Кроссовки Under Armour Curry 8
							</div>
							<div className="card__bottom">
								<div className="card__price">
									<div className="card__subtitle">Цена:</div>
									<div className="card__amout">15 199 руб.</div>
								</div>
								<button className="card__pluse">
									<img src="@img/card/pluse-01.svg" alt="" className="card__pluse-img" />
								</button>
							</div>
						</div>

						<div className="card">
							<img className="card__image" src="@img/card/sneakers/06.jpg" alt="Image" />
							<div className="card__name">
								Мужские Кроссовки Nike Kyrie 7
							</div>
							<div className="card__bottom">
								<div className="card__price">
									<div className="card__subtitle">Цена:</div>
									<div className="card__amout">11 299 руб.</div>
								</div>
								<button className="card__pluse">
									<img src="@img/card/pluse-01.svg" alt="" className="card__pluse-img" />
								</button>
							</div>
						</div>

						<div className="card">
							<img className="card__image" src="@img/card/sneakers/07.jpg" alt="Image" />
							<div className="card__name">
								Мужские Кроссовки Jordan Air Jordan 11
							</div>
							<div className="card__bottom">
								<div className="card__price">
									<div className="card__subtitle">Цена:</div>
									<div className="card__amout">10 799 руб.</div>
								</div>
								<button className="card__pluse">
									<img src="@img/card/pluse-01.svg" alt="" className="card__pluse-img" />
								</button>
							</div>
						</div>

						<div className="card">
							<img className="card__image" src="@img/card/sneakers/08.jpg" alt="Image" />
							<div className="card__name">
								Мужские Кроссовки Nike LeBron XVIII
							</div>
							<div className="card__bottom">
								<div className="card__price">
									<div className="card__subtitle">Цена:</div>
									<div className="card__amout">16 499 руб.</div>
								</div>
								<button className="card__pluse">
									<img src="@img/card/pluse-01.svg" alt="" className="card__pluse-img" />
								</button>
							</div>
						</div>

						<div className="card">
							<img className="card__image" src="@img/card/sneakers/09.jpg" alt="Image" />
							<div className="card__name">
								Мужские Кроссовки Nike Lebron XVIII Low
							</div>
							<div className="card__bottom">
								<div className="card__price">
									<div className="card__subtitle">Цена:</div>
									<div className="card__amout">16 499 руб.</div>
								</div>
								<button className="card__pluse">
									<img src="@img/card/pluse-01.svg" alt="" className="card__pluse-img" />
								</button>
							</div>
						</div>

						<div className="card">
							<img className="card__image" src="@img/card/sneakers/10.jpg" alt="Image" />
							<div className="card__name">
								Мужские Кроссовки Nike Blazer Mid Suede
							</div>
							<div className="card__bottom">
								<div className="card__price">
									<div className="card__subtitle">Цена:</div>
									<div className="card__amout">16 499 руб.</div>
								</div>
								<button className="card__pluse">
									<img src="@img/card/pluse-01.svg" alt="" className="card__pluse-img" />
								</button>
							</div>
						</div>

						<div className="card">
							<img className="card__image" src="@img/card/sneakers/01.jpg" alt="Image" />
							<div className="card__name">
								Кроссовки Puma X Aka Boku Future Rider
							</div>
							<div className="card__bottom">
								<div className="card__price">
									<div className="card__subtitle">Цена:</div>
									<div className="card__amout">16 499 руб.</div>
								</div>
								<button className="card__pluse">
									<img src="@img/card/pluse-01.svg" alt="" className="card__pluse-img" />
								</button>
							</div>
						</div>

						<div className="card">
							<img className="card__image" src="@img/card/sneakers/05.jpg" alt="Image" />
							<div className="card__name">
								Мужские Кроссовки Nike Kyrie Flytrap IV
							</div>
							<div className="card__bottom">
								<div className="card__price">
									<div className="card__subtitle">Цена:</div>
									<div className="card__amout">16 499 руб.</div>
								</div>
								<button className="card__pluse">
									<img src="@img/card/pluse-01.svg" alt="" className="card__pluse-img" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	</>
);

// Об'єкт для виводу
const root = document.querySelector("#root")
	? document.querySelector("#root")
	: document.querySelector(".wrapper");

// Main rendering
ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
