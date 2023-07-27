import React from "react";
import { ReactComponent as IconNextArrow } from "../../icon/NextArrow.svg";
import { ReactComponent as IconPrevArrow } from "../../icon/PrevArrow.svg";

function NextBtn({ onClick }) {
  return (
    <React.Fragment>
      <button className="next-btn" onClick={onClick}>
        下一步
        <IconNextArrow className="next-arrow" />
      </button>
    </React.Fragment>
  );
}

function PrevBtn({ onClick }) {
  return (
    <React.Fragment>
      <button className="prev-btn" onClick={onClick}>
        <IconPrevArrow className="prev-arrow" />
        上一步
      </button>
    </React.Fragment>
  );
}

const ProgressControl = ({ nowStep, onClick }) => {
  return (
    <div className="progressControl">
      <div className="btn-container">
        {nowStep > 1 && <PrevBtn onClick={onClick} />}
        {nowStep < 3 ? (
          <NextBtn onClick={onClick} />
        ) : (
          <button className="checkout-btn">確認訂單</button>
        )}
      </div>
    </div>
  );
};

export default ProgressControl;
