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
        url: 'https://github.com/yuchanns/vuepress-theme-reddit',
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
        color: '#0079d3',
        desc: 'Ask questions and post articles about the Go programming language and related tools, events etc.',
        logo: '/images/categories/golang.png',
        name: 'The Go Programming Language'
      },
      {
        path: 'ubuntu',
        color: '#e95420',
        desc: 'The Ubuntu community on Reddit',
        logo: '/images/categories/ubuntu.png',
        name: 'Ubuntu: Linux for Human Beings'
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-theme-reddit`,
      options: {},
    },
  ],
}