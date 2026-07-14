require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Mr James Neffendorf',
    description:
      'Consultant ophthalmologist and vitreoretinal surgeon in London, specialising in cataract and retinal surgery.',
    siteUrl: `https://mrjamesneffendorf.com`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    `gatsby-plugin-sitemap`,
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
