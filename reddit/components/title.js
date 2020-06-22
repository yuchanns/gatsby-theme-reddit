import React from 'react'
import styles from '../styles/title.module.scss'
import { Link } from 'gatsby'
import SvgIcon from './icons/svg-icon'

const Title = ({ show = false, pageContext = {}, detail = false }) => {
  if (!show) {
    return (
      <div className={styles.title}></div>
    )
  } else {
    const bgColor = pageContext.category.color ? pageContext.category.color : '#33a8ff'
    const background = [bgColor]
    if (pageContext.category.bg) {
      background.push(`url(${pageContext.category.bg})`)
    }
    background.push('no-repeat center / cover')
    return (
      <div className={styles.title}>
        <span
          className={styles.titleBackground}
          style={{
            background: background.join(' '),
            backgroundPosition: 'center top',
            height: pageContext.category.bg ? '128px' : '64px'
          }}>
          <Link
            className={styles.titleBackgroundRoute}
            to={`/r/${pageContext.category.path}`}>
            <div className={styles.titleBackgroundBlock}>
              <div className={styles.titleBackgroundContainer}>
                {detail && (
                  <>
                    <div
                      style={{
                        backgroundImage: `url(${pageContext.category.logo})`,
                        borderRadius: '32px',
                        height: '56px',
                        width: '56px'
                      }}
                      className={styles.titleBackgroundTopIcon}></div>
                    <span className={styles.titleBackgroundTopText}>{`r/${pageContext.category.path}`}</span>
                  </>
                )}
              </div>
            </div>
          </Link>
        </span>
        {!detail ? (
          <div className={styles.titleLabel}>
            <div className={styles.titleLabelBlock}>
              {pageContext.category.logo ?
                (<img className={styles.titleLabelLogo} alt="" src={pageContext.category.logo} />) :
                (<SvgIcon className={styles.titleLabelImg} type='default-logo' svg={{ viewBox: '0 0 20 20' }} />)
              }
              <div className={styles.titleLabelText}>
                <div className={styles.titleLabelTextContainer}>
                  <h1 className={styles.titleLabelTextMain}>{pageContext.category.name}</h1>
                  <h2 className={styles.titleLabelTextSub}>{`r/${pageContext.category.path}`}</h2>
                </div>
              </div>
            </div>
          </div>
        ) : (
            <div className={styles.titleCategory} style={{ background: '#dbf0ff'}}>
              <div className={styles.titleCategoryBlock}>
                <div>
                  <Link
                    className={styles.titleCategoryText}
                    style={{ color: bgColor }}
                    to={pageContext.category.url} >Posts</Link>
                </div>
              </div>
            </div>
        )
        }
      </div>
    )
  }
}

export default Title