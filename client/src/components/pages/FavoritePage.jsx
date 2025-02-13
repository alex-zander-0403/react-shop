import React from "react";
import Card from "../ui/Card/index";
import AppContext from "../../context";

export default function FavoritePage({ onAddToFavorite, onAddToCart }) {
  //
  const { favorites } = React.useContext(AppContext);

  //
  return (
    <div className="content">
      <div className="content-top-block">
        <h1>Избранное:</h1>
      </div>

      <div className="goods">
        {favorites.map((item) => (
          <Card
            key={item.id}
            // item={item} // весь item целым объектом
            {...item} // весь item по свойствам
            // id={item.id}
            // title={item.title}
            // img={item.img}
            // price={item.price}
            //
            favorited={true}
            onPlus={(obj) => onAddToCart(obj)}
            onFavorite={onAddToFavorite}
          />
        ))}
      </div>
    </div>
  );
}
