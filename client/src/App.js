import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../src/components/ui/Header";
import SideBar from "../src/components/ui/SideBar";
import MainPage from "./components/pages/MainPage";
import FavoritePage from "./components/pages/FavoritePage";
import axios from "axios";
import AppContext from "./context";

//
function App() {
  //
  const [items, setItems] = useState([]); // состояние main-массива товаров
  const [cart, setCart] = useState(false); // состояние sideBar корзины вкл/выкл
  const [cartItems, setCartItems] = useState([]); // состояние массива товаров в корзине
  const [searchValue, setSearchValue] = useState(""); // состояние строки поиска
  const [favorites, setFavorites] = useState([]); // состояние массива избранных товаров
  const [isLoading, setIsLoading] = useState(true); // состояние загрузки main-массива товаров

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

  // функция добавления товара в корзину
  const onAddToCart = async (newItem) => {
    try {
      if (cartItems.find((cartItem) => cartItem.id === newItem.id)) {
        axios.delete(`/api/cart/${newItem.id}`);
        setCartItems((prev) => prev.filter((el) => el.id !== newItem.id));
      } else {
        const { data } = await axios.post("/api/cart", newItem);
        setCartItems((prev) => [...prev, data]);
      }
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
  // useEffect(() => {
  //   axios.get("/api/items").then((res) => {
  //     setItems(res.data);
  //   });
  //   axios.get("/api/cart").then((res) => {
  //     setCartItems(res.data);
  //   });
  //   axios.get("/api/favorites").then((res) => {
  //     setFavorites(res.data);
  //   });
  // }, []);

  // axios рендер c приоритетом на получение данных
  useEffect(() => {
    async function axiosData() {
      const itemsResponse = await axios.get("/api/items");
      const cartResponse = await axios.get("/api/cart");
      const favoritesResponse = await axios.get("/api/favorites");
      //
      setIsLoading(false);
      //
      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }
    axiosData();
  }, []);

  // проверка товара на наличие в корзине
  const isItemAdded = (id) => {
    return cartItems.some((obj) => obj.id === id);
  };

  const isItemFav = (id) => {
    return favorites.some((obj) => obj.id === id);
  };

  //
  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        isItemFav,
        setCart,
        setCartItems,
      }}
    >
      <div className="wrapper clear">
        {cart && (
          <SideBar
            closeCart={() => setCart(false)}
            cartItems={cartItems}
            onRemove={onRemoveFromCart}
          />
        )}

        <Header openCart={() => setCart(true)} favorites={favorites} />

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
                isLoading={isLoading}
              />
            }
          />

          <Route
            path="/favorites"
            exact
            element={
              <FavoritePage
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
              />
            }
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
