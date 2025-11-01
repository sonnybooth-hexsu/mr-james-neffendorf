import React from 'react'
import Layout from '../components/layout'
import Publications from '../components/publications'
import swoosh2 from '../assets/swoosh-2.svg'
import Seo from '../components/seo'

class Blog extends React.Component {
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
        <Seo title='Latest News & Updates | Mr James Neffendorf Eye Care' description='Stay informed with the latest news, updates, and insights on eye health, treatments, and innovations from London eye specialist Mr James Neffendorf.' />
        <div className="main-content">
          <header className="relative px-[5%] bg-gray-50 py-16 md:py-24 lg:py-28 border-b header-gradient fade-in overflow-hidden">
            <div className="absolute inset-0 bg-center bg-cover opacity-10"></div>
            <div className="container relative z-10 text-left">
              <div className="lg:flex lg:items-baseline">
                <h1 className="my-4 tracking-wide text-gray-800 lg:w-1/2 fade-in">
                  Blog
                </h1>
                <p className="mb-4 text-gray-600 opacity-75 lg:w-1/2 md:text-lg lg:text-lg fade-in lg:ml-4">
                 Read insights from Mr Neffendorf, from detailed patient care to something else, to company news

                </p>
              </div>
           
            </div>
          </header>

          <section id="relume" class="px-[5%] py-16 md:py-24 lg:py-28">
  <div class="container">
    <div class="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 md:gap-y-12 lg:grid-cols-3">
      <div>
        <a href="#" class="mb-6 inline-block w-full max-w-full"
          ><div class="w-full overflow-hidden">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
              alt="Relume placeholder image 1"
              class="aspect-[3/2] size-full object-cover"
            /></div></a
        ><a href="#" class="mb-2 mr-4 inline-block max-w-full text-sm font-semibold">Category</a
        ><a href="#" class="mb-2 block max-w-full"
          ><h5 class="text-xl font-bold md:text-2xl">Blog title heading will go here</h5></a
        >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
        </p>
        <div class="mt-6 flex items-center">
          <div class="mr-4 shrink-0">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              alt="Relume placeholder avatar 3"
              class="size-12 min-h-12 min-w-12 rounded-full object-cover"
            />
          </div>
          <div className='flex items-center'>
            <h6 class="text-sm font-semibold">Mr Neffendorf</h6>
              <span class="mx-2">•</span>
                            <p class="text-sm">11 Jan 2026</p>
          </div>
        </div>
      </div>
      <div>
        <a href="#" class="mb-6 inline-block w-full max-w-full"
          ><div class="w-full overflow-hidden">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
              alt="Relume placeholder image 2"
              class="aspect-[3/2] size-full object-cover"
            /></div></a
        ><a href="#" class="mb-2 mr-4 inline-block max-w-full text-sm font-semibold">Category</a
        ><a href="#" class="mb-2 block max-w-full"
          ><h5 class="text-xl font-bold md:text-2xl">Blog title heading will go here</h5></a
        >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
        </p>
        <div class="mt-6 flex items-center">
          <div class="mr-4 shrink-0">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              alt="Relume placeholder avatar 3"
              class="size-12 min-h-12 min-w-12 rounded-full object-cover"
            />
          </div>
         <div className='flex items-center'>
            <h6 class="text-sm font-semibold">Mr Neffendorf</h6>
              <span class="mx-2">•</span>
                            <p class="text-sm">11 Jan 2026</p>
          </div>
        </div>
      </div>
      <div>
        <a href="#" class="mb-6 inline-block w-full max-w-full"
          ><div class="w-full overflow-hidden">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
              alt="Relume placeholder image 3"
              class="aspect-[3/2] size-full object-cover"
            /></div></a
        ><a href="#" class="mb-2 mr-4 inline-block max-w-full text-sm font-semibold">Category</a
        ><a href="#" class="mb-2 block max-w-full"
          ><h5 class="text-xl font-bold md:text-2xl">Blog title heading will go here</h5></a
        >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
        </p>
        <div class="mt-6 flex items-center">
          <div class="mr-4 shrink-0">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              alt="Relume placeholder avatar 3"
              class="size-12 min-h-12 min-w-12 rounded-full object-cover"
            />
          </div>
          <div className='flex items-center'>
            <h6 class="text-sm font-semibold">Mr Neffendorf</h6>
              <span class="mx-2">•</span>
                            <p class="text-sm">11 Jan 2026</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


          <blogPosts />
          {/* Call To Action */}
          <section className="relative border-t px-[5%] lg:px-[5%] overflow-hidden fade-in">
            <img
              src={swoosh2}
              className="absolute inset-0 object-cover w-full h-full"
            />
            <div className="container relative z-10 flex flex-col items-center justify-center py-20 text-center md:py-28 lg:py-40">
              <div className="flex justify-center mt-4">
                <button
                  className="inline-flex items-center justify-center gap-3 px-8 mb-2 font-medium transition-colors border rounded-full shadow-md btn-56 lg:px-12 focus-visible:ring-border-primary whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-jamesBlue bg-jamesBlue text-text-alternative hover:bg-jamesLight hover:border-jamesLight"
                  onClick={() => (window.location.href = '/contact')}
                >
                  Book a consultation
                </button>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Blog
