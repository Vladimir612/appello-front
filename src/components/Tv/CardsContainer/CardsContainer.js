import React from "react";
import "./cardsContainer.scss";
import TvCard from "./../TvCard/TvCard";

const CardsContainer = () => {
  return (
    <div className="cards-container">
      <div className="card-wrapper">
        <h3>STANDARDNA PONUDA</h3>
        <TvCard letter="TV M" newPrice="1,599">
          <ul>
            <li>Izbor kanala koji se zaista gledaju</li>
            <li>Katalog serija, filmova i emisija za celu porodicu</li>
            <li>
              Najgledaniji sport (<b>Arena</b>, <b>Europsport</b>)
            </li>
            <li>
              Risiver - TV box sa preinstaliranim YouTube, Deezer i HBO Max
              aplikacijama
            </li>
          </ul>
        </TvCard>
      </div>
      <div className="card-wrapper">
        <h3>SPECIJALNA PONUDA</h3>
        <TvCard letter="TV M" newPrice="1,399">
          <ul>
            <li>Izbor kanala koji se zaista gledaju</li>
            <li>Katalog serija, filmova i emisija za celu porodicu</li>
            <li>
              Najgledaniji sport (<b>Arena</b>, <b>Europsport</b>)
            </li>
            <li>
              Risiver - TV box sa preinstaliranim YouTube, Deezer i HBO Max
              aplikacijama
            </li>
          </ul>
        </TvCard>
      </div>
    </div>
  );
};

export default CardsContainer;
