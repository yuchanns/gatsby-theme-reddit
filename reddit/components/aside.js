import React from 'react'
import Footer from './footer'
import styles from '../styles/aside.module.scss'
import Awesome from './awesome'

const Aside = ({ children, pageContext, totalCount }) => {
  return (
    <div className={styles.aside}>
      <div className={styles.asideInner}>
        {children && children({ pageContext: pageContext, totalCount: totalCount })}
        <Awesome pageContext={pageContext} />
        <Footer pageContext={pageContext} />
      </div>
    </div>
  )
}

export default Aside