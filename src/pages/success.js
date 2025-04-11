import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

class RootIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title='Thank You | Mr James Neffendorf Eye Care, London' description='Thank you for getting in touch with Mr James Neffendorf. Your enquiry has been received and a member of our team will respond as soon as possible.' />
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
