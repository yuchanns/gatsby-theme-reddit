import React, { useState, useMemo, useRef } from 'react'
import useOutsideClick from './use-outside-click'
import styles from './header.module.scss'
import SvgIcon from './icons/svg-icon'
import SvgStar from './icons/svg-reddit-star'
import { useStaticQuery, graphql, Link } from "gatsby"

const Nav = ({ location }) => {
  // nav click event
  const [open, setOpen] = useState(false)
  const toggleNav = () => setOpen(!open)
  const hideNav = () => setOpen(false)
  const navClass = useMemo(() => {
    let classNameArr = [styles.headerNav]
    if (open) {
      classNameArr.push(styles.headerNavOpen)
    }

    return classNameArr.join(' ')
  }, [open])
  const ref = useRef()
  useOutsideClick(ref, hideNav)

  // resolve with navData
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
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

  const feeds = [
    { url: '/', type: 'feeds', color: '#0079d3', svg: 'nav-home', name: 'Home' },
    { url: '/popular', type: 'feeds', color: '#0079d3', svg: 'nav-popular', name: 'Popular' },
  ]

  const communities = useMemo(() => {
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
  }, [site.siteMetadata.categories])

  const others = useMemo(() => {
    return site.siteMetadata.nav
  }, [site.siteMetadata.nav])

  const navData = {
    feeds: feeds,
    communities: communities,
    others: others
  }

  // searchbar data
  const [keywords, setKeywords] = useState('')
  const filteredNavData = useMemo(() => {
    const filteredNavData = {}
    Object.keys(navData).forEach(key => {
      filteredNavData[key] = navData[key].filter(navItem => {
        if (keywords === '') {
          return true
        }
  
        if (navItem.type === 'communities') {
          return navItem.url.toUpperCase().includes(keywords.toUpperCase())
        }
  
        return navItem.name.toUpperCase().includes(keywords.toUpperCase())
      })
    })

    return filteredNavData
  }, [keywords, navData])

  const currentNav = useMemo(() => {
    let currentNav = navData.feeds[0]
    if (location.pathname !== '') {
      Object.values(navData).forEach(value => {
        const matchedValue = value.filter(item => {
          return item.url === location.pathname
        })
        if (matchedValue.length > 0) {
          currentNav = matchedValue[0]
        }
      })
    }
    return currentNav
  }, [navData, location.pathname])
  // svg parameter
  const viewBox = "0 0 20 20"

  return (
    <div className={navClass} ref={ref}>
      <button className={styles.headerNavBtn}
        onClick={toggleNav}>
        <span className={styles.headerNavTitle}>
          <h1 className={styles.headerNavTitleText}>
            {currentNav.type === 'communities' ?
              `${currentNav.url.substr(1)}` :
              `${currentNav.name}`
            }
          </h1>
        </span>
        {currentNav.type === 'feeds' ?
          (<SvgIcon
            className={styles.headerNavIcon}
            type={currentNav.svg}
            svg={{ viewBox: viewBox }} />) :
          (<img
            src={currentNav.logo}
            alt="sub icon"
            className={`${styles.headerNavIcon} ${styles.iconRadius}`} />)
        }
        <SvgIcon
          className={styles.headerNavExpand}
          type="nav-expand"
          svg={{ viewBox: viewBox }} />
      </button>
      {open && <SvgIcon
          className={styles.headerNavExpandOpen}
          type="nav-expand-open"
        svg={{ viewBox: viewBox }} />}
      {open &&
        <div className={styles.headerNavList}>
          <input
            className={styles.headerNavFilter}
            placeholder="Filter"
            onChange={e => setKeywords(e.target.value)} />
          {filteredNavData.feeds.length > 0 &&
            <div className={styles.headerNavFeeds}>Reddit Feeds</div>
          }
          {filteredNavData.feeds.map((feed, k) => (
            <Link className={styles.headerNavFeedsItem} to={feed.url} key={`${feed.name}-${k}`}>
              <SvgIcon
                className={styles.headerNavFeedsItemIcon}
                type={feed.svg}
                svg={{ viewBox: viewBox }} />
              <span className={styles.headerNavFeedsItemText}>{feed.name}</span>
            </Link>
          ))}
          {filteredNavData.communities.length > 0 &&
            <div className={styles.headerNavFeeds}>My Communities</div>
          }
          {filteredNavData.communities.map((community, k) => (
            <Link className={styles.headerNavFeedsItem} to={community.url} key={`${community.name}-${k}`}>
              <img
                className={`${styles.headerNavFeedsItemIcon} ${styles.iconRadius}`}
                src={community.logo}
                alt="sub icon" />
              <span className={styles.headerNavFeedsItemText}>{community.url}</span>
              <div><SvgStar className={styles.headerNavFeedsItemStar} /></div>
            </Link>
          ))}
        </div>
      }
    </div>
  )
}

export default Nav