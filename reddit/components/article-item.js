import React from 'react'
import styles from '../styles/article.module.scss'

const ArticleItem = ({ post }) => {
  const voteButton = ({ child }) => {
    return (
      <button className={styles.articleItemVoteButton}>
        <span className={styles.articleItemVoteButtonInner}>
          {child}
        </span>
      </button>
    )
  }
  return (
    <div>
      <div className={styles.articleItem}>
        <div className={styles.articleItemSide}>
          <div className={styles.articleItemSideInner}>
            {voteButton({ child: <i className={styles.articleItemVoteIconUp}></i> })}
            <div className={styles.articleItemVoteNum}>·</div>
            {voteButton({child: <i className={styles.articleItemVoteIconDown}></i>})}
          </div>
        </div>
        <div className={styles.articleItemContent}>
          <div className={styles.articleItemContentInfo}>
            <div className={styles.articleItemContentInfoInner}>
              <div className={styles.articleItemContentInfoInnerLabel}>
                <span className={styles.articleItemContentInfoPostby}>Posted by</span>
                <div className={styles.articleItemContentInfoAuthor}>
                  <span className={styles.articleItemContentInfoAuthorName}>u/{post.author}</span>
                </div>
                <span className={styles.articleItemContentInfoDate}>{post.date}</span>
              </div>
            </div>
          </div>
          <div className={styles.articleItemContentTitle}>
            <div className={styles.articleItemContentTitleOutter}>
              <div className={styles.articleItemContentTitleInner}>
                <h3 className={styles.articleItemContentTitleH3}>{post.title}</h3>
              </div>
            </div>
          </div>
          <div className={styles.articleItemContentExcerpt}>
            <div className={styles.articleItemContentMask} dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleItem