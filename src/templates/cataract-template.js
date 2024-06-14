import React from 'react'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

import Layout from '../components/layout'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@relume_io/relume-ui'

class CataractTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulCataract')
    const symptomsDocument = JSON.parse(post.symptoms.raw)

    console.log(post.symptomsAccordion)

    const options = {
      preserveWhitespace: true,
    }

    return (
      <Layout>
        <div className="main-content">
          <h2>Overview</h2>
          <p>{post.overview}</p>
          <h2>Symptoms</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(symptomsDocument, options),
            }}
          />
          {post.solutions && (
            <>
              <h2>Solutions</h2>
              <p>{post.solutions}</p>
            </>
          )}
          {post.symptomsAccordion && (
            <Accordion type="multiple">
              {post.symptomsAccordion.items.map(({ title, content }, id) => (
                <AccordionItem key={id} value={`solution${id}`}>
                  <AccordionTrigger className="cursor-pointer p-4 min-h-[48px] flex items-center justify-between">
                    {title}
                  </AccordionTrigger>
                  <AccordionContent className="p-4">
                    <p className="text-gray-500">{content}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
          {post.faqs && (
            <>
              <h2>Frequently asked question</h2>
              <Accordion type="multiple">
                {post.faqs.items.map(({ title, content }, id) => (
                  <AccordionItem key={id} value={`solution${id}`}>
                    <AccordionTrigger className="cursor-pointer p-4 min-h-[48px] flex items-center justify-between">
                      {title}
                    </AccordionTrigger>
                    <AccordionContent className="p-4">
                      <p className="text-gray-500">{content}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </>
          )}
        </div>
      </Layout>
    )
  }
}

export default CataractTemplate

export const pageQuery = graphql`
  query CataractById($id: String!) {
    contentfulCataract(id: { eq: $id }) {
      heading
      overview
      symptoms {
        raw
      }
      symptomsAccordion {
        items {
          title
          content
        }
      }
      faqs {
        items {
          title
          content
        }
      }
      solutions
      body {
        raw
      }
    }
  }
`
