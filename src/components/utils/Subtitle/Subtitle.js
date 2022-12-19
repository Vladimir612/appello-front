import React from "react";

const Subtitle = ({ children, customStyle }) => {
  const style = {
    color: "#002340",
    fontSize: "2rem",
    margin: "4.5rem 0 2.5rem 0",
    fontWeight: "600",
    letterSpacing: "1px",
    textAlign: "center",
    padding: "0 1rem",
    ...customStyle,
  };

  return <h1 style={style}>{children}</h1>;
};

export default Subtitle;
