import cardStyles from "./Card.module.scss";
import React, { useState } from "react";

//
export default function Card({
  id,
  title,
  img,
  price,
  onPlus,
  onFavorite,
  favorited = false,
}) {
  //
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favorited);

  //
  const onClickAdd = () => {
    onPlus({ id, title, img, price });
    setIsAdded(!isAdded);
  };

  //
  const onClickFavorite = () => {
    onFavorite({ id, title, img, price });
    setIsFavorite(!isFavorite);
  };

  //
  return (
    <>
      <div className={cardStyles.card}>
        <div className={cardStyles.favorite} onClick={onClickFavorite}>
          <img
            src={isFavorite ? "/img/like-on.svg" : "/img/like-off.svg"}
            alt="liked"
          />
        </div>

        <div
          className={cardStyles.img}
          style={{
            backgroundImage: `url(/img/allGoods/${img}.jpg)`,
          }}
        ></div>
        <h5>{title}</h5>
        <div className="card-options">
          <div className="card-price">
            <span>Цена:</span>
            <b>{price}</b>
          </div>

          <button className="card-button" onClick={onClickAdd}>
            <img
              src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
              alt="add"
            />
          </button>
        </div>
      </div>
    </>
  );
}
