import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import "./specItem.scss";
import "../../../../globalClasses.scss";

const SpecItem = ({ title, img, children }) => {
  return (
    <div className="spec-item padding-global">
      <div className="left">
        <GatsbyImage image={img} alt={title} className="img-wrapper" />
        <h3 className="title">{title}</h3>
      </div>
      <div className="text">{children}</div>
    </div>
  );
};

export default SpecItem;
