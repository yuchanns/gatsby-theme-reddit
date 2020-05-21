import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styles from '../styles/header.module.scss'

const UserInfo = () => {
  // resolve with userData
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author {
              name
              avatar
            }
          }
        }
      }
    `
  )

  return (
    <div>
      <button className={styles.headerUserBtn}>
        <span className={styles.headerUserBar}>
          <span className={styles.headerUserInfo}>
            <img
              className={styles.headerUserAvatar}
              src={site.siteMetadata.author.avatar}
              alt="User Avatar" />
            <span className={styles.headerUserText}>
              <span className={styles.headerUserName}>
                {site.siteMetadata.author.name}
              </span>
            </span>
          </span>
        </span>
      </button>
    </div>
  )
}

export default UserInfo