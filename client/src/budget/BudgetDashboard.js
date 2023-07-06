import { useSelector } from "react-redux";
import { ActivityVis } from "./Doughnut.js";
import { DateVis } from "./Line.js";
import TripVis from "./Blob.js";
import { Grid } from "@mui/material";
import "./BudgetDashboard.css";

export default function BudgetDashboard() {
  const experiences = useSelector((state) => state.exp.experiences);
  const expenses = useSelector((state) => state.exp.expenses);
  const trips = useSelector((state) => state.trip.trips);

  return (
    <div className="budget-container">
      <Grid container spacing={3} justifyContent="center">
        {/* BUDGET BY TRIP */}
        <Grid item xs={12}>
          <div className="budget-trip">
            <h3>Trip</h3>
            <TripVis trips={trips} experiences={experiences} expenses={expenses} />
          </div>
        </Grid>
        {/* BUDGET BY ACTIVITY TYPE */}
        <Grid item xs={12}>
          <div className="budget-activity">
            <h3>Doughnut</h3>
            <ActivityVis experiences={experiences} expenses={expenses} />
          </div>
        </Grid>
        {/* BUDGET BY DATE/TIME */}
        <Grid item xs={12}>
          <div className="budget-date">
            <h3>Line</h3>
            <DateVis experiences={experiences} expenses={expenses} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
