module.exports = {
  siteMetadata: {
    title: 'Gatsby Theme - Reddit',
    description: `A Reddit Style Blog Theme for Gatsby`,
    author: {
      name: 'yuchanns',
      avatar: '/yuchanns.jpg'
    },
    nav: [
      {
        name: 'About',
        color: '#0079d3',
        logo: '/yuchanns.jpg',
        url: '/about',
        extern: false
      },
      {
        name: 'Repo',
        color: '',
        logo: '/yuchanns.jpg',
        url: 'https://github.com/yuchanns/gatsby-theme-reddit',
        extern: true
      }
    ],
    sns: [
      { type: 'email', url: 'mailto:airamusume@gmail.com' },
      { type: 'github', url: 'https://github.com/yuchanns' },
      { type: 'twitter', url: 'https://twitter.com/Airamusume' }
    ],
    categories: [
      {
        path: 'golang',
        color: '#33a8ff',
        desc: 'Ask questions and post articles about the Go programming language and related tools, events etc.',
        logo: '/images/categories/golang.png',
        name: 'The Go Programming Language',
        bg: '/images/categories/golang-bg.png',
      },
      {
        path: 'ubuntu',
        color: '#e95420',
        desc: 'The Ubuntu community on Reddit',
        logo: '/images/categories/ubuntu.png',
        name: 'Ubuntu: Linux for Human Beings',
        bg: '/images/categories/ubuntu-bg.png',
      },
      {
        path: 'devops',
        desc: 'Welcome to devops',
        name: 'Everything DevOps'
      }
    ],
    awesome: [
      { name: 'Reddit', logo: '/images/awesome/reddit.svg', url: 'https://www.reddit.com', author: 'Condé Nast Digital' },
      { name: 'Gatsby', svg: '/images/awesome/gatsby.svg', url: 'https://www.gatsbyjs.org', author: 'Gatsbyjs' },
      { name: 'Default Example', author: 'Anonymous' },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-reddit`,
      options: {},
    },
  ],
}