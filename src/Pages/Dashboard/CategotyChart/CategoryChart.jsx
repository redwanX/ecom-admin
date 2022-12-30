import React from 'react'
import { Chart } from "react-google-charts";

const CategoryChart = () => {
    const data = [
        ["Category", "Sales"],
        ["Shoe", 32],
        ["Book", 26],
        ["Electronics", 35],
        ["Cloths", 2],
        ["Perfume", 7],
      ];
      
    const options = {
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

export default CategoryChart