import React from "react";
import "./contact.scss";
import Layout from "./../utils/Layout/Layout";
import Title from "./../utils/Title/Title";
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery } from "gatsby";
import { graphql } from "gatsby";
import "./contact.scss";
import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
  const data = useStaticQuery(graphql`
    query getContactImages {
      first: file(relativePath: { eq: "contact1.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      second: file(relativePath: { eq: "contact2.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      third: file(relativePath: { eq: "contact3.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      fourth: file(relativePath: { eq: "contact4.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
    }
  `);

  return (
    <Layout>
      <Title>KONTAKT</Title>
      <div className="contact-details padding-global">
        <div className="detail-wrapper first">
          <div className="circle-detail">
            <GatsbyImage
              image={data.first.childImageSharp.gatsbyImageData}
              alt="document image"
              className="img-wrapper"
            />
          </div>
          <div className="detail-text">
            <p>APPELLO DOO Beograd</p>
            <p>MB 20430141</p>
            <p>PIB 105663106</p>
          </div>
        </div>
        <div className="detail-wrapper second">
          <div className="circle-detail">
            <GatsbyImage
              image={data.third.childImageSharp.gatsbyImageData}
              alt="document image"
              className="img-wrapper"
            />
          </div>
          <div className="detail-text">
            <p>Stevana Brakusa 6 lok 12</p>
            <p>11030 Beograd</p>
          </div>
        </div>
        <div className="detail-wrapper third">
          <div className="circle-detail">
            <GatsbyImage
              image={data.second.childImageSharp.gatsbyImageData}
              alt="document image"
              className="img-wrapper"
            />
          </div>
          <div className="detail-text">
            <p>011/4066 945</p>
            <p>+381 69 1255 006</p>
          </div>
        </div>
        <div className="detail-wrapper fourth">
          <div className="circle-detail">
            <GatsbyImage
              image={data.third.childImageSharp.gatsbyImageData}
              alt="document image"
              className="img-wrapper"
            />
          </div>
          <div className="detail-text">
            <p>Lazara Kujundžića 73</p>
            <p>11030 Beograd</p>
          </div>
        </div>
        <div className="detail-wrapper fifth">
          <div className="circle-detail">
            <GatsbyImage
              image={data.fourth.childImageSharp.gatsbyImageData}
              alt="mail image"
              className="img-wrapper"
            />
          </div>
          <div className="detail-text">
            <p>office@appello.rs</p>
          </div>
        </div>
      </div>
      <ContactForm />
    </Layout>
  );
};

export default Contact;
