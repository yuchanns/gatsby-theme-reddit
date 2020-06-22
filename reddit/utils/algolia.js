const postQuery = `{
  posts: allMarkdownRemark {
    nodes {
      objectID: id
      excerpt(pruneLength: 3000)
      fileAbsolutePath
      frontmatter {
        category
        title
      }
    }
  }
}`

const settings = { attributesToSnippet: [`excerpt:20`] }
const resolver = arr => {
  return arr.map(({ objectID, frontmatter, fileAbsolutePath, excerpt }) => {
    const fileName = fileAbsolutePath.split('/')
    const path = `/${frontmatter.category}/${fileName[fileName.length - 2]}`
    return { ...frontmatter, path, excerpt, objectID }
  })
}

const queries = [
  {
    query: postQuery,
    transformer: ({ data }) => resolver(data.posts.nodes),
    indexName: `Posts`,
    settings,
  },
]

module.exports = queries