import React from "react";
import PackageIndex from "../../../components/PackageIndex/PackageIndex";
import { Seo } from "../../../components/seo";

const PackagesHome = () => {
  return <PackageIndex />;
};

export default PackagesHome;

export const Head = () => (
  <Seo title="Appello | Paketi" pathname="usluge/paketi" />
);
