import React from 'react'
import Layout from '../components/layout'
import londonClinic from '../assets/london-clinic.jpg'
import '../styles/global.css' // Ensure this path is correct

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
        <div className="main-content">
          {/* Hero */}
          <section className="px-[5%] border-b bg-gray-50 py-16 md:py-20 fade-in">
            {' '}
            <div className="container">
              <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
                <div>
                  <h1 className="mb-2 font-bold">Contact Mr Neffendorf</h1>
                  <p className="md:text-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </p>
                </div>
                <div>
                  <img
                    src={londonClinic}
                    className="object-cover w-full rounded-xl"
                    alt="Placeholder image"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container grid items-start grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:grid-flow-col lg:gap-x-20 lg:gap-y-16">
              <div>
                <div className="mb-6 md:mb-8">
                  <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                    Leave a message
                  </h2>
                  <p className="md:text-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4 py-2">
                  <div className="flex items-center gap-4">
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
                      <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
                    </svg>
                    <p>hello@relume.io</p>
                  </div>
                  <div className="flex items-center gap-4">
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
                      <path d="M17.707 12.293a.999.999 0 0 0-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594a.999.999 0 0 0 0-1.414l-4-4a.999.999 0 0 0-1.414 0L3.581 5.005c-.38.38-.594.902-.586 1.435.023 1.424.4 6.37 4.298 10.268s8.844 4.274 10.269 4.298h.028c.528 0 1.027-.208 1.405-.586l2.712-2.712a.999.999 0 0 0 0-1.414l-4-4.001zm-.127 6.712c-1.248-.021-5.518-.356-8.873-3.712-3.366-3.366-3.692-7.651-3.712-8.874L7 4.414 9.586 7 8.293 8.293a1 1 0 0 0-.272.912c.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271a.991.991 0 0 0 .912-.271L17 14.414 19.586 17l-2.006 2.005z"></path>
                    </svg>
                    <p>+1 (555) 000-0000</p>
                  </div>
                  <div className="flex items-center gap-4">
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
                    <p>123 Sample St, Sydney NSW 2000 AU</p>
                  </div>
                  <h5 className="font-bold">Fees Information</h5>
                </div>
              </div>
              <form className="grid grid-cols-1 grid-rows-[auto_auto] gap-6">
                <div className="grid items-center w-full">
                  <label
                    className="mb-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="flex px-3 py-2 align-middle border size-full min-h-11 border-border-primary bg-background-primary file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                    id="name"
                    value=""
                  />
                </div>
                <div className="grid items-center w-full">
                  <label
                    className="mb-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="flex px-3 py-2 align-middle border size-full min-h-11 border-border-primary bg-background-primary file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                    id="email"
                    value=""
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
                    className="flex w-full border border-border-primary bg-neutral-white p-3 placeholder:text-neutral focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 min-h-[11.25rem] overflow-auto"
                    id="message"
                    placeholder="Type your message..."
                  ></textarea>
                </div>
                <div className="flex items-center mb-3 space-x-2 text-sm md:mb-4">
                  <button
                    type="button"
                    role="checkbox"
                    aria-checked="false"
                    data-state="unchecked"
                    value="on"
                    className="size-[1.125rem] border border-border-primary transition-all duration-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-background-alternative data-[state=indeterminate]:bg-background-primary data-[state=checked]:text-text-alternative data-[state=indeterminate]:text-text-primary"
                    id="terms"
                  ></button>
                  <input
                    type="checkbox"
                    aria-hidden="true"
                    tabIndex="-1"
                    value="on"
                  />
                  <label
                    className="cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="terms"
                  >
                    I accept the
                    <a
                      className="underline text-link-primary focus-visible:outline-none"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Terms
                    </a>
                  </label>
                </div>
                <div>
                  <button className="inline-flex items-center justify-center gap-3 px-6 py-3 transition-colors border focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-border-primary bg-background-alternative text-text-alternative">
                    Submit
                  </button>
                </div>
                <div className="grid mt-2 md:gap-2 md:grid-cols-2 md:mt-4 lg:flex lg:space-x-2">
                  <button className="inline-flex items-center justify-center gap-3 px-4 mb-2 text-sm font-medium transition-colors border rounded-full shadow-md btn-48 lg:px-12 focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-jamesBlue bg-jamesBlue text-text-alternative hover:bg-jamesLight hover:border-jamesLight">
                    Contact Mr Neffendorf
                  </button>
                  <button className="inline-flex items-center justify-center gap-3 px-4 mb-2 text-sm font-medium transition-colors border border-gray-300 rounded-full btn-48 lg:px-12 focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-text-primary">
                    About Mr Neffendorf
                  </button>
                </div>
              </form>
            </div>
          </section>
          <section className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
              <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                <div>
                  <p className="mb-3 font-semibold md:mb-4">Tagline</p>
                  <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                    Medium length section heading goes here
                  </h2>
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
                    src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
                    className="object-cover w-full"
                    alt="Placeholder image"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
              <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                <div>
                  <p className="mb-3 font-semibold md:mb-4">Tagline</p>
                  <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                    Medium length section heading goes here
                  </h2>
                  <p className="md:text-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat.
                  </p>
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
        </div>
      </Layout>
    )
  }
}

export default Contact
