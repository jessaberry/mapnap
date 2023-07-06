import { useSelector } from "react-redux";
import { ActivityVis } from "./Doughnut.js";
import { DateVis } from "./Line.js";
import TripVis from "./Blob.js";

export default function BudgetDashboard() {
  const experiences = useSelector((state) => state.exp.experiences);
  const expenses = useSelector((state) => state.exp.expenses);
  const trips = useSelector((state) => state.trip.trips);
  return (
    <div>
      <h1>Budget</h1>
      {/* BUDGET BY TRIP */}
      <h3>Trip</h3>
      <TripVis trips={trips} experiences={experiences} expenses={expenses} />
      {/* BUDGET BY ACTIVITY TYPE */}
      <h3>Doughnut</h3>
      <ActivityVis experiences={experiences} expenses={expenses} />
      {/* BUDGET BY DATE/TIME */}
      <h3>Line</h3>
      <DateVis experiences={experiences} expenses={expenses} />
    </div>
  );
}
