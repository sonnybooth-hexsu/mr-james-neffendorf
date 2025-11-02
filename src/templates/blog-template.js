import React from 'react'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import Seo from '../components/seo'
import moment from 'moment'
import swoosh2 from '../assets/swoosh-2.svg'

class BlogTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPage')
    const bodyDocument = JSON.parse(post.bodyText.raw)

    const options = {
      preserveWhitespace: true,
    }

    return (
      <Layout>
        <Seo title={post.seoTitle} description={post.metaDescription} />
        <section id="relume" className="px-[5%] py-20 md:py-24 lg:py-28">
          <div className="container">
            <div className="flex flex-col items-start justify-start w-full max-w-lg mx-auto mb-12 md:mb-16 lg:mb-20">
              <p className="inline-flex tag items-center gap-1.5">
                {post.category}
              </p>
              <h1 className="mt-6 mb-8 font-bold text-7xl md:mb-10 md:text-7xl lg:mb-12 lg:text-8xl">
                {post.heading}
              </h1>
              <div className="flex flex-col items-start justify-between w-full sm:flex-row sm:items-end">
                <div className="flex items-center mb-4 rb-4 sm:mb-0">
                  <div className="mr-4 shrink-0">
                    <img
                      src={post.authImage.url}
                      className="object-cover rounded-full size-14 min-h-14 min-w-14"
                    />
                  </div>
                  <div>
                    <h6 className="font-medium">{post.author}</h6>
                    <div className="flex mt-1">
                      <p className="text-base">
                        {moment(post.authDate).format('DD MMM YYYY')}
                      </p>
                      <span className="mx-2">•</span>
                      <p className="text-base">{post.readTime} read</p>
                    </div>
                  </div>
                </div>
                <div className="rt-4 mt-4 grid grid-flow-col grid-cols-[max-content] items-start gap-2"></div>
              </div>
            </div>
            <div className="w-full overflow-hidden rounded-3xl aspect-w-16 aspect-h-9">
              <img
                src={post.banner.url}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>
        <section id="relume" className="px-[5%] pb-16 md:pb-24 lg:pb-28">
          <div className="container">
            <div className="max-w-lg mx-auto">
              <div className="mb-12 prose md:prose-md lg:prose-lg md:mb-20">
                <div
                  className="mb-4 text-lg text-gray-700 prose-content"
                  dangerouslySetInnerHTML={{
                    __html: documentToHtmlString(bodyDocument, options),
                  }}
                />
              </div>
            </div>
          </div>
        </section>
        {/* Call To Action */}
        <section className="relative border-t px-[5%] lg:px-[5%] overflow-hidden fade-in">
          <img
            src={swoosh2}
            className="absolute inset-0 object-cover w-full h-full"
            alt="Visual brand element in the shape of an eye"
          />
          <div className="container relative z-10 flex flex-col items-center justify-center py-20 text-center md:py-28 lg:py-40">
            <div className="flex justify-center mt-4">
              <button
                className="inline-flex items-center justify-center gap-3 px-8 mb-2 font-medium transition-colors border rounded-full shadow-md btn-56 lg:px-12 focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-jamesBlue bg-jamesBlue text-text-alternative hover:bg-jamesLight hover:border-jamesLight"
                onClick={() => (window.location.href = '/contact')}
              >
                Book a Consultation
              </button>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default BlogTemplate

export const pageQuery = graphql`
  query BlogById($id: String!) {
    contentfulBlogPage(id: { eq: $id }) {
      heading
      author
      authDate
      authImage {
        url
      }
      readTime
      banner {
        url
      }
      bodyText {
        raw
      }
      category
      seoTitle
      metaDescription
    }
  }
`
