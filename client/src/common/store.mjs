import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../trips/trip-reducer.mjs";

export const store = configureStore({
  reducer: {
    tripR,
  },
});
