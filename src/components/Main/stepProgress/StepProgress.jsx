import React from "react";
import { ReactComponent as DoneIcon } from "../../icon/DoneIcone.svg";

function Step({ number, step }) {
  return (
    <>
      <span className="stepper" data-number={number}>
        <div className="step-circle">
          <DoneIcon className="done-icon" />
          <span className="circle-text">{number}</span>
        </div>
        <span className="step-label">{step}</span>
      </span>
      {number !== 3 && <span className="step-bar" data-number={number}></span>}
    </>
  );
}

const StepProgress = ({ nowStep }) => {
  return (
    <div className="stepProgress">
      <h1 className="progress-title">結帳</h1>
      <div className="step-container" data-step={nowStep}>
        <Step number={1} step="寄送地址" />
        <Step number={2} step="運送方式" />
        <Step number={3} step="付款資訊" />
      </div>
    </div>
  );
};

export default StepProgress;
