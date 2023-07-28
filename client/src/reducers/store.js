import { configureStore } from "@reduxjs/toolkit";
import expReducer from "../experience/reducers/reduceExperience";
import memoryReducer from "../memories/reducers/reducer";
import tripReducer from "../trip/reducers/reduceTrip";
import tripsReducer from "../trips/reducers/trip-reducer.mjs";

export default configureStore({
  reducer: {
    exp: expReducer,
    mem: memoryReducer,
    trip: tripReducer,
    trips: tripsReducer,
  },
});
