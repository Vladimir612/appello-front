import React from "react";
import Layout from "./../utils/Layout/Layout";
import Title from "../utils/Title/Title";
import Specification from "./Specification/Specification";
import Subtitle from "./../utils/Subtitle/Subtitle";
import InternetCard from "../utils/InternetCard/InternetCard";
import "./internet.scss";
import "../../globalClasses.scss";

const Internet = () => {
  return (
    <Layout>
      <Title>Internet</Title>
      <Specification />
      <Subtitle>STANDARDNA PONUDA</Subtitle>
      <div className="cards">
        <InternetCard
          letter="M"
          download="150"
          upload="75"
          newPrice="1,799"
          oldPrice="2,499"
        >
          <ul>
            <li>Prvih 12 meseci za 1 dinar mesečno</li>
            <li>19.000 dinara popusta za kupovinu novog telefona</li>
          </ul>
        </InternetCard>
        <InternetCard
          letter="L"
          download="250"
          upload="125"
          newPrice="3,299"
          oldPrice="1,999"
        >
          <ul>
            <li>Prvih 12 meseci za 1 dinar mesečno</li>
            <li>19.000 dinara popusta za kupovinu novog telefona</li>
          </ul>
        </InternetCard>
      </div>
      <p
        style={{
          color: "#002340",
          fontWeight: 600,
          fontSize: "1.15rem",
          marginBottom: "3rem",
          textAlign: "center",
        }}
        className="padding-global"
      >
        *Cene su prikazane sa uračunatim popustom od 100 RSD za e-račun.
      </p>
      <Subtitle>SPECIJALNA PONUDA</Subtitle>
      <div className="cards">
        <InternetCard
          letter="M"
          download="300"
          upload="150"
          newPrice="2,299"
          oldPrice="1,599"
        >
          <ul>
            <li>Prvih 12 meseci za 1 dinar mesečno</li>
            <li>19.000 dinara popusta za kupovinu novog telefona</li>
          </ul>
        </InternetCard>
        <InternetCard
          letter="L"
          download="500"
          upload="250"
          newPrice="2,999"
          oldPrice="1,899"
        >
          <ul>
            <li>Prvih 12 meseci za 1 dinar mesečno</li>
            <li>19.000 dinara popusta za kupovinu novog telefona</li>
          </ul>
        </InternetCard>
      </div>
      <p
        style={{
          color: "#002340",
          fontWeight: 600,
          fontSize: "1.15rem",
          textAlign: "center",
          marginBottom: "3rem",
        }}
        className="padding-global"
      >
        *Cene su prikazane sa uračunatim popustom od 100 RSD za e-račun.
      </p>
    </Layout>
  );
};

export default Internet;
