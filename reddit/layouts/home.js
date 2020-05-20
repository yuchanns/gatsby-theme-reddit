import React from 'react'
import Header from '../components/header'
import SEO from '../components/seo'

const Home = ({location}) => {
  return (
    <div>
      <Header location={location} />
      <SEO title="Home" />
    </div>
  )
}

export default Home