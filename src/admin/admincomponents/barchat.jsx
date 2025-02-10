// BarChart.js
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register the necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  // Bar chart data
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul","Aug","Sep","Oct","Nov","Dec"], // X-axis labels
    datasets: [
      {
        label: "Monthly Sales",
        data: [65, 59, 80, 81, 56, 55,45,67,38,67,48,66], // Data for each label
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Bar color
        borderColor: "rgba(75, 192, 192, 1)", // Border color
        borderWidth: 1, // Border width
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top", // Position the legend
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}`, // Custom label display
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Y-axis starts at 0
      },
    },
  };

  return (
    <div className="w-[100%] h-[100%]">
      <div className='w-full h-[50px] flex items-center dark:text-gray-500 font-bold'>
          <p>Earnings revenue</p>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
