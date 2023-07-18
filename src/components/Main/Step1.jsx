import React from "react";
import counties from "./counties";

const Step1 = () => {
  return (
    <div>
      <form>
        <h2 className="form-title">寄送地址</h2>
        <div className="form-container">
          <div className="input-group input-w-lg-2 input-gender">
            <div className="input-label">稱謂</div>
            <select className="select-container ">
              <option value="mr" selected>
                先生
              </option>
              <option value="ms">女士</option>
              <option value="mx">不明</option>
            </select>
          </div>
          <div className="input-group  input-name">
            <label className="input-label">姓名</label>
            <input type="text" placeholder="請輸入姓名"></input>
          </div>
          <div className="input-group  input-phone">
            <label className="input-label">電話</label>
            <input type="text" placeholder="請輸入行動電話"></input>
          </div>
          <div className="input-group  input-email">
            <label className="input-label">Email</label>
            <input type="text" placeholder="請輸入電子郵件"></input>
          </div>
          <div className="input-group  input-county">
            <label className="input-label">縣市</label>
            <select>
              {counties.map((county) => (
                <option>{county}</option>
              ))}
            </select>
          </div>
          <div className="input-group  input-address">
            <label className="input-label">地址</label>
            <input type="text" placeholder="請輸入地址"></input>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Step1;
