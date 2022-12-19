import * as React from "react";
import Home from "../components/Home/Home";
import { Seo } from "./../components/seo";

const IndexPage = () => {
  return <Home />;
};

export default IndexPage;

export const Head = () => <Seo />;
