import React from "react";

function CountySelect() {
  const counties = [
    { text: "請選擇縣市" },
    { text: "台北市" },
    { text: "新北市" },
    { text: "基隆市" },
    { text: "桃園市" },
    { text: "新竹縣" },
    { text: "苗栗縣" },
    { text: "台中市" },
    { text: "彰化縣" },
    { text: "雲林縣" },
    { text: "嘉義縣" },
    { text: "台南市" },
    { text: "高雄市" },
    { text: "屏東縣" },
    { text: "台東縣" },
    { text: "花蓮縣" },
    { text: "宜蘭縣" },
    { text: "南投縣" },
  ];

  return (
    <>
      {counties.map((county) => (
        <option>{county.text}</option>
      ))}
    </>
  );
}

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
              <CountySelect />
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
