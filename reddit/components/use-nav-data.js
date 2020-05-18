import { useStaticQuery, graphql } from "gatsby"
import { useMemo } from 'react'

const useNavData = () => {
  // resolve with navData
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            feeds {
              url
              color
              svg
              name
            }
            categories {
              color
              desc
              logo
              name
              path
            }
            nav {
              name
              color
              url
              logo
              extern
            }
          }
        }
      }
    `
  )

  return {
    feeds: useMemo(() => {
      return site.siteMetadata.feeds.map((feed) => {
        feed.type = 'feeds'
        return feed
      })
    }, [site.siteMetadata.feeds]),
    communities: useMemo(() => {
      let communities = []
      const categories = site.siteMetadata.categories
      categories.forEach(category => {
        communities.push({
          url: '/r/' + category.path,
          type: 'communities',
          color: category.color,
          desc: category.desc,
          logo: category.logo,
          name: category.name,
        })
      })
  
      return communities
    }, [site.siteMetadata.categories]),
    others: useMemo(() => {
      return site.siteMetadata.nav.map((nav) => {
        nav.type = 'others'
        return nav
      })
    }, [site.siteMetadata.nav])
  }
}

export default useNavData