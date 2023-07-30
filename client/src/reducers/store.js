import { configureStore } from "@reduxjs/toolkit";
import expReducer from "../experience/reducers/reduceExperience";
import memoryReducer from "../memories/reducers/reducer";
import tripReducer from "../trip/reducers/reduceTrip";

export default configureStore({
  reducer: {
    exp: expReducer,
    mem: memoryReducer,
    trip: tripReducer
  },
});
