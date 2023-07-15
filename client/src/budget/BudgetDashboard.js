import { useSelector } from "react-redux";
import { ActivityVis } from "./Doughnut.js";
import { DateVis } from "./Line.js";
import TripVis from "./Blob.js";
import { Grid } from "@mui/material";
import "./BudgetDashboard.css";

import React from "react";
import experienceData from "../data/experience.json";
import expensesData from "../data/expenses.json";
import { NavBar } from "../content/widgets/navigation/nav-bar.mjs";
import {PageLayout} from "../content/template/page-layout.mjs";

export default function BudgetDashboard() {
  // const experiences = useSelector((state) => state.exp.experiences);
  const experiences = experienceData;
  // const expenses = useSelector((state) => state.exp.expenses);
  const expenses = expensesData;
  const trips = useSelector((state) => state.trip.trips);

  return (
    <PageLayout>
      <div className="content-layout">

    <div className="budget-container">

      <Grid container spacing={3} justifyContent="center">
        {/* BUDGET BY TRIP */}
        <Grid item xs={12}>
          <div className="budget-trip">
            <h3>Expenses by Trip</h3>
            <TripVis trips={trips} experiences={experiences} expenses={expenses}/>
          </div>
        </Grid>
        {/* BUDGET BY ACTIVITY TYPE */}
        <Grid item xs={12}>
          <div className="budget-activity">
            <h3>Expenses by Activity</h3>
            <ActivityVis experiences={experiences} expenses={expenses} />
          </div>
        </Grid>
        {/* BUDGET BY DATE/TIME */}
        <Grid item xs={12}>
          <div className="budget-date">
            <h3>Expenses by Date</h3>
            <DateVis experiences={experiences} expenses={expenses} />
          </div>
        </Grid>
      </Grid>
    </div>
      </div>
    </PageLayout>
  );
}