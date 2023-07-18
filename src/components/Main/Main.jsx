import React from "react";
import StepProgress from "./StepProgress";
import Step1 from "./Step1";
import ProgressControl from "./ProgressControl";
import Cart from "../Cart/Cart";

const Main = () => {
  return (
    <div className="main">
      <StepProgress />
      <Step1 />
      <ProgressControl />
      <Cart />
    </div>
  );
};

export default Main;
