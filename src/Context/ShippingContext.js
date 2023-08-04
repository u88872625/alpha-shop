import { createContext, useState } from "react";

export const ShippingContext = createContext();

export function ShippingContextProvider({ children }) {
  const [shippingCost, setShippingCost] = useState(0);
  function handleShippingClick(isFree) {
    if (isFree) {
      setShippingCost(0);
    } else {
      setShippingCost(500);
    }
  }

  return (
    <ShippingContext.Provider value={{ shippingCost, handleShippingClick }}>
      {children}
    </ShippingContext.Provider>
  );
}
