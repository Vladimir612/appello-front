import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import "./services.scss";
import { Link } from "gatsby";

const Services = () => {
  return (
    <div className="services-section">
      <h2>Koje su vam usluge potrebne?</h2>
      <div className="services-flex">
        <Link to="usluge/internet">
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
        </Link>
        <Link to="usluge/televizija">
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
        </Link>
        <Link to="usluge/paketi/plusPaketi">
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
        </Link>
        <Link to="usluge/paketi">
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
        </Link>
      </div>
    </div>
  );
};

export default Services;
