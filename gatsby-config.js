/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Shiro Elevadores | Website`,
    description: `Terceirização especializada em manutenção e reparos em elevadores`,
    author: `Marcial Garcia`,
    siteUrl: `https://www.shiroelevadores.com.br`,
    social: [
      {
        name: "twitter",
        url: "<link project in the Twitter>"
      },
      {
        name: "youtube",
        url: "<link project in the Youtube>"
      },
      {
        name: "facebook",
        url: "https://www.facebook.com/shirousinagens/"
      },
      {
        name: "instagram",
        url: "<link project in the Instagram>"
      },
      {
        name: "whatsapp",
        url: "<link project in the Professional WhatsApp>"
      }
    ]
  },
  plugins: [
    `gatsby-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/static/img`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `shiroelevadores`,
        short_name: `shiro`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#A00000`,
        display: `minimal-ui`,
        icon: `static/img/favicon.ico`,
      },
    },
    // `gatsby-plugin-offline`,
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/theme/typography.js`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional
        color: `tomato`,
        // Disable the loading spinner in the middle view
        showSpinner: false,
      }
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/styles.js`],
      },
    },
  ],
}
