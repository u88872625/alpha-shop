import { createContext, useState, useContext } from "react";
import { CartContext } from "./CartContext";

export const basicCardInfo = {
  cardHolder: "",
  cardNumber: "",
  expireDate: "",
  cvc: "",
};

export const CardInfoContext = createContext(basicCardInfo);

export function CardInfoContextProvider({ children }) {
  const [cardInfo, setCardInfo] = useState(basicCardInfo);
  const { totalPrice } = useContext(CartContext);

  function handleCardInput(e) {
    setCardInfo({
      ...cardInfo,
      [e.target.name]: e.target.value,
    });
  }

  function handleCardSubmit(e) {
    const { cardHolder, cardNumber, expireDate, cvc } = cardInfo;
    if (!cardHolder || !cardNumber || !expireDate || !cvc) {
      alert("請填寫完整資訊");
      return;
    }

    let card = `
      cardHolder:${cardInfo.cardHolder}
      cardNumber:${cardInfo.cardNumber}
      expireDate:${cardInfo.expireDate}
      cvc:${cardInfo.cvc}`;

    console.log(`
      Info:${card}
      total:${totalPrice}`);
  }

  return (
    <CardInfoContext.Provider
      value={{ cardInfo, handleCardInput, handleCardSubmit }}
    >
      {children}
    </CardInfoContext.Provider>
  );
}
