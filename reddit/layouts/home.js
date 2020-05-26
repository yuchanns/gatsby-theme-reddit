import React from 'react'
import Header from '../components/header'
import LayoutContainer from '../components/layout-container'
import SEO from '../components/seo'
import TabField from '../components/tab-field'
import Article from '../components/article'
import UsePosts from '../components/use-posts'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasMore: true,
      posts: [],
      page: 1,
    }
    this.loadMore = () => {
      if (!this.state.hasMore) return false
      UsePosts(
        this.state.page,
        this.props.pageContext.hash,
        this.props.location.pathname === '/top'
      ).then(res => {
        const state = {}
        if (res) {
          state['posts'] = this.state.posts.concat(res)
          state['page'] = this.state.page + 1
          if (res.length < 5) {
            state['hasMore'] = false
          }
        } else {
          state['hasMore'] = false
        }
        this.setState(state)
      })
    }
  }

  componentDidMount() {
    this.loadMore()
  }

  render() {
    return (
      <>
        <Header location={this.props.location} />
        <LayoutContainer location={this.props.location} >
          <SEO title="Home" />
          <TabField location={this.props.location} tabPath="/" />
          <Article posts={this.state.posts} hasMore={this.state.hasMore} loadMore={this.loadMore} />
        </LayoutContainer>
      </>
    )
  }
}

export default Home