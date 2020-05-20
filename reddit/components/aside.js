import React from 'react'
import Footer from './footer'
import styles from './aside.module.scss'

const Aside = () => {
  return (
    <div className={styles.aside}>
      <div className={styles.asideInner}>
        <Footer />
      </div>
    </div>
  )
}

export default Aside