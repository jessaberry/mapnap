import { configureStore } from "@reduxjs/toolkit";
import expReducer from "../experience/reducers/reduceExperience";
import memoryReducer from "../memories/reducers/memory-reducer.mjs";
import tripReducer from "../trip/reducers/reduceTrip";
import s3Reducer from "../helpers/s3/s3-reducer.mjs";

export default configureStore({
  reducer: {
    exp: expReducer,
    mem: memoryReducer,
    trip: tripReducer,
    s3: s3Reducer,
  },
});
