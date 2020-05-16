const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  createPage({
    path: '/',
    component: path.resolve(__dirname, 'layouts/home.js'),
    context: {}
  })
  
  createPage({
    path: '/404/',
    component: path.resolve(__dirname, 'layouts/not-found.js')
  })
}