import React from "react";
import StepProgress from "./stepProgress/StepProgress";
import Step1 from "./step/Step1";
import ProgressControl from "./progressControl/ProgressControl";
import Cart from "./Cart/Cart";

const Main = () => {
  return (
    <div className="main">
      <div className="main-container">
        <div className="main-form">
          <StepProgress />
          <Step1 />
        </div>
        <Cart />
      </div>
      <ProgressControl />
    </div>
  );
};

export default Main;
