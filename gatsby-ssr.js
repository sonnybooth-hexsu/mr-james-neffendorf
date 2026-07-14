import React from 'react'

export const onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  setHtmlAttributes({ lang: 'en-GB' })
  setHeadComponents([
    <link
      key="typekit"
      rel="stylesheet"
      href="https://use.typekit.net/nak2vhf.css"
    />,
  ])
}
