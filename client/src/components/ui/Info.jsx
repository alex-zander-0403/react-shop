import React from "react";
import AppContext from "../../context";

//
export default function Info({ title, img, desc }) {
  //
  const { setCart } = React.useContext(AppContext);

  //
  return (
    <div className="cart-empty">
      <img width="120px"  src={img} alt="cart-empty" />
      <h2>{title}</h2>
      <p>{desc}</p>
      <button onClick={() => setCart(false)} className="green-button">
        <img src="/img/arrow-left.svg" alt="arrow" />
        На главную
      </button>
    </div>
  );
}
