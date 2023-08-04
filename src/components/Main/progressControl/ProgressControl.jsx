import React, { useContext } from "react";
import { CardInfoContext } from "../../../Context/CardInfoContext";
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
  const { handleCardSubmit } = useContext(CardInfoContext);

  return (
    <div className="progressControl">
      <div className="btn-container">
        {nowStep > 1 && <PrevBtn onClick={(e) => onClick(false, nowStep)} />}
        {nowStep < 3 ? (
          <NextBtn onClick={(e) => onClick(true, nowStep)} />
        ) : (
          <button className="checkout-btn" onClick={(e) => handleCardSubmit(e)}>
            確認訂單
          </button>
        )}
      </div>
    </div>
  );
};

export default ProgressControl;
