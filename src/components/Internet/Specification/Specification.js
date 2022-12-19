import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import "./specification.scss";
import SpecItem from "./SpecItem/SpecItem";

const Specification = () => {
  const data = useStaticQuery(graphql`
    query getNetImages {
      first: file(relativePath: { eq: "internet1.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      second: file(relativePath: { eq: "internet2.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      third: file(relativePath: { eq: "internet3.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      fourth: file(relativePath: { eq: "internet4.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
    }
  `);

  return (
    <section className="spec-section">
      <SpecItem
        img={data.first.childImageSharp.gatsbyImageData}
        title="PROTOK ČAK 1GBPS"
      >
        <p>Pouzdan i brz internet u CELOM domaćinstvu</p>
      </SpecItem>
      <SpecItem
        img={data.second.childImageSharp.gatsbyImageData}
        title="WIFI DOPIRE U SVAKI KUTAK VAŠEG DOMA"
      >
        <p>
          Ako se na putu WiFi signala ispreče noseći zidovi i druge smetnje naše
          rešenje je naš WiFi Satelit – uređaj koji će i najzabačeniji kutak
          tvog doma obasjati internetom.
        </p>
      </SpecItem>
      <SpecItem
        img={data.third.childImageSharp.gatsbyImageData}
        title="2/1 odnos preuzimanja i slanja (download/upload)"
      >
        <p>
          Ako se na putu WiFi signala ispreče noseći zidovi i druge smetnje naše
          rešenje je naš WiFi Satelit – uređaj koji će i najzabačeniji kutak
          tvog doma obasjati internetom.
        </p>
        <p>Mi se hvalimo i ističemo i drugu brojku.</p>
        <p>
          Zašto je značajna brzina slanja (upload) vidi{" "}
          <a href="google.rs" color="#1D75B6">
            OVDE
          </a>
          .
        </p>
      </SpecItem>
      <SpecItem
        img={data.fourth.childImageSharp.gatsbyImageData}
        title="IZUZETNO KORISNIČKO ISKUSTVO"
      >
        <p>Birate dan i vreme za instalaciju</p>
        <p>Šaljemo SMS obaveštenje kada se instalater uputi na Vašu lokaciju</p>
        <p>
          Instalaciju obavljamo uz minimum burgijanja i bezrazvlačenja suvišnih
          kablova
        </p>
        <p>
          Naši instalateri poštuju sve epidemiološke mere i uvek počiste za
          sobom
        </p>
      </SpecItem>
    </section>
  );
};

export default Specification;
