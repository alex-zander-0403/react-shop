import React, { useContext, useState } from "react";
import Info from "./Info";
import AppContext from "../../context";
import axios from "axios";

export default function SideBar({ closeCart, cartItems = [], onRemove }) {
  //
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //
  const { setCartItems } = useContext(AppContext);

  // удаление из бд Cart и очистка на фронте
  const onClickOrder = async () => {
    setIsOrderComplete(true);
    try {
      const response = await axios.delete(`/api/cart`);
      if (response.status === 204 || response.status === 200) {
        setCartItems([]);
      } else {
        console.error("Ошибка при удалении из корзины:", response.statusText);
      }
    } catch (error) {
      console.error("Ошибка оформления заказа:", error);
    }
  };

  //
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
                <div key={el.id} className="cartItem">
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
              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className="green-button"
              >
                Оформить заказ <img src="/img/arrow-right.svg" alt="arrow" />
              </button>
            </div>
          </>
        ) : (
          <Info
            title={isOrderComplete ? "Заказ успешно оформлен" : "Корзина пуста"}
            desc={
              isOrderComplete
                ? "Наши фиксики собирают ваш заказ и скоро передадут его в отдел доставки! Курьер обязательно свяжется с вами перед выездом для уточнения деталей :)"
                : "добавьте хотя бы один товар"
            }
            img={isOrderComplete ? "/img/done.png" : "/img/cart-empty.png"}
          />
        )}
      </div>
    </div>
  );
}
