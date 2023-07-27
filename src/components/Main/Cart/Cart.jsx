import React, { useState } from "react";
import { dummyProducts } from "./CartProduct";
import { ReactComponent as IconPlus } from "../../icon/Plus.svg";
import { ReactComponent as IconMinus } from "../../icon/Minus.svg";

function CartItems({ product, clickPlus, clickMinus }) {
  const [quantity, setQuantity] = useState(0);
  function increment() {
    setQuantity(quantity + 1);
    clickPlus(product.price);
  }
  function decrement() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      clickMinus(product.price);
    }
  }

  return (
    <>
      <div
        id={product.id}
        className="product-container"
        data-count={quantity}
        data-price={product.price}
      >
        <img className="img-container" src={product.img} alt={product.name} />
        <div className="product-info">
          <div className="product-name">{product.name}</div>
          <div className="product-control-container">
            <div className="product-control">
              <svg className="product-action minus" onClick={decrement}>
                <IconMinus />
              </svg>
              <span className="product-count">{quantity}</span>
              <svg className="product-action plus" onClick={increment}>
                <IconPlus />
              </svg>
            </div>
          </div>
          <div className="price">${product.price * quantity}</div>
        </div>
      </div>
    </>
  );
}

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  function clickPlus(price) {
    setTotalPrice(totalPrice + price);
  }

  function clickMinus(price) {
    setTotalPrice(totalPrice - price);
  }

  return (
    <div className="cart">
      <section class="cart-container">
        <h3 class="cart-title">購物籃</h3>

        <section class="product-list " data-total-price="0">
          {dummyProducts.map((product) => (
            <CartItems
              key={product.id}
              product={product}
              clickPlus={clickPlus}
              clickMinus={clickMinus}
            />
          ))}
        </section>

        <section class="cart-info shipping ">
          <div class="text">運費</div>
          <div class="price">免費</div>
        </section>
        <section class="cart-info total ">
          <div class="text">小計</div>
          <div class="price">${totalPrice}</div>
        </section>
      </section>
    </div>
  );
};

export default Cart;