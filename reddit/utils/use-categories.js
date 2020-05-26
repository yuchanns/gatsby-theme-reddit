module.exports = async graphql => {
  const { data: { site: { siteMetadata: { categories }} } } = await graphql(`
  {
    site {
      siteMetadata {
        categories {
          path
          name
        }
      }
    }
  }
  `)

  return categories
}