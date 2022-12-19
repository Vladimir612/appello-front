import React from "react";
import Internet from "../../components/Internet/Internet";
import { Seo } from "../../components/seo";

const InternetPage = () => {
  return <Internet />;
};

export default InternetPage;

export const Head = () => (
  <Seo title="Appello | Internet" pathname="usluge/internet" />
);
