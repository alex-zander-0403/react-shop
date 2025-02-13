import React from "react";
import Card from "../ui/Card/index";
import FakeCardsArr from "../ui/Card/FakeCardsArr";
import AppContext from "../../context";

export default function MainPage({
  items,
  searchValue,
  onAddToCart,
  onAddToFavorite,
  onChangeSearchValue,
  setSearchValue,
  isLoading,
}) {
  // вынос рендера всех товаров в отдельную функцию
  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    //
    //FakeCardsArr() = [...Array(8)]
    return (isLoading ? FakeCardsArr() : filteredItems).map((item) => (
      <Card
        key={item.id}
        // item={item} // весь item целым объектом
        {...item} // весь item по свойствам но в одну строку
        // id={item.id}
        // title={item.title}
        // img={item.img}
        // price={item.price}
        //
        loading={isLoading} // false true
        onPlus={(obj) => onAddToCart(obj)}
        onFavorite={(obj) => onAddToFavorite(obj)}
      />
    ));
  };

  return (
    <div className="content">
      <div className="content-top-block">
        <h1>{searchValue ? `Поиск по: "${searchValue}"` : "Все товары:"}</h1>
        <div className="search-block">
          <img
            src="/img/magnifying-glass.svg"
            alt="search"
            width="20"
            height="20"
          />
          <input
            onChange={onChangeSearchValue}
            value={searchValue}
            placeholder="поиск..."
          />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="clear remove-btn"
              src="/img/btn-close-active.svg"
              alt="remove"
            />
          )}
        </div>
      </div>

      <div className="goods">{renderItems()}</div>
    </div>
  );
}
