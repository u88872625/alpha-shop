import React from "react";

const Step3 = () => {
  return (
    <div>
      <form>
        <h2 className="form-title">付款資訊</h2>
        <div className="form-container">
          <div className="input-group input-card-owner">
            <div className="input-label ">持卡人姓名</div>
            <input type="text" placeholder="John Doe"></input>
          </div>
          <div className="input-group input-card-number">
            <div className="input-label ">卡號</div>
            <input type="text" placeholder="1111 2222 3333 4444"></input>
          </div>
          <div className="input-group input-card-date">
            <div className="input-label ">有效期限</div>
            <input type="text" placeholder="MM/YY"></input>
          </div>
          <div className="input-group input-card-cvc">
            <div className="input-label ">CVC/CCV</div>
            <input type="text" placeholder="123"></input>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Step3;
