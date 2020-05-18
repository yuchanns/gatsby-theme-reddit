import React, { useMemo, useState } from 'react'
import styles from './header.module.scss'
import NavList from './nav-list'

const NavSearch = ({ navData, isShow = false }) => {
   // searchbar data
   const [keywords, setKeywords] = useState('')
   const filteredNavData = useMemo(() => {
     const filteredNavData = {}
     Object.keys(navData).forEach(key => {
       filteredNavData[key] = navData[key].filter(navItem => {
         if (keywords === '') {
           return true
         }
   
         if (navItem.type === 'communities') {
           return navItem.url.toUpperCase().includes(keywords.toUpperCase())
         }
   
         return navItem.name.toUpperCase().includes(keywords.toUpperCase())
       })
     })
 
     return filteredNavData
   }, [keywords, navData])
  
  return isShow && (
    <div className={styles.headerNavList}>
      <input
        className={styles.headerNavFilter}
        placeholder="Filter"
      onChange={e => setKeywords(e.target.value)} />
      <NavList navList={filteredNavData.feeds} title='Reddit Feeds' />
      <NavList navList={filteredNavData.communities} title='My Communities' />
      <NavList navList={filteredNavData.others} title='Other' />
    </div>
  )
}

export default NavSearch