import React from 'react'
import Layout from '../components/layout'
import Publications from '../components/publications'
import doctifyLogo from '../assets/doctify-logo.svg'
import hub from '../assets/hub.svg'

class ResearchInterests extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedYear: 'ALL',
      sortBy: 'Date',
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

  handleFilterChange = (year) => {
    this.setState({ selectedYear: year })
  }

  handleSortChange = (sortBy) => {
    this.setState({ sortBy })
  }

  filterArticles = () => {
    const { selectedYear, articles } = this.state
    if (selectedYear === 'ALL') {
      return articles
    }
    return articles.filter((article) => article.date.includes(selectedYear))
  }

  sortArticles = (articles) => {
    const { sortBy } = this.state
    return articles.sort((a, b) => {
      if (sortBy === 'Date') {
        const dateA = new Date(a.date.split(' ')[1])
        const dateB = new Date(b.date.split(' ')[1])
        return dateB - dateA
      }
      if (sortBy === 'Title') {
        return a.title.localeCompare(b.title)
      }
      return articles
    })
  }

  render() {
    const { selectedYear, sortBy } = this.state
    const filteredArticles = this.filterArticles()
    const sortedArticles = this.sortArticles(filteredArticles)

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
                  Mr James Neffendorf has been involved in a wide range of
                  academic research, and is currently focusing his interests on
                  vitreoretinal surgery, retinal detachment, artificial
                  intelligence, and the exploration of ocular biomarkers for
                  neurological diseases.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 mt-8 lg:mt-12 md:grid-cols-3">
                <div className="pl-4 text-left border-l-8 border-jamesBlue">
                  <p className="text-4xl font-bold text-gray-800 lg:text-7xl">
                    14+
                  </p>
                  <p className="text-gray-500">Years of Experience</p>
                </div>
                <div className="pl-4 text-left border-l-8 border-jamesBlue">
                  <p className="text-4xl font-bold text-gray-800 lg:text-7xl">
                    100+
                  </p>
                  <p className="text-gray-500">Published Papers</p>
                </div>
                <div className="pl-4 text-left border-l-8 border-jamesBlue">
                  <p className="text-4xl font-bold text-gray-800 lg:text-7xl">
                    10+
                  </p>
                  <p className="text-gray-500">Awards & Recognitions</p>
                </div>
              </div>
            </div>
          </header>

          <div className="container px-4 py-8 mx-auto lg:py-16 md:px-8 lg:px-16 fade-in">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-12">
              <div className="md:col-span-4 lg:col-span-2">
                <div className="flex gap-4 mb-4 lg:hidden">
                  <button
                    className="flex items-center justify-center w-1/2 gap-2 px-4 py-2 text-gray-500 border border-gray-300 rounded"
                    onClick={() => this.handleFilterChange('ALL')}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-.293.707L13 10.414V15a1 1 0 01-.553.894l-3 1.5A1 1 0 018 16.5v-6.086L3.293 6.707A1 1 0 013 6V4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Filters
                  </button>
                  <div className="relative w-1/2">
                    <select
                      className="block w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-300 rounded appearance-none hover:border-gray-400 focus:outline-none focus:bg-white focus:border-gray-500"
                      onChange={(e) => this.handleSortChange(e.target.value)}
                      value={sortBy}
                    >
                      <option value="Date">Sort By</option>
                      <option value="Date">Date</option>
                      <option value="Title">Title</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                      <svg
                        className="w-4 h-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  id="filters"
                  className="hidden overflow-hidden lg:block transition-max-height max-h-0 md:max-h-full md:overflow-visible"
                >
                  <ul className="space-y-4 font-bold">
                    {[
                      'ALL',
                      '2023',
                      '2022',
                      '2021',
                      '2020',
                      '2019',
                      '2018',
                      '2017',
                      '2016',
                      '2015',
                      '2014',
                      '2013',
                    ].map((year) => (
                      <li
                        key={year}
                        className={`cursor-pointer ${selectedYear === year ? 'text-jamesBlue' : 'text-gray-500'}`}
                        onClick={() => this.handleFilterChange(year)}
                      >
                        {year}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:col-span-4 lg:col-span-8 fade-in">
                {sortedArticles.map((article, index) => (
                  <div className="pb-4 mb-8 border-b" key={index}>
                    <p className="font-semibold text-gray-500">
                      {article.date}
                    </p>
                    <h3 className="mt-4 mb-2 text-base font-bold text-gray-800 md:text-3xl lg:text-2xl">
                      {article.title}
                    </h3>
                    <p className="text-gray-500">
                      <span className="font-semibold text-gray-500">
                        Mr Neffendorf's Summary:{' '}
                      </span>
                      {article.summary}
                    </p>
                    <p className="mt-2 font-semibold text-gray-500">
                      {article.contributors}
                    </p>
                  </div>
                ))}
              </div>
              <div className="hidden lg:block lg:col-span-2 fade-in"></div>
            </div>
          </div>

          <Publications />
          <section className="px-[5%] py-16 md:py-24 lg:py-28 fade-in">
            <div className="container max-w-lg text-center">
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                Medium length heading goes here
              </h2>
              <p className="md:text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
              <div className="flex items-center justify-center gap-4 mt-6 md:mt-8">
                <button className="inline-flex items-center justify-center gap-3 px-6 py-3 transition-colors border btn btn-primary focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-border-primary bg-background-alternative text-text-alternative">
                  Button
                </button>
                <button className="inline-flex items-center justify-center gap-3 px-6 py-3 transition-colors border focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-border-primary text-text-primary">
                  Button
                </button>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default ResearchInterests
