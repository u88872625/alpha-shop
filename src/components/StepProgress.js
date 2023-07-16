import React from "react";

function Step({ number, data, step }) {
  return (
    <>
      <span className="stepper" data-phase={data}>
        <div className="step-circle">
          <span className="circle-text">{number}</span>
        </div>
        <span className="step-label">{step}</span>
      </span>
      {number !== 3 && <span className="step-bar" data-number={number}></span>}
    </>
  );
}

const StepProgress = () => {
  return (
    <div className="stepProgress">
      <h1 className="progress-title">結帳</h1>
      <div className="step-container">
        <Step number={1} data="adress" step="寄送地址" />
        <Step number={2} data="shipping" step="運送方式" />
        <Step number={3} data="checkout" step="付款資訊" />
      </div>
    </div>
  );
};

export default StepProgress;
