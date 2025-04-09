import {
  ArcElement,
  CategoryScale,
  Chart as chartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip
} from "chart.js";
import React from "react";
import { Doughnut, Line } from "react-chartjs-2";
import { orange, purple, purpleLight } from "../../constants/color";
import { getLast7Days } from "../../lib/features";



chartJS.register(
  Tooltip,
  Filler,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Legend
);

const labels = getLast7Days()

const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
  },
};

const LineChart = ({value = []}) => {
  const data = {
    labels,
    datasets: [{
      data: value,
      Label: "Messages",
      fill: true,
      backgroundColor: purpleLight,
      borderColor: purple,
    }],
  };

  return <Line data={data} options={lineChartOptions} />;
};

const doughnutChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false
    }
  },
  cutout: 120,
}

const DoughChart = ({value = [], labels = []}) => {
    const data = {
        labels,
        datasets: [{
          data: value,
          Label: "Total Chats vs Group Chats",
          fill: true,
          backgroundColor: [purpleLight , orange],
          hoverBackgroundColor: [purple, "red"],
          borderColor: [purple, orange],
          offset: 20,
        }],
      };
  return <Doughnut data={data} options={doughnutChartOptions} style={{zIndex: "10"}}/>;
};

export { DoughChart, LineChart };

