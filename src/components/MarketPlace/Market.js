import React, { useState } from 'react'
import "../../components/MarketPlace/compo.css";
import BarChart from './BarChart';

const Market = () => {
  const [option, setOption] = useState({
    chart: {
      type: 'bar',
      height: 380,
      width: '100%',
      stacked: true,
    },
    plotOptions: {
      bar: {
        columnWidth: '45%',
      }
    },
    xaxis: {
      type: 'datetime',
      categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
        '01/05/2011 GMT', '01/06/2011 GMT', '01/07/2011 GMT'
      ],
    },
    yaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        style: {
          colors: '#78909c'
        }
      }
    },
  })
  const [series, setSeries] = useState([{
    name: "Appreciations",
    data: [4, 10, 12, 5, 2, 13, 16, 14, 7],
  }])
  return (
    <>
      <div className='market-container'>
        <div className='market-container-one'>
          <h5 className='market-heading'>Why Atlanta?</h5>
          <p>The Atlanta real estate market continues to thrive. Job growth, a growing population, and housing affordability make Atlanta an attractive market for investing in rental properties, especially when 50% of the households in the metro area rent rather than own. Atlanta is known for its low seasonality for short-term rentals and boasts an average daily rate of $178, an average occupancy rate of 53% and average monthly revenue of $2,136. Atlanta recently ranked as the #1 best city for techies by Livability.com, due to the city's massive growth in tech job offerings and the dozens of high-profile startups in the city.</p>
        </div>
        <div className='market-container-two'>
          <h5 className='market-heading'>Atlanta historical growth</h5>
          {/* <BarChart options={option} series={series} /> */}
        </div>
      </div>
    </>
  )
}

export default Market