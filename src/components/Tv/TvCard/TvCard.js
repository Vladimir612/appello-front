import React from "react";
import "./tvCard.scss";
import Button from "./../../utils/Button/Button";
import "./tvCard.scss";
import { Link } from "gatsby";

const TvCard = ({ letter, newPrice, children }) => {
  return (
    <div className="tv-card">
      <div className="white-bg">
        <div className="circle">
          <p>{letter}</p>
        </div>
        <div className="content">{children}</div>
      </div>
      <div className="dark-bg">
        <p className="new">
          <span>{newPrice} </span>
          <span>RSD</span>
        </p>
        <p style={{ color: "#fff", margin: 0, lineHeight: "initial" }}>
          mesečno
        </p>
        <Button>
          <Link to="/proveraLokacije" state={{ packageClicked: letter }}>
            NARUČI ONLAJN
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default TvCard;
