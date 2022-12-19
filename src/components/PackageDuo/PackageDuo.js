import React from "react";
import Subtitle from "../utils/Subtitle/Subtitle";
import Layout from "./../utils/Layout/Layout";
import Title from "./../utils/Title/Title";
import DuoCard from "./DuoCard/DuoCard";
import PackageHero from "./PackageHero/PackageHero";
import "../../globalClasses.scss";

const PackageDuo = () => {
  return (
    <Layout>
      <Title>DUO PAKETI (INTERNET + TV)</Title>
      <PackageHero />
      <Subtitle>STANDARDNA PONUDA</Subtitle>
      <div className="cards">
        <DuoCard
          letter="DUO M"
          download="150"
          upload="75"
          newPrice="2,499"
          oldPrice="3,499"
          subtitle="Digitalna televizija"
        >
          <>
            <p style={{ margin: "1rem 0", fontWeight: 700 }}>
              Digitalna televizija
            </p>
            <ul className="line-after">
              <li>Izbor kanala koji se zaista gledaju</li>
              <li>Katalog serija, filmova i emisija za celu porodicu</li>
              <li>Najgledaniji sport (Arena, Eurosport)</li>
              <li>
                Hipernet TV box sa preinstaliranim YouTube, Deezer i HBO Max
                aplikacijama
              </li>
            </ul>
            <ul>
              <li>Prvih 12 meseci za 1 dinar mesečno</li>
              <li>19.000 dinara popusta za kupovinu novog telefona</li>
            </ul>
          </>
        </DuoCard>
        <DuoCard
          letter="DUO L"
          download="250"
          upload="125"
          newPrice="3,199"
          oldPrice="4,699"
          subtitle="Digitalna televizija"
        >
          <>
            <p style={{ margin: "1rem 0", fontWeight: 700 }}>
              Digitalna televizija
            </p>
            <ul className="line-after">
              <li>Izbor kanala koji se zaista gledaju</li>
              <li>Katalog serija, filmova i emisija za celu porodicu</li>
              <li>Najgledaniji sport (Arena, Eurosport)</li>
              <li>
                Hipernet TV box sa preinstaliranim YouTube, Deezer i HBO Max
                aplikacijama
              </li>
            </ul>
            <ul>
              <li>Prvih 12 meseci za 1 dinar mesečno</li>
              <li>19.000 dinara popusta za kupovinu novog telefona</li>
            </ul>
          </>
        </DuoCard>
      </div>
      <p
        style={{
          color: "#002340",
          fontWeight: 600,
          fontSize: "1.15rem",
          marginBottom: "3rem",
          textAlign: "center",
        }}
        className="padding-global"
      >
        *Cene su prikazane sa uračunatim popustom od 100 RSD za e-račun.
      </p>
      <Subtitle>SPECIJALNA PONUDA</Subtitle>
      <div className="cards">
        <DuoCard
          letter="DUO M"
          download="300"
          upload="150"
          newPrice="1,999"
          oldPrice="2,999"
          subtitle="Digitalna televizija"
        >
          <>
            <p style={{ margin: "1rem 0", fontWeight: 700 }}>
              Digitalna televizija
            </p>
            <ul className="line-after">
              <li>Izbor kanala koji se zaista gledaju</li>
              <li>Katalog serija, filmova i emisija za celu porodicu</li>
              <li>Najgledaniji sport (Arena, Eurosport)</li>
              <li>
                Hipernet TV box sa preinstaliranim YouTube, Deezer i HBO Max
                aplikacijama
              </li>
            </ul>
            <ul>
              <li>Prvih 12 meseci za 1 dinar mesečno</li>
              <li>19.000 dinara popusta za kupovinu novog telefona</li>
            </ul>
          </>
        </DuoCard>
        <DuoCard
          letter="DUO L"
          download="500"
          upload="250"
          newPrice="2,699"
          oldPrice="3,999"
          subtitle="Digitalna televizija"
        >
          <>
            <p style={{ margin: "1rem 0", fontWeight: 700 }}>
              Digitalna televizija
            </p>
            <ul className="line-after">
              <li>Izbor kanala koji se zaista gledaju</li>
              <li>Katalog serija, filmova i emisija za celu porodicu</li>
              <li>Najgledaniji sport (Arena, Eurosport)</li>
              <li>
                Hipernet TV box sa preinstaliranim YouTube, Deezer i HBO Max
                aplikacijama
              </li>
            </ul>
            <ul>
              <li>Prvih 12 meseci za 1 dinar mesečno</li>
              <li>19.000 dinara popusta za kupovinu novog telefona</li>
            </ul>
          </>
        </DuoCard>
      </div>
      <p
        style={{
          color: "#002340",
          fontWeight: 600,
          fontSize: "1.15rem",
          marginBottom: "3rem",
          textAlign: "center",
        }}
        className="padding-global"
      >
        *Cene su prikazane sa uračunatim popustom od 100 RSD za e-račun.
      </p>
    </Layout>
  );
};

export default PackageDuo;