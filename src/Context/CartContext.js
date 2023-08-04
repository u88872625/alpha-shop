import { createContext, useState, useContext } from "react";
import { ShippingContext } from "./ShippingContext";

export const dummyProducts = [
  {
    id: "1",
    name: "貓咪罐罐",
    img: "https://picsum.photos/300/300?text=1",
    price: 100,
    quantity: 2,
  },
  {
    id: "2",
    name: "貓咪干干",
    img: "https://picsum.photos/300/300?text=2",
    price: 200,
    quantity: 1,
  },
];

export const CartContext = createContext(dummyProducts);

export function CartProvider({ children }) {
  const [products, setProducts] = useState(dummyProducts);
  const { shippingCost } = useContext(ShippingContext);
  const totalPrice = products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, shippingCost);

  function handleQuantityClick(productId, action) {
    let nextProducts = products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          quantity:
            action === "minus" ? product.quantity - 1 : product.quantity + 1,
        };
      } else {
        return product;
      }
    });
    nextProducts = nextProducts.filter((p) => p.quantity > 0);
    setProducts(nextProducts);
  }

  return (
    <CartContext.Provider value={{ products, handleQuantityClick, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}
