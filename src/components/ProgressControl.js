import React from "react";
import { ReactComponent as IconArrow } from "../img/arrow.svg";

function NextBtn({ onClick }) {
  return (
    <>
      <button className="next-btn" onClick={onClick}>
        下一步
        <IconArrow className="next-arrow" />
      </button>
    </>
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
