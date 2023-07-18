import React from "react";
import { CartProducts } from "./CartProducts";
import { ReactComponent as IconPlus } from "../icon/Plus.svg";
import { ReactComponent as IconMinus } from "../icon/Minus.svg";

const Cart = () => {
  const CartItems = CartProducts.map((cartproduct) => (
    <div
      key={cartproduct.id}
      className="product-container"
      data-count={cartproduct.quantity}
      data-price={cartproduct.price}
    >
      <img
        className="img-container"
        src={cartproduct.img}
        alt={cartproduct.name}
      />
      <div className="product-info">
        <div className="product-name">{cartproduct.name}</div>
        <div className="product-control-container">
          <div className="product-control">
            <svg className="product-action minus">
              <IconPlus />
            </svg>
            <span className="product-count"></span>
            <svg className="product-action plus">
              <IconMinus />
            </svg>
          </div>
        </div>
        <div className="price">{cartproduct.price}</div>
      </div>
    </div>
  ));

  return (
    <div>
      <section class="cart-container">
        <h3 class="cart-title">購物籃</h3>

        <section class="product-list " data-total-price="0">
          {CartItems}
        </section>

        <section class="cart-info shipping col col-12">
          <div class="text">運費</div>
          <div class="price"></div>
        </section>
        <section class="cart-info total col col-12">
          <div class="text">小計</div>
          <div class="price"></div>
        </section>
      </section>
    </div>
  );
};

export default Cart;
