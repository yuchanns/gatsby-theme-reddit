import React, { useMemo, useRef, useState } from 'react'
import { Link } from 'gatsby'
import SvgIcon from './icons/svg-icon'
import useOutsideClick from './use-outside-click'
import styles from '../styles/tab-field.module.scss'

const TabField = ({ location, tabPath }) => {
  const [open, setOpen] = useState(false)
  const toggleNav = () => setOpen(!open)
  const hideNav = () => setOpen(false)
  const ref = useRef()
  useOutsideClick(ref, hideNav)

  const svg = { viewBox: '0 0 20 20' }
  let basePath = tabPath === '/' ? '' : tabPath
  const tabs = [
    { name: 'New', svg: 'best', url: `${tabPath}` },
    { name: 'Top', svg: 'hot', url: `${basePath}/top` }
  ]
  const currentTab = useMemo(() => {
    let currentTab = tabs[0]
    tabs.forEach((tab, k) => {
      if (tab.url === location.pathname) {
        currentTab = tabs[k]
      }
    })

    return currentTab
  }, [location, tabs])
  
  return (
    <div className={styles.field}>
      <div className={styles.fieldContainerMobile}>
        <div className={styles.fieldTabMobile} ref={ref}>
          <button className={styles.fieldTabButton} onClick={toggleNav}>
            <span className={styles.fieldTabButtonLabel}>
              <SvgIcon
                className={styles.fieldTabButtonIcon}
                type={currentTab.svg}
                svg={svg} />
            </span>
            <span className={styles.fieldTabButtonText}>
              {currentTab.name}
            </span>
            <i className={styles.fieldTabButtonExpand}></i>
          </button>
        </div>
      </div>
      <div className={styles.fieldContainer}>
        {tabs.map((tab, k) => (
          <Link
            activeClassName={styles.fieldTabActive}
            className={styles.fieldTab}
            key={k}
            to={tab.url} >
            <SvgIcon className={styles.fieldTabIcon} type={tab.svg} svg={svg} />
            <div className={styles.fieldTabText}>{tab.name}</div>
          </Link>
        ))}
      </div>
      {open &&
      <div className={styles.fieldTabList} style={{top: (ref.current.getBoundingClientRect().top + 18)}}>
        {tabs.map((tab, k) => (
          <Link
            activeClassName={styles.fieldTabItemActive}
            className={styles.fieldTabItem}
            key={k}
            to={tab.url}>
            <span className={styles.fieldTabItemIcon}>
              <SvgIcon className={styles.fieldTabItemIconSvg} type={tab.svg} svg={svg} />
            </span>
            <span>{tab.name}</span>
          </Link>
        ))}
      </div>}
    </div>
  )
}

export default TabField