# gatsby-theme-reddit
A Reddit Style Blog Theme for Gatsby

## usage
1.Install the blog theme
```sh
yarn add gatsby-theme-reddit
```
2.Add the configuration to your `gatsby-config.js` file
```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-reddit`,
      options: {
        // basePath defaults to `/`
        basePath: `/blog`,
      },
    },
  ],
}
```
3.Run your site.