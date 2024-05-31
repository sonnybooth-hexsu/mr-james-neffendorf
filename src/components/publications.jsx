import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export const Publications = () => {
  const publicationsData = useStaticQuery(graphql`
    query {
      allContentfulPublications {
        nodes {
          heading
          subHeading
          link
          date
        }
      }
    }
  `)

  return (
    <div>
      {publicationsData?.allContentfulPublications?.nodes.map(
        ({ heading, subHeading, link, date }, id) => (
          <div key={id}>
            <p>heading: {heading}</p>
            <p>subHeading: {subHeading}</p>
            <p>link: {link}</p>
            <p>date: {date}</p>
          </div>
        )
      )}
    </div>
  )
}

export default Publications
