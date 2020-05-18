import React from 'react'
import SvgIcon from './icons/svg-icon'
import { useStaticQuery, graphql } from "gatsby"
import styles from './header.module.scss'

const Social = () => {
  // resolve with snsData
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            sns {
              type
              url
            }
          }
        }
      }
    `
  )
  return (
    <div className={styles.headerTooltipSocial}>
      {site.siteMetadata.sns.map((sns, k) => (
        <span key={k}>
          <a className={styles.headerTooltipSocialItem} href={sns.url}>
            <SvgIcon
              className={styles.headerTooltipSocialItemIcon}
              type={sns.type}
              svg={sns.type === 'email' ? { viewBox: '0 0 20 20' } : { viewBox: '0 0 24 24' }} />
          </a>
        </span>
      ))}
    </div>
  )
}

export default Social