import { useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  Menu,
  MenuItem,
  ListItemText,
} from "@mui/material";

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
  const [anchorElement, setAnchorElement] = useState(null);
  const [tripID, setTripID] = useState(null);

  const handleMenuOpen = (e, tripId) => {
    setAnchorElement(e.currentTarget);
    setTripID(tripId);
  };

  const handleMenuClose = () => {
    setAnchorElement(null);
    setTripID(null);
  };

  return (
    <div>
      <Grid container spacing={2}>
        {trips.map((trip) => (
          <Grid item xs={12} sm={6} md={4} key={trip.TripId}>
            <Paper
              elevation={3}
              style={{ padding: "10px", cursor: "pointer" }}
              onClick={(event) => handleMenuOpen(event, trip.TripId)}
            >
              <Typography variant="h6">{trip.Title}</Typography>
              <Typography variant="body">
                ${getTripExpenses(trip.TripId, experiences, expenses)}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Menu
        anchorEl={anchorElement}
        open={Boolean(anchorElement)}
        onClose={handleMenuClose}
      >
        {experiences
          .filter((experience) => experience.TripId === tripID)
          .map((experience) => (
            <MenuItem key={experience.ExperienceId}>
              <ListItemText
                primary={experience.Title}
                secondary={`$${expenses
                  .filter(
                    (expense) =>
                      expense.ExperienceId === experience.ExperienceId
                  )
                  .reduce((total, expense) => total + expense.Cost, 0)
                  .toFixed(2)}`}
              />
            </MenuItem>
          ))}
      </Menu>
      <br></br>
      <Typography variant="p">
        Total Expenses: ${getTotalExpenses(trips, experiences, expenses)}
      </Typography>
    </div>
  );
};

export default TripVis;
