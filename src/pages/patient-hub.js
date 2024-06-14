import React from 'react'
import Layout from '../components/layout'
import topRightSvg from '../assets/top-right.svg'
import bottomLeftSvg from '../assets/bottom-left.svg'
import doctifyLogo from '../assets/doctify-logo.svg'
import grade from '../assets/grade.svg'
import hub from '../assets/hub.svg'
import downloadIcon from '../assets/download.svg'

class PatientHub extends React.Component {
  componentDidMount() {
    this.handleScroll()
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const elements = document.querySelectorAll('.fade-in')
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect()
      if (rect.top <= window.innerHeight - 100) {
        el.classList.add('visible')
      } else {
        el.classList.remove('visible')
      }
    })
  }

  render() {
    return (
      <Layout>
        {/* Hero */}
        <div className="main-content">
          <section className="relative px-[5%] bg-jamesBlue py-16 md:py-20 fade-in overflow-hidden">
            <div className="container relative z-10 text-left">
              <img src={hub} alt="Hub Image" className="mb-4" />
              <p className="mb-2 text-white tag">Resources</p>
              <h1 className="mb-4 tracking-wide text-white">Patient Hub</h1>
              <p className="mb-4 text-white opacity-75 md:text-md">
                Resources on eye health and treatments. If you can't find what
                you're looking for, please get in touch.
              </p>
              <div className="grid mt-6 md:gap-2 md:grid-cols-2 md:mt-8 lg:flex lg:space-x-2">
                <button className="flex items-center justify-center gap-2 px-8 py-2 mb-2 text-sm font-medium text-white transition-opacity border border-white rounded-full shadow-md opacity-75 btn-48 focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:opacity-100">
                  Contact Mr Neffendorf
                </button>
              </div>
            </div>
            <svg
              className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 opacity-25"
              width="800"
              height="800"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="100"
                cy="100"
                r="80"
                stroke="#cccccc"
                strokeWidth=".5"
                fill="none"
              />
              <circle
                cx="100"
                cy="100"
                r="60"
                stroke="#cccccc"
                strokeWidth=".5"
                fill="none"
              />
              <circle
                cx="100"
                cy="100"
                r="40"
                stroke="#cccccc"
                strokeWidth=".5"
                fill="none"
              />
              <circle
                cx="100"
                cy="100"
                r="20"
                stroke="#cccccc"
                strokeWidth=".5"
                fill="none"
              />
            </svg>
          </section>

          {/* Patient Hub Content */}
          <section className="px-[5%] bg-gray-100 py-12 shadow-xl fade-in">
            <div className="container grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {this.renderCard(
                'Cataract Surgery',
                'Preparing for Cataract Surgery: A Patient Checklist',
                'A detailed checklist for patients to prepare for cataract surgery, including what to discuss with your ophthalmologist, medication management, and more.'
              )}
              {this.renderCard(
                'LASIK Surgery',
                'Maximising Success in LASIK Surgery',
                'Tips on how to ensure the best outcomes from LASIK surgery, such as how to choose a surgeon, what tests to expect, and lifestyle preparations.'
              )}
              {this.renderCard(
                'Cataract Surgery',
                'Preparing for Cataract Surgery: A Patient Checklist',
                'A detailed checklist for patients to prepare for cataract surgery, including what to discuss with your ophthalmologist, medication management, and more.'
              )}
              {this.renderCard(
                'LASIK Surgery',
                'Maximising Success in LASIK Surgery',
                'Tips on how to ensure the best outcomes from LASIK surgery, such as how to choose a surgeon, what tests to expect, and lifestyle preparations.'
              )}
              {this.renderCard(
                'Cataract Surgery',
                'Preparing for Cataract Surgery: A Patient Checklist',
                'A detailed checklist for patients to prepare for cataract surgery, including what to discuss with your ophthalmologist, medication management, and more.'
              )}
              {this.renderCard(
                'LASIK Surgery',
                'Maximising Success in LASIK Surgery',
                'Tips on how to ensure the best outcomes from LASIK surgery, such as how to choose a surgeon, what tests to expect, and lifestyle preparations.'
              )}
              {this.renderCard(
                'Cataract Surgery',
                'Preparing for Cataract Surgery: A Patient Checklist',
                'A detailed checklist for patients to prepare for cataract surgery, including what to discuss with your ophthalmologist, medication management, and more.'
              )}
              {this.renderCard(
                'LASIK Surgery',
                'Maximising Success in LASIK Surgery',
                'Tips on how to ensure the best outcomes from LASIK surgery, such as how to choose a surgeon, what tests to expect, and lifestyle preparations.'
              )}
              {this.renderCard(
                'Cataract Surgery',
                'Preparing for Cataract Surgery: A Patient Checklist',
                'A detailed checklist for patients to prepare for cataract surgery, including what to discuss with your ophthalmologist, medication management, and more.'
              )}
              {/* Add more cards as needed */}
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="py-12 shadow-lg bg-gray-50 md:py-24 lg:py-28 fade-in">
            <div className="container text-center">
              <h2 className="mb-4">Book a consultation with Mr Neffendorf</h2>
              <p className="md:text-md">
                Book a consultation with Mr James Neffendorf for expert
                ophthalmic care and treatment.
              </p>
              <div className="grid mt-2 md:gap-2 md:grid-cols-2 md:mt-4 lg:flex lg:space-x-2">
                <button className="inline-flex items-center justify-center gap-3 px-2 mb-2 text-sm font-medium transition-colors border rounded-full shadow-md btn-48 focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-jamesBlue bg-jamesBlue text-text-alternative hover:bg-jamesLight hover:border-jamesLight">
                  Contact Mr Neffendorf
                </button>
                <button className="inline-flex items-center justify-center gap-3 px-2 mb-2 text-sm font-medium transition-colors border border-gray-300 rounded-full btn-48 focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-text-primary">
                  About Mr Neffendorf
                </button>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }

  renderCard(category, title, description) {
    return (
      <div className="flex flex-col justify-between h-full p-8 bg-white rounded-lg shadow-md border-1">
        <div>
          <h2 className="mb-2 text-sm font-bold text-gray-500">{category}</h2>
          <h3 className="mb-4 font-semibold text-md">{title}</h3>
          <p className="mb-4 text-gray-500">{description}</p>
        </div>
        <div className="flex justify-between mt-auto">
          <div className="grid grid-cols-2 gap-2 md:mt-4 lg:flex lg:space-x-2">
            <button className="items-center justify-center inline gap-0 px-8 py-2 mr-0 font-medium transition-colors border border-2 rounded-full shadow-md button-width btn-48 focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-jamesBlue text-jamesBlue hover:bg-jamesBlue hover:text-white">
              View PDF
            </button>
            <button className="flex items-center justify-center gap-0 px-8 py-2 ml-0 font-medium transition-colors shadow-md button-width btn-48 focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-jamesBlue text-jamesBlue">
              <img src={downloadIcon} alt="Download" className="w-6 h-6" />
              Download
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default PatientHub
