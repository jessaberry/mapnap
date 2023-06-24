import { createSlice } from "@reduxjs/toolkit";
import initialState from "../../reducers/initialState";

export const tripSlice = createSlice({
  name: "trip",
  initialState: initialState,
  reducers: {
    addTrip: (state, action) => {
      state.trips = [...state.trips, action.payload];
    },
    deleteTrip: (state, action) => {
      state.trips = state.trips.filter((trip) => trip.uuid !== action.payload);
    },
  },
});

export const { addTrip, deleteTrip } = tripSlice.actions;
export default tripSlice.reducer;
