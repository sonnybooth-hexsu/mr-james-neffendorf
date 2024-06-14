import './src/styles/global.css'
import React from 'react'
import { Helmet } from 'react-helmet'

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(
    <Helmet>
      <link rel="stylesheet" href="https://use.typekit.net/nak2vhf.css" />
    </Helmet>
  )
}
