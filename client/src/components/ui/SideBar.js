import React from "react";

export default function SideBar({ closeCart, cartItems = [], onRemove }) {
  return (
    <div className="side-bar-overlay">
      <div className="side-bar">
        <h2>
          Корзина{" "}
          <img
            onClick={closeCart}
            className="remove-btn"
            src="/img/btn-close-active.svg"
            alt="remove"
          />
        </h2>

        {cartItems.length > 0 ? (
          <>
            <div className="items">
              {cartItems.map((el) => (
                <>
                  <div className="cartItem">
                    <div
                      style={{
                        backgroundImage: `url(/img/allGoods/${el.img}.jpg)`,
                      }}
                      className="cart-item-img"
                    ></div>
                    <div>
                      <p>{el.title}</p>
                      <b>{el.price}</b>
                    </div>
                    <img
                      onClick={() => onRemove(el.id)}
                      className="remove-btn"
                      src="/img/btn-close-active.svg"
                      alt="remove"
                    />
                  </div>
                </>
              ))}
            </div>

            <div className="cart-stat">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>32.550 р</b>
                </li>

                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>2.770 р</b>
                </li>
              </ul>
              <button className="green-button">
                Оформить заказ <img src="/img/arrow-right.svg" alt="arrow" />
              </button>
            </div>
          </>
        ) : (
          <div className="cart-empty">
            <img
              width="120px"
              height="120px"
              src="./img/cart-empty.png"
              alt="cart-empty"
            />
            <h2>Корзина пуста</h2>
            <p>добавьте хотя бы один товар</p>
            <button onClick={closeCart} className="green-button">
              <img src="/img/arrow-left.svg" alt="arrow" />
              На главную
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
