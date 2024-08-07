import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import book from '../assets/book_2.svg'

export const Publications = () => {
  const publicationsData = useStaticQuery(graphql`
    query {
      allContentfulPublications {
        nodes {
          title
          summary
          date
        }
      }
    }
  `)

  const [sortBy] = useState('Date')
  const [selectedYear, setSelectedYear] = useState('ALL')

  const handleFilterChange = (year) => {
    setSelectedYear(year)

    if (selectedYear === 'ALL') {
      setArticles(publicationsData.allContentfulPublications.nodes)
    }

    setArticles(
      publicationsData.allContentfulPublications.nodes.filter((article) =>
        article.date.includes(selectedYear)
      )
    )
  }

  const [articles, setArticles] = useState(
    publicationsData.allContentfulPublications.nodes
  )

  return (
    <div className="container px-4 py-8 mx-auto lg:py-16 md:px-8 lg:px-16 fade-in">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-12">
        <div className="md:col-span-4 lg:col-span-2">
          <div
            id="filters"
            className="hidden overflow-hidden lg:block transition-max-height max-h-0 md:max-h-full md:overflow-visible"
          >
            <ul className="space-y-4 font-bold">
              {[
                'View All',
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
                  onClick={() => handleFilterChange(year)}
                >
                  {year}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="md:col-span-4 lg:col-span-8 fade-in">
          {articles.map((article, index) => (
            <div className="pb-4 mb-8 border-b" key={index}>
              <p className="font-semibold text-gray-500">{article.date}</p>
              <div className="flex flex-col items-start">
                <img src={book} alt="Hub Image" className="mt-1 mr-2" />
                <h3 className="mb-2 text-base font-bold text-gray-800 md:text-3xl lg:text-2xl">
                  {article.title}
                </h3>
              </div>
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
  )
}

export default Publications
