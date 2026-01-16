import React, { useState, useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useLocation } from '@reach/router'
import logo from '../assets/logo.png'
import patientExperience from '../assets/2025-outstanding-patient-experience-doctify.png'
import '../styles/global.css'

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [subMenuOpen, setSubMenuOpen] = useState({})
  const location = useLocation()
  const dropdownRefs = useRef([])

  useStaticQuery(graphql`
    query {
      allContentfulEyeCarePage {
        nodes {
          heading
          slug
        }
      }
      allContentfulCataractPage {
        nodes {
          heading
          slug
        }
      }
      allContentfulRetinaPage {
        nodes {
          heading
          slug
        }
      }
    }
  `)

  const toggleSubMenu = (e, category) => {
    setSubMenuOpen({ [category]: !subMenuOpen[category] })
  }

  const getLinkClass = (path) =>
    `relative block py-3 mx-auto transition-colors tracking-normal duration-300 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2 lg:px-4 ${
      location.pathname === path
        ? 'text-gray-900 active-link'
        : 'hover:text-gray-900'
    } nav-link`

  return (
    <nav className="fixed z-50 flex w-full items-center border-b bg-jamesWhite md:py-4 lg:min-h-28 lg:px-[5%]">
      <div className="size-full lg:flex lg:items-center lg:justify-between">
        {/* Top bar: logo + hamburger */}
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-20 lg:min-h-full lg:px-0">
          <a href="/">
            <img src={logo} alt="Logo image" className="h-8 lg:h-14" />
          </a>

          <button
            className={`menu-icon ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>

        {/* Navigation container:
           - Mobile: becomes a fixed overlay panel when open
           - Desktop: stays inline
        */}
        <div
          className={`mobile-nav tracking-wide text-gray-900 lg:block ${
            menuOpen ? 'block' : 'hidden'
          } lg:static lg:overflow-visible lg:px-0 ${
            menuOpen
              ? 'fixed left-0 right-0 top-16 bottom-0 bg-jamesWhite px-[5%] md:top-20'
              : ''
          }`}
        >
          {/* Desktop: menu + badge on one row (badge to the right)
              Mobile: menu stacks; badge is fixed at bottom */}
          <div className="pt-4 pb-40 lg:flex lg:items-center lg:justify-between lg:pb-0 lg:pt-0">
            {/* Menu items */}
            <div className="lg:flex lg:items-center lg:justify-center">
              <div className="font-medium tracking-wider lg:flex lg:items-center lg:justify-center">
                <a href="/" className={getLinkClass('/')}>
                  Home
                </a>
              </div>

              <div className="font-medium tracking-wider lg:flex lg:items-center lg:justify-center">
                <a href="/about" className={getLinkClass('/about/')}>
                  About
                </a>
              </div>

              <div className="font-medium tracking-wider lg:flex lg:items-center lg:justify-center">
                <a
                  href="/cataract/treatment-and-services/"
                  className={getLinkClass('/cataract/cataract-1/')}
                >
                  Cataract
                </a>
              </div>

              <div className="font-medium tracking-wider lg:flex lg:items-center lg:justify-center">
                <a
                  href="/retina/treatment-and-services/"
                  className={getLinkClass('/retina/retina-1/')}
                >
                  Retina
                </a>
              </div>

              <div className="font-medium tracking-wider lg:flex lg:items-center lg:justify-center">
                <a
                  href="/eye-care/treatment-and-services/"
                  className={getLinkClass('/eye-care/eye-conditions/')}
                >
                  Eye Conditions
                </a>
              </div>

              <div className="font-medium tracking-wider lg:flex lg:items-center lg:justify-center">
                <a
                  href="/research-interests"
                  className={getLinkClass('/research-interests/')}
                >
                  News
                </a>
              </div>

              <div className="font-medium tracking-wider lg:flex lg:items-center lg:justify-center">
                <a
                  href="/patient-hub"
                  className={getLinkClass('/patient-hub/')}
                >
                  Patient Info
                </a>
              </div>

              <div className="font-medium tracking-wider lg:flex lg:items-center lg:justify-center">
                <a href="/blog" className={getLinkClass('/blog/')}>
                  Blog
                </a>
              </div>

              <div className="font-medium tracking-wider lg:flex lg:items-center lg:justify-center">
                <a href="/contact" className={getLinkClass('/contact/')}>
                  Contact
                </a>
              </div>
            </div>

            {/* Badge:
               - Mobile: fixed at the bottom, aligned left with the menu padding
               - Desktop: sits to the right of the menu items in the nav row
            */}
            <div className="fixed bottom-0 left-0 right-0 border-t bg-jamesWhite px-[5%] py-5 lg:static lg:border-0 lg:bg-transparent lg:p-0 lg:ml-6">
              <a href="https://www.doctify.com/uk/specialist/james-neffendorf">
                <img
                  src={patientExperience}
                  alt="Patient Experience Badge"
                  className="h-24"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
