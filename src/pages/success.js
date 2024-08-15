import React from 'react'
import Layout from '../components/layout'

class RootIndex extends React.Component {
  render() {
    return (
      <Layout>
        <div className="main-content">
          <a className="block p-12" href="/">
            Thank you for your enquiry. Back to homepage
          </a>
        </div>
      </Layout>
    )
  }
}

export default RootIndex
