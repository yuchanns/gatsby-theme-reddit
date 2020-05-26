import React from 'react'
import Header from '../components/header'
import LayoutContainer from '../components/layout-container'
import SEO from '../components/seo'
import TabField from '../components/tab-field'
import Article from '../components/article'
import UseNewPosts from '../components/use-new-posts'
import UseTopPosts from '../components/use-top-posts'

class Category extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasMore: true,
      posts: [],
      page: 1,
    }
    let UsePosts;
    if (props.location.pathname === `/r/${props.pageContext.category.path}`) {
      UsePosts = UseNewPosts
    } else if (props.location.pathname === `/r/${props.pageContext.category.path}/top`) {
      UsePosts = UseTopPosts
    }
    this.loadMore = () => {
      if (!this.state.hasMore) return false
      UsePosts(this.state.page, this.props.pageContext.hash, this.props.pageContext.category.path).then(res => {
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
          <SEO title={this.props.pageContext.category.name} />
          <TabField location={this.props.location} tabPath={`/r/${this.props.pageContext.category.path}`} />
          <Article posts={this.state.posts} hasMore={this.state.hasMore} loadMore={this.loadMore} />
        </LayoutContainer>
      </>
    )
  }
}

export default Category