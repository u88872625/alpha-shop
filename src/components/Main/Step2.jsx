import React from "react";

const Step2 = () => {
  return (
    <div>
      <form>
        <h2 className="form-title">運送方式</h2>
        <div className="form-container">
          <div className="form-radio">
            <input type="radio" className="input-radio"></input>
            <div className="radio-text">
              <div className="text-title">標準運送</div>
              <div className="text-time">約3~7個工作天</div>
            </div>
            <div className="radio-price">免費</div>
          </div>

          <div className="form-radio">
            <input type="radio"></input>
            <div className="radio-text">
              <div className="text-title">DHL貨運</div>
              <div className="text-time">48小時內送達</div>
            </div>
            <div className="radio-price">$500</div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Step2;
