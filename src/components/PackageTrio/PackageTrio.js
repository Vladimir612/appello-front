import React from "react";
import "./packageTrio.scss";
import Layout from "./../utils/Layout/Layout";
import Title from "./../utils/Title/Title";
import Subtitle from "./../utils/Subtitle/Subtitle";
import DuoCard from "../PackageDuo/DuoCard/DuoCard";
import "../../globalClasses.scss";

const PackageTrio = () => {
  return (
    <Layout>
      <Title>TRIO PAKETI(INTERNET + TELEVIZIJA + FIKSNI)</Title>
      <Subtitle>STANDARDNA PONUDA</Subtitle>
      <div className="cards">
        <DuoCard
          letter="+M"
          download="150"
          upload="75"
          newPrice="2,499"
          oldPrice="3,499"
          subtitle="Fiksni telefon"
          customStyle={{ fontSize: "2.2rem", fontWeight: 800 }}
        >
          <>
            <p style={{ margin: "1rem 0", fontWeight: 700 }}>
              Digitalna televizija
            </p>
            <ul>
              <li>Izbor kanala koji se zaista gledaju</li>
              <li>Katalog serija, filmova i emisija za celu porodicu</li>
              <li>Najgledaniji sport (Arena, Eurosport)</li>
              <li>
                Hipernet TV box sa preinstaliranim YouTube, Deezer i HBO Max
                aplikacijama
              </li>
            </ul>
            <p style={{ margin: "1rem 0", fontWeight: 700 }}>Fiksni telefon</p>
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
          letter="+L"
          download="250"
          upload="125"
          newPrice="3,199"
          oldPrice="4,699"
          subtitle="Fiksni telefon"
          customStyle={{ fontSize: "2.2rem", fontWeight: 800 }}
        >
          <>
            <p style={{ margin: "1rem 0", fontWeight: 700 }}>
              Digitalna televizija
            </p>
            <ul>
              <li>Izbor kanala koji se zaista gledaju</li>
              <li>Katalog serija, filmova i emisija za celu porodicu</li>
              <li>Najgledaniji sport (Arena, Eurosport)</li>
              <li>
                Hipernet TV box sa preinstaliranim YouTube, Deezer i HBO Max
                aplikacijama
              </li>
            </ul>
            <p style={{ margin: "1rem 0", fontWeight: 700 }}>Fiksni telefon</p>
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
          letter="+M"
          download="300"
          upload="150"
          newPrice="1,999"
          oldPrice="2,999"
          subtitle="Fiksni telefon"
          customStyle={{ fontSize: "2.2rem", fontWeight: 800 }}
        >
          <>
            <p style={{ margin: "1rem 0", fontWeight: 700 }}>
              Digitalna televizija
            </p>
            <ul>
              <li>Izbor kanala koji se zaista gledaju</li>
              <li>Katalog serija, filmova i emisija za celu porodicu</li>
              <li>Najgledaniji sport (Arena, Eurosport)</li>
              <li>
                Hipernet TV box sa preinstaliranim YouTube, Deezer i HBO Max
                aplikacijama
              </li>
            </ul>
            <p style={{ margin: "1rem 0", fontWeight: 700 }}>Fiksni telefon</p>
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
          letter="+L"
          download="500"
          upload="250"
          newPrice="2,699"
          oldPrice="3,999"
          subtitle="Fiksni telefon"
          customStyle={{ fontSize: "2.2rem", fontWeight: 800 }}
        >
          <>
            <p style={{ margin: "1rem 0", fontWeight: 700 }}>
              Digitalna televizija
            </p>
            <ul>
              <li>Izbor kanala koji se zaista gledaju</li>
              <li>Katalog serija, filmova i emisija za celu porodicu</li>
              <li>Najgledaniji sport (Arena, Eurosport)</li>
              <li>
                Hipernet TV box sa preinstaliranim YouTube, Deezer i HBO Max
                aplikacijama
              </li>
            </ul>
            <p style={{ margin: "1rem 0", fontWeight: 700 }}>Fiksni telefon</p>
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

export default PackageTrio;
