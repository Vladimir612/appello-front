import React from "react";
import LocationChecker from "./../components/LocationChecker/LocationChecker";
import { Seo } from "../components/seo";

const ProveraLokacije = ({ location }) => {
  return (
    <LocationChecker
      packageClicked={location.state && location.state.packageClicked}
    />
  );
};

export default ProveraLokacije;

export const Head = () => (
  <Seo title="Appello | Provera Lokacije" pathname="proveraLokacije" />
);
