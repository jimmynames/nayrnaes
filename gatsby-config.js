module.exports = {
  siteMetadata: {
    title: `Sean Ryan - Design`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`PT Sans Narrow`, `Open Sans Condensed`, 'Open Sans']
      }
    }
  //   {
  //   resolve: `gatsby-plugin-google-analytics`,
  //   options: {
  //     trackingId: "UA-112975901-1",
  //     anonymize: true,
  //   },
  // }
  ]
}
