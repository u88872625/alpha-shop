import React from "react";
import { ShippingContext } from "../../../Context/ShippingContext";
import { useContext } from "react";

const Step2 = () => {
  const { handleShippingClick } = useContext(ShippingContext);
  return (
    <div>
      <form>
        <h2 className="form-title">運送方式</h2>
        <div className="form-container">
          <label className="form-radio">
            <input
              id="shipping-free"
              type="radio"
              name="shipping"
              className="input-radio"
              onChange={(e) => handleShippingClick(true)}
            ></input>
            <div className="radio-text">
              <div className="text-title">標準運送</div>
              <div className="text-time">約3~7個工作天</div>
            </div>
            <div className="radio-price">免費</div>
            <div className="radio-input-border"></div>
          </label>

          <label className="form-radio">
            <input
              id="shipping-dhl"
              type="radio"
              name="shipping"
              onChange={(e) => handleShippingClick(false)}
            ></input>
            <div className="radio-text">
              <div className="text-title">DHL貨運</div>
              <div className="text-time">48小時內送達</div>
            </div>
            <div className="radio-price">$500</div>
            <div className="radio-input-border"></div>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Step2;
