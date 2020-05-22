import { useStaticQuery, graphql } from "gatsby"
import { useMemo } from 'react'
import useNavData from "./use-nav-data"

const UsePosts = ({ skip = 0 }) => {
  const { site: { siteMetadata: { author: { name } } }, allMarkdownRemark: { nodes, pageInfo: { hasNextPage } } } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author {
              name
            }
          }
        }
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, limit: 5, skip: 0) {
          nodes {
            snippet
            frontmatter {
              author
              category
              date(fromNow: true)
              title
            }
          }
          pageInfo {
            hasNextPage
          }
        }
      }
    `
  )
  const { communities } = useNavData()
  const categories = useMemo(() => {
    let categories = {}
    communities.forEach(community => {
      categories[community.path] = community
    })

    return categories
  }, [communities])
  const posts = useMemo(() => {
    return nodes.map(node => {
      return {
        excerpt: node.snippet,
        author: node.frontmatter.author || name,
        category: categories[node.frontmatter.category] || categories[0],
        date: node.frontmatter.date,
        title: node.frontmatter.title,
        url: `/r/${node.frontmatter.category}/${node.frontmatter.title}`
      }
    })
  }, [nodes, categories, name])

  return { posts: posts,  hasNextPage: hasNextPage}
}

export default UsePosts