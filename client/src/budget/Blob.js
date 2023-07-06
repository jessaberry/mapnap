import { Grid, Paper, Typography } from "@mui/material";

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
      <Grid container spacing={2}>
        {trips.map((trip) => (
          <Grid item xs={12} sm={6} md={4} key={trip.TripId}>
            <Paper elevation={3} style={{ padding: "20px" }}>
              <Typography variant="h6">{trip.Title}</Typography>
              <Typography variant="body1">
                Expenses: ${getTripExpenses(trip.TripId, experiences, expenses)}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h6">
        Total Expenses: ${getTotalExpenses(trips, experiences, expenses)}
      </Typography>
    </div>
  );
};

export default TripVis;
