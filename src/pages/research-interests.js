import React from 'react'
import Layout from '../components/layout'
import Publications from '../components/publications'
import doctifyLogo from '../assets/doctify-logo.svg'
import swoosh2 from '../assets/swoosh-2.svg'
import grade from '../assets/grade.svg'

class ResearchInterests extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: [
        {
          date: 'Feb 2023',
          title:
            'Effect of intravitreal anti-vascular endothelial growth factor treatment for neovascular age-related macular degeneration on renal function',
          summary:
            'Risk factors such as low vitamin D level has been implicated in the etiology of multiple sclerosis (MS) and may be relevant to myopia, such that there may be an association between myopia and MS. Methods: Using linked Swedish national register data, we conducted a cohort study of men who were born in Sweden between 1950 and 1992, liv...',
          contributors:
            'Dr. James Neffendorf, Co-Contributor, Co-Contributor, Co-Contributor, Co-Contributor',
        },
        {
          date: 'Sep 2022',
          title:
            'The effect of intravitreal anti-vascular endothelial growth factor treatment for neovascular age-related macular degeneration on renal function',
          summary:
            'Risk factors such as low vitamin D level has been implicated in the etiology of multiple sclerosis (MS) and may be relevant to myopia, such that there may be an association between myopia and MS. Methods: Using linked Swedish national register data, we conducted a cohort study of men who were born in Sweden between 1950 and 1992, liv...',
          contributors:
            'Dr. James Neffendorf, Co-Contributor, Co-Contributor, Co-Contributor, Co-Contributor',
        },
        {
          date: 'Sep 2021',
          title: 'Placeholder publication',
          summary:
            'Risk factors such as low vitamin D level has been implicated in the etiology of multiple sclerosis (MS) and may be relevant to myopia, such that there may be an association between myopia and MS. Methods: Using linked Swedish national register data, we conducted a cohort study of men who were born in Sweden between 1950 and 1992, liv...',
          contributors:
            'Dr. James Neffendorf, Co-Contributor, Co-Contributor, Co-Contributor, Co-Contributor',
        },
        {
          date: 'Sep 2020',
          title: 'Placeholder publication',
          summary:
            'Risk factors such as low vitamin D level has been implicated in the etiology of multiple sclerosis (MS) and may be relevant to myopia, such that there may be an association between myopia and MS. Methods: Using linked Swedish national register data, we conducted a cohort study of men who were born in Sweden between 1950 and 1992, liv...',
          contributors:
            'Dr. James Neffendorf, Co-Contributor, Co-Contributor, Co-Contributor, Co-Contributor',
        },
        {
          date: 'Sep 2019',
          title: 'Placeholder publication',
          summary:
            'Risk factors such as low vitamin D level has been implicated in the etiology of multiple sclerosis (MS) and may be relevant to myopia, such that there may be an association between myopia and MS. Methods: Using linked Swedish national register data, we conducted a cohort study of men who were born in Sweden between 1950 and 1992, liv...',
          contributors:
            'Dr. James Neffendorf, Co-Contributor, Co-Contributor, Co-Contributor, Co-Contributor',
        },
        {
          date: 'Sep 2018',
          title: 'Placeholder publication',
          summary:
            'Risk factors such as low vitamin D level has been implicated in the etiology of multiple sclerosis (MS) and may be relevant to myopia, such that there may be an association between myopia and MS. Methods: Using linked Swedish national register data, we conducted a cohort study of men who were born in Sweden between 1950 and 1992, liv...',
          contributors:
            'Dr. James Neffendorf, Co-Contributor, Co-Contributor, Co-Contributor, Co-Contributor',
        },
        {
          date: 'Sep 2017',
          title: 'Placeholder publication',
          summary:
            'Risk factors such as low vitamin D level has been implicated in the etiology of multiple sclerosis (MS) and may be relevant to myopia, such that there may be an association between myopia and MS. Methods: Using linked Swedish national register data, we conducted a cohort study of men who were born in Sweden between 1950 and 1992, liv...',
          contributors:
            'Dr. James Neffendorf, Co-Contributor, Co-Contributor, Co-Contributor, Co-Contributor',
        },
        {
          date: 'Sep 2016',
          title: 'Placeholder publication',
          summary:
            'Risk factors such as low vitamin D level has been implicated in the etiology of multiple sclerosis (MS) and may be relevant to myopia, such that there may be an association between myopia and MS. Methods: Using linked Swedish national register data, we conducted a cohort study of men who were born in Sweden between 1950 and 1992, liv...',
          contributors:
            'Dr. James Neffendorf, Co-Contributor, Co-Contributor, Co-Contributor, Co-Contributor',
        },
        {
          date: 'Sep 2015',
          title: 'Placeholder publication',
          summary:
            'Risk factors such as low vitamin D level has been implicated in the etiology of multiple sclerosis (MS) and may be relevant to myopia, such that there may be an association between myopia and MS. Methods: Using linked Swedish national register data, we conducted a cohort study of men who were born in Sweden between 1950 and 1992, liv...',
          contributors:
            'Dr. James Neffendorf, Co-Contributor, Co-Contributor, Co-Contributor, Co-Contributor',
        },
        {
          date: 'Sep 2014',
          title: 'Placeholder publication',
          summary:
            'Risk factors such as low vitamin D level has been implicated in the etiology of multiple sclerosis (MS) and may be relevant to myopia, such that there may be an association between myopia and MS. Methods: Using linked Swedish national register data, we conducted a cohort study of men who were born in Sweden between 1950 and 1992, liv...',
          contributors:
            'Dr. James Neffendorf, Co-Contributor, Co-Contributor, Co-Contributor, Co-Contributor',
        },
        {
          date: 'Sep 2013',
          title: 'Placeholder publication',
          summary:
            'Risk factors such as low vitamin D level has been implicated in the etiology of multiple sclerosis (MS) and may be relevant to myopia, such that there may be an association between myopia and MS. Methods: Using linked Swedish national register data, we conducted a cohort study of men who were born in Sweden between 1950 and 1992, liv...',
          contributors:
            'Dr. James Neffendorf, Co-Contributor, Co-Contributor, Co-Contributor, Co-Contributor',
        },
        // Add more articles here...
      ],
    }
  }

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
        <div className="main-content">
          <header className="relative px-[5%] bg-gray-50 py-16 md:py-24 lg:py-28 border-b header-gradient fade-in overflow-hidden">
            <div
              className="absolute inset-0 bg-center bg-cover opacity-10"
              style={{ backgroundImage: "url('path-to-background-image.jpg')" }}
            ></div>
            <div className="container relative z-10 text-left">
              <div className="lg:flex lg:items-baseline">
                <h1 className="my-4 tracking-wide text-gray-800 lg:w-1/2 fade-in">
                  Clinical Interests & Research
                </h1>
                <p className="mb-4 text-gray-500 opacity-75 lg:w-1/2 md:text-md lg:text-lg fade-in lg:ml-4">
                  James is involved in a wide range of academic research,
                  currently focussing his interests on vitreoretinal surgery,
                  age-related macular degeneration, artificial intelligence and
                  the exploration or ocular biomarkers for neurological disease.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8 lg:mt-12 md:grid-cols-2">
                <div className="pl-4 text-left border-l-8 border-jamesBlue">
                  <p className="text-4xl font-bold text-gray-800 lg:text-7xl">
                    39
                  </p>
                  <p className="text-gray-500">Published Papers</p>
                </div>
                <div className="pl-4 text-left border-l-8 border-jamesBlue">
                  <p className="text-4xl font-bold text-gray-800 lg:text-7xl">
                    18
                  </p>
                  <p className="text-gray-500">Awards and Prizes</p>
                </div>
              </div>
            </div>
          </header>

          <Publications />

          {/* Call To Action */}
          <section className="relative border-t px-[8%] md:px-[10%] lg:px-[5%] overflow-hidden fade-in">
            <img
              src={swoosh2}
              className="absolute inset-0 object-cover w-full h-full"
              alt="Placeholder image"
            />
            <div className="container relative z-10 py-24 text-center md:py-28 lg:py-40">
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                Book a Consultation
              </h2>
              <p className="md:text-md">
                Book a consultation with Mr James Neffendorf for expert
                ophthalmic care and treatment.
              </p>
              <div className="flex items-center justify-center mt-2 md:gap-2 md:grid-cols-2 md:mt-4 lg:flex lg:justify-center lg:space-x-2">
                <button className="inline-flex items-center justify-center gap-3 px-4 mb-2 text-sm font-medium transition-colors border rounded-full shadow-md btn-48 lg:px-12 focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-jamesBlue bg-jamesBlue text-text-alternative hover:bg-jamesLight hover:border-jamesLight">
                  Contact Mr Neffendorf
                </button>
                <button className="inline-flex items-center justify-center gap-3 px-4 mb-2 text-sm font-medium transition-colors border border-gray-300 rounded-full btn-48 lg:px-12 focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-text-primary">
                  About Mr Neffendorf
                </button>
              </div>
              <div className="flex flex-row items-center justify-center mt-8">
                <p className="mr-2 font-bold text-gray-800">Excellent</p>
                <img
                  className="inline-block size-6 reduce-space"
                  src={grade}
                  alt="Checkmark"
                />
                <img
                  className="inline-block size-6 reduce-space"
                  src={grade}
                  alt="Checkmark"
                />
                <img
                  className="inline-block size-6 reduce-space"
                  src={grade}
                  alt="Checkmark"
                />
                <img
                  className="inline-block size-6 reduce-space"
                  src={grade}
                  alt="Checkmark"
                />
                <img
                  className="inline-block size-6 reduce-space"
                  src={grade}
                  alt="Checkmark"
                />
                <img
                  src={doctifyLogo}
                  className="ml-2 mr-2 max-h-12"
                  alt="Doctify logo"
                />
                <p className="mr-2">4.94 out of 5</p>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default ResearchInterests
