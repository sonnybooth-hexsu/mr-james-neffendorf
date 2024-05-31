const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const eyeCarePost = path.resolve('./src/templates/eye-care-template.js')

  const result = await graphql(`
    {
      allContentfulEyeCare {
        nodes {
          id
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allContentfulEyeCare.nodes

  // Create blog posts pages
  // But only if there's at least one blog post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach(async (post) => {
      createPage({
        path: `/eye-care/${post.slug}/`,
        component: eyeCarePost,
        context: {
          id: post.id,
        },
      })
    })
  }
}
