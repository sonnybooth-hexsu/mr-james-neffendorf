require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Gatsby Contentful Starter',
    description: 'Official Contentful Gatsby Starter',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'tgmmiaqdbhjb',
        accessToken: 'ZBD32AIBLqhPolY8T9lu_pRXMycHZF4_tWdkpkQNOxE',
        host: process.env.CONTENTFUL_HOST,
      },
    },
  ],
}
