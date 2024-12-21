//
function App() {
  return (
    <div className="wrapper clear">
      <div className="side-bar-overlay">
        <div className="side-bar">
          <h2>Корзина</h2>
          <div className="items">
            <div className="cartItem">
              {/* <img src="/img/allGoods/01.jpg" alt="goods" height={70} /> */}
              <div
                style={{ backgroundImage: "url(/img/allGoods/01.jpg)" }}
                className="cart-item-img"
              ></div>
              <div>
                <p>Кеды Lora Piana (черные)</p>
                <b>6 500 руб</b>
              </div>
              <img
                className="remove-btn"
                src="/img/btn-close-active.svg"
                alt="remove"
              />
            </div>

            <div className="cartItem">
              {/* <img src="/img/allGoods/01.jpg" alt="goods" height={70} /> */}
              <div
                style={{ backgroundImage: "url(/img/allGoods/02.jpg)" }}
                className="cart-item-img"
              ></div>
              <div>
                <p>Кеды Lora Piana (черные)</p>
                <b>6 500 руб</b>
              </div>
              <img
                className="remove-btn"
                src="/img/btn-close-active.svg"
                alt="remove"
              />
            </div>
          </div>



          <ul className="stat">

            <li>
              <span>Итого:</span>
              <div></div>
              <b>32.550 р</b>
            </li>

            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>2770 р</b>
            </li>

          </ul>



        </div>
      </div>

      <header>
        <div className="headerLeft">
          <img src="/img/logo.png" alt="logo" height={40} />
          <div>
            <h3>BRAND KING</h3>
            <p>Маркетплейс брендов</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Outline"
              viewBox="0 0 24 24"
              width="20"
              height="20"
            >
              <path d="M22.713,4.077A2.993,2.993,0,0,0,20.41,3H4.242L4.2,2.649A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.82-2h11.92a5,5,0,0,0,4.921-4.113l.785-4.354A2.994,2.994,0,0,0,22.713,4.077ZM21.4,6.178l-.786,4.354A3,3,0,0,1,17.657,13H5.419L4.478,5H20.41A1,1,0,0,1,21.4,6.178Z" />
              <circle cx="7" cy="22" r="2" />
              <circle cx="17" cy="22" r="2" />
            </svg>
            <span>2400р</span>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Outline"
              viewBox="0 0 24 24"
              width="20"
              height="20"
            >
              <path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z" />
              <path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z" />
            </svg>
          </li>
        </ul>
      </header>

      <div className="content">
        <div className="content-top-block">
          <h1>Все товары:</h1>
          <div className="search-block">
            <img
              src="/img/magnifying-glass.svg"
              alt="search"
              width="20"
              height="20"
            />
            <input placeholder="поиск..." />
          </div>
        </div>

        <div className="goods">
          <div className="card">
            <div className="card-favorite">
              <img src="/img/like-off.svg" alt="unliked" />
            </div>
            <img src="/img/allGoods/01.jpg" width="auto" alt="" />
            <h5>Кеды Lora Piana (черные)</h5>
            <div className="card-options">
              <div className="card-price">
                <span>Цена:</span>
                <b>6 500р</b>
              </div>

              <button className="card-button">
                <img src="/img/add.svg" width="20" height="20" alt="add" />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/img/allGoods/02.jpg" width="auto" alt="" />
            <h5>Кеды lora Piana (черные)</h5>
            <div className="card-options">
              <div className="card-price">
                <span>Цена:</span>
                <b>6 500р</b>
              </div>

              <button className="card-button">
                <img src="/img/add.svg" width="20" height="20" alt="add" />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/img/allGoods/03.jpg" width="auto" alt="" />
            <h5>Кеды lora Piana (черные)</h5>
            <div className="card-options">
              <div className="card-price">
                <span>Цена:</span>
                <b>6 500р</b>
              </div>

              <button className="card-button">
                <img src="/img/add.svg" width="20" height="20" alt="add" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
