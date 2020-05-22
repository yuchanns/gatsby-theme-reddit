import React from 'react'
import styles from '../styles/article.module.scss'
import ArticleItem from './article-item'
import UsePosts from './use-posts'

const Article = () => {
  // todo: pagination、fontface
  const { posts, hasNextPage } = UsePosts({ skip: 0 })
  return (
    <div className={styles.article}>
      {posts.map((post, k) => (
        <ArticleItem key={k} post={post} />
      ))}
    </div>
  )
}

export default Article