// import React, { useEffect, useState } from "react";
// import Card from "../client/src/components/ui/Card";
// import Header from "../client/src/components/ui/Header";
// import SideBar from "../client/src/components/ui/SideBar";
// import axios from "axios";

// //
// function App() {
//   //
//   const [items, setItems] = useState([]); // состояние массива товаров
//   const [cart, setCart] = useState(false); // состояние sideBar корзины
//   const [cartItems, setCartItems] = useState([]); // состояние массива товаров в корзине
//   const [searchValue, setSearchValue] = useState(""); // состояние строки поиска

//   // функция добавления товара в корзину
//   const onAddToCart = (newItem) => {
//     axios.post("https://67848ee91ec630ca33a4bf61.mockapi.io/cart", newItem);
//     setCartItems((prev) => [...prev, newItem]);
//   };

//   // функция изменения строки поиска
//   const onChangeSearchValue = (event) => {
//     setSearchValue(event.target.value);
//   };

//   // функция обнуления строки поиска (вписал сразу в onClick)
//   // const clearSearchValue = () => {
//   //   setSearchValue("");
//   // };

//   // fetch рендер
//   // useEffect(() => {
//   //   fetch("https://67848ee91ec630ca33a4bf61.mockapi.io/items")
//   //     .then((res) => {
//   //       return res.json();
//   //     })
//   //     .then((json) => setItems(json));
//   // }, []);

//   // axios рендер
//   useEffect(() => {
//     axios
//       .get("https://67848ee91ec630ca33a4bf61.mockapi.io/items")
//       .then((res) => {
//         setItems(res.data);
//       });
//     axios
//       .get("https://67848ee91ec630ca33a4bf61.mockapi.io/cart")
//       .then((res) => {
//         setCartItems(res.data);
//       });
//   }, []);

//   //
//   return (
//     <div className="wrapper clear">
//       {cart && (
//         <SideBar closeCart={() => setCart(false)} cartItems={cartItems} />
//       )}

//       <Header openCart={() => setCart(true)} />
//       {/* Все товары: */}
//       <div className="content">
//         <div className="content-top-block">
//           <h1>{searchValue ? `Поиск по: "${searchValue}"` : "Все товары:"}</h1>
//           <div className="search-block">
//             <img
//               src="/img/magnifying-glass.svg"
//               alt="search"
//               width="20"
//               height="20"
//             />
//             <input
//               onChange={onChangeSearchValue}
//               value={searchValue}
//               placeholder="поиск..."
//             />
//             {searchValue && (
//               <img
//                 onClick={() => setSearchValue("")}
//                 className="clear remove-btn"
//                 src="/img/btn-close-active.svg"
//                 alt="remove"
//               />
//             )}
//           </div>
//         </div>

//         <div className="goods">
//           {items
//             .filter((item) =>
//               item.title.toLowerCase().includes(searchValue.toLowerCase())
//             )
//             .map((el) => (
//               <Card key={el.id} el={el} onPlus={(obj) => onAddToCart(obj)} />
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
