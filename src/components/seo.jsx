import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { useLocation } from '@reach/router'

const Seo = ({ description = '', title = '' }) => {
  const { site } = useStaticQuery(graphql`{
    site { siteMetadata { siteUrl } }
  }`)
  const { pathname } = useLocation()
  const canonical = `${site.siteMetadata.siteUrl}${pathname}`

  return (
    <Helmet
      title={title}
      meta={[
        {
          name: `description`,
          content: description,
        },
      ]}
    >
      <link rel="canonical" href={canonical} />
    </Helmet>
  )
}

export default Seo
