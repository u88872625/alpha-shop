import React, { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import { ShippingContext } from "../../../Context/ShippingContext";
import { ReactComponent as IconPlus } from "../../../assets/icon/Plus.svg";
import { ReactComponent as IconMinus } from "../../../assets/icon/Minus.svg";

function CartItems({ product, handleQuantityClick }) {
  return (
    <>
      <div id={product.id} className="product-container">
        <img className="img-container" src={product.img} alt={product.name} />
        <div className="product-info">
          <div className="product-name">{product.name}</div>
          <div className="product-control-container">
            <div className="product-control">
              <svg
                className="product-action minus"
                onClick={() => {
                  handleQuantityClick(product.id, "minus");
                }}
              >
                <IconMinus />
              </svg>
              <span className="product-count">{product.quantity}</span>
              <svg
                className="product-action plus"
                onClick={() => {
                  handleQuantityClick(product.id, "plus");
                }}
              >
                <IconPlus />
              </svg>
            </div>
          </div>
          <div className="price">
            ${(product.price * product.quantity).toLocaleString()}
          </div>
        </div>
      </div>
    </>
  );
}

const Cart = () => {
  const { products, handleQuantityClick, totalPrice } = useContext(CartContext);
  const { shippingCost } = useContext(ShippingContext);

  return (
    <div className="cart">
      <section className="cart-container">
        <h3 className="cart-title">購物籃</h3>

        <section className="product-list ">
          {products.map((product) => (
            <CartItems
              key={product.id}
              product={product}
              handleQuantityClick={handleQuantityClick}
            />
          ))}
        </section>

        <section className="cart-info shipping ">
          <div className="text">運費</div>
          <div className="price">${shippingCost}</div>
        </section>
        <section className="cart-info total ">
          <div className="text">小計</div>
          <div className="price">${totalPrice.toLocaleString()}</div>
        </section>
      </section>
    </div>
  );
};

export default Cart;
