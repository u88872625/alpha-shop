import React from "react";
import StepProgress from "./StepProgress";
import Step1 from "./Step1";
import ProgressControl from "./ProgressControl";

const Main = () => {
  return (
    <div className="main">
      <StepProgress />
      <Step1 />
      <ProgressControl />
    </div>
  );
};

export default Main;
