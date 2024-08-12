import React from 'react'
import Layout from '../components/layout'
import hub from '../assets/hub.svg'
import downloadIcon from '../assets/download.svg'
import floaters from '../../static/leaflets/Beavrs-leaflet-Floaters-2022.pdf'
import macularHole from '../../static/leaflets/BEAVRS_MH-2022.pdf'
import epiretinalMembrane from '../../static/leaflets/BEAVRS_ERM-2022.pdf'
import retinalDetachmentSurgery from '../../static/leaflets/BEAVRS-leaflet-RD-2022.pdf'
import vitrectomyForDiabeticVitreousHaemorrhage from '../../static/leaflets/BEAVRS_Vitrectomy-for-diabetic-VH-2022.pdf'
import nonDiabeticVitreousHaemorrhage from '../../static/leaflets/BEAVRS-leaflet-NDM-VH-2022.pdf'
import droppedNucleus from '../../static/leaflets/Beavrs-leafletDropped-Nucleus.2022.pdf'

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
              <h1 className="mb-4 tracking-wide text-white">
                Patient Information
              </h1>
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
                'Information Leaflet',
                'Floaters',
                'Leaflet on eye floaters, their causes, risks, and treatment options.',
                floaters
              )}
              {this.renderCard(
                'Information Leaflet',
                'Macular Holes',
                'Leaflet on macular holes, explaining their causes, symptoms, risks, treatment options, and post-surgery care.',
                macularHole
              )}
              {this.renderCard(
                'Information Leaflet',
                'Epiretinal Membrane',
                'Leaflet on epiretinal membranes, explaining their causes, symptoms, risks, treatment options, and post-surgery care.',
                epiretinalMembrane
              )}
              {this.renderCard(
                'Information Leaflet',
                'Retinal Detachment Surgery',
                'Leaflet on retinal detachment surgery, covering its causes, procedures, risks, post-operative care, and recovery advice.',
                retinalDetachmentSurgery
              )}
              {this.renderCard(
                'Information Leaflet',
                'Vitrectomy for Diabetic Vitreous Haemorrhage',
                'Leaflet on vitrectomy for diabetic vitreous haemorrhage, explaining the procedure, potential risks, post-operative care, and recovery advice.',
                vitrectomyForDiabeticVitreousHaemorrhage
              )}
              {this.renderCard(
                'Information Leaflet',
                'Non-Diabetic Vitreous Haemorrhage',
                'Leaflet on non-diabetic vitreous haemorrhage, explaining its causes, treatment options, follow-up care, and the importance of monitoring vision in both eyes.',
                nonDiabeticVitreousHaemorrhage
              )}
              {this.renderCard(
                'Information Leaflet',
                'Dropped Nucleus',
                'Leaflet on retained lens after cataract surgery, explaining the causes, treatment options (including vitrectomy), potential risks, post-operative care, and recovery advice.',
                droppedNucleus
              )}
              {/* Add more cards as needed */}
            </div>
          </section>
        </div>
      </Layout>
    )
  }

  renderCard(category, title, description, pdf) {
    return (
      <div className="flex flex-col justify-between h-full p-8 bg-white rounded-lg shadow-md border-1">
        <div>
          <h2 className="mb-2 text-sm font-bold text-gray-600">{category}</h2>
          <h3 className="mb-4 font-semibold text-md">{title}</h3>
          <p className="mb-4 text-gray-600">{description}</p>
        </div>
        <div className="flex justify-between mt-auto">
          <div className="grid grid-cols-2 gap-2 md:mt-4 lg:flex lg:space-x-2">
            <button className="items-center justify-center inline gap-0 px-8 py-2 mr-0 font-medium transition-colors border border-2 rounded-full shadow-md button-width btn-48 focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-jamesBlue text-jamesBlue hover:bg-jamesBlue hover:text-white">
              <a href={pdf} target="_blank">
                View PDF
              </a>
            </button>
            <button className="flex items-center justify-center gap-0 px-8 py-2 ml-0 font-medium transition-colors shadow-md button-width btn-48 focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-jamesBlue text-jamesBlue">
              <img src={downloadIcon} alt="Download" className="w-6 h-6" />
              <a href={pdf} download>
                Download
              </a>
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default PatientHub
