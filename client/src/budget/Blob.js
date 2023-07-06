const getTripExpenses = (tripId, experiences, expenses) => {
  const tripExp = expenses.filter((expense) => {
    const hasExp = experiences.find(
      (experience) =>
        experience.TripId === tripId &&
        experience.ExperienceId === expense.ExperienceId
    );
    return hasExp !== undefined;
  });
  const tripExpenses = tripExp.reduce(
    (total, expense) => total + expense.Cost,
    0
  );
  return Number(tripExpenses.toFixed(2));
};

const getTotalExpenses = (trips, experiences, expenses) => {
  const tripExpenses = trips.map((trip) =>
    getTripExpenses(trip.TripId, experiences, expenses)
  );
  const totalExpenses = tripExpenses.reduce(
    (total, expense) => total + expense,
    0
  );
  return Number(totalExpenses.toFixed(2));
};

const TripVis = ({ trips, experiences, expenses }) => {
  return (
    <div>
      <h4>Trip Expenses</h4>
      {trips.map((trip) => (
        <div key={trip.TripId}>
          <h3>{trip.Title}</h3>
          <p>
            Expenses: ${getTripExpenses(trip.TripId, experiences, expenses)}
          </p>
        </div>
      ))}
      <h4>Total Expenses: ${getTotalExpenses(trips, experiences, expenses)}</h4>
    </div>
  );
};

export default TripVis;
