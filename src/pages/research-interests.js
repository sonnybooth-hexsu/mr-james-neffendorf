import React from 'react'
import Layout from '../components/layout'
import Publications from '../components/publications'
import doctifyLogo from '../assets/doctify-logo.svg'

class ResearchInterests extends React.Component {
  componentDidMount() {
    this.handleScroll()
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const elements = document.querySelectorAll('.fade-in')
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect()
      if (rect.top <= window.innerHeight - 100) {
        el.classList.add('visible')
      } else {
        el.classList.remove('visible')
      }
    })
  }

  render() {
    return (
      <Layout>
        <div className="main-content">
        <header className="relative px-[5%]  py-16 md:py-24 lg:py-28 border-b border-t header-gradient fade-in">
          <div
            className="absolute inset-0 bg-center bg-cover opacity-10"
            style={{ backgroundImage: "url('path-to-background-image.jpg')" }}
          ></div>
          <div className="container relative flex flex-col items-center max-w-screen-md px-4 mx-auto text-left text-center header-content md:px-8 lg:px-16">
            <svg
              width="48px"
              height="48px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-bounce fade-in"
            >
              <path
                d="M6 2H14C14.2652 2 14.5196 2.10536 14.7071 2.29289L19.7071 7.29289C19.8946 7.48043 20 7.73478 20 8V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2Z"
                fill="#007FFF"
              />
              <path d="M14 2V6C14 6.55228 14.4477 7 15 7H19" fill="#007FFF" />
              <path
                d="M8 12H16M8 16H12M8 8H12"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h1 className="mt-4 mb-5 font-bold md:mb-6 fade-in">
              Clinical Interests & Research
            </h1>
            <p className="text-sm text-gray-700 md:text-lg fade-in">
              Mr James Neffendorf has been involved in a wide range of academic
              research, and is currently focusing his interests on vitreoretinal
              surgery, retinal detachment, artificial intelligence, and the
              exploration of ocular biomarkers for neurological diseases.
            </p>
          </div>
        </header>

        <div className="container px-4 py-8 mx-auto lg:py-16 md:px-8 lg:px-16 fade-in">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-12">
            <div className="md:col-span-4 lg:col-span-2">
              <div className="flex gap-4 mb-4 lg:hidden">
                <button
                  className="flex items-center justify-center w-1/2 gap-2 px-4 py-2 text-gray-500 border border-gray-300 rounded"
                  onClick="toggleFilters()"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-.293.707L13 10.414V15a1 1 0 01-.553.894l-3 1.5A1 1 0 018 16.5v-6.086L3.293 6.707A1 1 0 013 6V4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Filters
                </button>
                <div className="relative w-1/2">
                  <select className="block w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-300 rounded appearance-none hover:border-gray-400 focus:outline-none focus:bg-white focus:border-gray-500">
                    <option>Sort By</option>
                    <option>Date</option>
                    <option>Title</option>
                    <option>Relevance</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                    <svg
                      className="w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div
                id="filters"
                className="hidden overflow-hidden lg:block transition-max-height max-h-0 md:max-h-full md:overflow-visible"
              >
                <ul className="space-y-4 font-bold text-blue-600">
                  <li className="cursor-pointer">ALL</li>
                  <li className="cursor-pointer">2023</li>
                  <li className="cursor-pointer">2022</li>
                  <li className="cursor-pointer">2021</li>
                  <li className="cursor-pointer">2020</li>
                  <li className="cursor-pointer">2019</li>
                  <li className="cursor-pointer">2018</li>
                  <li className="cursor-pointer">2017</li>
                  <li className="cursor-pointer">2016</li>
                  <li className="cursor-pointer">2015</li>
                  <li className="cursor-pointer">2014</li>
                  <li className="cursor-pointer">2013</li>
                </ul>
              </div>
            </div>
            <div className="md:col-span-4 lg:col-span-8 fade-in">
              <div className="pb-4 mb-8 border-b">
                <p className="font-semibold text-gray-500">Feb 2023</p>
                <h3 className="my-2 text-base font-bold text-gray-800 md:text-3xl lg:text-2xl">
                  Effect of intravitreal anti-vascular endothelial growth factor
                  treatment for neovascular age-related macular degeneration on
                  renal function
                </h3>
                <p className="text-gray-500">
                  Background: Risk factors such as low vitamin D level has been
                  implicated in the etiology of multiple sclerosis (MS) and may
                  be relevant to myopia, such that there may be an association
                  between myopia and MS. Methods: Using linked Swedish national
                  register data, we conducted a cohort study of men who were
                  born in Sweden between 1950 and 1992, liv...
                </p>
                <p className="mt-2 text-gray-500">
                  Dr. James Neffendorf, Co-Contributor, Co-Contributor,
                  Co-Contributor, Co-Contributor
                </p>
                <button className="px-4 py-2 mt-4 text-white bg-blue-600 rounded btn btn-primary">
                  View
                </button>
              </div>
              <div className="pb-4 mb-8 border-b">
                <p className="font-semibold text-gray-500">
                  Feb 2023 <span className="text-yellow-500">🏆 Award won</span>
                </p>
                <h3 className="my-2 text-base font-bold text-gray-800 md:text-3xl lg:text-2xl">
                  Myopia in late adolescence and subsequent multiple sclerosis
                  among men
                </h3>
                <p className="text-gray-500">
                  Background: Risk factors such as low vitamin D level has been
                  implicated in the etiology of multiple sclerosis (MS) and may
                  be relevant to myopia, such that there may be an association
                  between myopia and MS. Methods: Using linked Swedish national
                  register data, we conducted a cohort study of men who were
                  born in Sweden between 1950 and 1992, liv...
                </p>
                <p className="mt-2 text-gray-500">
                  Dr. James Neffendorf, Co-Contributor, Co-Contributor,
                  Co-Contributor, Co-Contributor
                </p>
                <button className="px-4 py-2 mt-4 text-white bg-blue-600 rounded btn btn-primary">
                  View
                </button>
              </div>
              <div className="pb-4 mb-8 border-b">
                <p className="font-semibold text-gray-500">Sep 2022</p>
                <h3 className="my-2 text-base font-bold text-gray-800 md:text-3xl lg:text-2xl">
                  The effect of intravitreal anti-vascular endothelial growth
                  factor treatment for neovascular age-related macular
                  degeneration on renal function
                </h3>
                <p className="text-gray-500">
                  Background: Risk factors such as low vitamin D level has been
                  implicated in the etiology of multiple sclerosis (MS) and may
                  be relevant to myopia, such that there may be an association
                  between myopia and MS. Methods: Using linked Swedish national
                  register data, we conducted a cohort study of men who were
                  born in Sweden between 1950 and 1992, liv...
                </p>
                <p className="mt-2 text-gray-500">
                  Dr. James Neffendorf, Co-Contributor, Co-Contributor,
                  Co-Contributor, Co-Contributor
                </p>
                <button className="py-2 mt-4 text-white bg-blue-600 rounded btn btn-secondary npx-4">
                  View
                </button>
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-2 fade-in"></div>
          </div>
        </div>

        <Publications />
        <section className="px-[5%] py-16 md:py-24 lg:py-28 fade-in">
          <div className="container max-w-lg text-center">
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Medium length heading goes here
            </h2>
            <p className="md:text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <div className="flex items-center justify-center gap-4 mt-6 md:mt-8">
              <button className="inline-flex items-center justify-center gap-3 px-6 py-3 transition-colors border btn btn-primary focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-border-primary bg-background-alternative text-text-alternative">
                Button
              </button>
              <button className="inline-flex items-center justify-center gap-3 px-6 py-3 transition-colors border focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-border-primary text-text-primary">
                Button
              </button>
            </div>
          </div>
        </section>
        </div>
      </Layout>
    )
  }
}

export default ResearchInterests
