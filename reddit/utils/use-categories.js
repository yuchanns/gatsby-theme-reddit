module.exports = async graphql => {
  const { data: { site: { siteMetadata: { categories }} } } = await graphql(`
  {
    site {
      siteMetadata {
        categories {
          path
          name
          color
          desc
          logo
          bg
        }
      }
    }
  }
  `)

  return categories
}