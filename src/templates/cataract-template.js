import React from 'react'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

import Layout from '../components/layout'

class CataractTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulCataract')
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

export default CataractTemplate

export const pageQuery = graphql`
  query CataractById($id: String!) {
    contentfulCataract(id: { eq: $id }) {
      heading
      body {
        raw
      }
    }
  }
`
