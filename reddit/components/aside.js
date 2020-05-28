import React from 'react'
import Footer from './footer'
import styles from '../styles/aside.module.scss'

const Aside = ({ children, pageContext }) => {
  return (
    <div className={styles.aside}>
      <div className={styles.asideInner}>
        {children({ pageContext: pageContext })}
        <Footer />
      </div>
    </div>
  )
}

export default Aside