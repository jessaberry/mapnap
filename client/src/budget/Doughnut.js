import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import activityData from "../data/experiencetype.json";

const getActivityExpenses = (expenses) => {
  const activityExpenses = {};
  return activityExpenses;
};

export const ActivityVis = ({ expenses }) => {
  const activityExpenses = getActivityExpenses(expenses);

  const data = {
    labels: Object.keys(activityExpenses),
    datasets: [
      {
        data: Object.values(activityExpenses),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div>
      <Doughnut data={data} options={chartOptions} />
    </div>
  );
};
