import React, { useEffect, useState } from "react";
import Card from "./components/ui/Card";
import Header from "./components/ui/Header";
import SideBar from "./components/ui/SideBar";

//

function App() {
  //
  const [items, setItems] = useState([]); // состояние массива товаров
  const [cart, setCart] = useState(false); // состояние sideBar корзины
  const [cartItems, setCartItems] = useState([]); // состояние массива товаров в корзине

  // функция добавления товара в корзину
  const onAddToCart = (newItem) => {
    setCartItems((prev) => [...prev, newItem]);
  };
  // console.log(cartItems);

  // рендер
  useEffect(() => {
    fetch("https://67848ee91ec630ca33a4bf61.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => setItems(json));
  }, []);

  //
  return (
    <div className="wrapper clear">
      {cart && (
        <SideBar closeCart={() => setCart(false)} cartItems={cartItems} />
      )}

      <Header openCart={() => setCart(true)} />

      <div className="content">
        <div className="content-top-block">
          <h1>Все товары:</h1>
          <div className="search-block">
            <img
              src="/img/magnifying-glass.svg"
              alt="search"
              width="20"
              height="20"
            />
            <input placeholder="поиск..." />
          </div>
        </div>

        <div className="goods">
          {items.map((el) => (
            <Card key={el.id} el={el} onPlus={(obj) => onAddToCart(obj)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
