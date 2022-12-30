import React from 'react'
import { Chart } from "react-google-charts";

const OrderChart = () => {
    const data = [
        ["Task", "Hours per Day"],
        ["Complete", 51],
        ["Unpaid", 21],
        ["Pending", 23],
        ["Returned", 2],
        ["Canceld", 14], // CSS-style declaration
      ];
      
      const options = {
        pieHole: 0.5,
        is3D: false,
        height:500
    };
  return (
    <div>
<Chart
      chartType="PieChart"
      width="100%"
      height="100%"
      data={data}
      options={options}
    />
    </div>
  )
}

export default OrderChart