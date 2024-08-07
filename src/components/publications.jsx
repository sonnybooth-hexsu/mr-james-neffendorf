import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import book from '../assets/book_2.svg'

export const Publications = () => {
  const publicationsData = useStaticQuery(graphql`
    query {
      allContentfulPublications {
        nodes {
          title
          summary {
            summary
          }
          contributors
          date
        }
      }
    }
  `)

  const fullList = publicationsData.allContentfulPublications.nodes
  const [articles, setArticles] = useState(fullList)
  const [selectedYear, setSelectedYear] = useState('View All')

  const handleFilterChange = (year) => {
    let newList

    if (year === 'View All') {
      newList = fullList
    } else {
      newList = fullList.filter((article) => article.date.includes(year))
    }

    setArticles(newList)
    setSelectedYear(year)
  }

  return (
    <div className="container px-4 py-8 mx-auto lg:py-16 md:px-8 lg:px-16 fade-in">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-12">
        <div className="md:col-span-4 lg:col-span-2">
          <div
            id="filters"
            className="overflow-hidden lg:block transition-max-height max-h-0 md:max-h-full md:overflow-visible"
          >
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
                  className={`cursor-pointer ${selectedYear === year ? 'text-jamesBlue' : 'text-gray-500'}`}
                  onClick={() => handleFilterChange(year)}
                >
                  {year}
                </li>
              ))}
            </ul>
            <select onChange={(e) => handleFilterChange(e.target.value)}>
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
              <p className="font-semibold text-gray-500">{`${new Date(article.date).toLocaleString('default', { month: 'long' })} ${new Date(article.date).getUTCFullYear()}`}</p>
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
                {article.summary.raw}
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
