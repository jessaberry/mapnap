import { useEffect } from "react";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import activityData from "../data/experiencetype.json";

Chart.register(ArcElement, Tooltip, Legend);
Chart.defaults.animation.lazy = true;

const getActivityExpenses = (experiences, expenses) => {
  const activityExpenses = {};

  expenses.forEach((expense) => {
    const experience = experiences.find(
      (exp) => exp.ExperienceId === expense.ExperienceId
    );
    if (experience) {
      const activityType = activityData.find(
        (data) => data.ExperienceTypeId === experience.ExperienceTypeId
      );
      if (activityType) {
        if (activityExpenses[activityType.Title]) {
          activityExpenses[activityType.Title] += expense.Cost;
        } else {
          activityExpenses[activityType.Title] = expense.Cost;
        }
      }
    }
  });
  return activityExpenses;
};

export const ActivityVis = ({ experiences, expenses }) => {
  const activityExpenses = getActivityExpenses(experiences, expenses);

  const data = {
    labels: Object.keys(activityExpenses),
    datasets: [
      {
        data: Object.values(activityExpenses),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        align: "center",
        labels: {
          boxWidth: 30,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.dataset.data[context.dataIndex];
            return "$" + label.toFixed(2);
          },
        },
      },
      doughnut: {
        cutout: "80%",
      },
    },
  };

  useEffect(() => {
    Chart.register(ArcElement, Tooltip, Legend);
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Doughnut data={data} options={chartOptions} />
    </div>
  );
};
