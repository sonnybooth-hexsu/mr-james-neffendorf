import React from 'react'

import Layout from '../components/layout'

class RootIndex extends React.Component {
  render() {
    return (
      <Layout>
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container">
            <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
              <div>
                <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
                  Medium length hero heading goes here
                </h1>
                <p className="md:text-md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                </p>
                <div className="flex mt-6 gap-x-4 md:mt-8">
                  <button className="inline-flex items-center justify-center gap-3 px-6 py-3 transition-colors border focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-border-primary bg-background-alternative text-text-alternative">
                    Button
                  </button>
                  <button className="inline-flex items-center justify-center gap-3 px-6 py-3 transition-colors border focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-border-primary text-text-primary">
                    Button
                  </button>
                </div>
              </div>
              <div>
                <img
                  src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
                  className="object-cover w-full"
                  alt="Placeholder image"
                />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default RootIndex
