import React from 'react'
import Header from '../components/header'
import LayoutContainer from '../components/layout-container'
import SEO from '../components/seo'
import TabField from '../components/tab-field'
import Article from '../components/article'
import UsePosts from '../components/use-posts'
import CategoryAside from '../components/category-side'
import { graphql } from "gatsby"

class Category extends React.Component {
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
        this.props.location.pathname === `/r/${props.pageContext.category.path}/top`,
        this.props.pageContext.category.path
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
        <LayoutContainer
          asideComponent={CategoryAside}
          location={this.props.location}
          show={true}
          pageContext={this.props.pageContext}
          totalCount={this.props.data.allMarkdownRemark.totalCount}>
          <SEO title={this.props.pageContext.category.name} />
          <TabField
            location={this.props.location}
            tabPath={`/r/${this.props.pageContext.category.path}`} />
          <Article
            posts={this.state.posts}
            hasMore={this.state.hasMore}
            loadMore={this.loadMore} />
        </LayoutContainer>
      </>
    )
  }
}

export default Category

export const query = graphql`
  query ($filterCategory: String) {
    allMarkdownRemark(filter: {frontmatter: {category: {eq: $filterCategory}}}) {
      totalCount
    }
  }
`