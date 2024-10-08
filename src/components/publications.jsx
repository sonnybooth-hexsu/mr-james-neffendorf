import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import book from '../assets/book.svg'

export const Publications = () => {
  const publicationsData = useStaticQuery(graphql`
    query {
      allContentfulResearchPublication {
        nodes {
          title
          summary {
            raw
          }
          summaryImage {
            url
          }
          contributors
          date
        }
      }
    }
  `)

  const options = {
    preserveWhitespace: true,
  }

  const fullList = publicationsData.allContentfulResearchPublication.nodes

  fullList.sort(function (a, b) {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.date) - new Date(a.date)
  })
  const [articles, setArticles] = useState(fullList)

  const [selectedYear, setSelectedYear] = useState('View All')

  const handleFilterChange = (year) => {
    let newList

    if (year === 'View All') {
      newList = fullList
    } else {
      newList = fullList.filter(
        (article) => new Date(article.date).getFullYear() == year
      )
    }

    setArticles(newList)
    setSelectedYear(year)
  }

  return (
    <div className="container px-4 py-8 mx-auto lg:py-16 md:px-8 lg:px-16 fade-in">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-12">
        <div className="md:col-span-4 lg:col-span-2">
          <div id="filters">
            <ul className="hidden space-y-4 font-bold lg:block">
              {[
                'View All',
                '2024',
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
                  className={`cursor-pointer ${selectedYear === year ? 'text-jamesBlue' : 'text-gray-600'}`}
                  onClick={() => handleFilterChange(year)}
                >
                  {year}
                </li>
              ))}
            </ul>
            <select
              className="w-full py-2 lg:hidden"
              onChange={(e) => handleFilterChange(e.target.value)}
            >
              <option value="View All">View All</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
              <option value="2013">2013</option>
            </select>
          </div>
        </div>
        <div className="md:col-span-4 lg:col-span-8 fade-in">
          {articles.map((article, index) => (
            <div className="pb-4 mb-8 border-b" key={index}>
              <div className="flex items-center">
                <p className="mt-1 font-semibold">{`${new Date(article.date).toLocaleString('default', { month: 'long' })} ${new Date(article.date).getFullYear()}`}</p>
              </div>
              <h3 className="mt-2 mb-2 font-bold text-gray-800 md:text-3xl lg:text-2xl">
                {article.title}
              </h3>

              {article?.summaryImage?.url && (
                <img src={article.summaryImage.url} />
              )}

              {article?.summary?.raw && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: documentToHtmlString(
                      JSON.parse(article.summary.raw),
                      options
                    ),
                  }}
                />
              )}
              <p className="mt-2 font-semibold text-gray-600">
                {article.contributors}
              </p>
            </div>
          ))}
        </div>
        <div className="hidden lg:block lg:col-span-2 fade-in"></div>
      </div>
    </div>
  )
}

export default Publications
