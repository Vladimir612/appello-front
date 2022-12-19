import React from "react";
import "./duoCard.scss";
import Button from "./../../utils/Button/Button";

const DuoCard = ({
  letter,
  download,
  upload,
  newPrice,
  oldPrice,
  children,
  customStyle,
}) => {
  return (
    <div className="duo-card">
      <div className="white-bg">
        <div className="circle">
          <p style={{ ...customStyle }}>{letter}</p>
        </div>
        <p style={{ margin: "1rem 0", fontWeight: 700 }}>Optički internet</p>
        <div className="row">
          <div className="download">
            <p>Download do</p>
            <p>{download} Mbps</p>
          </div>
          <div className="upload">
            <p>Upload do</p>
            <p>{upload} Mbps</p>
          </div>
        </div>
        <div className="content">{children}</div>
      </div>
      <div className="dark-bg">
        <p className="old">
          <span>{oldPrice}</span>
          <span>RSD</span>
          <span className="line"></span>
        </p>
        <p className="new">
          <span>{newPrice} </span>
          <span>RSD</span>
        </p>
        <p style={{ color: "#fff", margin: 0, lineHeight: "initial" }}>
          mesečno
        </p>
        <Button>NARUČI ONLAJN</Button>
      </div>
    </div>
  );
};

export default DuoCard;
