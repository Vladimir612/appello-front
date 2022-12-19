import React from "react";
import PackagePlus from "./../../../components/PackagePlus/PackagePlus";
import { Seo } from "../../../components/seo";

const PlusPaketi = () => {
  return <PackagePlus />;
};

export default PlusPaketi;

export const Head = () => (
  <Seo title="Appello | Plus paketi" pathname="usluge/paketi/plusPaketi" />
);
