import React from 'react'
import logo from '../assets/logo.png'
import doctifyIcon from '../assets/doctify-icon.svg'

const Footer = () => (
  <footer className="bg-gray-900 px-[5%] py-12 md:py-18 lg:py-16">
    <div className="container">
      <div className="grid grid-cols-1 gap-x-[4vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4 lg:pb-20">
        <div>
          <div className="mb-6 md:mb-8">
            <img src={logo} alt="Logo image" className="h-8" />
          </div>
          <div className="mb-6 text-gray-50 md:mb-8">
            <div>
              <p className="mb-1 text-sm font-semibold text-white">
                London Lauriston Clinic
              </p>
              <p className="mb-5 text-sm text-gray-50 md:mb-6">
                34 Great Titchfield St., London W1W 8BQ
              </p>
            </div>
            <div>
              <p className="mb-1 text-sm font-semibold text-white">
                The Guthrie Clinic
              </p>
              <p className="mb-5 text-sm text-gray-50 md:mb-6">
                King’s College Hospital, Denmark Hill, London SE5 9RS
              </p>
            </div>
            <div>
              <p className="mb-1 text-sm font-semibold text-white">Contact:</p>
              <p className="flex flex-col text-sm underline text-gray-50 decoration-gray-50 underline-offset-1 md:mb-6">
                <a
                  href="tel:1800 123 4567"
                  className="focus-visible:outline-none hover:text-blue-500 hover:decoration-blue-500"
                >
                  XXX XXX XXX
                </a>
                <a
                  href="mailto:clinic@mrjamesneffendorf.com"
                  className="focus-visible:outline-none hover:text-blue-500 hover:decoration-blue-500"
                >
                  clinic@mrjamesneffendorf.com
                </a>
              </p>
            </div>
          </div>
          <div className="grid grid-flow-col grid-cols-[max-content] items-start justify-start gap-x-3 gap-y-0">
            <a href="#" className="focus-visible:outline-none">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="size-6 text-gray-50"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
              </svg>
            </a>
            <img
              src={doctifyIcon}
              className="object-cover mr-2 max-h-12"
              alt="Doctify Icon"
            />
          </div>
        </div>
        <div className="grid items-start grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 md:gap-x-8 md:gap-y-4">
          <ul>
            <li className="py-2 text-sm font-semibold text-white">
              <a
                href="#"
                className="focus-visible:outline-none hover:text-blue-500 hover:decoration-blue-500"
              >
                Link One
              </a>
            </li>
            <li className="py-2 text-sm font-semibold text-white">
              <a
                href="#"
                className="focus-visible:outline-none hover:text-blue-500 hover:decoration-blue-500"
              >
                Link Two
              </a>
            </li>
            <li className="py-2 text-sm font-semibold text-white">
              <a
                href="#"
                className="focus-visible:outline-none hover:text-blue-500 hover:decoration-blue-500"
              >
                Link Three
              </a>
            </li>
            <li className="py-2 text-sm font-semibold text-white">
              <a
                href="#"
                className="focus-visible:outline-none hover:text-blue-500 hover:decoration-blue-500"
              >
                Link Four
              </a>
            </li>
            <li className="py-2 text-sm font-semibold text-white">
              <a
                href="#"
                className="focus-visible:outline-none hover:text-blue-500 hover:decoration-blue-500"
              >
                Link Five
              </a>
            </li>
          </ul>
          <ul>
            <li className="py-2 text-sm font-semibold text-white">
              <a
                href="#"
                className="focus-visible:outline-none hover:text-blue-500 hover:decoration-blue-500"
              >
                Link Six
              </a>
            </li>
            <li className="py-2 text-sm font-semibold text-white">
              <a
                href="#"
                className="focus-visible:outline-none hover:text-blue-500 hover:decoration-blue-500"
              >
                Link Seven
              </a>
            </li>
            <li className="py-2 text-sm font-semibold text-white">
              <a
                href="#"
                className="focus-visible:outline-none hover:text-blue-500 hover:decoration-blue-500"
              >
                Link Eight
              </a>
            </li>
            <li className="py-2 text-sm font-semibold text-white">
              <a
                href="#"
                className="focus-visible:outline-none hover:text-blue-500 hover:decoration-blue-500"
              >
                Link Nine
              </a>
            </li>
            <li className="py-2 text-sm font-semibold text-white">
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
      <div className="flex flex-col-reverse items-start justify-between pt-6 text-sm text-gray-400 md:flex-row md:items-center md:pt-8">
        <p className="mt-8 text-gray-400 md:mt-0 ">
          © 2024 Mr James Neffendorf. All rights reserved.
        </p>
        <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-x-0 gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
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
