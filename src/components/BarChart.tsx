import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend
} from "chart.js";

const BarChart: React.FC<{chartData: any}> = (props):JSX.Element => {
  const {chartData} = props;

  ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Legend
  );

  const data = {
    labels: Object.keys(chartData),
    datasets: [{
      label: "Average Store Traffic",
      data: Object.values(chartData),
      backgroundColor: '#3b82f6'
    }]
  }

  console.log('data', data)

  return (
    <div className="bar-chart">
      <Bar
        data={data}
      />
    </div>
  )
};

export default BarChart;