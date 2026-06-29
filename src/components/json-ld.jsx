import * as React from 'react'
import { Helmet } from 'react-helmet'

/**
 * Renders one or more schema.org JSON-LD blocks into <head>.
 * Accepts a single schema object/array; falsy entries are skipped so callers
 * can pass conditional builders (e.g. FAQ schema only when FAQs exist).
 *
 * `<` is escaped to its unicode form to prevent any `</script>` in the data
 * from prematurely closing the tag.
 */
const JsonLd = ({ data }) => {
  if (!data) return null
  const blocks = (Array.isArray(data) ? data : [data]).filter(Boolean)
  if (!blocks.length) return null

  return (
    <Helmet>
      {blocks.map((block, index) => (
        <script type="application/ld+json" key={index}>
          {JSON.stringify(block).replace(/</g, '\\u003c')}
        </script>
      ))}
    </Helmet>
  )
}

export default JsonLd
