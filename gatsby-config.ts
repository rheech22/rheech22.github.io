import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `rheechlog`,
    siteUrl: `https://rheechlog.gatsbyjs.io/`,
  },
  plugins: ["gatsby-plugin-styled-components"],
};

export default config;
