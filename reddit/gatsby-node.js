const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const useNewPosts = require(`./utils/use-new-posts`)
const useTopPosts = require(`./utils/use-top-posts`)
const usePagination = require(`./utils/use-pagination`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const homeComponent = path.resolve(__dirname, 'layouts/home.js')
  createPage({
    path: '/',
    component: homeComponent,
    context: {}
  })

  createPage({
    path: '/top',
    component: homeComponent,
    context: {}
  })
  
  createPage({
    path: '/404/',
    component: path.resolve(__dirname, 'layouts/not-found.js')
  })

  const posts = await useNewPosts(graphql)
  const topPosts = await useTopPosts(graphql)
  usePagination(posts, path.resolve(`public/paginationJson`), 'index', 5)
  usePagination(topPosts, path.resolve(`public/paginationJson`), 'top', 5)
}