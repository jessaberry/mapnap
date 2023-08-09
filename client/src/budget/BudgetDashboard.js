import { useSelector } from "react-redux";
import { ActivityVis } from "./Doughnut.js";
import TripVis from "./Blob.js";
import { Grid } from "@mui/material";
import "./BudgetDashboard.css";
import React from "react";
import { PageLayout } from "../content/template/page-layout.mjs";

export default function BudgetDashboard() {
  const trips = useSelector((state) => state.trip.trips);
  const experiences = useSelector((state) => state.exp.experiences).filter(
    (exp) => trips.some((trip) => trip.TripId === exp.TripId)
  );
  const expenses = experiences.map((experience) => ({
    ExperienceId: experience.ExperienceId,
    Cost: Number(experience.Cost),
  }));

  return (
    <PageLayout>
      <div>
        <h1>Budget Tracker</h1>
        <div className="budget-container">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <h3>Trip Expenses</h3>
              <div className="trip-container">
                <TripVis
                  trips={trips}
                  experiences={experiences}
                  expenses={expenses}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="activity-container">
                <h3>Activity Expenses</h3>
                <ActivityVis experiences={experiences} expenses={expenses} />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="date-container">
                <h3>Country expenses</h3>
                <p>* COMING SOON *</p>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </PageLayout>
  );
}
