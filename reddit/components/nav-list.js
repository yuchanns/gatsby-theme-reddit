import React from 'react'
import SvgStar from './icons/svg-reddit-star'
import styles from '../styles/header.module.scss'
import SvgIcon from './icons/svg-icon'
import { Link } from "gatsby"

// navList Component
const NavList = ({navList, title}) => {
  // svg parameter
  const viewBox = "0 0 20 20"
  let component = []
  if (navList.length > 0) {
    const type = navList[0].type
    component.push((<div className={styles.headerNavFeeds} key={navList[0].name}>{title}</div>))
    let childComponent = []
    if (type === 'feeds') {
      childComponent = (nav) => (
        <>
          <SvgIcon
            className={styles.headerNavFeedsItemIcon}
            type={nav.svg}
            svg={{ viewBox: viewBox }} />
          <span className={styles.headerNavFeedsItemText}>{nav.name}</span>
        </>
      )
    } else if (type === 'communities') {
      childComponent = (nav) => (
        <>
          {nav.logo ? (<img
            className={`${styles.headerNavFeedsItemIcon} ${styles.iconRadius}`}
            src={nav.logo}
            alt="sub icon" />) :
            (<SvgIcon
              className={`default-logo ${styles.headerNavFeedsItemIcon}`}
              type='default-logo'
              svg={{ viewBox: viewBox }} />)
          }
          <span className={styles.headerNavFeedsItemText}>{nav.url}</span>
          <div><SvgStar className={styles.headerNavFeedsItemStar} /></div>
        </>
      )
    } else {
      childComponent = (nav) => (
        <>
          <img
            className={`${styles.headerNavFeedsItemIcon} ${styles.iconRadius}`}
            src={nav.logo}
            alt="sub icon" />
          <span className={styles.headerNavFeedsItemText}>{nav.name}</span>
        </>
      )
    }
    component.push(navList.map((nav, k) => {
      if (nav.type === 'others' && nav.extern) {
        return (
          <a
            className={styles.headerNavFeedsItem}
            href={nav.url}
            key={`${nav.type}-${k}`}>
            {childComponent(nav)}
          </a>
        )
      } else {
        return (
          <Link className={styles.headerNavFeedsItem} to={nav.url} key={`${nav.name}-${k}`}>
            {childComponent(nav)}
          </Link>
        )
      }
    }))
  }

  return component
}

export default NavList