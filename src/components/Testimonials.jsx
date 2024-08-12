import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Slider from 'react-slick'

export const Testimonials = () => {
  const testimonialsData = useStaticQuery(graphql`
    query {
      allContentfulTestimonial {
        nodes {
          testimonial {
            testimonial
          }
          patientType
          date
        }
      }
    }
  `)

  const testimonials = testimonialsData.allContentfulTestimonial.nodes

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',
          width: '40px',
          height: '40px',
          position: 'absolute',
          right: '-20px', // Adjust this value to position the arrow as needed
          top: '50%',
          transform: 'translateY(-50%)',
          cursor: 'pointer',
          borderRadius: '50%',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
          background: 'white',
        }}
        onClick={onClick}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 0,
            height: 0,
            borderTop: '8px solid transparent',
            borderBottom: '8px solid transparent',
            borderLeft: '12px solid black',
          }}
        />
      </div>
    )
  }

  return (
    <Slider {...settings}>
      {testimonials.map(({ testimonial, patientType, date }, id) => (
        <div
          className="flex flex-col px-0 md:pl-0 md:pr-8 lg:pr-12 lg:pl-0 paragraph-container"
          key={id}
        >
          <blockquote className='text-sm leading-[1.4] before:content-["\201C"] my-4 after:content-["\201D"] md:my-8 xxl:text-xl'>
            {testimonial.testimonial}
          </blockquote>
          <p className="mb-1 font-semibold text-gray-800">{patientType}</p>
          <p>
            <span className="text-xs font-semibold tracking-wider uppercase">
              {`${new Date(date).toLocaleString('default', { month: 'long' })} ${new Date(date).getUTCFullYear()}`}
            </span>
          </p>
        </div>
      ))}
    </Slider>
  )
}

export default Testimonials
