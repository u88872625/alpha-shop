import React from "react";
import StepProgress from "./StepProgress";
import Step1 from "./Step1";
import ProgressControl from "./ProgressControl";
import Cart from "../Cart/Cart";

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
