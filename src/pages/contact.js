import React from 'react'
import Layout from '../components/layout'
import bupaLogo from '../assets/provider-bupa-logo.svg'
import axaLogo from '../assets/provider-axa-logo.svg'
import aetnaLogo from '../assets/provider-aetna-logo.svg'
import avivaLogo from '../assets/provider-aviva-logo.svg'
import cignaLogo from '../assets/provider-cigna-logo.jpg'
import vitalityLogo from '../assets/provider-vitality-logo.svg'
import linkIcon from '../assets/link.svg'
import wpaLogo from '../assets/provider-wpa-logo.png'
import theLondonClinic from '../assets/the-london-clinic-logo.png'
import londonClinic from '../assets/london-clinic.jpg'
import kingsPrivate from '../assets/kings-private.jpg'
import underground from '../assets/underground.svg'
import tfl from '../assets/tfl.svg'
import '../styles/global.css'
import Seo from '../components/seo'

class Contact extends React.Component {
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
        <Seo
          title="Contact Mr James Neffendorf | Eye Specialist in London"
          description="Get in touch with Mr James Neffendorf, London's leading eye specialist. Book consultations, ask questions, or enquire about treatments and procedures."
        />
        <div className="main-content">
          {/* Hero */}
          <section className="px-[5%] border-b bg-gray-50 py-16 md:py-20 fade-in">
            <div className="container">
              <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
                <div>
                  <h1 className="mb-2 font-bold">Contact James Neffendorf</h1>
                </div>
              </div>
            </div>
          </section>
          <section className="px-[5%] border-b py-16 md:py-24 lg:py-28">
            <div className="container grid items-start grid-cols-1 lg:items-center gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:grid-flow-col lg:gap-x-20 lg:gap-y-16">
              <div>
                <div className="mb-6 md:mb-8">
                  <h2 className="mb-5 font-bold md:mb-6">Leave a message</h2>

                  <div className="grid grid-cols-1 gap-4 py-2 mt-4">
                    <div className="flex items-center gap-4">
                      <svg
                        stroke="jamesBlue"
                        fill="jamesBlue"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        className="flex-none size-8"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
                      </svg>
                      <a
                        href="mailto:clinic@mrjamesneffendorf.com"
                        className="underline text-jamesBlue"
                      >
                        clinic@mrjamesneffendorf.com
                      </a>
                    </div>
                    <div className="flex items-center gap-4">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        className="flex-none size-8"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.707 12.293a.999.999 0 0 0-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594a.999.999 0 0 0 0-1.414l-4-4a.999.999 0 0 0-1.414 0L3.581 5.005c-.38.38-.594.902-.586 1.435.023 1.424.4 6.37 4.298 10.268s8.844 4.274 10.269 4.298h.028c.528 0 1.027-.208 1.405-.586l2.712-2.712a.999.999 0 0 0 0-1.414l-4-4.001zm-.127 6.712c-1.248-.021-5.518-.356-8.873-3.712-3.366-3.366-3.692-7.651-3.712-8.874L7 4.414 9.586 7 8.293 8.293a1 1 0 0 0-.272.912c.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271a.991.991 0 0 0 .912-.271L17 14.414 19.586 17l-2.006 2.005z"></path>
                      </svg>
                      <p>+44 20 4600 8699</p>
                    </div>
                  </div>
                </div>

                <h2 className="mt-4 mb-2 text-lg font-bold md:mt-8">
                  Paying for treatment
                </h2>
                <h3 className="mt-4 mb-2 font-bold">Private Patients</h3>
                <p className="mt-0 md:mb-4">
                  James sees self-paying patients and those registered with the
                  following insurance companies
                </p>
                <ul className="grid grid-cols-2 list-disc list-inside gap-x-4">
                  <li className="flex items-center my-2 text-gray-600">
                    <div className="flex items-center justify-start h-8 mr-2 w-9">
                      <img src={bupaLogo} alt="Bupa Logo" className="h-6" />
                    </div>
                    Bupa
                  </li>
                  <li className="flex items-center my-2 text-gray-600">
                    <div className="flex items-center justify-start h-8 mr-2 w-9">
                      <img src={axaLogo} alt="AXA Logo" className="h-6" />
                    </div>
                    AXA
                  </li>
                  <li className="flex items-center my-2 text-gray-600">
                    <div className="flex items-center justify-start h-8 mr-2 w-9">
                      <img
                        src={avivaLogo}
                        alt="Aviva Health Logo"
                        className="h-6"
                      />
                    </div>
                    Aviva Health
                  </li>
                  <li className="flex items-center my-2 text-gray-600">
                    <div className="flex items-center justify-start h-8 mr-2 w-9">
                      <img
                        src={vitalityLogo}
                        alt="Vitality Health Logo"
                        className="h-6"
                      />
                    </div>
                    Vitality Health
                  </li>
                  <li className="flex items-center my-2 text-gray-600">
                    <div className="flex items-center justify-start h-8 mr-2 w-9">
                      <img src={cignaLogo} alt="Cigna Logo" className="h-6" />
                    </div>
                    Cigna
                  </li>
                  <li className="flex items-center my-2 text-gray-600">
                    <div className="flex items-center justify-start h-8 mr-2 w-9">
                      <img src={aetnaLogo} alt="Aetna Logo" className="h-4" />
                    </div>
                    Aetna
                  </li>
                  <li className="flex items-center my-2 text-gray-600">
                    <div className="flex items-center justify-start h-8 mr-2 w-9">
                      <img src={wpaLogo} alt="WPA Logo" className="h-6" />
                    </div>
                    WPA
                  </li>
                </ul>

                <h3 className="mt-4 mb-2 font-bold md:mt-8">NHS</h3>
                <div className="flex items-center space-x-2 md:mb-4">
                  <p className="mt-0">
                    James sees NHS patients at{' '}
                    <a
                      href="https://www.kch.nhs.uk/"
                      className="underline text-jamesBlue"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      King's College Hospital NHS Foundation Trust
                    </a>
                  </p>
                </div>
              </div>
              <form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="grid grid-cols-1 grid-rows-[auto_auto] gap-4"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                <div className="grid items-center w-full">
                  <label
                    className="mb-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="fullName"
                  >
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    className="flex px-3 py-2 align-middle border border-gray-300 rounded-md size-full min-h-11 bg-background-primary file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                    id="fullName"
                    name="fullName"
                  />
                </div>
                <div className="grid items-center w-full">
                  <label
                    className="mb-2 placeholder:text-gray-400 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    className="flex px-3 py-2 align-middle border border-gray-300 rounded-md size-full min-h-11 bg-background-primary file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                    id="email"
                    name="email"
                  />
                </div>
                <div className="grid items-center w-full">
                  <label
                    className="mb-2 placeholder:text-gray-400 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="telephone"
                  >
                    Phone Number
                  </label>
                  <input
                    required
                    type="tel"
                    className="flex px-3 py-2 align-middle border border-gray-300 rounded-md size-full min-h-11 bg-background-primary file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                    id="telephone"
                    name="telephone"
                  />
                </div>
                <div className="grid items-center w-full">
                  <label
                    className="mb-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    required
                    className="flex rounded-md w-full border border-gray-300 bg-neutral-white p-3 placeholder:text-gray-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 min-h-[11.25rem] overflow-auto"
                    id="message"
                    placeholder="Type your message..."
                    name="message"
                  ></textarea>
                </div>
                <div className="flex items-center space-x-2 md:mb-2">
                  <input
                    required
                    type="checkbox"
                    className="w-6 h-6 custom-checkbox"
                    id="terms"
                  />
                  <label
                    className="cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="terms"
                  >
                    By submitting I accept the{' '}
                    <a
                      className="underline text-jamesBlue focus-visible:outline-none"
                      href="/terms-of-service/"
                      target="/terms-of-service"
                      rel="noopener noreferrer"
                    >
                      Terms of Service
                    </a>
                  </label>
                </div>
                <button
                  type="submit"
                  className="items-center inline px-12 font-medium transition-colors border rounded-full shadow-md justify-self-start btn-56 focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-jamesBlue bg-jamesBlue text-text-alternative hover:bg-jamesLight hover:border-jamesLight"
                >
                  Submit
                </button>
              </form>
            </div>
          </section>

          <section className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
              <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                <div>
                  <img
                    src={londonClinic}
                    alt="London Lauriston Clinic front"
                    className="mr-2 rounded-full h-30 aspect-square"
                  />
                  <h2 className="mt-6 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                    London Lauriston Clinic
                  </h2>

                  <div className="mt-4 space-y-4">
                    <div className="flex items-center gap-2">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        className="flex-none size-6"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path>
                        <path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path>
                      </svg>

                      <p className="">34 Great Titchfield St, London W1W 8BQ</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src={linkIcon} alt="link" />
                      <a
                        href="https://www.llclinics.co.uk/"
                        target="_blank"
                        className="text-gray-600 "
                      >
                        www.llclinics.co.uk
                      </a>
                    </div>
                    <div>
                      <p className="pt-8 font-bold text-gray-900 ">
                        {' '}
                        Easily accessible from all major London transport hubs
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        src={underground}
                        className="object-cover rounded-xl"
                        alt="Underground icon"
                      />
                      <p className="">
                        <span className="font-medium text-gray-900">
                          Nearest tube station:
                        </span>{' '}
                        Oxford Circus, 5 min walk
                      </p>
                    </div>
                    <div className="plan-journey">
                      <button
                        className="inline-flex items-center justify-center gap-3 px-4 mb-2 font-medium text-white transition-colors border rounded-full shadow-md bg-jamesBlue border-jamesBlue btn-56 lg:px-12 focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 hover:bg-blue-700 hover:border-blue-700"
                        onClick={() =>
                          window.open(
                            'https://www.google.com/maps/dir/?api=1&destination=34+Great+Titchfield+St%2C+London+W1W+8BQ'
                          )
                        }
                      >
                        Plan my journey
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.738416202645!2d-0.1438672842073896!3d51.51762311853742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ac6f8a8854d%3A0x2d0f02e5e5a8f9c7!2s34%20Great%20Titchfield%20St%2C%20London%20W1W%208BQ%2C%20UK!5e0!3m2!1sen!2sus!4v1614604722132!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Map"
                  ></iframe>
                </div>
              </div>
            </div>
          </section>

          <section className="px-[5%] border-t py-16 md:py-24 lg:py-28">
            <div className="container">
              <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                <div>
                  <img
                    src={theLondonClinic}
                    alt="The london clinic"
                    className="mr-2 rounded-full h-30 aspect-square"
                  />
                  <h2 className="mt-6 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                    The London Clinic
                  </h2>

                  <div className="mt-4 space-y-4">
                    <div className="flex items-center gap-2">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        className="flex-none size-6"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path>
                        <path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path>
                      </svg>
                      <p className="">
                        The London Clinic Eye Centre 119 Harley Street, London
                        W1G 6AU
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src={linkIcon} alt="link" />
                      <a
                        href="https://www.thelondonclinic.co.uk/"
                        target="_blank"
                        className="text-gray-600 "
                      >
                        www.thelondonclinic.co.uk
                      </a>
                    </div>
                    <div>
                      <p className="pt-8 font-bold text-gray-900 ">
                        {' '}
                        Easily accessible from multiple nearby train stations
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        src={underground}
                        className="object-cover rounded-xl"
                        alt="Underground icon"
                      />
                      <p className="">
                        <span className="font-medium text-gray-900">
                          Nearest tube station:
                        </span>{' '}
                        Regent's Park, 5 min walk
                      </p>
                    </div>
                    <div className="plan-journey">
                      <button
                        className="inline-flex items-center justify-center gap-3 px-4 mb-2 font-medium text-white transition-colors border rounded-full shadow-md bg-jamesBlue border-jamesBlue btn-56 lg:px-12 focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 hover:bg-blue-700 hover:border-blue-700"
                        onClick={() =>
                          window.open(
                            'https://www.google.com/maps/dir/?api=1&destination=London+W1G+6AU'
                          )
                        }
                      >
                        Plan my journey
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.532878836176!2d-0.15109932337904486!3d51.521785371816634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad0e2ea3e69%3A0x2535aad5b5ab3e50!2sThe%20London%20Clinic%20Eye%20Centre!5e0!3m2!1sen!2suk!4v1753455945868!5m2!1sen!2suk"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Map"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="px-[5%] border-t py-16 md:py-24 lg:py-28">
            <div className="container">
              <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                <div>
                  <img
                    src={kingsPrivate}
                    alt="Kings Private"
                    className="mr-2 rounded-full h-30 aspect-square"
                  />
                  <h2 className="mt-6 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                    King's Private
                  </h2>

                  <div className="mt-4 space-y-4">
                    <div className="flex items-center gap-2">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        className="flex-none size-6"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path>
                        <path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path>
                      </svg>
                      <p className="">
                        Guthrie Wing, King’s College Hospital, Denmark Hill,
                        London SE5 9RS
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <img
                        src={tfl}
                        className="object-cover h-5 rounded-xl"
                        alt="TFL icon"
                      />
                      <p className="">
                        <span className="font-medium text-gray-900">
                          Nearest station:
                        </span>{' '}
                        Denmark Hill, 4 min walk
                      </p>
                    </div>
                    <div className="plan-journey">
                      <button
                        className="inline-flex items-center justify-center gap-3 px-4 mb-2 font-medium text-white transition-colors border rounded-full shadow-md bg-jamesBlue border-jamesBlue btn-56 lg:px-12 focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 hover:bg-blue-700 hover:border-blue-700"
                        onClick={() =>
                          window.open(
                            'https://www.google.com/maps/dir/?api=1&destination=Guthrie+Wing,+King’s+College+Hospital,+Denmark+Hill,+London+SE5+9RS'
                          )
                        }
                      >
                        Plan my journey
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.2561361745863!2d-0.09353648422951412!3d51.46832861949721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876033b8230b20b%3A0x9e65f50829e4e35!2sKing&#39;s%20College%20Hospital!5e0!3m2!1sen!2suk!4v1691771847316!5m2!1sen!2suk"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Map"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Contact
