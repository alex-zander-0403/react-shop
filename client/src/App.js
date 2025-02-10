import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../src/components/ui/Header";
import SideBar from "../src/components/ui/SideBar";
import MainPage from "./components/pages/MainPage";
import FavoritePage from "./components/pages/FavoritePage";
import axios from "axios";

//
function App() {
  //
  const [items, setItems] = useState([]); // состояние массива товаров
  const [cart, setCart] = useState(false); // состояние sideBar корзины
  const [cartItems, setCartItems] = useState([]); // состояние массива товаров в корзине
  const [searchValue, setSearchValue] = useState(""); // состояние строки поиска
  const [favorites, setFavorites] = useState([]); // состояние массива избранных товаров

  // функция добавления товара в корзину
  const onAddToCart = (newItem) => {
    try {
      axios.post("/api/cart", newItem);
      setCartItems((prev) => [...prev, newItem]);
    } catch (error) {
      console.log(error);
    }
  };

  // функция удаления товара из корзины
  const onRemoveFromCart = async (id) => {
    try {
      const response = await axios.delete(`/api/cart/${id}`);
      if (response.status === 204 || response.status === 200) {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
      } else {
        console.error("Ошибка при удалении из корзины:", response.statusText);
      }
    } catch (error) {
      console.error("Ошибка при удалении из корзины:", error);
    }
  };

  // функция добавления товара в избранное
  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`/api/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter((el) => el.id !== obj.id));
      } else {
        const { data } = await axios.post("/api/favorites", obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // функция изменения строки поиска
  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  // функция обнуления строки поиска (в писал сразу в onClick)
  // const clearSearchValue = () => {
  //   setSearchValue("");
  // };

  // fetch рендер
  // useEffect(() => {
  //   fetch("https://67848ee91ec630ca33a4bf61.mockapi.io/items")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((json) => setItems(json));
  // }, []);

  // axios рендер
  useEffect(() => {
    //
    console.log("favorites -->", favorites);

    axios.get("/api/items").then((res) => {
      setItems(res.data);
    });
    axios.get("/api/cart").then((res) => {
      setCartItems(res.data);
    });
    axios.get("/api/favorites").then((res) => {
      setFavorites(res.data);
    });
  }, []);

  //
  return (
    <div className="wrapper clear">
      {cart && (
        <SideBar
          closeCart={() => setCart(false)}
          cartItems={cartItems}
          onRemove={onRemoveFromCart}
        />
      )}

      <Header openCart={() => setCart(true)} />

      <Routes>
        <Route
          path="/"
          exact
          element={
            <MainPage
              items={items}
              searchValue={searchValue}
              onAddToCart={onAddToCart}
              onAddToFavorite={onAddToFavorite}
              onChangeSearchValue={onChangeSearchValue}
              setSearchValue={setSearchValue}
            />
          }
        />

        <Route
          path="/favorites"
          exact
          element={
            <FavoritePage items={favorites} onAddToFavorite={onAddToFavorite} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
