import React from "react";
import Layout from "./../utils/Layout/Layout";
import Title from "../utils/Title/Title";
import Subtitle from "./../utils/Subtitle/Subtitle";
import "./career.scss";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Career = () => {
  const data = useStaticQuery(graphql`
    query getCareerImages {
      firstImg: file(relativePath: { eq: "worker.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      secondImg: file(relativePath: { eq: "manager.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
    }
  `);

  return (
    <Layout>
      <Title>KARIJERA</Title>
      <Subtitle>OTVORENE POZICIJE:</Subtitle>
      <div className="positions">
        <div className="position">
          <div className="circle">
            <GatsbyImage
              image={data.firstImg.childImageSharp.gatsbyImageData}
              imgStyle={{ objectFit: "contain" }}
              alt="Instalater telekomunikacionih mreža"
              className="pos-wrapper"
            />
          </div>
          <p>Instalater telekomunikacionih mreža</p>
        </div>
        <div className="position">
          <div className="circle">
            <GatsbyImage
              image={data.secondImg.childImageSharp.gatsbyImageData}
              imgStyle={{ objectFit: "contain" }}
              alt="Savetnik za telekomunikacione usluge"
              className="pos-wrapper"
            />
          </div>
          <p>Savetnik za telekomunikacione usluge</p>
        </div>
      </div>
      <Subtitle customStyle={{ fontSize: "1.2rem", margin: "5rem 0" }}>
        Poseti{" "}
        <a
          href="http://teleset.rs/karijera/"
          style={{
            color: "#1D75B6",
            textDecoration: "underline",
          }}
        >
          teleset.rs/karijera
        </a>{" "}
        za više informacija
      </Subtitle>
    </Layout>
  );
};

export default Career;
