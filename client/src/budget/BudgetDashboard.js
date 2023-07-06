import React from "react";
import { useSelector } from "react-redux";
import { ActivityVis } from "./Doughnut.js";
import { DateVis } from "./Line.js";

// https://apexcharts.com/javascript-chart-demos/dashboards/modern/

export default function BudgetDashboard() {
  const experiences = useSelector((state) => state.exp.experiences);
  const expenses = useSelector((state) => state.exp.expenses);

  return (
    <div>
      <h1>Budget</h1>
      {/* BUDGET BY ACTIVITY TYPE */}
      <h3>Doughnut</h3>
      <ActivityVis experiences={experiences} expenses={expenses} />
      {/* BUDGET BY DATE/TIME */}
      <h3>Line</h3>
      <DateVis experiences={experiences} expenses={expenses} />
    </div>
  );
}
