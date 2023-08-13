import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import "./location.scss";
import Button from "./../../utils/Button/Button";
import "../../../globalClasses.scss";
import { Link } from "gatsby";

const Location = () => {
  return (
    <div className="location-section padding-global">
      <StaticImage
        src="../../../images/locationWhite.png"
        alt="Location icon"
        className="img-wrapper"
      />
      <p>Saznajte koje su usluge dostupne na Vašoj adresi:</p>
      <Button>
        <Link to="/proveraLokacije">
          PROVERITE DOSTUPNOST NA VAŠOJ LOKACIJI
        </Link>
      </Button>
      <p>
        Potrebna vam je <span>pomoć</span>?
      </p>
    </div>
  );
};

export default Location;
