import * as React from 'react'
import { Helmet } from 'react-helmet'

const Seo = ({ description = '', title= '' }) => {
  return (
    <Helmet
      title={title}
      meta={[
        {
          name: `description`,
          content: description,
        },
      ]}
    />
  )
}

export default Seo
