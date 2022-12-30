import React from 'react'
import { Chart } from "react-google-charts";

const GeoChart = () => {
    const  data = [
        ["Country", "Purchesed"],
        ["Germany", 200],
        ["United States", 300],
        ["Brazil", 400],
        ["Canada", 500],
        ["France", 600],
        ["RU", 700],
        ["Bangladesh", 900],
        ["India", 700],
      ];
    const options = {
        height:500
      };
  return (
    <div>
    <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = data[selection[0].row + 1];
            console.log("Selected : " + region);
          },
        },
      ]}
      chartType="GeoChart"
      width="100%"
      height="100%"
      data={data}
      options={options}
    />
    </div>
  )
}

export default GeoChart