import React from "react";
import Card from "../ui/Card/index";

export default function MainPage({
  items,
  searchValue,
  onAddToCart,
  onAddToFavorite,
  onChangeSearchValue,
  setSearchValue,
}) {
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

      <div className="goods">
        {items
          .filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item) => (
            <Card
              key={item.id}
              // item={item}
              id={item.id}
              title={item.title}
              img={item.img}
              price={item.price}
              //
              onPlus={(obj) => onAddToCart(obj)}
              onFavorite={(obj) => onAddToFavorite(obj)}
            />
          ))}
      </div>
    </div>
  );
}
