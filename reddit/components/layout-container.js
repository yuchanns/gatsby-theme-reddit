import React from 'react'
import Background from './background'
import Title from './title'
import Aside from './aside'
import styles from './layout.module.scss'


const LayoutContainer = ({ children, location }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerOuter}>
        <Background />
        <div sylte="z-index: 3;">
          <Title />
          <div className={styles.containerInner}>
            <div className={styles.containerInnerMain}>{children}</div>
            <Aside />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LayoutContainer