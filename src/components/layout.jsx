import React, { useEffect } from 'react'

import '../styles/variables.css'
import '../styles/global.css'
import Navigation from './navigation'
import Footer from './footer'

export const Layout = (props) => {
  useEffect(() => window.scrollTo(0, 0), [])

  return (
    <>
      <Navigation />
      <main>{props.children}</main>
      <Footer />
    </>
  )
}

export default Layout
