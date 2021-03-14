module.exports = {
  siteMetadata: {
    title: 'The Habr Blog'
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: 'src/blog'
      }
    },
    'gatsby-transformer-remark'
  ]
};
