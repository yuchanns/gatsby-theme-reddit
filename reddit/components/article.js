import React from 'react'
import styles from '../styles/article.module.scss'
import ArticleItem from './article-item'
import InfiniteScroll from 'react-infinite-scroll-component'

const Article = ({ posts, hasMore, loadMore }) => {
  if (posts.length > 0) {
    return (
      <>
        <div className={styles.article}>
          {posts.map((post, k) => (
            <ArticleItem key={k} post={post} />
          ))}
        </div>
        {hasMore &&
          <ArticleItem skeleton={true} />
        }
        <InfiniteScroll
          dataLength={posts.length}
          next={loadMore}
          hasMore={hasMore} />
      </>
    )
  } else {
    return (
      <>
        <ArticleItem skeleton={true} loading={true} />
        <ArticleItem skeleton={true} loading={true} />
      </>
    )
  }
}

export default Article