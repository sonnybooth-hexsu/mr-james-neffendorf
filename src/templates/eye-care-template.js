import React from 'react'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

import Layout from '../components/layout'

class EyeCareTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulEyeCare')
    const document = JSON.parse(post.body.raw)

    const options = {
      preserveWhitespace: true,
    }

    return (
      <Layout>
        <div className="main-content">
          <p>{post.heading}</p>
          <div
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(document, options),
            }}
          />
        </div>
      </Layout>
    )
  }
}

export default EyeCareTemplate

export const pageQuery = graphql`
  query EyeCareById($id: String!) {
    contentfulEyeCare(id: { eq: $id }) {
      heading
      body {
        raw
      }
    }
  }
`
