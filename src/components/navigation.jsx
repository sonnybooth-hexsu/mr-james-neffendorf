import React, { useState, useEffect, useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useLocation } from '@reach/router'
import logo from '../assets/logo.png'
import '../styles/global.css'

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [subMenuOpen, setSubMenuOpen] = useState({})
  const location = useLocation()
  const dropdownRefs = useRef([])

  const linkData = useStaticQuery(graphql`
    query {
      allContentfulEyeCare {
        nodes {
          heading
          slug
        }
      }
      allContentfulCataract {
        nodes {
          heading
          slug
        }
      }
      allContentfulRetina {
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
    `relative block py-3 mx-auto transition-colors tracking-normal duration-300 text-md ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2 lg:px-4 ${
      location.pathname === path
        ? 'text-gray-900 active-link'
        : 'hover:text-gray-900'
    } nav-link`

  return (
    <nav className="flex fixed bg-jamesWhite border-b z-50 w-full items-center lg:min-h-28 lg:px-[5%]">
      <div className="size-full lg:flex lg:items-center lg:justify-between">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-20 lg:min-h-full lg:px-0">
          <a href="/">
            <img src={logo} alt="Logo image" className="h-8 lg:h-14" />
          </a>
          <button
            className={`menu-icon ${menuOpen ? 'open' : ''}`}
            onClick={() => {
              setMenuOpen(!menuOpen)
            }}
          >
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>
        <div
          className={`mobile-nav overflow-hidden px-[5%] tracking-wide text-gray-900 lg:flex lg:items-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto] ${
            menuOpen ? 'block' : 'hidden'
          } lg:block`}
        >
          <div className="font-medium tracking-wider first:pt-4 lg:first:pt-0 lg:flex lg:items-center lg:justify-center">
            <a href="/" className={getLinkClass('/')}>
              Home
            </a>
          </div>
          <div className="font-medium tracking-wider first:pt-4 lg:first:pt-0 lg:flex lg:items-center lg:justify-center">
            <a href="/about" className={getLinkClass('/about/')}>
              About
            </a>
          </div>
          <div className="font-medium tracking-wider first:pt-4 lg:first:pt-0 lg:flex lg:items-center lg:justify-center">
            <a
              href="/cataract/cataract-1/"
              className={getLinkClass('/cataract/cataract-1/')}
            >
              Cataract
            </a>
          </div>
          <div className="font-medium tracking-wider first:pt-4 lg:first:pt-0 lg:flex lg:items-center lg:justify-center">
            <a
              href="/retina/retina-1/"
              className={getLinkClass('/retina/retina-1/')}
            >
              Retina
            </a>
          </div>
          <div className="font-medium tracking-wider first:pt-4 lg:first:pt-0 lg:flex lg:items-center lg:justify-center">
            <button
              className="flex items-center justify-between w-full gap-2 py-3 font-medium tracking-normal transition-colors duration-300 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2 lg:flex-none lg:justify-start lg:px-4 lg:py-2 lg:text-base hover:text-gray-900 nav-link"
              onClick={(e) => toggleSubMenu(e, 'EyeCare')}
            >
              <span className="text-md">Eye Care</span>
              <div>
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="0"
                  viewBox="0 0 15 15"
                  className="size-4"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </button>
            <div
              ref={(el) => (dropdownRefs.current[2] = el)}
              className={`lg:absolute top-minus-full lg:mt-2 lg:bg-white lg:shadow-lg lg:rounded lg:w-48 lg:py-2 ${
                subMenuOpen['EyeCare'] ? 'block' : 'hidden'
              }`}
            >
              {linkData?.allContentfulEyeCare?.nodes.map(
                ({ heading, slug }, id) => (
                  <a
                    key={id}
                    href={`/eye-care/${slug}`}
                    className={getLinkClass(`/eye-care/${slug}`)}
                  >
                    {heading}
                  </a>
                )
              )}
            </div>
          </div>
          <div className="font-medium tracking-wider first:pt-4 lg:first:pt-0 lg:flex lg:items-center lg:justify-center">
            <a
              href="/research-interests"
              className={getLinkClass('/research-interests/')}
            >
              Research
            </a>
          </div>
          <div className="font-medium tracking-wider first:pt-4 lg:first:pt-0 lg:flex lg:items-center lg:justify-center">
            <a href="/patient-hub" className={getLinkClass('/patient-hub/')}>
              Patient Info
            </a>
          </div>
          <div className="font-medium tracking-wider first:pt-4 lg:first:pt-0 lg:flex lg:items-center lg:justify-center">
            <a href="/contact" className={getLinkClass('/contact/')}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
