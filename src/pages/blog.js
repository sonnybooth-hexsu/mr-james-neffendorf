import React from 'react'
import Layout from '../components/layout'
import swoosh2 from '../assets/swoosh-2.svg'
import Seo from '../components/seo'
import BlogPosts from '../components/blog-posts'

class Blog extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.handleScroll()
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
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
        <Seo
          title="Latest News & Updates | Mr James Neffendorf Eye Care"
          description="Stay informed with the latest news, updates, and insights on eye health, treatments, and innovations from London eye specialist Mr James Neffendorf."
        />
        <div className="main-content">
          <header className="relative px-[5%] bg-gray-50 py-16 md:py-24 lg:py-28 border-b header-gradient fade-in overflow-hidden">
            <div className="absolute inset-0 bg-center bg-cover opacity-10"></div>
            <div className="container relative z-10 text-left">
              <div className="lg:flex lg:items-baseline">
                <h1 className="my-4 text-5xl tracking-wide text-gray-800 lg:w-1/2 fade-in">
                  Blog
                </h1>
                <p className="mb-4 text-gray-600 opacity-75 lg:w-1/2 md:text-lg lg:text-lg fade-in lg:ml-4">
                  Read insights from Mr Neffendorf, covering everything from
                  detailed patient care to company updates.
                </p>
              </div>
            </div>
          </header>
          <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
            <BlogPosts />
          </section>
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
