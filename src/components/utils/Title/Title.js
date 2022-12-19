import React from "react";
import "../../../globalClasses.scss";

const Title = ({ children }) => {
  const style = {
    color: "#002340",
    fontSize: "2.4rem",
    margin: "8.5rem 0 4rem 0",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "2px",
    // ...customStyle,
  };

  return (
    <h1 style={style} className="padding-global">
      {children}
    </h1>
  );
};

export default Title;
