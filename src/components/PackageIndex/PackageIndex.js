import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../utils/Layout/Layout";
import Title from "../utils/Title/Title";
import "./packageIndex.scss";
import Subtitle from "../utils/Subtitle/Subtitle";

const PackageIndex = () => {
  const data = useStaticQuery(graphql`
    query getPackagesImages {
      firstPackage: file(relativePath: { eq: "pluspaket.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      secondPackage: file(relativePath: { eq: "duopaket.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      thirdPackage: file(relativePath: { eq: "triopaket.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
    }
  `);

  return (
    <Layout>
      <Title>PAKETI</Title>
      <Subtitle customStyle={{ fontSize: "1.2rem" }}>
        Izaberite jednu od ovih kategorija paketa:
      </Subtitle>
      <div className="packages">
        <Link to="plusPaketi">
          <div className="package">
            <div className="circle">
              <GatsbyImage
                image={data.firstPackage.childImageSharp.gatsbyImageData}
                imgStyle={{ objectFit: "contain" }}
                alt="Plus paketi"
                className="pack-wrapper"
              />
            </div>
            <div className="package-text">
              <h4>+ Paketi</h4>
              <p>Internet + fiksni</p>
            </div>
          </div>
        </Link>
        <Link to="duoPaketi">
          <div className="package">
            <div className="circle">
              <GatsbyImage
                image={data.secondPackage.childImageSharp.gatsbyImageData}
                imgStyle={{ objectFit: "contain" }}
                alt="Duo paketi"
                className="pack-wrapper"
              />
            </div>
            <div className="package-text">
              <h4>Duo paketi</h4>
              <p>Internet + televizija</p>
            </div>
          </div>
        </Link>
        <Link to="trioPaketi">
          <div className="package">
            <div className="circle">
              <GatsbyImage
                image={data.thirdPackage.childImageSharp.gatsbyImageData}
                imgStyle={{ objectFit: "contain" }}
                alt="Trio paketi"
                className="pack-wrapper"
              />
            </div>
            <div className="package-text">
              <h4>Trio paketi</h4>
              <p>Internet + televizija</p>
            </div>
          </div>
        </Link>
      </div>
    </Layout>
  );
};

export default PackageIndex;
