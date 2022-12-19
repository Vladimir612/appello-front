import React from "react";
import "./internetCard.scss";
import Button from "./../Button/Button";

const InternetCard = ({
  letter,
  download,
  upload,
  newPrice,
  oldPrice,
  children,
}) => {
  return (
    <div className="internet-card">
      <div className="white-bg">
        <div className="circle">
          <p>{letter}</p>
        </div>
        <p style={{ margin: "1rem 0" }}>Optički internet</p>
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

export default InternetCard;
