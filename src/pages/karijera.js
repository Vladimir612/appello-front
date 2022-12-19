import React from "react";
import Career from "../components/Career/Career";
import { Seo } from "../components/seo";

const Karijera = () => {
  return <Career />;
};

export default Karijera;

export const Head = () => (
  <Seo title="Appello | Karijera" pathname="karijera" />
);
