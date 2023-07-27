import React, { useState } from "react";
import { dummyProducts } from "./CartProduct";
import { ReactComponent as IconPlus } from "../../icon/Plus.svg";
import { ReactComponent as IconMinus } from "../../icon/Minus.svg";

function CartItems({ products, onPlus, onMinus }) {
  return (
    <>
      {products.map((product) => (
        <div key={product.id} id={product.id} className="product-container">
          <img className="img-container" src={product.img} alt={product.name} />
          <div className="product-info">
            <div className="product-name">{product.name}</div>
            <div className="product-control-container">
              <div className="product-control">
                <svg
                  className="product-action minus"
                  onClick={() => {
                    onMinus(product.id);
                  }}
                >
                  <IconMinus />
                </svg>
                <span className="product-count">{product.quantity}</span>
                <svg
                  className="product-action plus"
                  onClick={() => {
                    onPlus(product.id);
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
      ))}
    </>
  );
}

const Cart = () => {
  const [products, setProducts] = useState([...dummyProducts]);
  function handlePlusClick(productId) {
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        } else {
          return product;
        }
      })
    );
  }

  function handleMinusClick(productId) {
    let nextProducts = products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          quantity: product.quantity - 1,
        };
      } else {
        return product;
      }
    });
    nextProducts = nextProducts.filter((p) => p.quantity > 0);
    setProducts(nextProducts);
  }

  const totalPrice = products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  return (
    <div className="cart">
      <section className="cart-container">
        <h3 className="cart-title">購物籃</h3>

        <section className="product-list ">
          <CartItems
            products={products}
            onPlus={handlePlusClick}
            onMinus={handleMinusClick}
          />
        </section>

        <section className="cart-info shipping ">
          <div className="text">運費</div>
          <div className="price">免費</div>
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
