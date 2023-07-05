import React from 'react';
import { useSelector } from "react-redux";
import { ActivityVis } from "./Doughnut.js";

export default function BudgetDashboard() {
  const experiences = useSelector((state) => state.exp.experiences);
  const expenses = useSelector((state) => state.exp.expenses);

  return (
    <div>
      <h1>Budget</h1>
      <h3>Doughnut</h3>
      <ActivityVis experiences={experiences} expenses={expenses} />
    </div>
  );
}
