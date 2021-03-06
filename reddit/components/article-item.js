import React from 'react'
import styles from '../styles/article.module.scss'
import { formatDistanceToNow } from 'date-fns'
import { navigate } from 'gatsby'

const ArticleItem = ({ post = {}, skeleton = false, loading = false }) => {
  const VoteButton = ({ children }) => {
    return (
      <button className={styles.articleItemVoteButton}>
        <span className={styles.articleItemVoteButtonInner}>
          {children}
        </span>
      </button>
    )
  }
  let itemClass = `${styles.articleItem}`
  let excerptClass = `${styles.articleItemContentExcerpt}`
  let infoInner = `${styles.articleItemContentInfoInner}`
  let contentTitle = `${styles.articleItemContentTitle}`
  if (skeleton) {
    if (!loading) {
      itemClass += ` ${styles.articleSkeleton}`
    } else {
      itemClass += ` ${styles.articleSkeletonLoading}`
      infoInner += ` ${styles.articleSkeletonAnimate}`
      contentTitle += ` ${styles.articleSkeletonAnimate}`
      excerptClass += ` ${styles.articleSkeletonAnimate}`
    }
    excerptClass += ` ${styles.articleSkeletonContent}`
  }
  const toPost = path => {
    return e => {
      if (e.target) {
        navigate(path)
      }
    }
  }
  return (
    <>
      <div className={itemClass}>
        <div className={styles.articleItemSide}>
          <div className={styles.articleItemSideInner}>
            <VoteButton>
              <i className={styles.articleItemVoteIconUp}></i>
            </VoteButton>
            <div className={styles.articleItemVoteNum}></div>
            <VoteButton>
              <i className={styles.articleItemVoteIconDown}></i>
            </VoteButton>
          </div>
        </div>
        <div
          className={styles.articleItemContent}
          role="button"
          tabIndex="0"
          onKeyDown={toPost(post.url)}
          onClick={toPost(post.url)}>
          <div className={styles.articleItemContentInfo} style={loading ? {width: `232px`} : {}}>
            <div className={infoInner}>
              <div className={styles.articleItemContentInfoInnerLabel}>
                <span className={styles.articleItemContentInfoPostby}>{!skeleton && 'Posted by'}</span>
                <div className={styles.articleItemContentInfoAuthor}>
                  <span className={styles.articleItemContentInfoAuthorName}>{!skeleton && `u/${post.author}`}</span>
                </div>
                <span className={styles.articleItemContentInfoDate}>{!skeleton && formatDistanceToNow(new Date(post.date), { addSuffix: true })}</span>
              </div>
            </div>
          </div>
          <div className={contentTitle} style={loading ? {width: `328px`} : {}}>
            <div className={styles.articleItemContentTitleOutter}>
              <div className={styles.articleItemContentTitleInner}>
                <h3 className={styles.articleItemContentTitleH3}>{post.title}</h3>
              </div>
            </div>
          </div>
          <div className={excerptClass}>
            <div className={styles.articleItemContentMask} dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>
          </div>
          {!skeleton && 
          <div className={styles.articleItemContentFooter}>
            <div className={styles.articleItemContentFooterInner}>
              <div className={styles.articleItemContentFooterShare}>
                <button className={styles.articleItemContentFooterShareBtn}>
                  <i className={styles.articleItemContentFooterShareIcon}></i>
                  <span className={styles.articleItemContentFooterText}>share</span>
                </button>
              </div>
            </div>
          </div>
          }
        </div>
      </div>
    </>
  )
}

export default ArticleItem