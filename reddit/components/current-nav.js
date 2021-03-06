import React, { useMemo } from 'react'
import SvgIcon from './icons/svg-icon'
import styles from '../styles/header.module.scss'

const CurrentNav = ({ navData, location }) => {
  const viewBox = "0 0 20 20"
  const currentNav = useMemo(() => {
    let currentNav = navData.feeds[0]
    if (location.pathname !== '') {
      Object.values(navData).forEach(value => {
        const matchedValue = value.filter(item => {
          return item.url === location.pathname || `${item.url}/top` === location.pathname
        })
        if (matchedValue.length > 0) {
          currentNav = matchedValue[0]
        }
      })
    }
    return currentNav
  }, [navData, location.pathname])

  return (
    <>
      <span className={styles.headerNavTitle}>
        <h1 className={styles.headerNavTitleText}>
          {currentNav.type === 'communities' ?
            `${currentNav.url.substr(1)}` :
            `${currentNav.name}`
          }
        </h1>
      </span>
      {currentNav.svg ?
        (<SvgIcon
          className={styles.headerNavIcon}
          type={currentNav.svg}
          svg={{ viewBox: viewBox }} />) :
        (currentNav.logo ?
          (<img
            src={currentNav.logo}
            alt="sub icon"
            className={`${styles.headerNavIcon} ${styles.iconRadius}`} />) :
          (<SvgIcon
            className={`default-logo ${styles.headerNavIcon}`}
            type='default-logo'
            svg={{ viewBox: viewBox }} />))
      }
    </>
  )
}

export default CurrentNav