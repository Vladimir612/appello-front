import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query siteMetadataQuery {
      site {
        siteMetadata {
          title
          description
          image
          siteUrl
          keywords
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
