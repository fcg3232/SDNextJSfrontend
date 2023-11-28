import React from 'react'
import Chart from "react-apexcharts";

const BarChart = ({ options, series }) => {
  return (
    <Chart options={options} type="bar" series={series} width="100%" />
  )
}

export default BarChart