import React from "react";
import Layout from "../utils/Layout/Layout";
import Title from "../utils/Title/Title";
import MoreInfo from "./MoreInfo/MoreInfo";
import CardsContainer from "./CardsContainer/CardsContainer";
import "./tv.scss";
import "../../globalClasses.scss";
import Channels from "./Channels/Channels";
import "../../globalClasses.scss";

const Tv = () => {
  return (
    <Layout>
      <Title>DIGITALNA TELEVIZIJA</Title>
      <p className="padding-global tv-par">
        Digitalna televizija dostupna{" "}
        <b>bilo gde u Srbiji preko bilo kog interneta</b>.
      </p>
      <MoreInfo />
      <CardsContainer />
      <p className="padding-global tv-par" style={{ textAlign: "center" }}>
        *Cene su prikazane sa uračunatim popustom od 100 RSD za e-račun.
      </p>
      <Channels />
    </Layout>
  );
};

export default Tv;
