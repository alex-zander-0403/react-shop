import cardStyles from "./Card.module.scss";
import React, { useState } from "react";

//
export default function Card({ el, onPlus }) {
  //
  const onClickFavorite = () => {
    alert(`FAVORITE -> ${el.title}`);
  };

  const [isAdded, setIsAdded] = useState(false);

  const onClickAdd = () => {
    onPlus(el);
    setIsAdded(!isAdded);
    // console.log(props);
  };

  //
  return (
    <>
      <div className={cardStyles.card}>
        <div className={cardStyles.favorite} onClick={onClickFavorite}>
          <img src="/img/like-off.svg" alt="unliked" />
        </div>

        <div
          className={cardStyles.img}
          style={{
            backgroundImage: `url(/img/allGoods/${el.imgNumber}.jpg)`,
          }}
        ></div>
        <h5>{el.title}</h5>
        <div className="card-options">
          <div className="card-price">
            <span>Цена:</span>
            <b>{el.price}</b>
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
