import React from "react";
import * as styles from "./footer.module.scss";
import { StaticImage } from "gatsby-plugin-image";

import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <StaticImage
          src="../../../images/logo.png"
          alt="Appello logo"
          className={styles.logo}
        />
        <div className={styles.text}>&copy; Appello 2022</div>
      </div>
      <div className={styles.socialMedia}>
        <a
          href="https://www.instagram.com/binarybioskop/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillInstagram
            size={30}
            color="#fff"
            style={{ cursor: "pointer" }}
          />
        </a>
        <a
          href="https://www.facebook.com/binarybioskop1011"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillFacebook
            size={30}
            color="#fff"
            style={{ cursor: "pointer" }}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
