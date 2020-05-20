import React from 'react'
import Header from '../components/header'
import LayoutContainer from '../components/layout-container'
import SEO from '../components/seo'

const Home = ({location}) => {
  return (
    <div>
      <Header location={location} />
      <LayoutContainer location={location} >
        <SEO title="Home" />
      </LayoutContainer>
    </div>
  )
}

export default Home