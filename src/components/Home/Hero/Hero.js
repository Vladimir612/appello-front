import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import "./hero.scss";
import "../../../globalClasses.scss";

const Hero = () => {
  const data = useStaticQuery(graphql`
    query getHeroImage {
      hero: file(relativePath: { eq: "calendar.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      trapese: file(relativePath: { eq: "trapese.png" }) {
        childImageSharp {
          gatsbyImageData(width: 350, layout: FIXED)
        }
      }
    }
  `);
  return (
    <main className="hero padding-global">
      <GatsbyImage
        image={data.hero.childImageSharp.gatsbyImageData}
        imgStyle={{ objectFit: "contain", objectPosition: "left" }}
        loading="eager"
        alt="Ilustracija optičkih kablova"
        className="hero-img-wrapper first"
      />
      <div className="right">
        <h1>ISKLJUČIVO OPTIČKI INTERNET</h1>
        <div className="illustration-text">
          <GatsbyImage
            image={data.trapese.childImageSharp.gatsbyImageData}
            className="hero-img-wrapper"
            imgStyle={{
              objectFit: "contain",
              objectPosition: "right",
            }}
            loading="eager"
            alt="Trapese"
          />
          <div className="text">
            <p className="white">već od</p>
            <div className="helper-one">
              <p className="number">1599</p>
              <div className="helper-two">
                <p>din</p>
                <p>mesečno</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
