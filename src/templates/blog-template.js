import React from 'react'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import Seo from '../components/seo'

class BlogTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPage')
    const bodyDocument = JSON.parse(post.bodyText.raw)
    console.log(post)

    const options = {
      preserveWhitespace: true,
    }

    return (
      <Layout>
        <Seo title={post.seoTitle} description={post.metaDescription} />``
        
        <section id="relume" className="px-[5%] py-20 md:py-24 lg:py-28">
  <div className="container">
    <div
      className="flex flex-col items-start justify-start w-full max-w-lg mx-auto mb-12 md:mb-16 lg:mb-20"
    >
          <p className="inline-flex tag items-center gap-1.5">{post.category}</p>
      <h1 className="mt-6 mb-8 text-5xl font-bold md:mb-10 md:text-7xl lg:mb-12 lg:text-8xl">
       {post.heading}
      </h1>
      <div className="flex flex-col items-start justify-between w-full sm:flex-row sm:items-end">
        <div className="flex items-center mb-4 rb-4 sm:mb-0">
          <div className="mr-4 shrink-0">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              alt="Relume placeholder avatar"
              className="object-cover rounded-full size-14 min-h-14 min-w-14"
            />
          </div>
          <div>
            <h6 className="font-semibold">by {post.author}</h6>
            <div className="flex mt-1">
              <p className="text-sm">{post.authDate}</p>
              <span className="mx-2">•</span>
              <p className="text-sm">{post.readTime} read</p>
            </div>
          </div>
        </div>
        <div className="rt-4 mt-4 grid grid-flow-col grid-cols-[max-content] items-start gap-2">
          <a href="#" className="rounded-[1.25rem] bg-background-secondary p-1"
            ><svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="size-6"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.222 19.778a4.983 4.983 0 0 0 3.535 1.462 4.986 4.986 0 0 0 3.536-1.462l2.828-2.829-1.414-1.414-2.828 2.829a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.829-2.828-1.414-1.414-2.829 2.828a5.006 5.006 0 0 0 0 7.071zm15.556-8.485a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0L9.879 7.051l1.414 1.414 2.828-2.829a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.829 2.828 1.414 1.414 2.829-2.828z"
              ></path>
              <path d="m8.464 16.95-1.415-1.414 8.487-8.486 1.414 1.415z"></path></svg></a
          ><a href="#" className="rounded-[1.25rem] bg-background-secondary p-1"
            ><svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="size-6"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"
              ></path></svg></a
          >
        </div>
      </div>
    </div>
    <div className="w-full mx-auto overflow-hidden">
      <img
          src={post.banner.url}
      />
    </div>
  </div>
</section>
        <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
  <div className="container">
    <div className="mx-auto max-w-lg">
      <div className="prose mb-12 md:prose-md lg:prose-lg md:mb-20">
        <div
            className="mb-4 text-gray-600"
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(bodyDocument, options),
            }}
          />
      </div>
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="sm:max-w-1/2">
          <p className="font-semibold md:text-md">Share this post</p>
          <div className="mt-3 flex items-start gap-2 md:mt-4">
            <a href="#" className="size-8 rounded-[1.25rem] bg-background-secondary p-1"
              ><svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="size-6"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.222 19.778a4.983 4.983 0 0 0 3.535 1.462 4.986 4.986 0 0 0 3.536-1.462l2.828-2.829-1.414-1.414-2.828 2.829a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.829-2.828-1.414-1.414-2.829 2.828a5.006 5.006 0 0 0 0 7.071zm15.556-8.485a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0L9.879 7.051l1.414 1.414 2.828-2.829a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.829 2.828 1.414 1.414 2.829-2.828z"
                ></path>
                <path d="m8.464 16.95-1.415-1.414 8.487-8.486 1.414 1.415z"></path></svg></a
            ><a href="#" className="size-8 rounded-[1.25rem] bg-background-secondary p-1"
              ><svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="size-6"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"
                ></path></svg></a
            ><a href="#" className="size-8 rounded-[1.25rem] bg-background-secondary p-1"
              ><svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="size-6 p-0.5"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                ></path></svg></a
            ><a href="#" className="size-8 rounded-[1.25rem] bg-background-secondary p-1"
              ><svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="size-6"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"
                ></path></svg
            ></a>
          </div>
        </div>
        <div className="sm:max-w-1/2">
          <ul className="flex flex-wrap gap-2 sm:justify-end">
            <li className="flex">
              <a href="#" className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                >Tag one</a
              >
            </li>
            <li className="flex">
              <a href="#" className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                >Tag two</a
              >
            </li>
            <li className="flex">
              <a href="#" className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                >Tag three</a
              >
            </li>
            <li className="flex">
              <a href="#" className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                >Tag four</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div className="my-8 h-px bg-border-primary md:my-12"></div>
      <div className="flex items-center gap-4">
        <div>
          <img
            src="https://cdn.prod.website-files.com/624380709031623bfe4aee60/6243807090316203124aee66_placeholder-image.svg"
            alt="Logo"
            className="size-14 rounded-full object-cover"
          />
        </div>
        <div className="grow">
          <p className="font-semibold md:text-md">Full name</p>
          <p>Job title, Company name</p>
        </div>
      </div>
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
