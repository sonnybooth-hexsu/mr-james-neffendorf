import React from 'react'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import grade from '../assets/grade.svg'
import retinaHeader from '../assets/retina-header.jpg'
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
    const document = JSON.parse(post.body.raw)

    const options = {
      preserveWhitespace: true,
    }

    return (
      <Layout>
        <div
          dangerouslySetInnerHTML={{
            __html: documentToHtmlString(document, options),
          }}
        />
        {/* Main Content */}
        <div className="bg-red-500 main-content">
          <section className="px-[5%] bg-red-500 border-b py-16 md:py-24 lg:py-28">
            <div className="container">
              <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
                <div>
                  <h1 className="mt-4 mb-4 font-bold">{post.heading}</h1>

                  <p className="mb-8 md:text-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat.
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
                <div className="">
                  <img
                    src={retinaHeader}
                    className="relative object-cover w-full rounded-xl "
                    alt="Placeholder image"
                  />
                  <div className="absolute bottom-0 flex p-4 bg-white shadow-xl -right-5">
                    <p className="mr-2 text-xs font-bold text-gray-900 md:text-sm">
                      Excellent
                    </p>
                    <p className="mr-2 text-xs md:text-sm">4.94 out of 5</p>
                    <img
                      src={doctifyLogo}
                      className="ml-2 max-h-12"
                      alt="Placeholder image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Content Section */}
          <section className="px-[5%]">
            <main className="container py-16 mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-x-10">
                <div className="lg:col-span-3 lg:col-start-1">
                  <section>
                    <h2 className="mb-2 text-2xl font-semibold">Overview</h2>
                    <p className="mb-8">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Volutpat a, aliquet massa ullamcorper sagittis, fusce. Ac
                      in risus lectus felis, lectus. Tellus egestas venenatis
                      euismod nunc id praesent enim pretium pellentesque.
                    </p>
                    {/* <div className="flex items-center justify-center h-64 mb-8 bg-gray-200">
                  EMBEDDED VIDEO
                </div> */}
                  </section>
                  <section>
                    <h2 className="mb-2 text-2xl font-semibold">Symptoms</h2>
                    <p className="mb-4 text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Volutpat a, aliquet massa ullamcorper sagittis, fusce. Ac
                      in risus lectus felis, lectus. Tellus egestas venenatis
                      euismod nunc id praesent enim pretium pellentesque.
                    </p>
                    <ul className="mb-8 custom-ul">
                      <li className="custom-li">Symptom 1</li>
                      <li className="custom-li">Symptom 2</li>
                      <li className="custom-li">Symptom 3</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="mb-2 text-2xl font-semibold">Solutions</h2>
                    <p className="mb-4 text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Volutpat a, aliquet massa ullamcorper sagittis, fusce.
                    </p>
                    <div className="mb-8">
                      <Accordion type="multiple">
                        <AccordionItem value="solution1">
                          <AccordionTrigger className="cursor-pointer p-4 min-h-[48px] flex items-center justify-between">
                            Solution 1
                          </AccordionTrigger>
                          <AccordionContent className="p-4">
                            <p className="text-gray-500">
                              Lorem ipsum dolor sit amet...
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="solution2">
                          <AccordionTrigger className="cursor-pointer p-4 min-h-[48px] flex items-center justify-between">
                            Solution 2
                          </AccordionTrigger>
                          <AccordionContent className="p-4">
                            <p className="text-gray-500">
                              Lorem ipsum dolor sit amet...
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="solution3">
                          <AccordionTrigger className="cursor-pointer p-4 min-h-[48px] flex items-center justify-between">
                            Solution 3
                          </AccordionTrigger>
                          <AccordionContent className="p-4">
                            <p className="text-gray-500">
                              Lorem ipsum dolor sit amet...
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </section>
                  <section className="mb-8">
                    <h2 className="mb-2 text-2xl font-semibold">
                      Why choose Mr James Neffendorf?
                    </h2>
                    <p className="mb-4 text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                    </p>
                  </section>
                  <section className="mb-8">
                    <h2 className="mb-2 text-2xl font-semibold">
                      Frequently Asked Questions
                    </h2>
                    <p className="mb-4 text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Volutpat a, aliquet massa ullamcorper sagittis, fusce.
                    </p>
                    <div className="mb-8">
                      <Accordion type="multiple">
                        <AccordionItem value="solution1">
                          <AccordionTrigger className="cursor-pointer p-4 min-h-[48px] flex items-center justify-between">
                            Solution 1
                          </AccordionTrigger>
                          <AccordionContent className="p-4">
                            <p className="text-gray-500">Question 1</p>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="solution2">
                          <AccordionTrigger className="cursor-pointer p-4 min-h-[48px] flex items-center justify-between">
                            Solution 2
                          </AccordionTrigger>
                          <AccordionContent className="p-4">
                            <p className="text-gray-500">Question 2</p>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="solution3">
                          <AccordionTrigger className="cursor-pointer p-4 min-h-[48px] flex items-center justify-between">
                            Solution 3
                          </AccordionTrigger>
                          <AccordionContent className="p-4">
                            <p className="text-gray-500">Question 3</p>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </section>
                </div>
                <div className="p-8 rounded-lg shadow-md lg:col-span-1 lg:col-start-4 lg:ml-10">
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
                    <div className="grid mt-2 md:gap-2 md:grid-cols-2 md:mt-4 lg:flex lg:space-x-2">
                      <button className="inline-flex items-center justify-center gap-3 px-4 mb-2 text-sm font-medium transition-colors border rounded-full shadow-md btn-48 lg:px-12 focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-jamesBlue bg-jamesBlue text-text-alternative hover:bg-jamesLight hover:border-jamesLight">
                        Contact Mr Neffendorf
                      </button>
                      <button className="inline-flex items-center justify-center gap-3 px-4 mb-2 text-sm font-medium transition-colors border border-gray-300 rounded-full btn-48 lg:px-12 focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-text-primary">
                        About Mr Neffendorf
                      </button>
                    </div>
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
      body {
        raw
      }
    }
  }
`
