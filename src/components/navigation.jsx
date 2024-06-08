import React, { useState, useEffect, useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useLocation } from '@reach/router'
import logo from '../assets/logo.png'

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

  const toggleSubMenu = (category) => {
    setSubMenuOpen((prev) => ({ ...prev, [category]: !prev[category] }))
  }

  const getLinkClass = (path) =>
    `relative block py-3 mx-auto transition-colors duration-300 text-md ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2 lg:px-4 lg:py-4 lg:text-base ${location.pathname === path ? 'text-jamesBlue' : 'hover:text-jamesBlue'}`

  const handleClickOutside = (event) => {
    if (dropdownRefs.current) {
      dropdownRefs.current.forEach((ref) => {
        if (ref && !ref.contains(event.target)) {
          setSubMenuOpen({})
        }
      })
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <nav className="flex w-full items-center bg-white lg:min-h-18 lg:px-[5%]">
      <div className="size-full lg:flex lg:items-center lg:justify-between">
        <div className="flex min-h-16 items-center justify-between px-[8%] md:min-h-18 lg:min-h-full lg:px-0">
          <img src={logo} alt="Logo image" className="h-8" />
          <button
            className="flex flex-col items-center justify-center -mr-2 size-12 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="my-[3px] h-0.5 w-6 bg-black"></div>
            <div className="my-[3px] h-0.5 w-6 bg-black"></div>
            <div className="my-[3px] h-0.5 w-6 bg-black"></div>
          </button>
        </div>
        <div
          className={`overflow-hidden px-[5%] lg:flex lg:items-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto] ${menuOpen ? 'block' : 'hidden'} lg:block`}
        >
          <div className="font-bold first:pt-4 lg:first:pt-0">
            <a href="/" className={getLinkClass('/')}>
              Home
            </a>
          </div>
          <div className="font-bold first:pt-4 lg:first:pt-0">
            <a href="/about" className={getLinkClass('/about')}>
              About
            </a>
          </div>
          <div className="relative first:pt-4 lg:first:pt-0">
            <button
              className="flex items-center justify-between w-full gap-2 py-3 font-bold text-left transition-colors duration-300 text-md ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2 lg:flex-none lg:justify-start lg:px-4 lg:py-2 lg:text-base hover:text-jamesBlue"
              onClick={() => toggleSubMenu('Cataract')}
            >
              <span>Cataract</span>
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
              ref={(el) => (dropdownRefs.current[0] = el)}
              className={`lg:absolute lg:mt-2 lg:bg-white lg:shadow-lg lg:rounded lg:w-48 lg:py-2 ${subMenuOpen['Cataract'] ? 'block' : 'hidden'}`}
            >
              {linkData?.allContentfulCataract?.nodes.map(
                ({ heading, slug }, id) => (
                  <a
                    key={id}
                    href={`/cataract/${slug}`}
                    className={getLinkClass(`/cataract/${slug}`)}
                  >
                    {heading}
                  </a>
                )
              )}
            </div>
          </div>
          <div className="relative first:pt-4 lg:first:pt-0">
            <button
              className="flex items-center justify-between w-full gap-2 py-3 font-bold text-left transition-colors duration-300 text-md ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2 lg:flex-none lg:justify-start lg:px-4 lg:py-2 lg:text-base hover:text-jamesBlue"
              onClick={() => toggleSubMenu('Retina')}
            >
              <span>Retina</span>
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
              ref={(el) => (dropdownRefs.current[1] = el)}
              className={`lg:absolute lg:mt-2 lg:bg-white lg:shadow-lg lg:rounded lg:w-48 lg:py-2 ${subMenuOpen['Retina'] ? 'block' : 'hidden'}`}
            >
              {linkData?.allContentfulRetina?.nodes.map(
                ({ heading, slug }, id) => (
                  <a
                    key={id}
                    href={`/retina/${slug}`}
                    className={getLinkClass(`/retina/${slug}`)}
                  >
                    {heading}
                  </a>
                )
              )}
            </div>
          </div>
          <div className="relative first:pt-4 lg:first:pt-0">
            <button
              className="flex items-center justify-between w-full gap-2 py-3 font-bold text-left transition-colors duration-300 text-md ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2 lg:flex-none lg:justify-start lg:px-4 lg:py-2 lg:text-base hover:text-jamesBlue"
              onClick={() => toggleSubMenu('EyeCare')}
            >
              <span>Eye Care</span>
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
              className={`lg:absolute lg:mt-2 lg:bg-white lg:shadow-lg lg:rounded lg:w-48 lg:py-2 ${subMenuOpen['EyeCare'] ? 'block' : 'hidden'}`}
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
          <div className="text-base font-bold first:pt-4 lg:first:pt-0">
            <a
              href="/research-interests"
              className={getLinkClass('/research-interests')}
            >
              Research Interests
            </a>
          </div>
          <div className="text-base font-bold first:pt-4 lg:first:pt-0">
            <a href="/contact" className={getLinkClass('/contact')}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
