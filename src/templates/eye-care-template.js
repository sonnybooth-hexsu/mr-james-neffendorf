import React from 'react'
import get from 'lodash/get'
import { graphql } from 'gatsby';

import Layout from '../components/layout'

class EyeCareTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulEyeCare')
    console.log(post)

    return (
      <Layout>
        <p>{post.heading}</p>
      </Layout>
    )
  }
}

export default EyeCareTemplate

export const pageQuery = graphql`
  query EyeCareById(
    $id: String!
  ) {
    contentfulEyeCare(id: { eq: $id }) {
      heading
    }
  }
`
