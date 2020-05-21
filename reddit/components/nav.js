import React, { useState, useMemo, useRef } from 'react'
import styles from '../styles/header.module.scss'
import SvgIcon from './icons/svg-icon'
import NavSearch from './nav-search'
import CurrentNav from './current-nav'
import useNavData from './use-nav-data'
import useOutsideClick from './use-outside-click'

const Nav = ({ location }) => {
  // nav click event
  const [open, setOpen] = useState(false)
  const toggleNav = () => setOpen(!open)
  const hideNav = () => setOpen(false)
  const navClass = useMemo(() => {
    let classNameArr = [styles.headerNav]
    if (open) {
      classNameArr.push(styles.headerNavOpen)
    }

    return classNameArr.join(' ')
  }, [open])
  const ref = useRef()
  useOutsideClick(ref, hideNav)

  const navData = useNavData()

  // svg parameter
  const viewBox = "0 0 20 20"

  return (
    <div className={navClass} ref={ref}>
      <button className={styles.headerNavBtn}
        onClick={toggleNav}>
        <CurrentNav navData={navData} location={location} />
        <SvgIcon
          className={styles.headerNavExpand}
          type="nav-expand"
          svg={{ viewBox: viewBox }} />
      </button>
      <SvgIcon
        className={styles.headerNavExpandOpen}
        type="nav-expand-open"
        svg={{ viewBox: viewBox }}
        isShow={open} />
      <NavSearch navData={navData} isShow={open} />
    </div>
  )
}

export default Nav