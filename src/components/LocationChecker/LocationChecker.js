import React, { useState } from "react";
import Layout from "../utils/Layout/Layout";
import Title from "../utils/Title/Title";
import "./locationChecker.scss";
import { useStaticQuery } from "gatsby";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { AiFillCheckSquare, AiOutlineBorder } from "react-icons/ai";
import Button from "./../utils/Button/Button";
import { validateEmail } from "./../Contact/ContactForm/validation";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const LocationChecker = ({ packageClicked }) => {
  const data = useStaticQuery(graphql`
    query getLocationCheckerImages {
      first: file(relativePath: { eq: "contact1.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      second: file(relativePath: { eq: "contact3.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
    }
  `);

  const recaptchaRef = React.createRef();

  const [isHouse, setIsHouse] = useState(false);

  const [city, setCity] = useState("");
  const [place, setPlace] = useState("");
  const [street, setStreet] = useState("");
  const [note, setNote] = useState("");

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  const submitLocationCheckerForm = async (e) => {
    e.preventDefault();
    const recaptchaValue = recaptchaRef.current.getValue();

    if (
      fullname === "" ||
      phone === "" ||
      note === "" ||
      city === "" ||
      place === "" ||
      street === ""
    ) {
      setErrorMessage("Popunite sva obavezna polja!");
      return;
    }
    if (email !== "") {
      if (!validateEmail(email)) {
        setErrorMessage("Email nije validan");
        return;
      }
    }
    if (!acceptedTerms) {
      setErrorMessage("Morate pristati na uslove korišćenja");
      return;
    }

    if (!recaptchaValue) {
      setErrorMessage("Kliknite na ReCaptcha dugme");
      return;
    } else {
      setErrorMessage("");
    }

    setSubmitted(true);

    await axios.post(
      "https://appello-mailsender.vercel.app/api/email/location-checker",
      {
        locationDetails: {
          imePrezime: fullname,
          email: email,
          telefon: phone,
          grad: city,
          naselje: place,
          ulica: street,
          stanKuca: isHouse ? "Kuća" : "Stan",
          paket: packageClicked,
          napomena: note,
        },
      }
    );

    setSuccess(true);

    setErrorMessage("");
  };

  return (
    <Layout>
      <div className="location-checker padding-global">
        <Title customStyle={{ color: "#fff", margin: 0, padding: 0 }}>
          PROVERA LOKACIJE
        </Title>
        <p>
          Unesi kontakt podatke i podatke lokacije ako želiš da koristiš usluge
          Yettela.
        </p>
        <div className="line"></div>
        {success ? (
          <p className="success-msg">
            Uspešno ste nam poslali mejl, očekujte mejl u skorijem periodu
          </p>
        ) : (
          <form>
            <div className="location-subtitle">
              <GatsbyImage
                image={data.second.childImageSharp.gatsbyImageData}
                alt="location icon"
                className="img-wrapper"
              />
              <h2>LOKACIJA</h2>
            </div>
            <div className="btns-wrapper">
              <button
                className={!isHouse ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  setIsHouse(false);
                }}
              >
                Stan
              </button>
              <span>ili</span>
              <button
                className={isHouse ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  setIsHouse(true);
                }}
              >
                Kuća
              </button>
            </div>
            <div className="form-row">
              <div className="input-group">
                <label htmlFor="city">
                  Grad/Opština<span style={{ color: "#b4ff00" }}>*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label htmlFor="place">
                  Naselje<span style={{ color: "#b4ff00" }}>*</span>
                </label>
                <input
                  type="text"
                  name="place"
                  id="place"
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label htmlFor="street-address">
                  Ulica<span style={{ color: "#b4ff00" }}>*</span>
                </label>
                <input
                  type="street-address"
                  name="street-address"
                  id="street-address"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="note">
                Napomena<span style={{ color: "#b4ff00" }}>*</span>
              </label>
              <textarea
                name="note"
                id="note"
                cols="30"
                rows="10"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              ></textarea>
            </div>
            <div className="contact-subtitle">
              <GatsbyImage
                image={data.first.childImageSharp.gatsbyImageData}
                alt="data icon"
                className="img-wrapper"
              />
              <h2>KONTAKT PODACI</h2>
            </div>
            <div className="form-row" style={{ marginTop: "3rem" }}>
              <div className="input-group">
                <label htmlFor="fullname">
                  Ime i prezime<span style={{ color: "#b4ff00" }}>*</span>
                </label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label htmlFor="phone">
                  Kontakt telefon<span style={{ color: "#b4ff00" }}>*</span>
                </label>
                <input
                  type="phone"
                  name="phone"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="terms-cond">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setAcceptedTerms(!acceptedTerms);
                }}
              >
                {acceptedTerms ? (
                  <AiFillCheckSquare color="#b4ff00" size={25} />
                ) : (
                  <AiOutlineBorder color="#b4ff00" size={25} />
                )}
              </button>
              <p>
                Pristajem da Yettel obrađuje moje podatke o ličnosti za svrhe
                obaveštavanja o postojanju tehničkih mogućnosti i aktuelnim
                ponudama usluga za koje sam zainteresovan/a i da mi ponude
                dostavlja putem aplikacije, SMS-a, poziva i elektronske pošte
              </p>
            </div>
            <div className="error-message">
              <p>{errorMessage}</p>
            </div>
            <div className="button-wrapper">
              <ReCAPTCHA
                sitekey="6LeeKyYlAAAAAD7RY9BSiTwWo8QXKIHi3xn6aFGS"
                ref={recaptchaRef}
                className="rec-btn"
              />
              <Button cb={submitLocationCheckerForm} disabled={submitted}>
                POŠALJI
              </Button>
            </div>
          </form>
        )}
      </div>
    </Layout>
  );
};

export default LocationChecker;
