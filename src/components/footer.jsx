import React from 'react'
import doctifyIcon from '../assets/doctify-icon.svg'

const Footer = () => (
  <footer className="bg-gray-900 px-[5%] pt-12 pb-10 md:pt-16 md:pb-16">
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10">
        {/* Logo Section */}
        <div className="col-span-12 text-gray-508">
          <h2 className="text-5xl text-gray-50">Mr James E. Neffendorf</h2>
        </div>

        {/* Locations Section */}
        <div className="col-span-12 lg:col-span-7 text-gray-50">
          <div className="mb-6">
            <div className="flex items-center ">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="flex-none size-6"
                height="0.875em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path>
                <path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path>
              </svg>
              <a
                href="https://www.llclinics.co.uk"
                target="_blank"
                className="ml-2 font-semibold text-white underline" rel="noreferrer"
              >
                London Lauriston Clinic
              </a>
            </div>
            <p className="ml-8 text-gray-50">
              34 Great Titchfield St., London W1W 8BQ
            </p>
          </div>
          <div className="">
            <div className="flex items-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="flex-none size-6"
                height="0.875em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path>
                <path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path>
              </svg>
              <p className="ml-2 font-semibold text-white ">
                The Guthrie Clinic
              </p>
            </div>
            <p className="ml-8 text-gray-50">
              King’s College Hospital, Denmark Hill, London SE5 9RS
            </p>
          </div>
          <div className="mt-6">
            <div className="flex items-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="flex-none size-6"
                height="0.875em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path>
                <path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path>
              </svg>
              <p className="ml-2 font-semibold text-white ">
                The London Clinic
              </p>
            </div>
            <p className="ml-8 text-gray-50">
            The London Clinic Eye Centre 119 Harley Street, London W1G 6AU
            </p>
          </div>
        </div>

        {/* Contact Details */}
        <div className="col-span-12 lg:col-span-4 text-gray-50">
          <p className="mb-2 font-semibold text-white ">Contact</p>
          <p className="flex flex-col underline decoration-gray-50 underline-offset-1">
            <a
              href="tel:1800 123 4567"
              className="mb-1 text-gray-100 focus-visible:outline-none hover:text-blue-500 hover:decoration-blue-500"
            >
              +44 20 4600 8699
            </a>
            <a
              href="mailto:clinic@mrjamesneffendorf.com"
              className="text-gray-100 focus-visible:outline-none hover:text-blue-500 hover:decoration-blue-500"
            >
              clinic@mrjamesneffendorf.com
            </a>
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-start col-span-12 lg:col-span-1 lg:justify-center">
          <a
            href="https://www.linkedin.com/in/james-neffendorf-0b601a90/?originalSubdomain=uk"
            className="mr-4 focus-visible:outline-none"
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
                className="w-10 h-10"
                height="40px"
                width="40px"
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
              className="object-contain w-10 h-10 ml-1"
              alt="Doctify Icon"
            />
          </a>
        </div>
      </div>
      <div className="w-full mt-6 border-t border-gray-500 md:mt-10"></div>
      <div className="flex flex-col-reverse items-start justify-between pt-6 text-gray-300 md:flex-row md:items-center md:pt-8">
        <p className="mt-4 text-gray-300">
          © 2024 Mr James E. Neffendorf. All rights reserved.
        </p>
        <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-x-0 gap-y-4 md:grid-flow-col md:gap-x-6 md:gap-y-0">
          <li className="underline">
            <a
              href="/privacy-policy"
              className="focus-visible:outline-none hover:text-blue-500 hover:decoration-blue-500"
            >
              Privacy Policy
            </a>
          </li>
          <li className="underline">
            <a
              href="/terms-of-service"
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
