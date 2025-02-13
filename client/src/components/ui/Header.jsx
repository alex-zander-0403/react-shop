import React from "react";
import { Link } from "react-router-dom";

export default function Header({ openCart, favorites }) {
  return (
    <header>
      <Link to="/">
        <div className="headerLeft">
          <img src="/img/logo.png" alt="logo" height={40} />
          <div>
            <h3>BRAND KING</h3>
            <p>Маркетплейс брендов</p>
          </div>
        </div>
      </Link>
      <ul className="headerRight">
        <li onClick={openCart}>
          <img width="20" height="20" src="/img/ico-cart.svg" alt="cart" />
          <span>2400р</span>
        </li>
        <li>
          <img width="20" height="20" src="/img/ico-user.svg" alt="user" />
          {/* <span>Пользователь</span> */}
        </li>
        <li className="favoritesButton">
          <Link to="/favorites">
            <img
              width="20"
              height="20"
              src="/img/ico-favorite.svg"
              alt="favorite"
            />
            {/* <span>Избранное</span> */}
            {favorites.length > 0 && (
              <div className="favoritesCount">{favorites.length}</div>
            )}
          </Link>
        </li>
      </ul>
    </header>
  );
}
