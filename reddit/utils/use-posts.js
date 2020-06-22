module.exports = async (graphql, top = false, category = null) => {
  let fields = [`frontmatter___date`]
  let orders = [`DESC`]
  let filters = []
  if (top) {
    fields = [`frontmatter___top`].concat(fields)
    orders = [`ASC`].concat(orders)
  }
  if (category) {
    filters = [`frontmatter: {category: {eq: "${category}"}}`].concat(filters)
  }
  const sort = `{fields: [${fields.join(`, `)}], order: [${orders.join(`, `)}]}`
  const { data: { site: { siteMetadata: { author: { name }, categories } }, allMarkdownRemark: { nodes } } } = await graphql(`
    {
      site {
        siteMetadata {
          categories {
            color
            desc
            logo
            name
            path
            bg
          }
          author {
            name
          }
        }
      }
      allMarkdownRemark(sort: ${sort}, filter: {${filters.join(`, `)}}) {
        nodes {
          snippet
          fileAbsolutePath
          frontmatter {
            author
            category
            date
            title
          }
        }
      }
    }
  `)
  let communities = {}
  categories.forEach(category => {
    communities[category.path] = {
      url: '/r/' + category.path,
      type: 'communities',
      color: category.color,
      desc: category.desc,
      logo: category.logo,
      name: category.name,
      bg: category.bg
    }
  })

  return nodes.map(node => {
    const fileName = node.fileAbsolutePath.split('/')
    return {
      excerpt: node.snippet,
      author: node.frontmatter.author || name,
      category: communities[node.frontmatter.category] || {},
      date: node.frontmatter.date,
      title: node.frontmatter.title,
      url: `/r/${node.frontmatter.category}/${fileName[fileName.length - 2]}`
    }
  })
}