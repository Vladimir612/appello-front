import React from "react";
import Layout from "../utils/Layout/Layout";
import Hero from "./Hero/Hero";
import Location from "./Location/Location";
import Services from "./Services/Services";
import Faq from "./Faq/Faq";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Location />
      <Services />
      <Faq />
    </Layout>
  );
};

export default Home;
