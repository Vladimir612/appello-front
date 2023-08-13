import React, { useState } from "react";
import "./contactForm.scss";
import Subtitle from "./../../utils/Subtitle/Subtitle";
import Button from "./../../utils/Button/Button";
import { validateEmail } from "./validation";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  const recaptchaRef = React.createRef();

  const submitForm = async (e) => {
    e.preventDefault();

    const recaptchaValue = recaptchaRef.current.getValue();

    if (fullname === "" || phone === "" || note === "") {
      setErrorMessage("Popunite sva obavezna polja!");
      return;
    }
    if (email !== "") {
      if (!validateEmail(email)) {
        setErrorMessage("Email nije validan");
        return;
      }
    }

    if (!recaptchaValue) {
      setErrorMessage("Kliknite na ReCaptcha dugme");
      return;
    } else {
      setErrorMessage("");
    }

    setSubmitted(true);

    await axios.post(
      "https://appello-mailsender.vercel.app/api/email/contact-form",
      {
        contactDetails: {
          imePrezime: fullname,
          email: email,
          telefon: phone,
          napomena: note,
        },
      }
    );

    setSuccess(true);

    setErrorMessage("");
  };

  return (
    <div className="contact-form padding-global">
      <Subtitle
        customStyle={{ color: "#fff", fontSize: "1.8rem", fontWeight: "500" }}
      >
        KONTAKTIRAJTE NAS
      </Subtitle>
      {success ? (
        <p className="success-msg">
          Uspešno ste nam poslali mejl, očekujte mejl u skorijem periodu
        </p>
      ) : (
        <form>
          <div className="form-row">
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
          <div className="error-message">
            <p>{errorMessage}</p>
          </div>
          <div className="button-wrapper">
            <ReCAPTCHA
              sitekey="6LeeKyYlAAAAAD7RY9BSiTwWo8QXKIHi3xn6aFGS"
              ref={recaptchaRef}
              className="rec-btn"
            />
            <Button cb={submitForm} disabled={submitted}>
              POŠALJI
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
