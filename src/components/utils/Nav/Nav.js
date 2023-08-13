import React, { useState } from "react";
import * as styles from "./nav.module.scss";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import { IoIosArrowDown } from "react-icons/io";
import "../../../globalClasses.scss";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  return (
    <div className="global-wrapper bg-blue">
      <nav className={`${styles.nav} padding-global`}>
        <Link to="/">
          <StaticImage
            src="../../../images/logo.png"
            alt="Appello logo"
            className={styles.logo}
          />
        </Link>
        <div
          className={
            menuOpen ? `${styles.links} ${styles.active}` : styles.links
          }
        >
          <button
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            <Link to="/" activeStyle={{ color: "#B4FF00" }}>
              Početna
            </Link>
          </button>
          <div className={styles.relBtn}>
            <button
              onClick={() => {
                setSubmenuOpen(!submenuOpen);
              }}
              className={styles.submenuBtn}
            >
              Usluge
              <IoIosArrowDown size={25} color="#fff" />
            </button>

            <div
              className={`${styles.sublinks} ${submenuOpen && styles.active}`}
            >
              <button
                onClick={() => {
                  setMenuOpen(false);
                  setSubmenuOpen(false);
                }}
              >
                <Link to="/usluge/internet" activeStyle={{ color: "#B4FF00" }}>
                  Internet
                </Link>
              </button>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  setSubmenuOpen(false);
                }}
              >
                <Link
                  to="/usluge/televizija"
                  activeStyle={{ color: "#B4FF00" }}
                >
                  Digitalna televizija
                </Link>
              </button>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  setSubmenuOpen(false);
                }}
              >
                <Link
                  to="/usluge/paketi/plusPaketi"
                  activeStyle={{ color: "#B4FF00" }}
                >
                  Fiksni
                </Link>
              </button>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  setSubmenuOpen(false);
                }}
              >
                <Link to="/usluge/paketi" activeStyle={{ color: "#B4FF00" }}>
                  Paketi
                </Link>
              </button>
            </div>
          </div>
          <button
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            <Link to="/oNama" activeStyle={{ color: "#B4FF00" }}>
              O nama
            </Link>
          </button>
          <button
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            <Link to="/kontakt" activeStyle={{ color: "#B4FF00" }}>
              Kontakt
            </Link>
          </button>
          <button
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            <Link to="/karijera" activeStyle={{ color: "#B4FF00" }}>
              Karijera
            </Link>
          </button>
        </div>
        <button
          className={styles.hamburgerMenu}
          onClick={() => {
            setMenuOpen(!menuOpen);
            setShouldAnimate(true);
          }}
        >
          <motion.div
            className={styles.line}
            animate={
              shouldAnimate && {
                y: menuOpen
                  ? ["0rem", "0.4rem", "0.4rem"]
                  : ["0.4rem", "0.4rem", "0rem"],
                rotate: menuOpen ? [0, 0, 45] : [45, 0, 0],
              }
            }
            transition={{ duration: 0.5 }}
          ></motion.div>
          <motion.div
            className={styles.line}
            animate={
              shouldAnimate && {
                opacity: menuOpen ? [1, 0, 0] : [0, 0, 1],
              }
            }
            transition={{ duration: 0.5 }}
          ></motion.div>
          <motion.div
            className={styles.line}
            animate={
              shouldAnimate && {
                y: menuOpen
                  ? ["0rem", "-0.4rem", "-0.4rem"]
                  : ["-0.4rem", "-0.4rem", "0rem"],
                rotate: menuOpen ? [0, 0, -45] : [-45, 0, 0],
              }
            }
            transition={{ duration: 0.5 }}
          ></motion.div>
        </button>
      </nav>
    </div>
  );
};

export default Nav;
