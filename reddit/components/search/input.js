import React from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'
import styles from '../../styles/header.module.scss'

export default connectSearchBox(({ refine, setShow }) => (
  <input
    className={styles.headerSearchInput}
    type="search"
    id="reddit-header-search"
    onChange={e => refine(e.target.value)}
    onFocus={() => setShow(true)}
    placeholder="Search Powered By Algolia"/>
))