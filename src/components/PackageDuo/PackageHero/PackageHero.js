import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import "./packageHero.scss";
import "../../../globalClasses.scss";

const PackageHero = () => {
  const data = useStaticQuery(graphql`
    query getPackageHeroImages {
      calendar: file(relativePath: { eq: "calendar.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      frTrapese: file(relativePath: { eq: "frTrapese.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      backTrapese: file(relativePath: { eq: "backTrapese.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      line: file(relativePath: { eq: "line.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
    }
  `);
  return (
    <div className="package-hero padding-global">
      <div className="flex-wrapper">
        <GatsbyImage
          image={data.calendar.childImageSharp.gatsbyImageData}
          imgStyle={{ objectFit: "contain", objectPosition: "left" }}
          loading="eager"
          alt="Appelo kalendar"
          className="hero-img-wrapper"
        />
        <div className="center">
          <p>
            prvih <span style={{ color: "#b4ff00" }}>12 meseci</span>
          </p>
          <h2>1 din</h2>
          <GatsbyImage
            image={data.line.childImageSharp.gatsbyImageData}
            imgStyle={{ objectFit: "contain", objectPosition: "left" }}
            loading="eager"
            alt="Appello line"
            className="hero-img-wrapper"
          />
          <p>preostalih 12 meseci</p>
          <h3>
            od <span style={{ fontSize: "2.1rem" }}>1,999</span> din do{" "}
            <span style={{ fontSize: "2.1rem" }}>3,199</span> din
          </h3>
        </div>
      </div>
      <div className="right">
        <div className="sale-illustration">
          <GatsbyImage
            image={data.frTrapese.childImageSharp.gatsbyImageData}
            imgStyle={{ objectFit: "contain", objectPosition: "left" }}
            loading="eager"
            alt="Frontalni trapez"
            className="hero-img-wrapper first"
          />
          <GatsbyImage
            image={data.backTrapese.childImageSharp.gatsbyImageData}
            imgStyle={{ objectFit: "contain", objectPosition: "left" }}
            loading="eager"
            alt="Pozadinski trapez"
            className="hero-img-wrapper second"
          />
          <h3>AKCIJA</h3>
        </div>
        <p>
          Prvih 12 meseci DUO paketi(Optički internet + Televizija) za 1 RSD
        </p>
        <p>
          Preostalih 12 meseci sa posebnim popustom već od 1.999 RSD mesečno
        </p>
      </div>
    </div>
  );
};
export default PackageHero;
