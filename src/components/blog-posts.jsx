import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import moment from 'moment'
export const BlogPosts = () => {
  const blogs = useStaticQuery(graphql`
    query {
      allContentfulBlogPage {
        nodes {
          heading
          category
          slug
          author
          authDate
          authImage {
            url
          }
          banner {
            url
          }
        }
      }
    }
  `)

  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 md:gap-y-12 lg:grid-cols-3">
        {blogs.allContentfulBlogPage.nodes.map((item, index) => (
          <div key={index}>
            <a href={item.slug} className="inline-block w-full max-w-full mb-6">
              <div className="w-full overflow-hidden">
                <img
                  src={item.banner.url}
                  className="aspect-[3/2] size-full object-cover"
                />
              </div>
            </a>
            <a
              href={item.slug}
              className="inline-block max-w-full mb-2 mr-4 text-sm font-semibold"
            >
              {item.category}
            </a>
            <a href={item.slug} className="block max-w-full mb-2">
              <h5 className="text-xl font-bold md:text-2xl">{item.heading}</h5>
            </a>
            <div className="flex items-center mt-6">
              <div className="mr-4 shrink-0">
                <img
                  src={item.authImage.url}
                  className="object-cover rounded-full size-12 min-h-12 min-w-12"
                />
              </div>
              <div className="flex items-center">
                <h6 className="text-sm font-semibold">{item.author}</h6>
                <span className="mx-2">•</span>
                <p className="text-sm">
                  {moment(item.authDate).format('DD MMM YYYY')}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogPosts
