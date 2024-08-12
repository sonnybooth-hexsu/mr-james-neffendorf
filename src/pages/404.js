import React from 'react'
import Layout from '../components/layout'

class RootIndex extends React.Component {
  render() {
    return (
      <Layout>
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
