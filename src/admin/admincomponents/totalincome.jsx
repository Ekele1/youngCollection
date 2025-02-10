import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registering necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TotalIncome = () => {
  // Line chart data
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul","Aug","Sep","Oct","Nov","Dec"], // X-axis labels
    datasets: [
      {
        label: "Monthly Sales",
        data: [65, 59, 80, 81, 56, 55,45,67,38,67,48,66], // Data for each label
        fill: false, // Disable fill for the line
        borderColor: "rgba(75, 192, 192, 1)", // Line color
        tension: 0.1, // Smooth the line
        borderWidth: 2, // Line thickness
        pointRadius: 5, // Radius of points on the line
        pointBackgroundColor: "rgba(75, 192, 192, 1)", // Point color
      },
    ],
  };

  const options = {
    responsive: true, // Make the chart responsive
    maintainAspectRatio: true, // Allow the chart to stretch to container
    plugins: {
      legend: {
        position: "top", // Position of the legend
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}`, // Custom tooltip label format
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Y-axis starts from 0
      },
    },
  };

  return (
    <div style={{ width: "100%", }}> {/* Set fixed height */}
      <h2 className="font-bold dark:text-gray-500">Total Income</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default TotalIncome;
