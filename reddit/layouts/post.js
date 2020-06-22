import React from 'react'
import Header from '../components/header'
import LayoutContainer from '../components/layout-container'
import SEO from '../components/seo'
import CategoryAside from '../components/category-side'
// import Article from '../components/article'

class Post extends React.Component {
  render() {
    return (
      <>
        <Header location={this.props.location} />
        <LayoutContainer
          asideComponent={CategoryAside}
          location={this.props.location}
          show={true}
          detail={true}
          pageContext={this.props.pageContext}>
          <SEO title={this.props.pageContext.post.title} />
          {/* <Article
            posts={[this.props.pageContext.post]} /> */}
        </LayoutContainer>
      </>
    )
  }
}

export default Post