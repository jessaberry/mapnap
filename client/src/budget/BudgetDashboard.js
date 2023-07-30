import { useSelector } from "react-redux";
import { ActivityVis } from "./Doughnut.js";
import { DateVis } from "./Line.js";
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
        <h1>Budget</h1>
        <div className="budget-container">
          <Grid container spacing={3} justifyContent="center">
            {/* BUDGET BY TRIP */}
            <Grid item xs={12}>
              <div className="budget-trip">
                <h3>Expenses by Trip</h3>
                <TripVis
                  trips={trips}
                  experiences={experiences}
                  expenses={expenses}
                />
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
