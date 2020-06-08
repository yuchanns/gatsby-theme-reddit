import React from 'react'
import SvgIcon from './icons/svg-icon'
import styles from '../styles/header.module.scss'
import RealSearch from './search/index'

const Search = () => {
  return (
    <div className={styles.headerSearch}>
      <label className={styles.headerSearchLabel} htmlFor="reddit-header-search">
        <SvgIcon className={styles.headerSearchIcon} type="search" svg={{ viewBox: '0 0 20 20'}} />
      </label>
      <input
        className={styles.headerSearchInput}
        type="search"
        id="reddit-header-search"
        placeholder="Search" />
      <RealSearch indexName="Posts" />
    </div>
  )
}

export default Search