import React from 'react'
import Layout from '../components/layout'
import topRightSvg from '../assets/top-right.svg'
import bottomLeftSvg from '../assets/bottom-left.svg'
import doctifyLogo from '../assets/doctify-logo.svg'
import grade from '../assets/grade.svg'

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
          <section className="px-[5%] border-b py-16 md:py-24 lg:py-28 fade-in">
            <div className="container text-center">
              <h1 className="mb-4">Patient Hub</h1>
              <p className="md:text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </section>

          {/* Patient Hub Content */}
          <section className="px-[5%] py-16 md:py-24 lg:py-28 fade-in">
            <div className="container grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
              {/* Add more cards as needed */}
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="py-16 bg-gray-50 md:py-24 lg:py-28 fade-in">
            <div className="container text-center">
              <h2 className="mb-4">Book a consultation with Mr Neffendorf</h2>
              <p className="md:text-md">
                Book a consultation with Mr James Neffendorf for expert
                ophthalmic care and treatment.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 mt-6 lg:flex-row md:mt-8">
                <button className="btn btn-primary">
                  Contact Mr Neffendorf
                </button>
                <button className="btn btn-secondary">
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
      <div className="p-6 bg-white shadow-md">
        <h2 className="mb-2 text-lg font-bold">{category}</h2>
        <h3 className="mb-4 font-semibold text-md">{title}</h3>
        <p className="mb-4 text-gray-500">{description}</p>
        <div className="flex justify-between">
          <button className="btn btn-primary">View</button>
          <button className="btn btn-secondary">Download</button>
        </div>
      </div>
    )
  }
}

export default PatientHub
