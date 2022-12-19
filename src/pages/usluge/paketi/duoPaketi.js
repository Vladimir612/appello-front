import React from "react";
import PackageDuo from "./../../../components/PackageDuo/PackageDuo";
import { Seo } from "../../../components/seo";

const DuoPaketi = () => {
  return <PackageDuo />;
};

export default DuoPaketi;

export const Head = () => (
  <Seo title="Appello | Duo paketi" pathname="usluge/paketi/duoPaketi" />
);
