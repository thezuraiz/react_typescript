import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

Chart.defaults.maintainAspectRatio = false;
Chart.defaults.responsive = true;

const MyBarChart = ({ chartData, options }) => {
  return (
    <Bar key={JSON.stringify(chartData)} data={chartData} options={options} />
  );
};

export default MyBarChart;
