import React from 'react'
import Layout from '../components/layout'
import jamesLeaning from '../assets/james-leaning.jpg'
import quoteMark from '../assets/quote-mark.svg'
import doctifyLogo from '../assets/doctify-logo.svg'

class About extends React.Component {
  render() {
    return (
      <Layout>
        {/* Hero */}
        <section className="px-[5%] bg-white pt-16 md:pt-24 lg:pt-28">
          <div className="container">
            <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="mb-2 overlined">ABOUT</p>
                <h1 className="mb-2 font-bold">Mr James Neffendorf </h1>
                <p className="mb-4 text-sm font-bold text-black md:text-md md:mb-6">
                  MA (Cantab) MBBS (Lond) MD (Res) FRCOphth{' '}
                </p>
                <p className="md:text-md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                </p>
              </div>
              <div>
                <img
                  src={jamesLeaning}
                  className="object-cover w-full"
                  alt="Placeholder image"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Benefits */}
        <section className="px-[5%] bg-white py-16 md:py-24 lg:py-28">
          <div className="container grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex items-start rounded-lg">
              <div className="mr-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM17.65 9.2L11 16.6L7.35 13.1L8.4 11.8L11 14.3L16.6 8.8L17.65 9.2Z"
                    fill="#0073E6"
                  />
                </svg>
              </div>
              <div>
                <h2 className="mb-2 text-xl font-bold md:text-2xl">
                  Vitreoretinal Surgery Specialist
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Eu felis quis nibh
                  ultrices diam rutrum leo.
                </p>
              </div>
            </div>
            <div className="flex items-start rounded-lg">
              <div className="mr-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM17.65 9.2L11 16.6L7.35 13.1L8.4 11.8L11 14.3L16.6 8.8L17.65 9.2Z"
                    fill="#0073E6"
                  />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold md:text-2xl">
                  Pioneering Ocular Research
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Eu felis quis nibh
                  ultrices diam rutrum leo.
                </p>
              </div>
            </div>
            <div className="flex items-start rounded-lg">
              <div className="mr-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM17.65 9.2L11 16.6L7.35 13.1L8.4 11.8L11 14.3L16.6 8.8L17.65 9.2Z"
                    fill="#0073E6"
                  />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold md:text-2xl">
                  Integrating AI with Eye Care
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Eu felis quis nibh
                  ultrices diam rutrum leo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="px-[5%] bg-white pb-16 md:pb-24 lg:pb-28">
          <div className="container">
            <div className="grid items-start grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
              <div>
                <h2 className="mb-5 font-bold md:mb-6">
                  Leading Ophthalmologist and Vitreoretinal Surgeon{' '}
                </h2>
                <div className="prose">
                  <p>
                    Morbi sed imperdiet in ipsum, adipiscing elit dui lectus.
                    Tellus id scelerisque est ultricies ultricies. Duis est sit
                    sed leo nisl, blandit elit sagittis. Quisque tristique
                    consequat quam sed. Nisl at scelerisque amet nulla purus
                    habitasse.
                  </p>
                  <p>
                    Nunc sed faucibus bibendum feugiat sed interdum. Ipsum
                    egestas condimentum mi massa. In tincidunt pharetra
                    consectetur sed duis facilisis metus. Etiam egestas in nec
                    sed et. Quis lobortis at sit dictum eget nibh tortor commodo
                    cursus.
                  </p>
                  <p>
                    Odio felis sagittis, morbi feugiat tortor vitae feugiat
                    fusce aliquet. Nam elementum urna nisi aliquet erat dolor
                    enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut
                    id eget consectetur dictum. Donec posuere pharetra odio
                    consequat scelerisque et, nunc tortor. Nulla adipiscing erat
                    a erat. Condimentum lorem posuere gravida enim posuere
                    cursus diam.
                  </p>
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
        <section
          className="px-[5%] bg-white
         py-16 md:py-24 lg:py-28"
        >
          {/* Specialities */}
          <div className="container grid items-center grid-cols-1 bg-white gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
            <div className="grid grid-cols-1 gap-y-10">
              <div className="pl-8 border-l-2 border-black cursor-pointer">
                <h3 className="mb-3 font-bold md:mb-4 md:leading-[1.3]">
                  Short heading goes here
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                </p>
              </div>
              <div className="pl-8 border-l-2 border-transparent cursor-pointer">
                <h3 className="mb-3 font-bold md:mb-4 md:leading-[1.3]">
                  Short heading goes here
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                </p>
              </div>
              <div className="pl-8 border-l-2 border-transparent cursor-pointer">
                <h3 className="mb-3 font-bold md:mb-4 md:leading-[1.3] ">
                  Short heading goes here
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                </p>
              </div>
            </div>
            <div className="flex h-[600px] max-h-full w-full items-center justify-center overflow-hidden">
              <div style={{ opacity: 1 }}>
                <img
                  src="https://relume-assets.s3.amazonaws.com/placeholder-image.svg"
                  alt="Placeholder image 1"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Awards & Achievements */}
        <section className="px-[5%] bg-white py-16 md:py-24 lg:py-28">
          <div className="container grid items-start justify-between grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
            <h3 className="font-bold leading-[1.2]">Awards & Achievements </h3>
            <div>
              <div className="grid grid-cols-1 gap-4 py-2">
                <div className="flex self-start">
                  <div className="self-start flex-none mr-4">
                    <img
                      className="inline-block size-6"
                      src="https://relume-assets.s3.amazonaws.com/relume-icon.svg"
                      alt="Relume logo 1"
                    />
                  </div>
                  <p>
                    <span className="font-bold"> 2023 </span> Excellence in
                    Ophthalmic Research Medal
                  </p>
                </div>
                <div className="flex self-start">
                  <div className="self-start flex-none mr-4">
                    <img
                      className="inline-block size-6"
                      src="https://relume-assets.s3.amazonaws.com/relume-icon.svg"
                      alt="Relume logo 2"
                    />
                  </div>
                  <p>
                    <span className="font-bold"> 2021 </span> AI in Medicine
                    Honorary Distinction
                  </p>
                </div>
                <div className="flex self-start">
                  <div className="self-start flex-none mr-4">
                    <img
                      className="inline-block size-6"
                      src="https://relume-assets.s3.amazonaws.com/relume-icon.svg"
                      alt="Relume logo 3"
                    />
                  </div>
                  <p>
                    <span className="font-bold"> 2019 </span> The Golden Lens
                    Award
                  </p>
                </div>
                <div className="flex self-start">
                  <div className="self-start flex-none mr-4">
                    <img
                      className="inline-block size-6"
                      src="https://relume-assets.s3.amazonaws.com/relume-icon.svg"
                      alt="Relume logo 2"
                    />
                  </div>
                  <p>
                    <span className="font-bold"> 2021 </span> AI in Medicine
                    Honorary Distinction
                  </p>
                </div>
                <div className="flex self-start">
                  <div className="self-start flex-none mr-4">
                    <img
                      className="inline-block size-6"
                      src="https://relume-assets.s3.amazonaws.com/relume-icon.svg"
                      alt="Relume logo 2"
                    />
                  </div>
                  <p>
                    <span className="font-bold"> 2021 </span> AI in Medicine
                    Honorary Distinction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Quote */}
        <section className="px-[5%] bg-white py-16 md:py-24 lg:py-28">
          <div className="container">
            <div className="relative grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
              <div>
                <img
                  className="m-2 mb-5 max-h-6 shrink-0"
                  src={quoteMark}
                  alt="Quotation Mark Icon"
                />
                <blockquote className="mb-5 text-2xl font-bold text-black md:text-3xl lg:text-4xl xl:text-5xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse in eros elementum tristique.
                </blockquote>
                <p className="text-xl font-bold text-black">
                  Mr James Neffendorf
                </p>
                <p>MA (Cantab) MBBS (Lond) MD (Res) FRCOphth</p>
              </div>
              <div className="absolute flex p-4 bg-white shadow-xl bottom-4 right-4">
                <p className="mr-2 text-xs font-bold text-gray-900 md:text-sm">
                  Excellent
                </p>
                <p className="mr-2 text-xs md:text-sm">4.94 out of 5</p>
                <img
                  src={doctifyLogo}
                  className="ml-2 max-h-12"
                  alt="Placeholder image"
                />
              </div>
              <div>
                <img
                  src={jamesLeaning}
                  className="object-cover w-full"
                  alt="Placeholder image"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Education */}
        <section className="px-[5%] bg-white py-16 md:py-24 lg:py-28">
          <div className="container grid items-start justify-between grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
            <h3 className="font-bold leading-[1.2]">Education </h3>
            <div>
              <div className="grid grid-cols-1 gap-4 py-2">
                <div className="flex self-start">
                  <div className="self-start flex-none mr-4">
                    <img
                      className="inline-block size-6"
                      src="https://relume-assets.s3.amazonaws.com/relume-icon.svg"
                      alt="Relume logo 1"
                    />
                  </div>
                  <p>
                    <span className="font-bold"> 2023 </span> Excellence in
                    Ophthalmic Research Medal
                  </p>
                </div>
                <div className="flex self-start">
                  <div className="self-start flex-none mr-4">
                    <img
                      className="inline-block size-6"
                      src="https://relume-assets.s3.amazonaws.com/relume-icon.svg"
                      alt="Relume logo 2"
                    />
                  </div>
                  <p>
                    <span className="font-bold"> 2021 </span> AI in Medicine
                    Honorary Distinction
                  </p>
                </div>
                <div className="flex self-start">
                  <div className="self-start flex-none mr-4">
                    <img
                      className="inline-block size-6"
                      src="https://relume-assets.s3.amazonaws.com/relume-icon.svg"
                      alt="Relume logo 3"
                    />
                  </div>
                  <p>
                    <span className="font-bold"> 2019 </span> The Golden Lens
                    Award
                  </p>
                </div>
                <div className="flex self-start">
                  <div className="self-start flex-none mr-4">
                    <img
                      className="inline-block size-6"
                      src="https://relume-assets.s3.amazonaws.com/relume-icon.svg"
                      alt="Relume logo 2"
                    />
                  </div>
                  <p>
                    <span className="font-bold"> 2021 </span> AI in Medicine
                    Honorary Distinction
                  </p>
                </div>
                <div className="flex self-start">
                  <div className="self-start flex-none mr-4">
                    <img
                      className="inline-block size-6"
                      src="https://relume-assets.s3.amazonaws.com/relume-icon.svg"
                      alt="Relume logo 2"
                    />
                  </div>
                  <p>
                    <span className="font-bold"> 2021 </span> AI in Medicine
                    Honorary Distinction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container max-w-lg text-center">
            <h2 className="mb-5 font-bold md:mb-6">
              Medium length heading goes here
            </h2>
            <p className="md:text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <div className="flex items-center justify-center gap-4 mt-6 md:mt-8">
              <button className="inline-flex items-center justify-center gap-3 px-6 py-3 transition-colors border focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-border-primary bg-background-alternative text-text-alternative">
                Button
              </button>
              <button className="inline-flex items-center justify-center gap-3 px-6 py-3 transition-colors border focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-border-primary text-text-primary">
                Button
              </button>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default About
