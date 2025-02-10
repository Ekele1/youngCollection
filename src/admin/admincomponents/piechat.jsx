// DoughnutChart.js
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  // Doughnut chart data
  const data = {
    labels: ["MEN", "WOMEN", "LATEST"], // Labels for the chart
    datasets: [
      {
        data: [300, 50, 100], // Data values
        backgroundColor: ["#0D92F4", "#77CDFF", "#C4E1F6"], // Segment colors
        hoverOffset: 4, // Hover effect
      },
    ],
  };

  const options = {
    responsive: true, // Make chart responsive to screen size
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}`,
        },
      },
    },
  };

  return (
    <div className="">
      <h2 className="font-bold dark:text-gray-500">Sales by category</h2>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
