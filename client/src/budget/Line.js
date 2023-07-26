import { useEffect } from "react";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { parseISO, differenceInDays } from "date-fns";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const getDateExpenses = (experiences, expenses) => {
  const firstDate = new Date(
    Math.min(
      ...experiences.map(
        (experience) => new Date(experience.StartingLocalDateTime)
      )
    )
  );
  const lastDate = new Date(
    Math.max(
      ...experiences.map(
        (experience) => new Date(experience.EndingLocalDateTime)
      )
    )
  );
  const dateExpenses = {};

  const current = new Date(firstDate);
  while (current <= lastDate) {
    const axis = current.toLocaleDateString();
    dateExpenses[axis] = 0;
    current.setDate(current.getDate() + 1);
  }

  experiences.forEach((experience) => {
    const startDate = parseISO(experience.StartingLocalDateTime);
    const endDate = parseISO(experience.EndingLocalDateTime);
    const days = differenceInDays(endDate, startDate);

    expenses.forEach((expense) => {
      if (expense.ExperienceId === experience.ExperienceId) {
        const dailyExpense = expense.Cost / days;

        const currentDate = new Date(startDate);
        while (currentDate <= endDate) {
          const date = currentDate.toLocaleDateString();
          dateExpenses[date] += dailyExpense;
          currentDate.setDate(currentDate.getDate() + 1);
        }
      }
    });
  });
  return dateExpenses;
};

export const DateVis = ({ experiences, expenses }) => {
  const dateExpenses = getDateExpenses(experiences, expenses);
  const data = {
    labels: Object.keys(dateExpenses),
    datasets: [
      {
        label: "Expenses by Date",
        data: Object.values(dateExpenses),
      },
    ],
  };

  const chartOptions = {
    responsive: true,
  };

  useEffect(() => {
    Chart.register(LineElement, Tooltip, Legend);
  }, []);

  return (
    <div>
      <Line data={data} options={chartOptions} />
    </div>
  );
};
