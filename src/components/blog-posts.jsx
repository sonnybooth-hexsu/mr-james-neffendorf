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
      <div className="grid items-stretch grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 md:gap-y-12 lg:grid-cols-3">
        {blogs.allContentfulBlogPage.nodes.map((item, index) => (
          <article key={index} className="flex flex-col h-full">
            {/* Media */}
            <a href={item.slug} className="inline-block w-full max-w-full mb-6">
              <div className="w-full overflow-hidden rounded-lg">
                <img
                  src={item.banner.url}
                  alt=""
                  className="aspect-[3/2] size-full object-cover"
                />
              </div>
            </a>

            {/* Body (flex-1 keeps the footer pinned) */}
            <div className="flex-1">
              <a href={item.slug} className="inline-block max-w-full tag">
                {item.category}
              </a>

              <a href={item.slug} className="block max-w-full mb-2">
                <h2 className="mt-2 text-3xl font-bold">{item.heading}</h2>
              </a>
            </div>

            {/* Footer pinned to bottom */}
            <div className="flex items-center pt-6 mt-auto">
              <div className="flex items-center">
                <div className="mr-4 shrink-0">
                  <img
                    src={item.authImage.url}
                    alt={item.author}
                    className="object-cover border border-solid rounded-full border-grey-100 inset-shadow-sm size-12 min-h-12 min-w-12"
                  />
                </div>

                <div className="flex flex-col gap-1 text-base text-gray-700">
                  <h6 className="text-base font-medium text-gray-900">
                    {item.author}
                  </h6>
                  <p>{moment(item.authDate).format('DD MMM YYYY')}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default BlogPosts
