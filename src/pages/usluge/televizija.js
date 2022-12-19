import React from "react";
import { Seo } from "../../components/seo";
import Tv from "../../components/Tv/Tv";

const Televizija = () => {
  return <Tv />;
};

export default Televizija;

export const Head = () => (
  <Seo title="Appello | Televizija" pathname="usluge/televizija" />
);
