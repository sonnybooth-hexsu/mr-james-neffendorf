import React from 'react'
import Layout from '../components/layout'
import jamesLeaning from '../assets/james-leaning.jpg'
import jamesSuit from '../assets/james-suit.jpg'
import research from '../assets/research-02.jpg'
import roles from '../assets/roles.jpg'
import quoteMark from '../assets/quote-mark.svg'
import doctifyLogo from '../assets/doctify-logo.svg'
import iconTrophy from '../assets/icon-trophy.svg'
import swoosh2 from '../assets/swoosh-2.svg'
import iconCheckmarkSmall from '../assets/check_small.svg'
import Seo from '../components/seo'

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
        <Seo title='Mr James Neffendorf | Expert Eye Surgeon & Specialist London' description='Mr James Neffendorf provides specialist eye care in London, offering advanced treatments for cataracts, retinal conditions, and personalised vision care.' />
        {/* Hero */}
        <div className="main-content">
          <section className="px-[5%] border-b bg-gray-50 py-16 md:py-20 fade-in">
            <div className="container">
              <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
                <div>
                  <h1 className="mb-2">Meet Mr Neffendorf </h1>
                  <h2 className="mb-4 tracking-wide uppercase sm:text-lg font-md">
                    MA (Cantab) MBBS (Lond) MD (Res) FRCOphth
                  </h2>
                  <div className="grid grid-cols-1 gap-2 py-2">
                    <div className="flex self-start">
                      <div className="self-start flex-none mr-2">
                        <img
                          className="inline-block size-6"
                          src={iconCheckmarkSmall}
                          alt="Checkmark Icon"
                        />
                      </div>
                      <p>Consultant Ophthalmic and Vitreoretinal Surgeon</p>
                    </div>
                    <div className="flex self-start">
                      <div className="self-start flex-none mr-2">
                        <img
                          className="inline-block size-6"
                          src={iconCheckmarkSmall}
                          alt="Checkmark Icon"
                        />
                      </div>
                      <p>
                        Specialist interest in cataract surgery, retinal surgery
                        and emergency eye care
                      </p>
                    </div>
                    <div className="flex self-start">
                      <div className="self-start flex-none mr-2">
                        <img
                          className="inline-block size-6"
                          src={iconCheckmarkSmall}
                          alt="Checkmark Icon"
                        />
                      </div>
                      <p>
                        Appointed at King’s College Hospital NHS Foundation
                        Trust (NHS)
                      </p>
                    </div>
                    <div className="flex self-start">
                      <div className="self-start flex-none mr-2">
                        <img
                          className="inline-block size-6"
                          src={iconCheckmarkSmall}
                          alt="Checkmark Icon"
                        />
                      </div>
                      <p>
                        Deputy Medical Director at London Lauriston Clinic
                        (Private Practice)
                      </p>
                    </div>
                  </div>

                  <div className="grid mt-4 md:gap-2 md:grid-cols-2 md:mt-4 lg:flex lg:space-x-2">
                    <button
                      className="inline-flex items-center justify-center gap-3 px-4 mb-2 font-medium transition-colors border rounded-full shadow-md btn-56 lg:px-12 focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-jamesBlue bg-jamesBlue text-text-alternative hover:bg-jamesLight hover:border-jamesLight"
                      onClick={() => (window.location.href = '/contact')}
                    >
                      Contact
                    </button>
                  </div>
                </div>
                <div>
                  <img
                    src={jamesSuit}
                    className="object-cover w-full rounded-xl"
                    alt="Mr James E. Neffendorf professional headshot in a suit smiling"
                  />
                </div>
              </div>
            </div>
          </section>
          {/* Intro to James */}
          <section className="px-[5%] py-16 md:py-24 lg:py-28 fade-in">
            <div className="container grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
              <h2 className="">
                Educated and trained at world leading institutions
              </h2>
              <div>
                <div className="grid grid-cols-1 gap-4 py-2 text-gray-900">
                  <div className="flex self-start text-gray-900">
                    <p>
                      <span className="font-bold text-gray-900">
                        University of Cambridge
                      </span>{' '}
                      - Medical degree (Developmental Biology and Embryology)
                    </p>
                  </div>
                  <div className="flex self-start">
                    <p>
                      <span className="font-bold text-gray-900">
                        University College London
                      </span>{' '}
                      - Clinical Medicine and Surgery degree (Distinction)
                    </p>
                  </div>
                  <div className="flex self-start">
                    <p>
                      <span className="font-bold text-gray-900">
                        King’s College London
                      </span>{' '}
                      - Higher level MD degree in Age-related Macular
                      Degeneration
                    </p>
                  </div>
                  <div className="flex self-start">
                    <p>
                      <span className="font-bold text-gray-900">
                        Oxford Medical Deanery
                      </span>{' '}
                      - Ophthalmology specialist training
                    </p>
                  </div>
                  <div className="flex self-start">
                    <p>
                      <span className="font-bold text-gray-900">
                        St. Thomas’ Hospital London
                      </span>{' '}
                      - Advanced senior fellowship training
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="px-[5%] py-16 md:py-24 lg:py-28 fade-in">
            <div className="container grid items-center justify-between grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
              <div className="flex items-center order-2 md:order-1">
                <div>
                  <h2 className="mb-1">Research</h2>
                  <div className="grid grid-cols-1 gap-4 py-2">
                    <p className="mb-2">
                      Key research interests in vitreoretinal surgery, new drugs
                      and devices in retinal diseases such as age-related
                      macular degeneration and artificial intelligence using
                      ophthalmic biomarkers.
                    </p>

                    <div className="flex self-start">
                      <div className="self-start flex-none mr-2">
                        <img
                          className="inline-block size-6"
                          src={iconCheckmarkSmall}
                          alt="Checkmark Icon"
                        />
                      </div>
                      <p>Published 39 scientific papers</p>
                    </div>
                    <div className="flex self-start">
                      <div className="self-start flex-none mr-2">
                        <img
                          className="inline-block size-6"
                          src={iconCheckmarkSmall}
                          alt="Checkmark Icon"
                        />
                      </div>
                      <p>Presented at 40 international and national meetings</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src={research}
                  className="object-cover w-full rounded-xl"
                  alt="Eye health research"
                />
              </div>
            </div>
          </section>

          <section className="px-[5%] py-16 md:py-24 lg:py-28 fade-in">
            <div className="container grid items-center justify-between grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
              <div className="flex items-center">
                <img
                  src={roles}
                  className="object-cover w-full rounded-xl"
                  alt="Man giving talk"
                />
              </div>
              <div>
                <h2 className="mb-6">Roles</h2>
                <div className="grid grid-cols-1 gap-4 py-2">
                  <div className="flex self-start">
                    <div className="self-start flex-none mr-2">
                      <img
                        className="inline-block size-6"
                        src={iconCheckmarkSmall}
                        alt="Checkmark Icon"
                      />
                    </div>
                    <p>Examiner for Royal College of Ophthalmologists</p>
                  </div>
                  <div className="flex self-start">
                    <div className="self-start flex-none mr-2">
                      <img
                        className="inline-block size-6"
                        src={iconCheckmarkSmall}
                        alt="Checkmark Icon"
                      />
                    </div>
                    <p>Reviewer for many leading scientific journals</p>
                  </div>
                  <div className="flex self-start">
                    <div className="self-start flex-none mr-2">
                      <img
                        className="inline-block size-6"
                        src={iconCheckmarkSmall}
                        alt="Checkmark Icon"
                      />
                    </div>
                    <p>Director of Retina and Macula Disease, Ocuplan UK</p>
                  </div>
                  <div className="flex self-start">
                    <div className="self-start flex-none mr-2">
                      <img
                        className="inline-block size-6"
                        src={iconCheckmarkSmall}
                        alt="Checkmark Icon"
                      />
                    </div>
                    <p>
                      Lead, Clinical Innovation and Discovery, Ophthalmology,
                      Panacea Innovation
                    </p>
                  </div>
                  <div className="flex self-start">
                    <div className="self-start flex-none mr-2">
                      <img
                        className="inline-block size-6"
                        src={iconCheckmarkSmall}
                        alt="Checkmark Icon"
                      />
                    </div>
                    <p>
                      Honorary Medical Director for Ophthalmology, Solvemed
                      (International Artificial Intelligence Company)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Awards & Achievements */}
          <section className="px-[5%] py-16 md:py-24 lg:py-28 fade-in">
            <div className="container">
              <div className="mb-8">
                <h2>Selected Awards and Prizes</h2>
              </div>
              <div className="grid grid-cols-1 gap-6 py-2 md:grid-cols-2">
                <div className="flex items-center">
                  <div className="mr-2 shrink-0">
                    <img
                      src={iconTrophy}
                      alt="Trophy Icon"
                      className="max-h-6"
                    />
                  </div>
                  <h3 className="text-lg text-black">
                    <span className="font-bold">
                      Kidney Research UK Research Project Grant, Co-Investigator
                    </span>{' '}
                    <span className="font-normal">(2023)</span>
                  </h3>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 shrink-0">
                    <img
                      src={iconTrophy}
                      alt="Trophy Icon"
                      className="max-h-6"
                    />
                  </div>
                  <h3 className="text-lg text-black">
                    <span className="font-bold">
                      Oxford Annual Updates 1st Prize
                    </span>{' '}
                    <span className="font-normal">(2018)</span>
                  </h3>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 shrink-0">
                    <img
                      src={iconTrophy}
                      alt="Trophy Icon"
                      className="max-h-6"
                    />
                  </div>
                  <h3 className="text-lg text-black">
                    <span className="font-bold">
                      British and Eire Association of Vitreoretinal Surgeons
                      Certificate of Merit
                    </span>{' '}
                    <span className="font-normal">(2017)</span>
                  </h3>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 shrink-0">
                    <img
                      src={iconTrophy}
                      alt="Trophy Icon"
                      className="max-h-6"
                    />
                  </div>
                  <h3 className="text-lg text-black">
                    <span className="font-bold">
                      EURetina Annual Conference, highest scoring free papers
                    </span>{' '}
                    <span className="font-normal">(2016)</span>
                  </h3>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 shrink-0">
                    <img
                      src={iconTrophy}
                      alt="Trophy Icon"
                      className="max-h-6"
                    />
                  </div>
                  <h3 className="text-lg text-black">
                    <span className="font-bold">
                      American Academy of Ophthalmology Annual Conference, Best
                      Poster, Cataract
                    </span>{' '}
                    <span className="font-normal">(2015)</span>
                  </h3>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 shrink-0">
                    <img
                      src={iconTrophy}
                      alt="Trophy Icon"
                      className="max-h-6"
                    />
                  </div>
                  <h3 className="text-lg text-black">
                    <span className="font-bold">
                      American Academy of Ophthalmology Annual Conference, Best
                      Poster, Retina
                    </span>{' '}
                    <span className="font-normal">(2015)</span>
                  </h3>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 shrink-0">
                    <img
                      src={iconTrophy}
                      alt="Trophy Icon"
                      className="max-h-6"
                    />
                  </div>
                  <h3 className="text-lg text-black">
                    <span className="font-bold">
                      World Ophthalmology Congress Travel Grant
                    </span>{' '}
                    <span className="font-normal">(2014)</span>
                  </h3>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 shrink-0">
                    <img
                      src={iconTrophy}
                      alt="Trophy Icon"
                      className="max-h-6"
                    />
                  </div>
                  <h3 className="text-lg text-black">
                    <span className="font-bold">
                      European Paediatric Ophthalmology Society Travel Grant
                    </span>{' '}
                    <span className="font-normal">(2013)</span>
                  </h3>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 shrink-0">
                    <img
                      src={iconTrophy}
                      alt="Trophy Icon"
                      className="max-h-6"
                    />
                  </div>
                  <h3 className="text-lg text-black">
                    <span className="font-bold">
                      Distinction in Clinical Medicine and Surgery, UCL
                    </span>{' '}
                    <span className="font-normal">(2009)</span>
                  </h3>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 shrink-0">
                    <img
                      src={iconTrophy}
                      alt="Trophy Icon"
                      className="max-h-6"
                    />
                  </div>
                  <h3 className="text-lg text-black">
                    <span className="font-bold">
                      Allen Goldsmith Prize in Ophthalmology, UCL
                    </span>{' '}
                    <span className="font-normal">(2009)</span>
                  </h3>
                </div>
              </div>
            </div>
          </section>

          {/* Quote */}
          <section className="px-[5%] bg-gray-50 lg:px-[5%] py-16 md:py-24 lg:py-28 fade-in">
            <div className="container">
              <div className="relative grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                <div className="relative">
                  <img
                    src={jamesLeaning}
                    className="object-cover w-full rounded-lg"
                    alt="Mr James E. Neffendorf professional headshot leaning against table smiling"
                  />
                  <div className="absolute flex items-center p-4 bg-white rounded-md shadow-xl bottom-4 right-4">
                    <p className="mr-2 text-base font-bold text-gray-800">
                      Rated Excellent
                    </p>
                    <p className="mr-2 text-base">4.94 out of 5</p>
                    <a href="https://www.doctify.com/uk/specialist/james-neffendorf">
                      <img
                        src={doctifyLogo}
                        className="ml-2 max-h-12"
                        alt="Doctify logo"
                      />
                    </a>
                  </div>
                </div>
                <div>
                  <img
                    className="m-2 mb-5 max-h-6 shrink-0"
                    src={quoteMark}
                    alt="Quotation Mark Icon"
                  />
                  <blockquote className="mb-5 text-xl font-bold text-gray-800 lg:text-4xl xl:text-3xl">
                    “Having an eye problem can often be stressful and worrying.
                    My aim is to put you at ease whilst helping you through your
                    eye care journey. I will make sure you fully understand the
                    problem and feel as relaxed as possible during discussions
                    and any required treatment. Finally, you can rest assured I
                    will only ever recommend treatment when I feel it is a good
                    solution for you.“
                  </blockquote>
                  <p className="text-xl font-bold text-gray-800">
                    Mr James E. Neffendorf
                  </p>
                  <p>MA (Cantab) MBBS (Lond) MD (Res) FRCOphth</p>
                </div>
              </div>
            </div>
          </section>
          {/* Education */}
          <section className="px-[5%] py-16 md:py-24 lg:py-28 fade-in">
            <div className="container grid items-start justify-between grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
              <h2 className="leading-[1.2]">Extra-curricular Interests </h2>
              <div>
                <div className="grid grid-cols-1 gap-4 py-2">
                  <div className="flex self-start">
                    <p>
                      <span className="font-bold text-gray-900">
                        {' '}
                        Associate Member{' '}
                      </span>{' '}
                      (Marylebone Cricket Club, MCC)
                    </p>
                  </div>
                  <div className="flex self-start">
                    <p>
                      <span className="font-bold text-gray-900"> Member </span>{' '}
                      (Oxford and Cambridge Club)
                    </p>
                  </div>
                  <div className="flex self-start">
                    <p>
                      <span className="font-bold text-gray-900">
                        {' '}
                        Tennis, golf and skiing in spare time{' '}
                      </span>{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Call To Action */}
          <section className="relative border-t px-[5%] lg:px-[5%] fade-in">
            <img
              src={swoosh2}
              className="absolute inset-0 object-cover w-full h-full"
              alt="Visual brand element in the shape of an eye"
            />
            <div className="container relative z-10 flex flex-col items-center justify-center py-20 text-center md:py-28 lg:py-40">
              <div className="flex justify-center mt-4">
                <button
                  className="inline-flex items-center justify-center gap-3 px-8 mb-2 font-medium transition-colors border rounded-full shadow-md btn-56 lg:px-12 focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-jamesBlue bg-jamesBlue text-text-alternative hover:bg-jamesLight hover:border-jamesLight"
                  onClick={() => (window.location.href = '/contact')}
                >
                  Book a Consultation
                </button>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default About
