import React, { useState, useRef } from 'react'
import SvgIcon from './icons/svg-icon'
import styles from '../styles/header.module.scss'
import RealSearch from './search/index'
import Input from './search/input'
import HitComp from './search/hit-comp'
import { connectStateResults, Index, Hits } from 'react-instantsearch-dom'
import useOutsideClick from './use-outside-click'

const Search = () => {
  const Results = connectStateResults(
    ({ searchState: state, searchResults: res, children }) =>
      res && res.nbHits > 0 ? children :
        (
          <div class="ais-Hits">
            <div className={styles.headerSearchHit}>
              <div className={styles.headerSearchHitTitle}>
                {`No results for '${state.query}'`}
              </div>
            </div>
          </div>
        )
  )
  const [show, setShow] = useState(false)
  const [query, setQuery] = useState('')
  const ref = useRef()
  useOutsideClick(ref, () => setShow(false))
  return (
    <div className={styles.headerSearch} ref={ref}>
      <label className={styles.headerSearchLabel} htmlFor="reddit-header-search">
        <SvgIcon className={styles.headerSearchIcon} type="search" svg={{ viewBox: '0 0 20 20'}} />
      </label>
      <RealSearch indexName="Posts" setQuery={setQuery}>
        <Input setShow={setShow} />
        {(query.length > 0) && show && 
        <Index indexName="Posts">
          <Results >
            <Hits hitComponent={HitComp} />
          </Results>
        </Index>
        }
      </RealSearch>
    </div>
  )
}

export default Search