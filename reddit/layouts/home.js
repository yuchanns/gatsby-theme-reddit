import React from 'react'
import Header from '../components/header'
import LayoutContainer from '../components/layout-container'
import SEO from '../components/seo'
import TabField from '../components/tab-field'
import Article from '../components/article'

const Home = ({location}) => {
  return (
    <>
      <Header location={location} />
      <LayoutContainer location={location} >
        <SEO title="Home" />
        <TabField location={location} tabPath="/" />
        <Article />
      </LayoutContainer>
    </>
  )
}

export default Home