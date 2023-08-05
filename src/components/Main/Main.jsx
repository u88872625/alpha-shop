import React, { useState } from "react";
import StepProgress from "./StepProgress/StepProgress";
import Step1 from "./Step/Step1";
import Step2 from "./Step/Step2";
import Step3 from "./Step/Step3";
import ProgressControl from "./ProgressControl/ProgressControl";
import Cart from "./Cart/Cart";
import { CartProvider } from "../../Context/CartContext";
import { ShippingContextProvider } from "../../Context/ShippingContext";
import { CardInfoContextProvider } from "../../Context/CardInfoContext";

const Main = () => {
  const [nowStep, setNowStep] = useState(1);

  function handlePhaseClick(isNextStep, currentStep) {
    if (isNextStep) {
      if (currentStep < 3) {
        setNowStep(nowStep + 1);
      }
    } else {
      if (nowStep > 1) {
        setNowStep(nowStep - 1);
      }
    }
  }

  return (
    <div className="main">
      <ShippingContextProvider>
        <CartProvider>
          <CardInfoContextProvider>
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
          </CardInfoContextProvider>
        </CartProvider>
      </ShippingContextProvider>
    </div>
  );
};

export default Main;
