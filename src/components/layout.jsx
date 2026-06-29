import React, { useEffect } from 'react'
import { useLocation } from '@reach/router'

import '../styles/variables.css'
import '../styles/global.css'
import Navigation from './navigation'
import Footer from './footer'
import JsonLd from './json-ld'
import { globalGraph, buildBreadcrumbList } from '../utils/structured-data'

export const Layout = (props) => {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo(0, 0), [])

  return (
    <>
      <JsonLd data={globalGraph} />
      <JsonLd data={buildBreadcrumbList(pathname)} />
      <Navigation />
      <main>{props.children}</main>
      <Footer />
    </>
  )
}

export default Layout
