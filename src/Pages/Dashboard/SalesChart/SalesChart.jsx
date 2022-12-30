import React from 'react'
import { Chart } from "react-google-charts";

const SalesChart = () => {
    const data = [
        ["Year", "Sales", "Expenses"],
        ["2013", 1000, 400],
        ["2014", 1170, 460],
        ["2015", 660, 1120],
        ["2016", 1030, 540],
        ["2017", 1170, 460],
        ["2015", 660, 120],
        ["2019", 2030, 1420],
        ["2020", 1930, 520],
      ];
const options = {
        height: 500,
      };
  return (
    <div>
<Chart
      chartType="AreaChart"
      width="95%"
      height="100%"
      data={data}
      options={options}
    />
    </div>
  )
}

export default SalesChart