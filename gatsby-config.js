/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Appello`,
    description: `Edukativni centar Binary Bioskop organizuje online pripremu za prijemni         ispit iz matematike za upis na FON 2023/2024. Celokupnu pripremu je, putem naše e-learning platforme UpišiFon.rs, moguće pohađati od kuće.`,
    author: `@binarybioskop`,
    image: `/logo.png`,
    keywords: `yettel, internet, fiksni, televizija, povoljno`,
    siteUrl: `https://appello.rs/`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/logoIcon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
