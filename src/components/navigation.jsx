import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export const Navigation = () => {
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

  return (
    <nav className="flex w-full items-center border-b border-border-primary bg-white lg:min-h-18 lg:px-[5%]">
      <div className="size-full lg:flex lg:items-center lg:justify-between">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <img
            src="https://relume-assets.s3.amazonaws.com/logo-image.svg"
            alt="Logo image"
          />
          <button className="flex flex-col items-center justify-center -mr-2 size-12 lg:hidden">
            <div className="my-[3px] h-0.5 w-6 bg-black"></div>
            <div className="my-[3px] h-0.5 w-6 bg-black"></div>
            <div className="my-[3px] h-0.5 w-6 bg-black"></div>
          </button>
        </div>
        <div className="overflow-hidden px-[5%] lg:flex lg:items-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]">
          <div className="first:pt-4 lg:first:pt-0">
            <a
              href="/"
              className="relative block py-3 mx-auto text-md ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2 lg:px-4 lg:py-2 lg:text-base"
            >
              Home
            </a>
          </div>
          <div className="first:pt-4 lg:first:pt-0">
            <a
              href="/about"
              className="relative block py-3 mx-auto text-md ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2 lg:px-4 lg:py-2 lg:text-base"
            >
              About
            </a>
          </div>
          <div className="first:pt-4 lg:first:pt-0">
            <div>
              <button className="flex items-center justify-between w-full gap-2 py-3 text-left text-md ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2 lg:flex-none lg:justify-start lg:px-4 lg:py-2 lg:text-base">
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
              {linkData?.allContentfulCataract?.nodes.map(
                ({ heading, slug }, id) => (
                  <a key={id} href={`/cataract/${slug}`}>
                    {heading}
                  </a>
                )
              )}
            </div>
          </div>
          <div className="first:pt-4 lg:first:pt-0">
            <div>
              <button className="flex items-center justify-between w-full gap-2 py-3 text-left text-md ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2 lg:flex-none lg:justify-start lg:px-4 lg:py-2 lg:text-base">
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
              {linkData?.allContentfulRetina?.nodes.map(
                ({ heading, slug }, id) => (
                  <a key={id} href={`/retina/${slug}`}>
                    {heading}
                  </a>
                )
              )}
            </div>
          </div>
          <div className="first:pt-4 lg:first:pt-0">
            <div>
              <button className="flex items-center justify-between w-full gap-2 py-3 text-left text-md ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2 lg:flex-none lg:justify-start lg:px-4 lg:py-2 lg:text-base">
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
              {linkData?.allContentfulEyeCare?.nodes.map(
                ({ heading, slug }, id) => (
                  <a key={id} href={`/eye-care/${slug}`}>
                    {heading}
                  </a>
                )
              )}
            </div>
          </div>
          <div className="first:pt-4 lg:first:pt-0">
            <a
              href="/research-interests"
              className="relative block py-3 mx-auto text-md ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2 lg:px-4 lg:py-2 lg:text-base"
            >
              Research Interests
            </a>
          </div>
          <div className="first:pt-4 lg:first:pt-0">
            <a
              href="/contact"
              className="relative block py-3 mx-auto text-md ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2 lg:px-4 lg:py-2 lg:text-base"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
