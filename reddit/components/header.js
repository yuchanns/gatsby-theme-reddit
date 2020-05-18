import React from 'react'
import RedditIcon from './icons/svg-reddit-icon'
import RedditTitle from './icons/svg-reddit-title'
import Nav from './nav'
import Search from './search'
import styles from './header.module.scss'
import { Link } from 'gatsby'

const Header = ({ location }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerContainerLeft}>
          <Link to="/" className={styles.headerLink}>
            <RedditIcon className={styles.headerIcon} />
            <RedditTitle className={styles.headerTitle} />
          </Link>
          <Nav location={location} />
          <Search />
        </div>
      </div>
    </header>
  )
}

export default Header