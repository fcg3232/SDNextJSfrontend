import React, { useState } from "react";
import FinancialCard from "./FinancialCard";
import ReactSlider from 'react-slider'

import "../../components/MarketPlace/compo.css";
import BarChart from "./BarChart.js"


const financialData = [
  {
    Heading: "Total Investment Value",
    TotalPrice: "$915,197",
    FirstText: "Underlying asset price",
    FirstRight: "$735,000",
    secondText: "Closing costs (includes inspection & appraisal costs)",
    secondRight: "$139,300",
    thirdText: "Upfront DAO LLC fees:",
    thirdRight: "$550",
    fourthText: "Operating reserve (5.5%)",
    fourthRight: "$40,347",
  },
  {
    Heading: "Projected Annual Return",
    TotalPrice: "12.51%",
    FirstText: "Projected Rental Yield",
    FirstRight: "10.64%",
    secondText: "Projected Appreciation",
    secondRight: "1.70%",
    thirdText: "Rental Yield",
    thirdRight: "$550",
    fourthText: "Operating reserve (5.5%)",
    fourthRight: "10.64%",
  },
  {
    Heading: "Annual gross rents",
    TotalPrice: "$915,197",
    FirstText: "Property taxes",
    FirstRight: "$735,000",
    secondText: "Homeowners insurance",
    secondRight: "$139,300",
    thirdText: "Property management",
    thirdRight: "$550",
    fourthText: "Utilities",
    fourthRight: "$40,347",
  },
];


const Financials = () => {
  const [yourInvestment, setYourInvestment] = useState('')
  const [CumulativeNetCashFlow, setCumulativeNetCashFlow] = useState('')
  const [CumulativeAppreciationGain, setCumulativeAppreciationGain] = useState('')

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
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
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
    name: "Cumulative Net Cash Flow",
    data: [42, 52, 16, 55, 59, 51, 45, 32, 26, 33, 44, 51, 42, 56],
  }, {
    name: "Appreciation Gain",
    data: [6, 12, 4, 7, 5, 3, 6, 4, 3, 3, 5, 6, 7, 4],
  }
    , {
    name: "Your Investment",
    data: [4, 10, 12, 5, 2, 13, 16, 14, 32, 43, 15, 20, 17, 14],
  }])
  return (
    <>
      <div>
        {financialData.map((item) => (
          <FinancialCard data={item} />
        ))}
        {/* <div className="sider-card">
          <div className='slider-box'>
            <p>Tokens purchased</p>
            <ReactSlider
              min={0}
              max={99}
              defaultValue={27}
              className="progress-slider"
              renderThumb={(props, state) => <div onChange={() => setCumulativeAppreciationGain()} {...props}>{state.valueNow}</div>}
            />
          </div>
          <div className='slider-box'>
            <p>Appreciation</p>
            <ReactSlider
              min={0}
              max={999}
              defaultValue={200}
              className="progress-slider"
              renderThumb={(props, state) => <div onChange={() => setCumulativeNetCashFlow()} {...props}>{state.valueNow}</div>}
            />
          </div>
          <div className='slider-box'>
            <p>Cash on Cash Return</p>
            <ReactSlider
              min={0}
              max={999}
              defaultValue={200}
              className="progress-slider"
              renderThumb={(props, state) => <div onChange={() => setYourInvestment()} {...props}>{state.valueNow}</div>}
            />
          </div>
        </div>
        <div className="sider-card">
          <BarChart options={option} series={series} />
        </div>
        <div className='financial-table-sub-container'>
          <table className='financial-order-table'>
            <tr>
              <th></th>
              <th className='financial-order-th'>Year 5</th>
              <th className='financial-order-th'>Year 10</th>
              <th className='financial-order-th'>Year 20</th>
              <th className='financial-order-th'>Year 30</th>
            </tr>
            <tr>
              <td className="financial-order-td">Cumulative Net Cash Flow</td>
              <td className="financial-order-td">$53.99</td>
              <td className="financial-order-td">$53.99</td>
              <td className="financial-order-td">$53.99</td>
              <td className="financial-order-td">$53.99</td>
            </tr>
            <tr>
              <td className="financial-order-td">Cumulative Appreciation Gain</td>
              <td className="financial-order-td">$53.99</td>
              <td className="financial-order-td">$53.99</td>
              <td className="financial-order-td">$53.99</td>
              <td className="financial-order-td">$53.99</td>
            </tr>
            <tr>
              <td className="financial-order-td">Your Investment</td>
              <td className="financial-order-td">$53.99</td>
              <td className="financial-order-td">$53.99</td>
              <td className="financial-order-td">$53.99</td>
              <td className="financial-order-td">$53.99</td>
            </tr>
            <tr>
              <td className="financial-order-td">Total Investment Value	</td>
              <td className="financial-order-td">$53.99</td>
              <td className="financial-order-td">$53.99</td>
              <td className="financial-order-td">$53.99</td>
              <td className="financial-order-td">$53.99</td>
            </tr>
          </table>
        </div> */}
      </div>
    </>
  );
};

export default Financials;
