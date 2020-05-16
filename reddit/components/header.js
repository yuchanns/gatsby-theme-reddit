import React from 'react'
import RedditIcon from './icons/svg-reddit-icon'
import RedditTitle from './icons/svg-reddit-title'
import styles from './header.module.scss'
import { Link } from 'gatsby'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerContainerRight}>
          <Link to="/" className={styles.headerLink}>
            <RedditIcon className={styles.headerIcon} />
            <RedditTitle className={styles.headerTitle} />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header