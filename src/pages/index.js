import React from 'react'
import Layout from '../components/layout'
import jamesMain from '../assets/james-main.png'
import jamesTreatment from '../assets/james-treatment.jpg'
import doctifyLogo from '../assets/doctify-logo.svg'
import iconCheckmark from '../assets/checkmark.svg'
import aao from '../assets/aao.png'
import beavrs from '../assets/beavrs.svg'
import escrs from '../assets/escrs.svg'
import eurina from '../assets/eurina.svg'
import rocopth from '../assets/rocopth.svg'
import cmac from '../assets/cmac.png'
import topRightSvg from '../assets/top-right.svg'
import topDoctors from '../assets/top-doctors.svg'
import bottomLeftSvg from '../assets/bottom-left.svg'
import swoosh2 from '../assets/swoosh-2.svg'
import grade from '../assets/grade.svg'
import { Helmet } from 'react-helmet'
import eyeExam from '../assets/excellence-eye.jpg'
import quoteMark from '../assets/quote-mark.svg'
import patient from '../assets/patient.jpg'
import iconCheckmarkSmall from '../assets/check_small.svg'
import Testimonials from '../components/Testimonials'

const Home = () => (
  <div>
    <Helmet>
      <title>Mr James Neffendorf</title>
      <meta name="description" content="Your page description" />
      <link rel="stylesheet" href="https://use.typekit.net/nak2vhf.css" />
    </Helmet>
  </div>
)

const accordionData = [
  {
    title: 'Cataract Surgery',
    content: 'Complex and routine cataract surgery',
    link: '/treatment/cataract-surgery',
  },
  {
    title: 'Retina Conditions and Surgery',
    content:
      'Age-related Macular Degeneration (AMD), Epiretinal Membrane, Macular Hole, Diabetic Eye Disease, Retinal Detachment.',
    link: '/treatment/retina',
  },
  {
    title: 'Emergency Eye Care',
    content: 'Red Eye, Painful Eye, Loss of Vision.',
    link: '/treatment/emergency-eye-care',
  },
  {
    title: 'General Eye Care',
    content:
      'Conditions such as Dry Eye, Blepharitis,Chalazion (stye) and Glaucoma.',
    link: '/treatment/general-eye-care',
  },
]

class AccordionItem extends React.Component {
  render() {
    const { title, content, isOpen, onClick, link } = this.props
    return (
      <div
        className={`border-l-8 p-6 transition-all duration-300 ${isOpen ? 'border-jamesBlue' : 'border-gray-300'}`}
        onClick={onClick}
      >
        <h2 className="mb-3 font-bold cursor-pointer">{title}</h2>
        <div
          className={`overflow-hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0'}`}
        >
          <p className="text-gray-800 text-md md:text-lg">{content}</p>
          <a
            href={link}
            className="block mt-4 text-gray-600 text-md md:text-lg"
          >
            Details
          </a>
        </div>
      </div>
    )
  }
}

class RootIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      openIndex: 0,
    }
  }

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

    const parallaxElements = document.querySelectorAll('.parallax')
    parallaxElements.forEach((el) => {
      const scrollPosition = window.scrollY
      const maxMovement = 20 // Maximum movement in pixels
      const movement = Math.min(scrollPosition * 0.1, maxMovement)
      el.style.transform = `translateY(${movement}px)`
    })
  }

  handleAccordionClick = (index) => {
    this.setState({ openIndex: index })
  }

  render() {
    const { openIndex } = this.state

    return (
      <Layout>
        <Home />
        <div className="main-content">
          <section className="pt-12 md:pt-20 lg:pt-8 bg-gray-50 px-[5%] md:px-[10%] lg:px-[5%] fade-in">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 gap-x-4 gap-y-12 md:gap-x-10 md:gap-y-16 lg:grid-cols-2 lg:items-center">
                <div>
                  <h1 className="mt-4 mb-0 font-bold mb:mb-2">
                    Mr James E. Neffendorf
                  </h1>
                  <h2 className="mb-4 text-base tracking-wide uppercase lg:text-md font-md">
                    MA (Cantab) MBBS (Lond) MD (Res) FRCOphth
                  </h2>

                  <h2 className="text-base font-bold tracking-wide text-gray-600 md:text-md xl:text-lg">
                    Consultant Ophthalmologist, Cataract &amp; Retinal Surgeon
                  </h2>

                  <p className="mt-1 text-md md:text-lg xl:text-xl">
                    A leading London-based consultant eye surgeon.
                  </p>
                  <div className="grid mt-6 md:gap-2 md:grid-cols-2 md:mt-8 lg:flex lg:space-x-2">
                    <button
                      className="inline-flex items-center justify-center gap-3 px-4 mb-2 font-medium transition-colors border rounded-full shadow-md btn-56 lg:px-12 focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-jamesBlue bg-jamesBlue text-text-alternative hover:bg-jamesLight hover:border-jamesLight"
                      onClick={() => (window.location.href = '/contact')}
                    >
                      Contact
                    </button>

                    <button
                      className="inline-flex items-center justify-center gap-3 px-4 mb-2 font-medium transition-colors border border-gray-300 rounded-full btn-56 lg:px-12 focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-text-primary"
                      onClick={() => (window.location.href = '/about')}
                    >
                      About
                    </button>
                  </div>
                </div>
                {/* right col */}
                <div className="relative">
                  <img
                    src={jamesMain}
                    className="relative z-10 object-cover w-full mx-auto lg:w-3/4"
                    alt="Mr James E. Neffendorf, Ophthalmic Surgeon, wearing a navy blue medical uniform and smiling."
                  />
                  <img
                    src={topRightSvg}
                    className="absolute top-0 right-0 z-0"
                  />
                  <img
                    src={bottomLeftSvg}
                    className="absolute z-0 -bottom-10 -left-10"
                  />
                  <div className="absolute left-0 z-20 flex p-4 bg-white rounded-md shadow-xl lg:px-6 bottom-10 md:left-0 parallax">
                    <p className="mr-2 text-sm font-bold text-gray-800">
                      Rated Excellent
                    </p>
                    <p className="mr-2 text-sm">4.94 out of 5</p>
                    <a href="https://www.doctify.com/uk/specialist/james-neffendorf">
                      <img
                        src={doctifyLogo}
                        className="ml-1 max-h-12"
                        alt="Checkmark icon"
                      />
                    </a>
                  </div>
                  <div className="absolute right-0 z-10 flex flex-col p-3 mt-4 bg-white rounded-md shadow-xl xl:px-6 xl:py-4 md:p-6 lg:p-4 md:bottom-50 top-40 xl:top-100 parallax absolute-positioned">
                    <div className="flex items-center self-start">
                      <div className="self-start flex-none mr-1">
                        <img
                          className="inline-block w-5 h-5"
                          src={iconCheckmark}
                          alt="Checkmark icon"
                        />
                      </div>
                      <p className="text-sm md:text-base">
                        Consultant Eye Surgeon
                      </p>
                    </div>
                    <div className="flex items-center self-start">
                      <div className="self-start flex-none mr-1">
                        <img
                          className="inline-block w-5 h-5"
                          src={iconCheckmark}
                          alt="Checkmark icon"
                        />
                      </div>
                      <p className="text-sm md:text-base">
                        Cataract Specialist
                      </p>
                    </div>
                    <div className="flex items-center self-start">
                      <div className="self-start flex-none mr-1">
                        <img
                          className="inline-block w-5 h-5"
                          src={iconCheckmark}
                          alt="Checkmark icon"
                        />
                      </div>
                      <p className="text-sm md:text-base">Retina Specialist</p>
                    </div>
                    <div className="flex items-center self-start">
                      <div className="self-start flex-none mr-1">
                        <img
                          className="inline-block w-5 h-5"
                          src={iconCheckmark}
                          alt="Checkmark icon"
                        />
                      </div>
                      <p className="text-sm md:text-base">
                        14 Years of Experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Professional affiliations Large */}
          <section className="px-[8%] lg:px-[5%] py-12 overflow-hidden bg-white md:py-16 lg:py-16 fade-in">
            <div className="container mx-auto">
              <div className="flex flex-col lg:flex-row lg:items-center">
                <div className="w-full mb-8 text-center lg:w-auto lg:mb-0 lg:text-left shrink-0">
                  <h1 className="text-base text-gray-600 font-medium leading-[1.2] md:text-md md:leading-[1.2] lg:mr-6">
                    Professional affiliations
                  </h1>
                </div>
                <div className="grid grid-cols-2 gap-5 justify-items-center sm:grid-cols-2 lg:flex lg:flex-wrap lg:items-center lg:justify-between lg:shrink-0 lg:flex-grow">
                  <a
                    href="https://www.topdoctors.co.uk/doctor/james-neffendorf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-white rounded-md shadow-xl ">
                      <img
                        src={topDoctors}
                        className="h-10 ml-2"
                        alt="Placeholder image"
                      />
                    </div>
                  </a>
                  <div className="flex justify-center">
                    <div className="p-2 lg:p-0">
                      <a
                        href="https://www.rcophth.ac.uk/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="max-h-[2.5rem] md:max-h-7 lg:max-h-7 xl:max-h-10"
                          src={rocopth}
                          alt="Rocopth"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="p-2 lg:p-0">
                      <a
                        href="https://euretina.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="max-h-[2.5rem] md:max-h-7 lg:max-h-7 xl:max-h-10"
                          src={eurina}
                          alt="Eurina"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="p-2 lg:p-0">
                      <a
                        href="https://www.aao.org"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="max-h-[2.5rem] md:max-h-7 lg:max-h-7 xl:max-h-10"
                          src={aao}
                          alt="AAO"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="p-2 lg:p-0">
                      <a
                        href="https://www.cmac.world/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="max-h-[2.5rem] md:max-h-7 lg:max-h-7 xl:max-h-10"
                          src={cmac}
                          alt="CMAC"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="p-2 lg:p-0">
                      <a
                        href="https://www.escrs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="max-h-[1.5rem] md:max-h-6 lg:max-h-6 xl:max-h-6"
                          src={escrs}
                          alt="ESCRS"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="p-2 lg:p-0">
                      <a
                        href="https://www.beavrs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="max-h-[2.5rem] md:max-h-7 lg:max-h-7 xl:max-h-10"
                          src={beavrs}
                          alt="BEAVRS"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Benefits */}
          <section className="px-[8%] bg-white md:px-[10%] lg:px-[5%] fade-in">
            <div className="container grid items-center justify-between grid-cols-1 gap-x-12 gap-y-8 lg:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={eyeExam}
                  className="object-cover w-full h-full rounded-xl"
                  alt="Ophthalmologist examining a middle-aged female patient using a slit lamp in an eye clinic."
                />
              </div>
              <div className="flex items-center">
                <div>
                  <h2 className="font-bold leading-[1.2] mb-4 md:mb-4">
                    Excellence in Personalised Eye Care
                  </h2>
                  <p className="mb-5 md:mb-4 md:text-md">
                    A Cambridge educated surgeon who places high priority on
                    providing bespoke care using the latest technology for his
                    patients. Plays a major role training, teaching and
                    educating the next generation of eye surgeons.
                  </p>
                  <div className="grid grid-cols-1 gap-4 py-2 lg:gap-2">
                    <div className="flex self-start">
                      <div className="self-start flex-none mr-2">
                        <img
                          className="inline-block size-6"
                          src={iconCheckmarkSmall}
                          alt="Checkmark icon"
                        />
                      </div>
                      <p className="text-md">18 academic prizes and awards</p>
                    </div>
                    <div className="flex self-start">
                      <div className="self-start flex-none mr-2">
                        <img
                          className="inline-block size-6"
                          src={iconCheckmarkSmall}
                          alt="Checkmark icon"
                        />
                      </div>
                      <p className="text-md">39 scientific publications</p>
                    </div>
                    <div className="flex self-start">
                      <div className="self-start flex-none mr-2">
                        <img
                          className="inline-block size-6"
                          src={iconCheckmarkSmall}
                          alt="Checkmark icon"
                        />
                      </div>
                      <p className="text-md">
                        Regularly presenting research at international
                        conferences
                      </p>
                    </div>
                    <div className="flex self-start">
                      <div className="self-start flex-none mr-2">
                        <img
                          className="inline-block size-6"
                          src={iconCheckmarkSmall}
                          alt="Checkmark icon"
                        />
                      </div>
                      <p className="text-md">
                        NHS consultant at world-leading King’s College Hospital
                        NHS Foundation Trust.
                      </p>
                    </div>
                    <div className="flex self-start">
                      <div className="self-start flex-none mr-2">
                        <img
                          className="inline-block size-6"
                          src={iconCheckmarkSmall}
                          alt="Checkmark icon"
                        />
                      </div>
                      <p className="text-md">
                        Examiner for the Royal College of Ophthalmologists
                      </p>
                    </div>
                    <div className="grid mt-2 md:gap-2 md:grid-cols-2 md:mt-4 lg:flex lg:space-x-2">
                      <button
                        className="inline-flex items-center justify-center gap-3 px-4 mb-2 font-medium transition-colors border rounded-full shadow-md btn-56 lg:px-12 focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-jamesBlue bg-jamesBlue text-text-alternative hover:bg-jamesLight hover:border-jamesLight"
                        onClick={() => (window.location.href = '/contact')}
                      >
                        Contact
                      </button>

                      <button
                        className="inline-flex items-center justify-center gap-3 px-4 mb-2 font-medium transition-colors border border-gray-300 rounded-full btn-56 lg:px-12 focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-text-primary"
                        onClick={() => (window.location.href = '/about')}
                      >
                        About
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Testimonials */}
          <section className="px-[8%] md:px-[10%] lg:px-[5%] py-16 md:py-24 lg:py-28 fade-in">
            <div className="container mx-auto">
              <div className="flex flex-col mb-12 md:flex-row md:justify-between md:items-center">
                <div className="lg:w-2/3 lg:pr-12">
                  <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                    Patient Testimonials
                  </h1>
                </div>
                <div className="flex flex-col justify-end lg:flex-row lg:w-full lg:items-center">
                  <div className="flex flex-row mb-4 mr-4 lg:mb-0">
                    <img
                      className="inline-block size-6 reduce-space"
                      src={grade}
                      alt="Checkmark icon"
                    />
                    <img
                      className="inline-block size-6 reduce-space"
                      src={grade}
                      alt="Checkmark icon"
                    />
                    <img
                      className="inline-block size-6 reduce-space"
                      src={grade}
                      alt="Checkmark icon"
                    />
                    <img
                      className="inline-block size-6 reduce-space"
                      src={grade}
                      alt="Checkmark Icon"
                    />
                    <img
                      className="inline-block size-6 reduce-space"
                      src={grade}
                      alt="Checkmark icon"
                    />
                  </div>
                  <div className="flex flex-row items-center">
                    <p className="mr-">4.94 out of 5</p>
                    <a href="https://www.doctify.com/uk/specialist/james-neffendorf">
                      <img
                        src={doctifyLogo}
                        className="ml-2 max-h-12"
                        alt="Checkmark icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <Testimonials />
            </div>
          </section>
          {/* Services */}
          <header className="relative py-12 md:py-16 lg:py-24 px-[8%] md:px-[10%] lg:px-[5%] fade-in">
            <div className="container">
              <div className="flex items-center py-0 lg:pt-0 lg:pb-0">
                <div className="max-w-md">
                  <div className="flex-col self-start">
                    {accordionData.map((item, index) => (
                      <AccordionItem
                        key={index}
                        title={item.title}
                        content={item.content}
                        isOpen={openIndex === index}
                        onClick={() => this.handleAccordionClick(index)}
                        link={item.link}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 -z-10">
              <img
                src={jamesTreatment}
                className="object-cover w-full h-full"
                alt="Mr James E. Neffendorf conducting an eye examination on a male patient using a specialised slit lamp in a medical office."
              />
              <div className="absolute inset-0 bg-white/55">
                <div className="absolute inset-0 bg-gradient-to-r from-white/100 to-transparent"></div>
              </div>
            </div>
          </header>
          {/* Patient Story */}
          <section className="px-[5%] bg-gray-50 lg:px-[5%] py-16 md:py-24 lg:py-28 fade-in">
            <div className="container">
              <h2 className="mb-8 font-bold text-center">Patient Story</h2>
              <div className="relative grid grid-cols-1 gap-y-12 md:grid-cols-3 md:items-center md:gap-x-12 lg:gap-x-20">
                <div className="md:col-span-2">
                  <img
                    className="m-2 mb-5 max-h-6 shrink-0"
                    src={quoteMark}
                    alt="Quotation Mark Icon"
                  />
                  <blockquote className="text-xl text-gray-800 md:col-span-2 md:text-2xl">
                    ‘I had cataract surgery on both eyes under James’ care. I am
                    a young patient and had an unusual type of cataract, meaning
                    the surgery was more complex. I was extremely nervous, but
                    James made me feel very at ease and relaxed. He explained
                    everything in detail to me about what needed to be done. So
                    grateful for the outcome and cannot thank James enough for
                    what he has done to help me see properly again.’
                  </blockquote>
                </div>
                <div className="bg-gray-300 rounded-md md:col-span-1 md:col-start-3 ">
                  <img
                    src={patient}
                    className="object-cover w-full p-20 rounded-md md:p-0"
                    alt="Previous patient image"
                  />
                </div>
              </div>
            </div>
          </section>
          {/* Call To Action */}
          <section className="relative border-t px-[5%] lg:px-[5%] overflow-hidden fade-in">
            <img
              src={swoosh2}
              className="absolute inset-0 object-cover w-full h-full"
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

export default RootIndex
