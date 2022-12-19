import React from "react";
import * as styles from "./button.module.scss";

const Button = ({ cb, children }) => {
  return (
    <button className={styles.globalBtn} onClick={cb}>
      {children}
    </button>
  );
};

export default Button;
