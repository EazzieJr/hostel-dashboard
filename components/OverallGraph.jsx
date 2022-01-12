import { useState } from 'react'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })
import { Calender } from './SVGIcons'

const OverallGraph = () => {
  const [state] = useState({
    options: {
      responsive: [{
        breakpoint: 640,
        options: {},
      }],
      chart: {
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      stroke: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      series: [
        {
          name: 'Overall', 
          data: [900, 800, 600, 200, 500, 400, 700, 300, 900, 500, 1200, 700],
        },
      ],
      fill: {
        colors: ['#03E39100', '#D1FEEE'],
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        labels: {
          style: {
            fontWeight: 800,
            fontSize: '14px',
          }
        }
      },
      yaxis: {
        // min: 7,
        tickAmount: 5,
        // max: 40,
      }
    },
  })

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <div className="flex items-center justify-between py-5 px-4">
            <div className="">
              <h5>Overall Revenue</h5>
            </div>
            <div className="flex justify-between items-center border-2 py-2 px-3 rounded-xl gap-x-2">
              <Calender />
              <select name="year">
                <option className="body2" value="Year">
                  Year
                </option>
                <option className="body2" value="2021">
                  2021
                </option>
                <option className="body2" value="2020">
                  2020
                </option>
                <option className="body2" value="2019">
                  2020
                </option>
              </select>
              <select>
                <option className="body2" value="Month">
                  Month
                </option>
                <option className="body2" value="12">
                  12
                </option>
                <option className="body2" value="11">
                  11
                </option>
                <option className="body2" value="10">
                  10
                </option>
                <option className="body2" value="9">
                  9
                </option>
              </select>
            </div>
          </div>

          <Chart
            options={state.options}
            series={state.options.series}
            type="area"
            height={400}
          />
        </div>
      </div>
    </div>
  )
}

export default OverallGraph
