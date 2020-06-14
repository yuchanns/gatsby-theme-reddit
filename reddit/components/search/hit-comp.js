import React from 'react'
import { Link } from 'gatsby'
import styles from '../../styles/header.module.scss'

const HitComp = ({ hit }) => {
  return (
    <Link className={styles.headerSearchHit} to={`/r${hit.path}`}>
      <div style={{ width: '100%' }}>
        <div className={styles.headerSearchHitTitle}>{hit.title}</div>
        <div>
          <div className={styles.headerSearchHitExcerpt} style={{ width: '100%' }}>{hit.excerpt}</div>
        </div>
      </div>
    </Link>
  )
}

export default HitComp