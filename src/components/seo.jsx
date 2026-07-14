import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { useLocation } from '@reach/router'

const Seo = ({ description = '', title = '', image = '', type = 'website' }) => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)
  const { pathname } = useLocation()
  const siteUrl = site.siteMetadata.siteUrl
  const canonical = `${siteUrl}${pathname}`

  // Resolve any asset URL (relative, protocol-relative or absolute) to a
  // fully-qualified URL, falling back to the default share image.
  const resolveUrl = (url) => {
    if (!url) return `${siteUrl}/james-neffendorf.jpg`
    if (url.startsWith('//')) return `https:${url}`
    if (url.startsWith('http')) return url
    return `${siteUrl}${url.startsWith('/') ? '' : '/'}${url}`
  }
  const ogImage = resolveUrl(image)

  return (
    <Helmet
      title={title}
      meta={[
        { name: `description`, content: description },
        { property: `og:title`, content: title },
        { property: `og:description`, content: description },
        { property: `og:type`, content: type },
        { property: `og:url`, content: canonical },
        { property: `og:image`, content: ogImage },
        { property: `og:site_name`, content: `Mr James Neffendorf` },
        { property: `og:locale`, content: `en_GB` },
        { name: `twitter:card`, content: `summary_large_image` },
        { name: `twitter:title`, content: title },
        { name: `twitter:description`, content: description },
        { name: `twitter:image`, content: ogImage },
      ]}
    >
      <link rel="canonical" href={canonical} />
    </Helmet>
  )
}

export default Seo
