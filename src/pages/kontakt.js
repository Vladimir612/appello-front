import React from "react";
import Contact from "../components/Contact/Contact";
import { Seo } from "../components/seo";

const oNama = () => {
  return <Contact />;
};

export default oNama;

export const Head = () => <Seo title="Appello | Kontakt" pathname="kontakt" />;
