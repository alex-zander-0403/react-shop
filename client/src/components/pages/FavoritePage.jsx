import React from "react";
import Card from "../ui/Card/index";

export default function FavoritePage({ items, onAddToFavorite }) {
  return (
    <div className="content">
      <div className="content-top-block">
        <h1>Избранное:</h1>
      </div>

      <div className="goods">
        {items
          //   .filter((item) =>
          //     item.title.toLowerCase().includes(searchValue.toLowerCase())
          //   )
          .map((item) => (
            <Card
              key={item.id}
              // item={item}
              id={item.id}
              title={item.title}
              img={item.img}
              price={item.price}
              //
              favorited={true}
              //   onPlus={(obj) => onAddToCart(obj)}
              onFavorite={onAddToFavorite}
            />
          ))}
      </div>
    </div>
  );
}
