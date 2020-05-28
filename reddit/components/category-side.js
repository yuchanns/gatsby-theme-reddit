import React from 'react'
import styles from '../styles/aside.module.scss'

const CategoryAside = ({ pageContext, totalCount }) => {
  return (
    <div className={styles.asideAbout}>
      <div
        className={styles.asideAboutTitle}
        style={{
          background: pageContext.category.color ?
            pageContext.category.color :
            '#33a8ff'
        }}>
        <div className={styles.asideAboutTitleLabel}>
          <h2 className={styles.asideAboutTitleText}>
            About Community
          </h2>
        </div>
      </div>
      <div className={styles.asideAboutContent}>
        <div className={styles.asideAboutContentContainer}>
          <div className={styles.asideAboutContentDesc}>{pageContext.category.desc}</div>
        </div>
        <div className={styles.asideAboutContentStatistics}>
          <div className={styles.asideAboutContentStatisticsStart}>
            <div className={styles.asideAboutContentStatisticsNumber}>{totalCount}</div>
            <p className={styles.asideAboutContentStatisticsUnit}>Posts</p>
          </div>
        </div>
        <hr className={styles.asideAboutHr} />
      </div>
    </div>
  )
}

export default CategoryAside