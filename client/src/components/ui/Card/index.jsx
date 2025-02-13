import React, { useState } from "react";
import cardStyles from "./Card.module.scss";
import ContentLoader from "react-content-loader"; // react-skeleton
import AppContext from "../../../context";

//
export default function Card({
  id,
  title,
  img,
  price,
  onPlus,
  onFavorite,
  loading = false,
}) {
  const { isItemAdded } = React.useContext(AppContext);
  const { isItemFav } = React.useContext(AppContext);

  //
  const onClickAdd = () => {
    onPlus({ id, title, img, price });
  };

  //
  const onClickFavorite = () => {
    onFavorite({ id, title, img, price });
  };

  //
  return (
    <div className={cardStyles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={210}
          height={320}
          viewBox="0 0 210 355"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          // {...props}
        >
          <rect x="0" y="0" rx="5" ry="5" width="168" height="200" />
          <rect x="0" y="220" rx="5" ry="5" width="168" height="17" />
          <rect x="0" y="300" rx="5" ry="5" width="104" height="32" />
          <rect x="134" y="300" rx="5" ry="5" width="33" height="33" />
          <rect x="0" y="250" rx="5" ry="5" width="140" height="17" />
        </ContentLoader>
      ) : (
        <>
          <div className={cardStyles.favorite} onClick={onClickFavorite}>
            <img
              src={isItemFav(id) ? "/img/like-on.svg" : "/img/like-off.svg"}
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
                src={
                  isItemAdded(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"
                }
                alt="add"
              />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
