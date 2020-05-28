import React from 'react'
import Footer from './footer'
import styles from '../styles/aside.module.scss'

const Aside = ({ children, pageContext, totalCount }) => {
  return (
    <div className={styles.aside}>
      <div className={styles.asideInner}>
        {children && children({ pageContext: pageContext, totalCount: totalCount })}
        <Footer />
      </div>
    </div>
  )
}

export default Aside