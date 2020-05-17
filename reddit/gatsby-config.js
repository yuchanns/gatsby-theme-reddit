module.exports = (options = {}) => {
  return {
    siteMetadata: {
      title: 'Gatsby Theme - Reddit',
      description: `A Reddit Style Blog Theme for Gatsby`,
      author: {
        name: 'yuchanns',
        avatar: '/yuchanns.jpg'
      },
      nav: [],
      sns: [],
      categories: []
    },
    plugins: [
      {
        resolve: `gatsby-theme-blog-core`,
        options,
      },
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-sass`
    ].filter(Boolean)
  }
}
