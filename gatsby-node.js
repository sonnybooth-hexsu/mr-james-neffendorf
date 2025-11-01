const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const eyeCarePost = path.resolve('./src/templates/eye-care-template.js')
  const retinaPost = path.resolve('./src/templates/retina-template.js')
  const cataractPost = path.resolve('./src/templates/cataract-template.js')
  const blogPost = path.resolve('./src/templates/blog-template.js')

  const result = await graphql(`
    {
      allContentfulEyeCarePage {
        nodes {
          id
          slug
        }
      }
      allContentfulCataractPage {
        nodes {
          id
          slug
        }
      }
      allContentfulRetinaPage {
        nodes {
          id
          slug
        }
      }
      allContentfulBlogPage {
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

  const eyeCare = result.data.allContentfulEyeCarePage.nodes
  const retina = result.data.allContentfulRetinaPage.nodes
  const cataract = result.data.allContentfulCataractPage.nodes
  const blog = result.data.allContentfulBlogPage.nodes

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

   if (blog.length > 0) {
    blog.forEach(async (post) => {
      createPage({
        path: `/blog/${post.slug}/`,
        component: blogPost,
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
