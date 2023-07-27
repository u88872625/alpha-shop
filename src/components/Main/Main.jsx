import React, { useState } from "react";
import StepProgress from "./stepProgress/StepProgress";
import Step1 from "./step/Step1";
import Step2 from "./step/Step2";
import Step3 from "./step/Step3";
import ProgressControl from "./progressControl/ProgressControl";
import Cart from "./Cart/Cart";

const Main = () => {
  const [nowStep, setNowStep] = useState(1);

  function handlePhaseClick(e) {
    if (e.target.className === "next-btn") {
      if (nowStep < 3) {
        setNowStep(nowStep + 1);
      }
    }

    if (e.target.className === "prev-btn") {
      if (nowStep > 1) {
        setNowStep(nowStep - 1);
      }
    }
  }

  return (
    <div className="main">
      <div className="main-container">
        <div className="main-form">
          <StepProgress nowStep={nowStep} />
          {nowStep === 1 && <Step1 />}
          {nowStep === 2 && <Step2 />}
          {nowStep === 3 && <Step3 />}
        </div>
        <Cart />
      </div>
      <ProgressControl nowStep={nowStep} onClick={handlePhaseClick} />
    </div>
  );
};

export default Main;
