import React, { useState, useRef } from 'react'
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
            <a
              href="/eye-care/eye-care-1/"
              className={getLinkClass('/eye-care/eye-conditions/')}
            >
              Eye Conditions
            </a>
          </div>
          <div className="font-medium tracking-wider first:pt-4 lg:first:pt-0 lg:flex lg:items-center lg:justify-center">
            <a
              href="/research-interests"
              className={getLinkClass('/research-interests/')}
            >
              News
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
