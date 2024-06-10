import React from 'react';
import Layout from '../components/layout';
import jamesMain from '../assets/james-main.png';
import jamesTreatment from '../assets/james-treatment.jpg';
import doctifyLogo from '../assets/doctify-logo.svg';
import iconCheckmark from '../assets/IcSharpCheckCircle.svg';
import aao from '../assets/aao.svg';
import beavrs from '../assets/beavrs.svg';
import escrs from '../assets/escrs.svg';
import eurina from '../assets/eurina.svg';
import pembroke from '../assets/pembroke.svg';
import rocopth from '../assets/rocopth.svg';
import topRightSvg from '../assets/top-right.svg';
import bottomLeftSvg from '../assets/bottom-left.svg';
import grade from '../assets/grade.svg';
import { Helmet } from 'react-helmet';

const Home = () => (
  <div>
    <Helmet>
      <title>Your Page Title</title>
      <meta name="description" content="Your page description" />
      <link rel="stylesheet" href="https://use.typekit.net/nak2vhf.css" />
    </Helmet>
  </div>
);

class RootIndex extends React.Component {
  componentDidMount() {
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight - 100) {
        el.classList.add('visible');
      } else {
        el.classList.remove('visible');
      }
    });

    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach((el) => {
      const scrollPosition = window.scrollY;
      const maxMovement = 20; // Maximum movement in pixels
      const movement = Math.min(scrollPosition * 0.1, maxMovement);
      el.style.transform = `translateY(${movement}px)`;
    });
  };

  render() {
    return (
      <Layout>
        <Home />
        <div className="main-content">
          <section className="pt-16 bg-gray-100 px-[5%] md:px-[10%] lg:px-[5%] fade-in">
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
                  <h1 className="mt-4 mb-5 font-bold md:mb-6">
                    Consultant Ophthalmologist and Retinal Surgeon
                  </h1>
                  <p className="md:text-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    varius enim in eros elementum tristique.
                  </p>
                  <div className="gap-2 mt-6 button-group md:mt-8">
                    <button className="inline-flex text-sm items-center justify-center gap-3 px-8 py-2.5 mb-2 font-medium transition-colors border rounded-full focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-jamesBlue bg-jamesBlue text-text-alternative shadow-md hover:bg-darkerJamesBlue hover:border-darkerJamesBlue">
                      Book an appointment
                    </button>
                    <button className="inline-flex text-sm items-center justify-center gap-3 px-8 py-2.5 mb-2 font-medium transition-colors border rounded-full focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-gray-300 text-text-primary">
                      About Mr Neffendorf
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={jamesMain}
                    className="object-cover w-full"
                    alt="Placeholder image"
                  />
                  <div className="absolute left-0 flex p-4 bg-white rounded-md shadow-xl bottom-14 md:left-0 parallax">
                    <p className="mr-2 text-sm font-bold text-gray-900">Excellent</p>
                    <p className="mr-2 text-sm">4.94 out of 5</p>
                    <img
                      src={doctifyLogo}
                      className="ml-2 max-h-10"
                      alt="Placeholder image"
                    />
                  </div>
                  <div className="absolute right-0 flex flex-col p-4 bg-white rounded-md shadow-xl top-40 parallax md:top-40 md:right-0 absolute-positioned">
                    <div className="flex self-start">
                      <div className="self-start flex-none mr-2">
                        <img
                          className="inline-block size-6"
                          src={iconCheckmark}
                          alt="Checkmark"
                        />
                      </div>
                      <p className="text-sm font-medium">Ophthalmologist</p>
                    </div>
                    <div className="flex self-start">
                      <div className="self-start flex-none mr-2">
                        <img
                          className="inline-block size-6"
                          src={iconCheckmark}
                          alt="Checkmark"
                        />
                      </div>
                      <p className="text-sm font-medium">Retina Specialist</p>
                    </div>
                    <div className="flex self-start">
                      <div className="self-start flex-none mr-2">
                        <img
                          className="inline-block size-6"
                          src={iconCheckmark}
                          alt="Checkmark"
                        />
                      </div>
                      <p className="text-sm font-medium">
                        14 Years of Experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
 {/* Professional affiliations Large */}
<section className="px-[8%] lg:px-[5%] md:px-[10%] py-12 overflow-hidden bg-white md:py-16 lg:py-16 fade-in">
  <div className="container mx-auto">
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
      <div className="w-full mb-8 lg:w-auto lg:mb-0">
        <h1 className="text-center lg:text-left text-base font-bold leading-[1.2] md:text-md md:leading-[1.2]">
          Professional affiliations
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-4 justify-items-center lg:flex lg:flex-wrap lg:items-center lg:justify-end lg:space-x-4">
        <div className="flex justify-center lg:justify-start">
          <img
            className="max-h-6 md:max-h-8 lg:max-h-8 xl:max-h-10"
            src={rocopth}
            alt="Checkmark"
          />
        </div>
        <div className="flex justify-center lg:justify-start">
          <img
            className="max-h-6 md:max-h-8 lg:max-h-8 xl:max-h-10"
            src={eurina}
            alt="Checkmark"
          />
        </div>
        <div className="flex justify-center lg:justify-start">
          <img
            className="max-h-6 md:max-h-8 lg:max-h-8 xl:max-h-10"
            src={aao}
            alt="Checkmark"
          />
        </div>
      
        <div className="flex justify-center lg:justify-start">
          <img
            className="max-h-4 md:max-h-6 lg:max-h-6 xl:max-h-6"
            src={escrs}
            alt="Checkmark"
          />
        </div>
        <div className="flex justify-center lg:justify-start">
          <img
            className="max-h-6 md:max-h-8 lg:max-h-8 xl:max-h-10"
            src={pembroke}
            alt="Checkmark"
          />
        </div>
        <div className="flex justify-center lg:justify-start">
          <img
            className="max-h-6 md:max-h-8 lg:max-h-8 xl:max-h-10"
            src={beavrs}
            alt="Checkmark"
          />
        </div>
      </div>
    </div>
  </div>
</section>
        {/* Benefits */}
        <section className="px-[8%] bg-white md:px-[10%] lg:px-[5%] py-16 md:py-28 lg:py-32 xl:py-40 fade-in">
          <div className="container grid items-start justify-between grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
            <h2 className="font-bold leading-[1.2]">
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
              </div>
            </div>
          </div>
        </section>
        {/* Services */}
        <header className="relative px-[8%] md:px-[10%] lg:px-[5%] fade-in">
          <div className="container">
            <div className="flex items-center py-16 lg:pt-0 lg:pb-24">
              <div className="max-w-md">
                <div className="flex-col self-start">
                  <div className="py-6 pl-4 border-l-4 border-jamesBlue">
                    <h2 className="mb-3 text-2xl font-bold text-black md:mb-4 md:text-5xl">
                      Retina
                    </h2>
                    <p className="text-black">
                      Age-related macular degeneration, Epiretinal membrane,
                      macular hole, diabetic eye disease, retinal detachment.
                    </p>
                    <div className="flex items-center mt-5 gap-x-4 md:mt-6">
                      <button className="inline-flex items-center justify-center gap-2 p-0 text-black transition-colors border-0 focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                        View treatment
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="0"
                          viewBox="0 0 15 15"
                          className="size-6"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="py-6 pl-4 border-l-4 border-jamesBlue">
                    <h2 className="mb-3 text-2xl font-bold text-black md:mb-4 md:text-5xl">
                      Cataract Surgery
                    </h2>
                    <p className="text-black">
                      Age-related macular degeneration, Epiretinal membrane,
                      macular hole, diabetic eye disease, retinal detachment.
                    </p>
                    <div className="flex items-center mt-5 gap-x-4 md:mt-6">
                      <button className="inline-flex items-center justify-center gap-2 p-0 text-black transition-colors border-0 focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                        View treatment
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="0"
                          viewBox="0 0 15 15"
                          className="size-6"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="py-6 pl-4 border-l-4 border-jamesBlue">
                    <h2 className="mb-3 text-2xl font-bold text-black md:mb-4 md:text-5xl">
                      Emergency Eye Care
                    </h2>
                    <p className="text-black">
                      Age-related macular degeneration, Epiretinal membrane,
                      macular hole, diabetic eye disease, retinal detachment.
                    </p>
                    <div className="flex items-center mt-5 gap-x-4 md:mt-6">
                      <button className="inline-flex items-center justify-center gap-2 p-0 text-black transition-colors border-0 focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                        View treatment
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="0"
                          viewBox="0 0 15 15"
                          className="size-6"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="py-6 pl-4 border-l-4 border-jamesBlue">
                    <h2 className="mb-3 text-2xl font-bold text-black md:mb-4 md:text-5xl">
                      General Eye Care
                    </h2>
                    <p className="text-black">
                      Age-related macular degeneration, Epiretinal membrane,
                      macular hole, diabetic eye disease, retinal detachment.
                    </p>
                    <div className="flex items-center mt-5 gap-x-4 md:mt-6">
                      <button className="inline-flex items-center justify-center gap-2 p-0 text-black transition-colors border-0 focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                        View treatment
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="0"
                          viewBox="0 0 15 15"
                          className="size-6"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
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
              <div className="absolute inset-0 bg-gradient-to-b from-white/100 to-transparent"></div>
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
                <blockquote className='my-6 text-md font-bold leading-[1.4] before:content-["\201C"] after:content-["\201D"] md:my-8 md:text-xl'>
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
                <blockquote className='my-6 text-md font-bold leading-[1.4] before:content-["\201C"] after:content-["\201D"] md:my-8 md:text-xl'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Suspendisse varius enim in eros
                  elementum tristique.
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
                <blockquote className='my-6 text-md font-bold leading-[1.4] before:content-["\201C"] after:content-["\201D"] md:my-8 md:text-xl'>
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
              Book a consultation with Mr James Neffendorf for expert ophthalmic
              care and treatment.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 mt-6 lg:flex-row md:mt-8">
              <button className="items-center justify-center w-full gap-3 px-8 py-4 font-medium transition-colors border rounded-full lg:w-auto lg:inline-flex focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-jamesBlue bg-jamesBlue text-text-alternative">
                Book an appointment
              </button>
              <button className="items-center justify-center w-full gap-3 px-8 py-4 font-medium transition-colors border border-gray-300 rounded-full lg:w-auto lg:inline-flex focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-text-primary">
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
    );
  }
}

export default RootIndex;
