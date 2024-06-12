import React from 'react'
import Layout from '../components/layout'
import jamesLeaning from '../assets/james-leaning.jpg'
import quoteMark from '../assets/quote-mark.svg'
import doctifyLogo from '../assets/doctify-logo.svg'
import topRightSvg from '../assets/top-right.svg'
import bottomLeftSvg from '../assets/bottom-left.svg'
import grade from '../assets/grade.svg'
import iconTrophy from '../assets/icon-trophy.svg'

class About extends React.Component {
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
        {/* Hero */}
        <div className="main-content">
          <section className="px-[5%] border-b py-16 md:py-24 lg:py-28 fade-in">
            <div className="container">
              <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
                <div>
                  <h1 className="mb-2">Meet Mr James Neffendorf </h1>
                  <p className="mb-4 text-sm font-bold text-black md:text-md md:mb-6">
                    MA (Cantab) MBBS (Lond) MD (Res) FRCOphth{' '}
                  </p>
                  <p className="md:text-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat.
                  </p>
                  <div className="grid mt-2 md:gap-2 md:grid-cols-2 md:mt-4 lg:flex lg:space-x-2">
                    <button className="inline-flex items-center justify-center gap-3 px-4 mb-2 text-sm font-medium transition-colors border rounded-full shadow-md btn-48 lg:px-12 focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-jamesBlue bg-jamesBlue text-text-alternative hover:bg-jamesLight hover:border-jamesLight">
                      Contact Mr Neffendorf
                    </button>
                    <button className="inline-flex items-center justify-center gap-3 px-4 mb-2 text-sm font-medium transition-colors border border-gray-300 rounded-full btn-48 lg:px-12 focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-text-primary">
                      About Mr Neffendorf
                    </button>
                  </div>
                </div>
                <div>
                  <img
                    src={jamesLeaning}
                    className="object-cover w-full"
                    alt="Placeholder image"
                  />
                </div>
              </div>
            </div>
          </section>
          {/* Intro to James */}
          <section className="px-[5%] py-16 md:py-24 lg:py-28 fade-in">
            <div className="container grid items-start justify-between grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
              <h2 className="">
                Leading Ophthalmologist and Vitreoretinal Surgeon
              </h2>
              <div>
                <p className="mb-5 md:mb-6 md:text-md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                </p>
                <div className="grid grid-cols-1 gap-4 py-2">
                  <div className="flex self-start">
                    <div className="self-start flex-none mr-4">
                      <img
                        className="inline-block size-6"
                        src="https://relume-assets.s3.amazonaws.com/relume-icon.svg"
                        alt="Relume logo 1"
                      />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                  <div className="flex self-start">
                    <div className="self-start flex-none mr-4">
                      <img
                        className="inline-block size-6"
                        src="https://relume-assets.s3.amazonaws.com/relume-icon.svg"
                        alt="Relume logo 2"
                      />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                  <div className="flex self-start">
                    <div className="self-start flex-none mr-4">
                      <img
                        className="inline-block size-6"
                        src="https://relume-assets.s3.amazonaws.com/relume-icon.svg"
                        alt="Relume logo 3"
                      />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="px-[5%] py-16 md:py-24 lg:py-28 fade-in">
            <div className="container grid items-center grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
              <div className="grid items-center grid-cols-1 col-start-1 col-end-2 row-start-1 row-end-2 gap-x-4 gap-y-10">
                <div></div>
                <div className="pl-8 border-l-2 border-black cursor-pointer">
                  <h3 className="mb-3 md:mb-4">Short heading goes here</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat.
                  </p>
                </div>
                <div className="pl-8 border-l-2 border-transparent cursor-pointer">
                  <h3 className="mb-3 md:mb-4">Short heading goes here</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat.
                  </p>
                </div>
                <div className="pl-8 border-l-2 border-transparent cursor-pointer">
                  <h3 className="mb-3 md:mb-4">Short heading goes here</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat.
                  </p>
                </div>
              </div>
              <div className="flex h-[600px] max-h-full w-full items-center justify-center overflow-hidden">
                <div style={{ opacity: 1 }}>
                  <img
                    src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
                    alt="Placeholder image 1"
                    className="object-cover size-full"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Awards & Achievements */}
          <section className="px-[5%] py-16 md:py-24 lg:py-28 fade-in">
            <div className="container grid items-start justify-between grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
              <h2>Awards & Achievements </h2>
              <div>
                <div className="grid grid-cols-1 gap-6 py-2">
                  <div className="flex items-center">
                    <div className="flex-none mr-4">
                      <img
                        src={iconTrophy}
                        alt="Placeholder image 1"
                        className="object-cover size-full"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      2023{' '}
                      <span className="font-normal text-gray-500">
                        Excellence in Ophthalmic Research Medal
                      </span>
                    </h3>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-none mr-4">
                      <img
                        src={iconTrophy}
                        alt="Placeholder image 1"
                        className="object-cover size-full"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      2021{' '}
                      <span className="font-normal text-gray-500">
                        AI in Medicine Honorary Distinction
                      </span>
                    </h3>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-none mr-4">
                      <img
                        src={iconTrophy}
                        alt="Placeholder image 1"
                        className="object-cover size-full"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      2019{' '}
                      <span className="font-normal text-gray-500">
                        The Golden Lens Award
                      </span>
                    </h3>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-none mr-4">
                      <img
                        src={iconTrophy}
                        alt="Placeholder image 1"
                        className="object-cover size-full"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      2021{' '}
                      <span className="font-normal text-gray-500">
                        AI in Medicine Honorary Distinction
                      </span>
                    </h3>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-none mr-4">
                      <img
                        src={iconTrophy}
                        alt="Placeholder image 1"
                        className="object-cover size-full"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      2021{' '}
                      <span className="font-normal text-gray-500">
                        AI in Medicine Honorary Distinction
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quote */}
          <section className="px-[8%] md:px-[10%] lg:px-[5%] py-16 md:py-24 lg:py-28 fade-in">
            <div className="container">
              <div className="relative grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                <div>
                  <img
                    src={jamesLeaning}
                    className="object-cover w-full"
                    alt="Placeholder image"
                  />
                </div>
                <div>
                  <img
                    className="m-2 mb-5 max-h-6 shrink-0"
                    src={quoteMark}
                    alt="Quotation Mark Icon"
                  />
                  <blockquote className="mb-5 text-2xl font-bold text-black md:text-3xl lg:text-4xl xl:text-5xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse in eros elementum tristique.
                  </blockquote>
                  <p className="text-xl font-bold text-black">
                    Mr James Neffendorf
                  </p>
                  <p>MA (Cantab) MBBS (Lond) MD (Res) FRCOphth</p>
                </div>
                <div className="absolute flex p-4 shadow-xl bottom-4 right-4">
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
          </section>
          {/* Education */}
          <section className="px-[5%] py-16 md:py-24 lg:py-28 fade-in">
            <div className="container grid items-start justify-between grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
              <h2 className="leading-[1.2]">Education </h2>
              <div>
                <div className="grid grid-cols-1 gap-4 py-2">
                  <div className="flex self-start">
                    <div className="self-start flex-none mr-4">
                      <img
                        className="inline-block size-6"
                        src="https://relume-assets.s3.amazonaws.com/relume-icon.svg"
                        alt="Relume logo 1"
                      />
                    </div>
                    <p>
                      <span className="font-bold"> 2023 </span> Excellence in
                      Ophthalmic Research Medal
                    </p>
                  </div>
                  <div className="flex self-start">
                    <div className="self-start flex-none mr-4">
                      <img
                        className="inline-block size-6"
                        src="https://relume-assets.s3.amazonaws.com/relume-icon.svg"
                        alt="Relume logo 2"
                      />
                    </div>
                    <p>
                      <span className="font-bold"> 2021 </span> AI in Medicine
                      Honorary Distinction
                    </p>
                  </div>
                  <div className="flex self-start">
                    <div className="self-start flex-none mr-4">
                      <img
                        className="inline-block size-6"
                        src="https://relume-assets.s3.amazonaws.com/relume-icon.svg"
                        alt="Relume logo 3"
                      />
                    </div>
                    <p>
                      <span className="font-bold"> 2019 </span> The Golden Lens
                      Award
                    </p>
                  </div>
                  <div className="flex self-start">
                    <div className="self-start flex-none mr-4">
                      <img
                        className="inline-block size-6"
                        src="https://relume-assets.s3.amazonaws.com/relume-icon.svg"
                        alt="Relume logo 2"
                      />
                    </div>
                    <p>
                      <span className="font-bold"> 2021 </span> AI in Medicine
                      Honorary Distinction
                    </p>
                  </div>
                  <div className="flex self-start">
                    <div className="self-start flex-none mr-4">
                      <img
                        className="inline-block size-6"
                        src="https://relume-assets.s3.amazonaws.com/relume-icon.svg"
                        alt="Relume logo 2"
                      />
                    </div>
                    <p>
                      <span className="font-bold"> 2021 </span> AI in Medicine
                      Honorary Distinction
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Call To Action */}
          <section className="relative px-[8%] bg-gray-50 md:px-[10%] lg:px-[5%] py-24 md:py-28 lg:py-40 overflow-hidden fade-in">
            <img
              src={topRightSvg}
              alt="Top right background decoration"
              className="absolute -top-20 -right-20"
            />
            <img
              src={bottomLeftSvg}
              alt="Bottom left background decoration"
              className="absolute -bottom-10 -left-10"
            />
            <div className="container text-center">
              <h2 className="mb-5 md:mb-6 md:">Book a Consultation</h2>
              <p className="md:text-md">
                Book a consultation with Mr James Neffendorf for expert
                ophthalmic care and treatment.
              </p>
              <div className="grid mt-2 md:gap-2 md:grid-cols-2 md:mt-4 lg:flex lg:space-x-2">
                <button className="inline-flex items-center justify-center gap-3 px-4 mb-2 text-sm font-medium transition-colors border rounded-full shadow-md btn-48 lg:px-12 focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-jamesBlue bg-jamesBlue text-text-alternative hover:bg-jamesLight hover:border-jamesLight">
                  Contact Mr Neffendorf
                </button>
                <button className="inline-flex items-center justify-center gap-3 px-4 mb-2 text-sm font-medium transition-colors border border-gray-300 rounded-full btn-48 lg:px-12 focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-text-primary">
                  About Mr Neffendorf
                </button>
              </div>

              <div className="flex flex-row items-center justify-center mt-8">
                <p className="mr-2 font-bold text-gray-900">Excellent</p>

                <img
                  className="inline-block size-6"
                  src={grade}
                  alt="Checkmark"
                />
                <img
                  className="inline-block size-6"
                  src={grade}
                  alt="Checkmark"
                />
                <img
                  className="inline-block size-6"
                  src={grade}
                  alt="Checkmark"
                />
                <img
                  className="inline-block size-6"
                  src={grade}
                  alt="Checkmark"
                />
                <img
                  className="inline-block size-6"
                  src={grade}
                  alt="Checkmark"
                />
                <img
                  src={doctifyLogo}
                  className="ml-2 mr-2 max-h-12"
                  alt="Doctify logo"
                />
                <p className="mr-2">4.94 out of 5</p>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default About
