import initialTrips from "../data/trip.json";
import intialExperiences from "../data/experience.json";
import initialExpenses from "../data/expenses.json";

const initialState = {
  trips: initialTrips,
  experiences: intialExperiences,
  expenses: initialExpenses,
  memories: [],
};
export default initialState;
