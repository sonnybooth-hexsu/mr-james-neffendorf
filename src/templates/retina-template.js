import React from 'react'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

import Layout from '../components/layout'

class RetinaTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulRetina')
    const document = JSON.parse(post.body.raw)

    const options = {
      preserveWhitespace: true,
    }

    return (
      <Layout>
        <p>{post.heading}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: documentToHtmlString(document, options),
          }}
        />
      </Layout>
    )
  }
}

export default RetinaTemplate

export const pageQuery = graphql`
  query RetinaById($id: String!) {
    contentfulRetina(id: { eq: $id }) {
      heading
      body {
        raw
      }
    }
  }
`
