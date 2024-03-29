import React from "react";
import Layout from "./../utils/Layout/Layout";
import Title from "../utils/Title/Title";
import "./career.scss";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Button from "./../utils/Button/Button";
import { AiFillCheckSquare } from "react-icons/ai";
import { AiOutlineBorder } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";
import { validateEmail } from "./../Contact/ContactForm/validation";
import ReCAPTCHA from "react-google-recaptcha";

const Career = () => {
  const data = useStaticQuery(graphql`
    query getCareerImages {
      first: file(relativePath: { eq: "contact1.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      second: file(relativePath: { eq: "contact5.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
    }
  `);

  const recaptchaRef = React.createRef();

  const [position, setPosition] = useState("");
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
    if (fullname === "" || phone === "" || note === "" || position === "") {
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

    await axios.post("https://appello-mailsender.vercel.app/api/email/career", {
      careerDetails: {
        imePrezime: fullname,
        email: email,
        telefon: phone,
        pozicija: position,
        napomena: note,
      },
    });

    setSuccess(true);

    setErrorMessage("");
  };

  return (
    <Layout>
      <div className="career padding-global">
        <Title customStyle={{ color: "#fff", margin: 0, padding: 0 }}>
          KARIJERA
        </Title>
        <p className="desc">
          Ukoliko biste želeli da radite kod nas popunite ovu kratku formu
        </p>
        <div className="line"></div>
        {success ? (
          <p className="success-msg">
            Uspešno ste nam poslali mejl, očekujte mejl u skorijem periodu
          </p>
        ) : (
          <form>
            <div className="position-subtitle">
              <GatsbyImage
                image={data.second.childImageSharp.gatsbyImageData}
                alt="position icon"
                className="img-wrapper position"
              />
              <h2>POZICIJA</h2>
            </div>
            <div className="btns-wrapper">
              <div className="radioBtn">
                <button
                  type="button"
                  className={`circle ${
                    position === "instalater" && "activeTrue"
                  }
                  `}
                  onClick={() => setPosition("instalater")}
                >
                  a
                </button>
                <p>Instalater telekomunikacionih mreža</p>
              </div>
              <div className="radioBtn">
                <button
                  type="button"
                  className={`circle ${position === "savetnik" && "activeTrue"}
                  `}
                  onClick={() => setPosition("savetnik")}
                >
                  a
                </button>
                <p>Savetnik za telekomunikacione usluge</p>
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

export default Career;
