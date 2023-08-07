import { Bar } from "react-chartjs-2";
import countries from "../helpers/select-country/countries.js";

const getCountryExpenses = (trips, experiences, expenses) => {
  const countryExpenses = {};

  experiences.forEach((experience) => {
    const trip = trips.find((trip) => trip.TripId === experience.TripId);
    if (trip) {
      const country = countries.find((c) => c.code === trip.Countries);
      if (country) {
        const countryKey = country.label;

        if (countryExpenses[countryKey]) {
          countryExpenses[countryKey].push(experience.ExperienceId);
        } else {
          countryExpenses[countryKey] = [experience.ExperienceId];
        }
      }
    }
  });

  Object.keys(countryExpenses).forEach((countryKey) => {
    const experienceIds = countryExpenses[countryKey];
    const totalExpense = experienceIds.reduce((total, experienceId) => {
      const expense = expenses.find(
        (expense) => expense.ExperienceId === experienceId
      );
      return total + (expense ? expense.Cost : 0);
    }, 0);

    countryExpenses[countryKey] = totalExpense;
  });

  return countryExpenses;
};

const CountryVis = ({ trips, experiences, expenses }) => {
  const countryExpenses = getCountryExpenses(trips, experiences, expenses);

  const data = {
    labels: Object.keys(countryExpenses),
    datasets: [
      {
        data: Object.values(countryExpenses),
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
    },
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Bar data={data} options={chartOptions} />
      </div>
    </div>
  );
};
export default CountryVis;
