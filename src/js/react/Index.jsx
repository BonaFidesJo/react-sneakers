import React from "react";
import ReactDOM from "react-dom/client";

import Card from "./components/Card.jsx";
import Header from "./components/Header.jsx";
import Drawer from "./components/Drawer.jsx";

const App = () => (
	<>
		<Drawer />
		<Header />

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

					<Card></Card>
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


	</>
);



const root = document.querySelector("#root")
	? document.querySelector("#root")
	: document.querySelector(".wrapper");

// Main rendering
ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
