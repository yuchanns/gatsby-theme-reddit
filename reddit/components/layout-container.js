import React from 'react'
import Background from './background'
import Title from './title'
import Aside from './aside'
import styles from '../styles/layout.module.scss'


const LayoutContainer = ({
  children,
  location,
  show = false,
  pageContext = {},
  asideComponent
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerOuter}>
        <Background />
        <div style={{zIndex: 3}}>
          <Title show={show} pageContext={pageContext} />
          <div className={styles.containerInner}>
            <div className={styles.containerInnerMain}>{children}</div>
            <Aside pageContext={pageContext}>{asideComponent}</Aside>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LayoutContainer