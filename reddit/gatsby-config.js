const queries = require("./utils/algolia")
require("dotenv").config()

module.exports = (options = {}) => {
  return {
    siteMetadata: {
      title: 'Gatsby Theme - Reddit',
      siteUrl: 'https://gatsby-theme-reddit.netlify.app',
      description: `A Reddit Style Blog Theme for Gatsby`,
      author: {
        name: 'yuchanns',
        avatar: '/yuchanns.jpg'
      },
      feeds: [
        { url: '/', color: '#0079d3', svg: 'nav-home', name: 'Home' },
        { url: '/popular', color: '#0079d3', svg: 'nav-popular', name: 'Popular' }
      ],
      nav: [],
      sns: [],
      categories: [],
      awesome: [],
    },
    plugins: [
      {
        resolve: `gatsby-theme-blog-core`,
        options,
      },
      `gatsby-plugin-smoothscroll`,
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-plugin-sass`,
        options: {
          cssLoaderOptions: {
            localIdentName: '[hash:base64:20]'
          },
        },
      },
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: "gatsby-remark-custom-blocks",
              options: {
                  blocks: {
                      snippet: {
                          classes: "snippet"
                      },
                  },
              },
            }
          ],
        },
      },
      {
        resolve: "gatsby-plugin-excerpts",
        options: {
          sources: {
              snippetBlocks: {
                  type: "htmlQuery",
                  sourceField: "html",
                  excerptSelector: ".custom-block.snippet .custom-block-body",
                  // stripSelector: "a",
                  elementReplacements: [
                      {
                          selector: "h6",
                          replaceWith: "strong"
                      },
                      {
                          selector: "h5",
                          replaceWith: "h6"
                      },
                      {
                          selector: "h4",
                          replaceWith: "h5"
                      },
                      {
                          selector: "h3",
                          replaceWith: "h4"
                      },
                      {
                          selector: "h2",
                          replaceWith: "h3"
                      },
                  ],
              },
              default: {
                  type: "htmlQuery",
                  sourceField: "html",
                  excerptSelector: "html > *",
                  ignoreSelector: "img, .gatsby-highlight",
                  // stripSelector: "a",
                  elementReplacements: [
                      {
                          selector: "h6",
                          replaceWith: "strong"
                      },
                      {
                          selector: "h5",
                          replaceWith: "h6"
                      },
                      {
                          selector: "h4",
                          replaceWith: "h5"
                      },
                      {
                          selector: "h3",
                          replaceWith: "h4"
                      },
                      {
                          selector: "h2",
                          replaceWith: "h3"
                      },
                  ],
                  truncate: {
                      length: 80,
                      byWords: true,
                      ellipsis: "…"
                  },
              }
          },
          sourceSets: {
              markdownHtml: [
                  "snippetBlocks",
                  "default"
              ]
          },
          excerpts: {
              snippet: {
                  type: "html",
                  nodeTypeSourceSet: {
                      MarkdownRemark: "markdownHtml"
                  }
              }
          }
        },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.REDDIT_ALGOLIA_APP_ID,
        apiKey: process.env.REDDIT_ALGOLIA_ADMIN_KEY,
        queries,
        chunkSize: 10000, // default: 1000
      },
    },
    ].filter(Boolean)
  }
}
