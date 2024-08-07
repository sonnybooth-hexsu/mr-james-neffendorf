import React from 'react'
import logo from '../assets/logo.png'
import doctifyIcon from '../assets/doctify-icon.svg'

const Footer = () => (
  <footer className="bg-gray-900 px-[5%] py-12 md:py-18 lg:py-16">
    <div className="container">
      <div className="grid grid-cols-1 gap-x-[4vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4 lg:pb-20">
        <div>
          <div className="mb-6 text-gray-50 md:mb-8">
            <div className="mb-6">
              <h2 className="mb-5 text-3xl text-gray-50 md:mb-6">
                Mr. James E Neffendorf
              </h2>
              <div>
                <div className="flex items-center mb-1">
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
                  <p className="ml-2 font-semibold text-white text-md">
                    London Lauriston Clinic
                  </p>
                </div>
                <p className="ml-8 text-md text-gray-50">
                  34 Great Titchfield St., London W1W 8BQ
                </p>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex items-center mb-1">
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
                <p className="ml-2 font-semibold text-white text-md">
                  The Guthrie Clinic
                </p>
              </div>
              <p className="ml-8 text-md text-gray-50">
                King’s College Hospital, Denmark Hill, London SE5 9RS
              </p>
            </div>
            <div>
              <p className="mb-1 font-semibold text-white text-md">Contact:</p>
              <p className="flex flex-col text-sm underline text-gray-50 decoration-gray-50 underline-offset-1 md:mb-8">
                <a
                  href="tel:1800 123 4567"
                  className="text-md text-gray-50 md:mb-1 focus-visible:outline-none hover:text-blue-500 hover:decoration-blue-500"
                >
                  +44 7849 425743
                </a>
                <a
                  href="mailto:clinic@mrjamesneffendorf.com"
                  className="text-md text-gray-50 focus-visible:outline-none hover:text-blue-500 hover:decoration-blue-500"
                >
                  clinic@mrjamesneffendorf.com
                </a>
              </p>
            </div>
          </div>
          <div className="grid grid-flow-col grid-cols-[max-content] items-start justify-start gap-x-3 gap-y-0">
            <a
              href="https://www.linkedin.com/in/james-neffendorf-0b601a90/?originalSubdomain=uk"
              className="focus-visible:outline-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                style={{
                  backgroundColor: 'white',
                  display: 'inline-block',
                  borderRadius: '4px',
                  padding: '2px',
                }}
              >
                <svg
                  stroke="currentColor"
                  fill="#0077B5"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="size-6"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
                </svg>
              </div>
            </a>

            <a
              href="https://www.doctify.com/uk/specialist/james-neffendorf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={doctifyIcon}
                className="object-cover mr-2 max-h-12"
                alt="Doctify Icon"
              />
            </a>
          </div>
        </div>
        <div className="grid items-start grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 md:gap-x-8 md:gap-y-4">
          <ul>
            <li className="py-2 font-semibold text-white text-md">
              <a
                href="#"
                className="focus-visible:outline-none hover:text-blue-500 hover:decoration-blue-500"
              >
                Link One
              </a>
            </li>
            <li className="py-2 font-semibold text-white text-md">
              <a
                href="#"
                className="focus-visible:outline-none hover:text-blue-500 hover:decoration-blue-500"
              >
                Link Two
              </a>
            </li>
            <li className="py-2 font-semibold text-white text-md">
              <a
                href="#"
                className="focus-visible:outline-none hover:text-blue-500 hover:decoration-blue-500"
              >
                Link Three
              </a>
            </li>
            <li className="py-2 font-semibold text-white text-md">
              <a
                href="#"
                className="focus-visible:outline-none hover:text-blue-500 hover:decoration-blue-500"
              >
                Link Four
              </a>
            </li>
            <li className="py-2 font-semibold text-white text-md">
              <a
                href="#"
                className="focus-visible:outline-none hover:text-blue-500 hover:decoration-blue-500"
              >
                Link Five
              </a>
            </li>
          </ul>
          <ul>
            <li className="py-2 font-semibold text-white text-md">
              <a
                href="#"
                className="focus-visible:outline-none hover:text-blue-500 hover:decoration-blue-500"
              >
                Link Six
              </a>
            </li>
            <li className="py-2 font-semibold text-white text-md">
              <a
                href="#"
                className="focus-visible:outline-none hover:text-blue-500 hover:decoration-blue-500"
              >
                Link Seven
              </a>
            </li>
            <li className="py-2 font-semibold text-white text-md">
              <a
                href="#"
                className="focus-visible:outline-none hover:text-blue-500 hover:decoration-blue-500"
              >
                Link Eight
              </a>
            </li>
            <li className="py-2 font-semibold text-white text-md">
              <a
                href="#"
                className="focus-visible:outline-none hover:text-blue-500 hover:decoration-blue-500"
              >
                Link Nine
              </a>
            </li>
            <li className="py-2 font-semibold text-white text-md">
              <a
                href="#"
                className="focus-visible:outline-none hover:text-blue-500 hover:decoration-blue-500"
              >
                Link Ten
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-px bg-gray-50"></div>
      <div className="flex flex-col-reverse items-start justify-between pt-6 text-gray-400 md:flex-row md:items-center md:pt-8">
        <p className="mt-8 text-gray-400 md:mt-0 ">
          © 2024 Mr James Neffendorf. All rights reserved.
        </p>
        <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-x-0 gap-y-4 md:grid-flow-col md:gap-x-6 md:gap-y-0">
          <li className="underline">
            <a
              href="#"
              className="focus-visible:outline-none hover:text-blue-500 hover:decoration-blue-500"
            >
              Privacy Policy
            </a>
          </li>
          <li className="underline">
            <a
              href="#"
              className="focus-visible:outline-none hover:text-blue-500 hover:decoration-blue-500"
            >
              Terms of Service
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
)

export default Footer
