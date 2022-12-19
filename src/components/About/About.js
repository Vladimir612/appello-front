import React from "react";
import Layout from "./../utils/Layout/Layout";
import Title from "../utils/Title/Title";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import "./about.scss";
import "../../globalClasses.scss";

const About = () => {
  const data = useStaticQuery(graphql`
    query getAboutImg {
      file(relativePath: { eq: "aboutImg.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
    }
  `);

  return (
    <Layout>
      <Title>O NAMA</Title>
      <GatsbyImage
        image={data.file.childImageSharp.gatsbyImageData}
        imgStyle={{ objectFit: "contain" }}
        loading="eager"
        alt="About appello"
        className="appello-about-wrapper"
      />
      <div className="about-text padding-global">
        <p>
          Mi smo kompanija koja posluje u oblasti <b>direktnog marketinga</b> i{" "}
          <b>direktne prodaje</b> kao i u oblasti{" "}
          <b>uvođenja optičke infrastrukture</b>.
        </p>
        <p>
          U Srbiji smo godinama{" "}
          <b>partneri najvećih telekomunikacionih kompanija</b> i angažovani smo
          na poslovima prodaje i instalacije telekomunikacionih usluga.
        </p>
        <p>
          Naš posao je da{" "}
          <b>
            posredujemo u povezivanju ljudi sa drugim ljudima i sa svetom koji
            ih okružuje
          </b>{" "}
          - jer kada znamo da ljudi zavise od tih veza radimo sve što je u našoj
          moći da im pomognemo u ostvarivanju tog cilja.
        </p>
        <p>
          Svoju <b>snagu temeljimo na svojim zaposlenima</b> sa višegodišnjim
          iskustvom na tržištima EU i Srbije, kao i na razrađenom sistemu
          prodaje razvijenim u Holandiji.
        </p>
        <p>
          Trenutno rastemo i otvaramo nove radne pozicije –{" "}
          <b>
            tražimo nove ljude i proširujemo ponudu usluga za nove klijente.
          </b>
        </p>
      </div>
    </Layout>
  );
};

export default About;
