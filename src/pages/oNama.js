import React from "react";
import About from "../components/About/About";
import { Seo } from "../components/seo";

const oNama = () => {
  return <About />;
};

export default oNama;

export const Head = () => <Seo title="Appello | O nama" pathname="oNama" />;
