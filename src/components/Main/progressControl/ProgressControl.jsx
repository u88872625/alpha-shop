import React from "react";
import { ReactComponent as IconArrow } from "../../icon/arrow.svg";

function NextBtn({ onClick }) {
  return (
    <React.Fragment>
      <button className="next-btn" onClick={onClick}>
        下一步
        <IconArrow className="next-arrow" />
      </button>
    </React.Fragment>
  );
}

const ProgressControl = ({ number, data, onClick }) => {
  return (
    <div className="progressControl">
      <div className="btn-container" data-phase={data}>
        <NextBtn onClick={onClick} />
      </div>
    </div>
  );
};

export default ProgressControl;
