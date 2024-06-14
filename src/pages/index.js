import React from 'react'
import Slider from 'react-slick'
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
import bottomLeftSvg from '../assets/bottom-left.svg'
import swoosh2 from '../assets/swoosh-2.svg'
import grade from '../assets/grade.svg'
import { Helmet } from 'react-helmet'
import eyeExam from '../assets/eye-exam.jpg'
import quoteMark from '../assets/quote-mark.svg'
import patient from '../assets/patient.jpg'

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

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
      nextArrow: <SampleNextArrow />,
    }

    function SampleNextArrow(props) {
      const { className, style, onClick } = props
      return (
        <div
          className={className}
          style={{
            ...style,
            display: 'block',
            width: '40px',
            height: '40px',
            position: 'absolute',
            right: '-20px', // Adjust this value to position the arrow as needed
            top: '50%',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
            borderRadius: '50%',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
            background: 'white',
          }}
          onClick={onClick}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 0,
              height: 0,
              borderTop: '8px solid transparent',
              borderBottom: '8px solid transparent',
              borderLeft: '12px solid black',
            }}
          />
        </div>
      )
    }

    function SamplePrevArrow(props) {
      const { className, style, onClick } = props
      return (
        <div
          className={className}
          style={{
            ...style,
            display: 'block',
            width: '40px',
            height: '40px',
            position: 'absolute',
            left: '-50px', // Adjust this value to position the arrow as needed
            top: '50%',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
            borderRadius: '50%',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
            background: 'white',
          }}
          onClick={onClick}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 0,
              height: 0,
              borderTop: '8px solid transparent',
              borderBottom: '8px solid transparent',
              borderRight: '12px solid black',
            }}
          />
        </div>
      )
    }

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
                  <h1 className="mt-4 mb-0 font-bold mb:mb-2">
                    Mr James E. Neffendorf
                  </h1>
                  <h2 className="inline text-xs font-bold tracking-wide text-gray-400 uppercase lg:text-sm md:text-base">
                    Consultant Ophthalmologist and Retinal Surgeon
                  </h2>

                  <p className="mt-2 md:text-md xl:text-lg">
                    A leading London-based consultant eye surgeon with a
                    specialist interest in cataract surgery, retinal surgery and
                    emergency eye care
                  </p>
                  <div className="grid mt-6 md:gap-2 md:grid-cols-2 md:mt-8 lg:flex lg:space-x-2">
                    <button
                      className="inline-flex items-center justify-center gap-3 px-4 mb-2 text-sm font-medium transition-colors border rounded-full shadow-md btn-48 lg:px-12 focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-jamesBlue bg-jamesBlue text-text-alternative hover:bg-jamesLight hover:border-jamesLight"
                      onClick={() => (window.location.href = '/contact')}
                    >
                      Contact Mr Neffendorf
                    </button>

                    <button
                      className="inline-flex items-center justify-center gap-3 px-4 mb-2 text-sm font-medium transition-colors border border-gray-300 rounded-full btn-48 lg:px-12 focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-text-primary"
                      onClick={() => (window.location.href = '/about')}
                    >
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
          <section className="px-[8%] lg:px-[5%] py-12 overflow-hidden bg-white md:py-16 lg:py-16 fade-in">
            <div className="container mx-auto">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                <div className="w-full mb-8 text-center lg:w-auto lg:mb-0 lg:text-left">
                  <h1 className="text-base text-gray-500 font-medium leading-[1.2] md:text-md md:leading-[1.2]">
                    Professional affiliations
                  </h1>
                </div>
                <div className="grid grid-cols-2 gap-4 justify-items-center sm:grid-cols-2 lg:flex lg:flex-wrap lg:items-center lg:justify-end lg:space-x-2 xl:space-x-4 lg:p-0">
                  <div className="flex justify-center">
                    <div className="p-2 lg:p-0">
                      <a
                        href="https://www.rcophth.ac.uk/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="max-h-[2.25rem] md:max-h-8 lg:max-h-8 xl:max-h-10"
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
                          className="max-h-[2.25rem] md:max-h-8 lg:max-h-8 xl:max-h-10"
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
                          className="max-h-[2.25rem] md:max-h-8 lg:max-h-8 xl:max-h-10"
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
                          className="max-h-[2.25rem] md:max-h-8 lg:max-h-8 xl:max-h-10"
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
                          className="max-h-[2.25rem] md:max-h-8 lg:max-h-8 xl:max-h-10"
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
          <section className="px-[8%] bg-white md:px-[10%] lg:px-[5%] pt-4 md:pt-8 lg:pt-12 pb-8 md:pb-16 xl:pb-24 fade-in">
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
                  <h2 className="font-bold leading-[1.2] mb-4 md:mb-4">
                    Leading Ophthalmologist and Vitreoretinal Surgeon
                  </h2>
                  <p className="mb-5 md:mb-4 md:text-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla.
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
                      <button
                        className="inline-flex items-center justify-center gap-3 px-4 mb-2 text-sm font-medium transition-colors border rounded-full shadow-md btn-48 lg:px-12 focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-jamesBlue bg-jamesBlue text-text-alternative hover:bg-jamesLight hover:border-jamesLight"
                        onClick={() => (window.location.href = '/contact')}
                      >
                        Contact Mr Neffendorf
                      </button>

                      <button
                        className="inline-flex items-center justify-center gap-3 px-4 mb-2 text-sm font-medium transition-colors border border-gray-300 rounded-full btn-48 lg:px-12 focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-text-primary"
                        onClick={() => (window.location.href = '/about')}
                      >
                        About Mr Neffendorf
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
                    Patient testimonials
                  </h1>
                  <p className="mb-4 md:text-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="flex flex-col justify-end lg:flex-row lg:w-full lg:items-center">
                  <div className="flex flex-row mb-4 mr-4 lg:mb-0">
                    <img
                      className="inline-block -mr-1 size-6"
                      src={grade}
                      alt="Checkmark"
                    />
                    <img
                      className="inline-block -mr-1 size-6"
                      src={grade}
                      alt="Checkmark"
                    />
                    <img
                      className="inline-block -mr-1 size-6"
                      src={grade}
                      alt="Checkmark"
                    />
                    <img
                      className="inline-block -mr-1 size-6"
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
                    <p className="mr-">4.94 out of 5</p>
                    <img
                      src={doctifyLogo}
                      className="ml-2 max-h-12"
                      alt="Checkmark"
                    />
                  </div>
                </div>
              </div>
              <Slider {...settings}>
                <div className="flex flex-col px-0 md:pl-0 md:pr-8 lg:pr-12 lg:pl-0 paragraph-container">
                  <blockquote className='text-md leading-[1.4] before:content-["\201C"] after:content-["\201D"] md:my-8 md:text-xl'>
                    If it wasn't for Mr James Neffendorf's diagnosis, quick
                    response, and brilliant surgery, I’d be blind in one eye
                    now. Mr Neffendorf has great bedside manner and excellent
                    communication skills. I have no hesitation in recommending
                    Mr Neffendorf to any patient, especially those who are
                    nervous or require complicated surgery.
                  </blockquote>

                  <p className="font-semibold text-black">
                    Emergency Ophthalmology Patient
                  </p>
                  <p>
                    <span>26 Jan 2023</span>
                  </p>
                </div>
                <div className="flex flex-col px-0 md:pl-0 md:pr-8 lg:pr-12 lg:pl-0 paragraph-container">
                  <blockquote className='text-md leading-[1.4] before:content-["\201C"] after:content-["\201D"] md:my-8 md:text-xl'>
                    Mr James Neffendorf was friendly, kind, and professional. He
                    took time to explain every aspect of my treatment and made
                    me feel comfortable throughout. I have had no complications
                    following my procedure and for the first time feel informed
                    on how to effectively manage the care & treatment of my
                    eyes.
                  </blockquote>
                  <p className="font-semibold text-black">
                    Eye problems Patient
                  </p>
                  <p>
                    <span>03 Jul 2023</span>
                  </p>
                </div>
                <div className="flex flex-col px-0 md:pl-0 md:pr-8 lg:pr-12 lg:pl-0 paragraph-container">
                  <blockquote className='text-md leading-[1.4] before:content-["\201C"] after:content-["\201D"] md:my-8 md:text-xl'>
                    James is very professional and experienced and has improved
                    my sight in both eyes following cataract operations. I am
                    now able to pursue my hobbies of tennis, dancing and
                    gardening without glasses. It is extremely important to have
                    good wellbeing when working long hours in a very tough
                    business.
                  </blockquote>
                  <p className="font-semibold text-black">Cataracts Patient</p>
                  <p>
                    <span>19 Dec 2023</span>
                  </p>
                </div>
                <div className="flex flex-col px-0 md:pl-0 md:pr-8 lg:pr-12 lg:pl-0 paragraph-container">
                  <blockquote className='text-md leading-[1.4] before:content-["\201C"] after:content-["\201D"] md:my-8 md:text-xl'>
                    If it wasn't for Mr James Neffendorf's diagnosis, quick
                    response, and brilliant surgery, I’d be blind in one eye
                    now. Mr Neffendorf has great bedside manner and excellent
                    communication skills. I have no hesitation in recommending
                    Mr Neffendorf to any patient, especially those who are
                    nervous or require complicated surgery.
                  </blockquote>

                  <p className="font-semibold text-black">Cataracts Patient</p>
                  <p>
                    <span>19 Dec 2023</span>
                  </p>
                </div>
              </Slider>
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
                alt="Placeholder image"
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
              <div className="relative grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                <div>
                  <img
                    className="m-2 mb-5 max-h-6 shrink-0"
                    src={quoteMark}
                    alt="Quotation Mark Icon"
                  />
                  <blockquote className="mb-5 text-xl font-bold text-black md:text-2xl lg:text-3xl">
                    ‘I had cataract surgery on both eyes under James’ care. I am
                    a young patient and had an unusual type of cataract, meaning
                    the surgery was more complex. I was extremely nervous, but
                    James made me feel very at ease and relaxed. He explained
                    everything in detail to me about what needed to be done. So
                    grateful for the outcome and cannot thank James enough for
                    what he has done to help me see properly again.’
                  </blockquote>
                  <p className="text-xl font-bold text-black">
                    Previous Patient
                  </p>
                  <p>Seen by Mr Neffendorf for Emergency Cataract Surgery</p>
                </div>
                <div className="">
                  <img
                    src={patient}
                    className="object-cover w-full p-8 rounded-md"
                    alt="Placeholder image"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Call To Action */}
          <section className="relative border-t px-[8%] md:px-[10%] lg:px-[5%] overflow-hidden fade-in">
            <img
              src={swoosh2}
              className="absolute inset-0 object-cover w-full h-full"
              alt="Placeholder image"
            />
            <div className="container relative z-10 py-24 text-center md:py-28 lg:py-40">
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                Book a Consultation
              </h2>
              <p className="md:text-md">
                Book a consultation with Mr James Neffendorf for expert
                ophthalmic care and treatment.
              </p>
              <div className="grid mt-6 md:gap-2 md:grid-cols-2 md:mt-8 lg:flex lg:justify-center lg:space-x-2">
                <button
                  className="inline-flex items-center justify-center gap-3 px-4 mb-2 text-sm font-medium transition-colors border rounded-full shadow-md btn-48 lg:px-12 focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-jamesBlue bg-jamesBlue text-text-alternative hover:bg-jamesLight hover:border-jamesLight"
                  onClick={() => (window.location.href = '/contact')}
                >
                  Contact Mr Neffendorf
                </button>

                <button
                  className="inline-flex items-center justify-center gap-3 px-4 mb-2 text-sm font-medium transition-colors border border-gray-300 rounded-full btn-48 lg:px-12 focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-text-primary"
                  onClick={() => (window.location.href = '/about')}
                >
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
