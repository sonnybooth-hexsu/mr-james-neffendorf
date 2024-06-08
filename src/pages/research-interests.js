import React from 'react'

import Layout from '../components/layout'
import Publications from '../components/publications'

class ResearchInterests extends React.Component {
  render() {
    return (
      <Layout>
        <header className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Tagline</p>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              Short heading here
            </h1>
            <p className="md:text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
              <button className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-background-alternative text-text-alternative px-6 py-3">
                Button
              </button>
              <button className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary text-text-primary px-6 py-3">
                Button
              </button>
            </div>
          </div>
        </header>
        <Publications />
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container max-w-lg text-center">
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Medium length heading goes here
            </h2>
            <p className="md:text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
              <button className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-background-alternative text-text-alternative px-6 py-3">
                Button
              </button>
              <button className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary text-text-primary px-6 py-3">
                Button
              </button>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default ResearchInterests
