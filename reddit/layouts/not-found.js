import React from 'react'
import Header from '../components/header'
import styles from '../styles/layout.module.scss'
import { Link } from 'gatsby'
import SEO from '../components/seo'

const NotFound = ({location}) => {
  return (
    <div>
      <Header location={location}></Header>
      <div className={styles.container}>
        <SEO title="404 not found" />
        <div className={styles.containerOuterNotfound}>
          <h3 className={styles.containerNotfound}>Sorry, there doesn't seem to be anything here.</h3>
          <Link className={styles.containerNotfoundBtn} to="/">Go Home</Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound