import React from "react";
import * as styles from "./button.module.scss";

const Button = ({ cb, children, disabled }) => {
  if (disabled === null) disabled = false;

  return (
    <button
      className={`${styles.globalBtn} ${disabled && styles.disabled}`}
      onClick={cb}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
