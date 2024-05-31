const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const eyeCarePost = path.resolve('./src/templates/eye-care-template.js')
  const retinaPost = path.resolve('./src/templates/retina-template.js')
  const cataractPost = path.resolve('./src/templates/cataract-template.js')

  const result = await graphql(`
    {
      allContentfulEyeCare {
        nodes {
          id
          slug
        }
      }
      allContentfulCataract {
        nodes {
          id
          slug
        }
      }
      allContentfulRetina {
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

  const eyeCare = result.data.allContentfulEyeCare.nodes
  const retina = result.data.allContentfulRetina.nodes
  const cataract = result.data.allContentfulCataract.nodes

  if (eyeCare.length > 0) {
    eyeCare.forEach(async (post) => {
      createPage({
        path: `/eye-care/${post.slug}/`,
        component: eyeCarePost,
        context: {
          id: post.id,
        },
      })
    })
  }

  if (retina.length > 0) {
    retina.forEach(async (post) => {
      createPage({
        path: `/retina/${post.slug}/`,
        component: retinaPost,
        context: {
          id: post.id,
        },
      })
    })
  }

  if (cataract.length > 0) {
    cataract.forEach(async (post) => {
      createPage({
        path: `/cataract/${post.slug}/`,
        component: cataractPost,
        context: {
          id: post.id,
        },
      })
    })
  }
}
