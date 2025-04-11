import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

class RootIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title='Page Not Found (404) | Mr James Neffendorf Eye Care' description="Sorry, the page you're looking for isn't available. Return to the homepage to explore expert eye care treatments and services." />
        <div className="main-content">
          <a className="block p-12" href="/">
            Page not found. Back to homepage
          </a>
        </div>
      </Layout>
    )
  }
}

export default RootIndex
