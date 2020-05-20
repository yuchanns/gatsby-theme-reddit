import React from 'react'
import UseNavData from './use-nav-data'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styles from './footer.module.scss'

const Footer = () => {
  const { site: { siteMetadata: { author: { name } } } } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author {
              name
            }
          }
        }
      }
    `
  )
  const navData = UseNavData()
  const year = new Date().getFullYear()
  return (
    <div className={styles.footer}>
      <div className={styles.footerBannerOuter}>
        <div className={styles.footerBannerInner}>
          <div className={styles.footerBannerContainer}>
            <div className={styles.footerBannerInfo}>
              {navData.feeds.map((item, k) => (
                <Link
                  className={styles.footerBannerInfoRouter}
                  to={item.url}
                  key={k}>
                  {item.name}
                </Link>
              ))}
            </div>
            <div className={styles.footerBannerInfo}>
              {navData.others.map((item, k) => {
                if (item.extern) {
                  return (
                    <a
                      className={styles.footerBannerInfoRouter}
                      href={item.url}
                      key={k}>
                      {item.name}
                    </a>
                  )
                }
                return (
                  <Link
                    className={styles.footerBannerInfoRouter}
                    to={item.url}
                    key={k}>
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>
          <div className={styles.footerBannerInfoCopyright}>
            {name} © {year}.&nbsp;<a href="https://github.com/yuchanns/vuepress-theme-reddit">Gatsby with Theme Reddit</a>
          </div>
        </div>
      </div>
      <div className={styles.footerBannerBtt}>
        <button className={styles.footerBannerBttBtn}>Back to top</button>
      </div>
    </div>
  )
}

export default Footer