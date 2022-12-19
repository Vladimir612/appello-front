import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import "./services.scss";

const Services = () => {
  return (
    <div className="services-section">
      <h2>Koje su vam usluge potrebne?</h2>
      <div className="services-flex">
        <div className="service">
          <div className="circle">
            <StaticImage
              src="../../../images/wifi.webp"
              alt="Internet icon"
              className="img-wrapper"
            />
          </div>
          <h3>Internet</h3>
        </div>
        <div className="service">
          <div className="circle">
            <StaticImage
              src="../../../images/tv.webp"
              alt="Televizija icon"
              className="img-wrapper"
            />
          </div>
          <h3>Televizija</h3>
        </div>
        <div className="service">
          <div className="circle">
            <StaticImage
              src="../../../images/fiksni.webp"
              alt="Fiksni icon"
              className="img-wrapper"
            />
          </div>
          <h3>Fiksni</h3>
        </div>
        <div className="service">
          <div className="circle">
            <StaticImage
              src="../../../images/paketi.webp"
              alt="Paketi icon"
              className="img-wrapper"
            />
          </div>
          <h3>Paketi</h3>
        </div>
      </div>
    </div>
  );
};

export default Services;
