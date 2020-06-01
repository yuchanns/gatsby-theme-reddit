import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styles from '../styles/aside.module.scss'
import SvgIcon from './icons/svg-icon'

const Awesome = ({ pageContext }) => {
  const { site: { siteMetadata: { awesome } } } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          awesome {
            logo
            name
            svg
            url
            author
          }
        }
      }
    }
  `)
  return (
    <div className={styles.asideAbout}>
      <div
        className={styles.asideAboutTitle}>
        <div className={styles.asideAboutTitleLabel}>
          <h2
            className={styles.asideAboutTitleText}
            style={{ color: '#1a1a1b', fill: '#1a1a1b' }}>
            Awesome Links
          </h2>
        </div>
      </div>
      <div className={styles.asideAboutContent}>
        <div className={styles.asideAwesome}>
          {awesome.map((v, k) => (
            <div className={styles.asideAwesomeItem} key={k}>
              <div className={styles.asideAwesomeItemBlock}>
                <div className={styles.asideAwesomeItemIcon}>
                  <div className={styles.asideAwesomeItemIconContainer}>
                    {(v.logo || v.svg) ?
                      (<img className={styles.asideAwesomeItemIconImg} alt='' src={v.logo || v.svg} />) :
                      (<SvgIcon
                        className={`${styles.asideAwesomeItemIconSvg} ${styles.asideAwesomeItemIconTsvg}`}
                        type='default-logo'
                        svg={{ viewBox: '0 0 20 20' }} />)
                    }
                  </div>
                </div>
                <div className={styles.asideAwesomeItemInfo}>
                  <a className={styles.asideAwesomeItemInfoLink} href={v.url}>
                    a/{v.name}
                  </a>
                  <p className={styles.asideAwesomeItemInfoText}>{v.author}</p>
                </div>
                <div className={styles.asideAwesomeItemButton}>
                  <button
                    className={styles.asideAwesomeItemButtonBtn}
                    onClick={() => {
                      if (v.url) {
                        window.location.href = v.url
                      }
                    }}
                    style={{
                      background: (pageContext.category && pageContext.category.color) ?
                        pageContext.category.color :
                        '#0079D3'
                    }}>Join</button>
                </div>
              </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Awesome