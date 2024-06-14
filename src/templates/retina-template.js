import React from 'react'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import grade from '../assets/grade.svg'
import doctifyLogo from '../assets/doctify-logo.svg'
import Layout from '../components/layout'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@relume_io/relume-ui'

class RetinaTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulRetina')
    const symptomsDocument = JSON.parse(post.symptoms.raw)
    const overviewDocument = JSON.parse(post.overview.raw)

    const options = {
      preserveWhitespace: true,
    }

    return (
      <Layout>
        <div className="main-content">
          <section className="px-[5%] border-b py-16 md:py-24 lg:py-28">
            <div className="container">
              <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 md:grid-cols-2 lg:items-center">
                <div>
                  <h1 className="mt-4 mb-4 font-bold">{post.heading}</h1>
                  <p className="mb-8 md:text-md">
                    {post.introductionText.introductionText}
                  </p>
                  <div className="flex items-center">
                    <img
                      src={doctifyLogo}
                      className="object-cover mr-2 max-h-12"
                      alt="Placeholder image"
                    />
                    <div className="flex">
                      <img src={grade} alt="Star" className="w-6 h-6" />
                      <img src={grade} alt="Star" className="w-6 h-6" />
                      <img src={grade} alt="Star" className="w-6 h-6" />
                      <img src={grade} alt="Star" className="w-6 h-6" />
                      <img src={grade} alt="Star" className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={post.headingImage.url}
                    className="object-cover w-full rounded-xl "
                    alt="Placeholder image"
                  />
                  <div className="absolute flex items-center p-4 bg-white rounded-md shadow-xl bottom-4 right-4">
                    <p className="mr-2 text-xs font-bold text-gray-900 md:text-sm">
                      Excellent
                    </p>
                    <p className="mr-2 text-xs md:text-sm">4.94 out of 5</p>
                    <img
                      src={doctifyLogo}
                      className="ml-2 max-h-12"
                      alt="Doctify logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="px-[5%]">
            <main className="container py-16 mx-auto">
              <div className="grid md:grid-cols-4 md:gap-x-10">
                <div className="md:col-span-3 md:col-start-1">
                  <section>
                    <div
                      className="mb-8"
                      dangerouslySetInnerHTML={{
                        __html: documentToHtmlString(overviewDocument, options),
                      }}
                    />

                    <h2 className="mb-2 font-semibold">Symptoms</h2>
                    <div
                      className="mb-4 text-gray-500"
                      dangerouslySetInnerHTML={{
                        __html: documentToHtmlString(symptomsDocument, options),
                      }}
                    />
                    {post.solutions && (
                      <>
                        <h2 className="mb-2 font-semibold">Solutions</h2>
                        <p className="mb-4 text-gray-500">{post.solutions}</p>
                      </>
                    )}
                    {post.solutionsAccordion && (
                      <div className="mb-8">
                        <Accordion type="multiple">
                          {post.solutionsAccordion.items.map(
                            ({ title, content }, id) => (
                              <AccordionItem
                                key={id}
                                value={`solution${id}`}
                                className={id === 0 ? 'border-top-none' : ''}
                              >
                                <AccordionTrigger className="cursor-pointer p-4 min-h-[48px] flex items-center justify-between">
                                  {title}
                                </AccordionTrigger>
                                <AccordionContent className="p-4">
                                  <p className="text-gray-500">{content}</p>
                                </AccordionContent>
                              </AccordionItem>
                            )
                          )}
                        </Accordion>
                      </div>
                    )}
                    {post.faqs && (
                      <>
                        <h2>Frequently asked questions</h2>
                        <div className="mb-8">
                          <Accordion type="multiple">
                            {post.faqs.items.map(({ title, content }, id) => (
                              <AccordionItem
                                key={id}
                                value={`solution${id}`}
                                className={id === 0 ? 'border-top-none' : ''}
                              >
                                <AccordionTrigger className="cursor-pointer p-4 min-h-[48px] flex items-center justify-between">
                                  {title}
                                </AccordionTrigger>
                                <AccordionContent className="p-4">
                                  <p className="text-gray-500">{content}</p>
                                </AccordionContent>
                              </AccordionItem>
                            ))}
                          </Accordion>
                        </div>
                      </>
                    )}
                  </section>
                </div>
                <div className="rounded-lg shadow-md md:col-span-1 md:col-start-4">
                  <h3 className="mb-4 text-2xl font-semibold">
                    Enquire about {post.heading}
                  </h3>
                  <form>
                    <div className="mb-4">
                      <label
                        htmlFor="fullName"
                        className="block mb-2 text-gray-700"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-gray-700"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="phone"
                        className="block mb-2 text-gray-700"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        id="phone"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="message"
                        className="block mb-2 text-gray-700"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        rows="4"
                      ></textarea>
                    </div>
                    <div className="mb-4">
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          className="text-blue-600 form-checkbox"
                        />
                        <span className="ml-2 text-gray-700">
                          I agree to the{' '}
                          <a href="#" className="text-blue-600 hover:underline">
                            Privacy Policy & Terms & Conditions
                          </a>
                        </span>
                      </label>
                    </div>
                    <button className="inline-flex items-center justify-center gap-3 px-4 mb-2 text-sm font-medium transition-colors border rounded-full shadow-md btn-48 lg:px-12 focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-jamesBlue bg-jamesBlue text-text-alternative hover:bg-jamesLight hover:border-jamesLight">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </main>
          </section>
        </div>
      </Layout>
    )
  }
}

export default RetinaTemplate

export const pageQuery = graphql`
  query RetinaById($id: String!) {
    contentfulRetina(id: { eq: $id }) {
      heading
      headingImage {
        url
      }
      introductionText {
        introductionText
      }
      overview {
        raw
      }
      symptoms {
        raw
      }
      solutionsAccordion {
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
    }
  }
`
