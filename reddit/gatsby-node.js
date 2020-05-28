const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const usePosts = require(`./utils/use-posts`)
const useCategories = require(`./utils/use-categories`)
const usePagination = require(`./utils/use-pagination`)
const crypto = require('crypto')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const hash = crypto.createHash('md5').update(new Date().getTime().toString()).digest('hex')

  const homeComponent = path.resolve(__dirname, 'layouts/home.js')
  createPage({
    path: '/',
    component: homeComponent,
    context: {
      hash: hash
    }
  })

  createPage({
    path: '/top',
    component: homeComponent,
    context: {
      hash: hash
    }
  })
  
  createPage({
    path: '/404/',
    component: path.resolve(__dirname, 'layouts/not-found.js')
  })

  // home posts
  const posts = await usePosts(graphql)
  const topPosts = await usePosts(graphql, true)
  usePagination(posts, path.resolve(`public/paginationJson`), 'index', 5, hash)
  usePagination(topPosts, path.resolve(`public/paginationJson`), 'top', 5, hash)
  // categories posts
  const categories = await useCategories(graphql)
  const categoryComponent = path.resolve(__dirname, 'layouts/category.js')
  categories.forEach(async category => {
    createPage({
      path: `/r/${category.path}`,
      component: categoryComponent,
      context: {
        category: category,
        hash: hash,
        filterCategory: category.path
      }
    })
    createPage({
      path: `/r/${category.path}/top`,
      component: categoryComponent,
      context: {
        category: category,
        hash: hash,
        filterCategory: category.path
      }
    })
    const posts = await usePosts(graphql, false, category.path)
    const topPosts = await usePosts(graphql, true, category.path)
    usePagination(posts, path.resolve(`public/paginationJson`), `${category.path}-index`, 5, hash)
    usePagination(topPosts, path.resolve(`public/paginationJson`), `${category.path}-top`, 5, hash)
  })
}