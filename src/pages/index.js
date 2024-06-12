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
import pembroke from '../assets/pembroke.svg'
import rocopth from '../assets/rocopth.svg'
import topRightSvg from '../assets/top-right.svg'
import bottomLeftSvg from '../assets/bottom-left.svg'
import grade from '../assets/grade.svg'
import { Helmet } from 'react-helmet'
import eyeExam from '../assets/eye-exam.jpg'

const Home = () => (
  <div>
    <Helmet>
      <title>Your Page Title</title>
      <meta name="description" content="Your page description" />
      <link rel="stylesheet" href="https://use.typekit.net/nak2vhf.css" />
    </Helmet>
  </div>
)

const accordionData = [
  {
    title: 'Retina',
    content:
      'Age-related macular degeneration, Epiretinal membrane, macular hole, diabetic eye disease, retinal detachment.',
    link: '/treatment/retina',
  },
  {
    title: 'Cataract Surgery',
    content:
      'Age-related macular degeneration, Epiretinal membrane, macular hole, diabetic eye disease.',
    link: '/treatment/cataract-surgery',
  },
  {
    title: 'Emergency Eye Care',
    content:
      'Urgent eye problems such as red eye, painful eyes and loss of vision.',
    link: '/treatment/emergency-eye-care',
  },
  {
    title: 'General Eye Care',
    content: 'Conditions such as a dry eye, blepharitis and glaucoma.',
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
          <p className="text-base text-gray-900 md:text-lg">{content}</p>
          <a href={link} className="block mt-4 text-gray-500">
            View Treatment
          </a>
        </div>
      </div>
    )
  }
}

class RootIndex extends React.Component {
  state = {
    openIndex: 0,
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
                  <div className="flex">
                    <img
                      src={doctifyLogo}
                      className="object-cover mr-2 max-h-12"
                      alt="Placeholder image"
                    />
                    <p className="text-sm font-medium tracking-wide uppercase">
                      Verified
                    </p>
                  </div>
                  <h1 className="mt-4 mb-2 font-bold">
                    Mr James E. Neffendorf
                  </h1>
                  <h2 className="inline text-xs font-bold tracking-wide text-gray-400 uppercase xl:text-lg lg:text-sm md:text-base">
                    Consultant Ophthalmologist and Retinal Surgeon
                  </h2>

                  <p className="mt-2 md:text-md xl:text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className="grid mt-6 md:gap-2 md:grid-cols-2 md:mt-8 lg:flex lg:space-x-2">
                    <button className="inline-flex items-center justify-center gap-3 px-4 mb-2 text-sm font-medium transition-colors border rounded-full shadow-md btn-48 lg:px-12 focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-jamesBlue bg-jamesBlue text-text-alternative hover:bg-jamesLight hover:border-jamesLight">
                      Contact Mr Neffendorf
                    </button>
                    <button className="inline-flex items-center justify-center gap-3 px-4 mb-2 text-sm font-medium transition-colors border border-gray-300 rounded-full btn-48 lg:px-12 focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-text-primary">
                      About Mr Neffendorf
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={jamesMain}
                    className="relative z-10 object-cover w-full mx-auto lg:w-3/4" // Adjusted image size for desktop
                    alt="Placeholder image"
                  />
                  <img
                    src={topRightSvg}
                    alt="Top right background decoration"
                    className="absolute top-0 right-0 z-0" // Adjusted from -top-20 to top-0 for example
                  />
                  <img
                    src={bottomLeftSvg}
                    alt="Bottom left background decoration"
                    className="absolute z-0 -bottom-10 -left-10"
                  />
                  <div className="absolute left-0 z-20 flex p-4 bg-white rounded-md shadow-xl lg:px-6 bottom-10 md:left-0 parallax">
                    <p className="mr-2 text-sm font-bold text-gray-900">
                      Excellent
                    </p>
                    <p className="mr-2 text-sm">4.94 out of 5</p>
                    <img
                      src={doctifyLogo}
                      className="ml-2 max-h-10"
                      alt="Placeholder image"
                    />
                  </div>
                  <div className="absolute right-0 z-20 flex flex-col p-3 bg-white rounded-md shadow-xl xl:px-6 xl:py-4 md:p-6 lg:p-4 md:bottom-50 top-40 xl:top-100 parallax absolute-positioned">
                    <div className="flex items-center self-start">
                      <div className="self-start flex-none mr-1">
                        <img
                          className="inline-block w-5 h-5"
                          src={iconCheckmark}
                          alt="Checkmark"
                        />
                      </div>
                      <p className="text-sm md:text-lg lg:text-base">
                        Ophthalmologist
                      </p>
                    </div>
                    <div className="flex items-center self-start">
                      <div className="self-start flex-none mr-1">
                        <img
                          className="inline-block w-5 h-5"
                          src={iconCheckmark}
                          alt="Checkmark"
                        />
                      </div>
                      <p className="text-sm md:text-lg lg:text-base">
                        Retina Specialist
                      </p>
                    </div>
                    <div className="flex items-center self-start">
                      <div className="self-start flex-none mr-1">
                        <img
                          className="inline-block w-5 h-5"
                          src={iconCheckmark}
                          alt="Checkmark"
                        />
                      </div>
                      <p className="text-sm md:text-lg lg:text-base">
                        14 Years of Experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Professional affiliations Large */}
          <section className="px-[8%] lg:px-0 py-12 overflow-hidden bg-white md:py-16 lg:py-16 fade-in">
            <div className="container mx-auto">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                <div className="w-full mb-8 text-center lg:w-auto lg:mb-0 lg:text-left">
                  <h1 className="text-base text-gray-500 font-medium leading-[1.2] md:text-md md:leading-[1.2]">
                    Professional affiliations
                  </h1>
                </div>
                <div className="grid gap-4 justify-items-center lg:flex lg:flex-wrap lg:items-center lg:justify-end lg:space-x-4">
                  <div className="flex justify-center">
                    <div className="p-2">
                      <img
                        className="max-h-[2.25rem] md:max-h-8 lg:max-h-8 xl:max-h-10"
                        src={rocopth}
                        alt="Checkmark"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="p-2">
                      <img
                        className="max-h-[2.25rem] md:max-h-8 lg:max-h-8 xl:max-h-10"
                        src={eurina}
                        alt="Checkmark"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="p-2">
                      <img
                        className="max-h-[2.25rem] md:max-h-8 lg:max-h-8 xl:max-h-10"
                        src={aao}
                        alt="Checkmark"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="p-2">
                      <img
                        className="max-h-[1.75rem] md:max-h-6 lg:max-h-6 xl:max-h-6"
                        src={escrs}
                        alt="Checkmark"
                      />
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="p-2">
                      <img
                        className="max-h-[2.25rem] md:max-h-8 lg:max-h-8 xl:max-h-10"
                        src={beavrs}
                        alt="Checkmark"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Benefits */}
          <section className="px-[8%] md:px-[10%] lg:px-[5%] pt-16 pb-8 md:py-16 fade-in">
            <div className="container grid items-center justify-between grid-cols-1 gap-x-12 gap-y-8 lg:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={eyeExam}
                  className="object-cover w-full h-full rounded-xl"
                  alt="Eye Exam"
                />
              </div>
              <div className="flex items-center">
                <div>
                  <h2 className="font-bold leading-[1.2] mb-5 md:mb-4">
                    Leading Ophthalmologist and Vitreoretinal Surgeon
                  </h2>
                  <p className="mb-5 md:mb-6 md:text-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat.
                  </p>
                  <div className="grid grid-cols-1 gap-4 py-2 lg:gap-2">
                    <div className="flex self-start">
                      <div className="self-start flex-none mr-4">
                        <img
                          className="inline-block size-6"
                          src={iconCheckmark}
                          alt="Checkmark"
                        />
                      </div>
                      <p>Vitreoretinal Surgery Specialist</p>
                    </div>
                    <div className="flex self-start">
                      <div className="self-start flex-none mr-4">
                        <img
                          className="inline-block size-6"
                          src={iconCheckmark}
                          alt="Checkmark"
                        />
                      </div>
                      <p>Pioneering Ocular Research</p>
                    </div>
                    <div className="flex self-start">
                      <div className="self-start flex-none mr-4">
                        <img
                          className="inline-block size-6"
                          src={iconCheckmark}
                          alt="Checkmark"
                        />
                      </div>
                      <p>Integrating AI with Eye Care</p>
                    </div>
                    <div className="grid mt-2 md:gap-2 md:grid-cols-2 md:mt-4 lg:flex lg:space-x-2">
                      <button className="inline-flex items-center justify-center gap-3 px-4 mb-2 text-sm font-medium transition-colors border rounded-full shadow-md btn-48 lg:px-12 focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-jamesBlue bg-jamesBlue text-text-alternative hover:bg-jamesLight hover:border-jamesLight">
                        Contact Mr Neffendorf
                      </button>
                      <button className="inline-flex items-center justify-center gap-3 px-4 mb-2 text-sm font-medium transition-colors border border-gray-300 rounded-full btn-48 lg:px-12 focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-text-primary">
                        About Mr Neffendorf
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Services */}
          <header className="relative py-8 md:py-16 lg:py-24 px-[8%] md:px-[10%] lg:px-[5%] fade-in">
            <div className="container">
              <div className="flex items-center py-8 lg:pt-0 lg:pb-0">
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
                alt="Placeholder image"
              />
              <div className="absolute inset-0 bg-white/55">
                <div className="absolute inset-0 bg-gradient-to-r from-white/100 to-transparent"></div>
              </div>
            </div>
          </header>
          {/* Testimonials */}
          <section className="px-[8%] md:px-[10%] lg:px-[5%] py-16 md:py-24 lg:py-28 fade-in">
            <div className="container mx-auto">
              <div className="flex flex-col mb-12 md:flex-row md:justify-between md:items-center">
                <div className="lg:w-2/3 lg:pr-12">
                  <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                    Customer testimonials
                  </h1>
                  <p className="mb-4 md:text-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="flex flex-col lg:w-1/3 lg:items-end">
                  <div className="flex flex-row mb-4">
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
                  </div>
                  <div className="flex flex-row items-center">
                    <p className="mr-2">4.94 out of 5</p>
                    <img
                      src={doctifyLogo}
                      className="ml-2 max-h-12"
                      alt="Checkmark"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
                <div className="flex flex-col">
                  <blockquote className='my-6 text-md leading-[1.4] before:content-["\201C"] after:content-["\201D"] md:my-8 md:text-xl'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Suspendisse varius enim in eros
                    elementum tristique. Duis cursus, mi quis viverra ornare.
                  </blockquote>
                  <img
                    src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
                    alt="Testimonial avatar 3"
                    className="object-cover mb-4 rounded-full size-14 min-h-14 min-w-14"
                  />
                  <p className="font-semibold text-black">Name Surname</p>
                  <p>
                    <span>Previous Client</span>, <span>Date</span>
                  </p>
                </div>
                <div className="flex flex-col">
                  <blockquote className='my-6 text-md leading-[1.4] before:content-["\201C"] after:content-["\201D"] md:my-8 md:text-xl'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Suspendisse varius enim in eros
                    elementum tristique. Duis cursus, mi quis viverra ornare.
                  </blockquote>
                  <img
                    src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
                    alt="Testimonial avatar 3"
                    className="object-cover mb-4 rounded-full size-14 min-h-14 min-w-14"
                  />
                  <p className="font-semibold text-black">Name Surname</p>
                  <p>
                    <span>Previous Client</span>, <span>Date</span>
                  </p>
                </div>
                <div className="flex flex-col">
                  <blockquote className='my-6 text-md leading-[1.4] before:content-["\201C"] after:content-["\201D"] md:my-8 md:text-xl'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Suspendisse varius enim in eros
                    elementum tristique. Duis cursus, mi quis viverra ornare.
                  </blockquote>
                  <img
                    src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
                    alt="Testimonial avatar 3"
                    className="object-cover mb-4 rounded-full size-14 min-h-14 min-w-14"
                  />
                  <p className="font-semibold text-black">Name Surname</p>
                  <p>
                    <span>Previous Client</span>, <span>Date</span>
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Call To Action */}
          <section className="relative px-[8%] md:px-[10%] lg:px-[5%] py-24 md:py-28 lg:py-40 overflow-hidden fade-in">
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
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                Book a Consultation
              </h2>
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

export default RootIndex
