import React from "react";
import "./channels.scss";

const Channels = () => {
  return (
    <div className="channels">
      <h2>SPISAK KANALA</h2>
      <p>Kliknite na jedan od paketa da vidite njegov spisak kanala</p>
      <div className="circle-row">
        <div className="circle">
          <h4>OTT M</h4>
          <p>Paket</p>
        </div>
        <div className="circle">
          <h4>M</h4>
          <p>Paket</p>
        </div>
        <div className="circle">
          <h4>L</h4>
          <p>Paket</p>
        </div>
      </div>
    </div>
  );
};

export default Channels;
