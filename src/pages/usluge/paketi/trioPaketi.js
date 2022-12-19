import React from "react";
import PackageTrio from "../../../components/PackageTrio/PackageTrio";
import { Seo } from "../../../components/seo";

const TrioPaketi = () => {
  return <PackageTrio />;
};

export default TrioPaketi;

export const Head = () => (
  <Seo title="Appello | Trio paketi" pathname="usluge/paketi/trioPaketi" />
);
