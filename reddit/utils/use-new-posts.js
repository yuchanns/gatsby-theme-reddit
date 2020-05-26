module.exports = async graphql => {
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
          }
          author {
            name
          }
        }
      }
      allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
        nodes {
          snippet
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
    }
  })

  return nodes.map(node => {
    return {
      excerpt: node.snippet,
      author: node.frontmatter.author || name,
      category: communities[node.frontmatter.category] || {},
      date: node.frontmatter.date,
      title: node.frontmatter.title,
      url: `/r/${node.frontmatter.category}/${node.frontmatter.title}`
    }
  })
}