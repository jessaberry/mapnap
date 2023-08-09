import { createSlice } from "@reduxjs/toolkit";
import {
  addTripAsync,
  deleteTripAsync,
  updateTripAsync,
  getTripsAsync,
  getTripsByUserIdAsync,
  getPOIAsync,
  getOtherPublicTripsAsync,
} from "./thunksTrip";
import { REQUEST_STATE, INITIAL_STATE } from "./stateTrip";

export const TripSlice = createSlice({
  name: "trip",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTripsAsync.fulfilled, (state, action) => {
      state.getTrips = REQUEST_STATE.FULFILLED;
      state.trips = action.payload;
    });
    builder.addCase(getTripsByUserIdAsync.fulfilled, (state, action) => {
      state.getTripsByUserId = REQUEST_STATE.FULFILLED;
      state.trips = action.payload;
    });
    builder.addCase(getOtherPublicTripsAsync.fulfilled, (state, action) => {
      state.getOtherPublicTrips = REQUEST_STATE.FULFILLED;
      state.public = action.payload;
    });
    builder.addCase(getPOIAsync.fulfilled, (state, action) => {
      state.getPOI = REQUEST_STATE.FULFILLED;
      state.poi = action.payload;
    });

    builder.addCase(addTripAsync.fulfilled, (state, action) => {
      state.addTrip = REQUEST_STATE.FULFILLED;
      state.trips.push(action.payload);
    });
    builder.addCase(addTripAsync.pending, (state, action) => {
      state.addTrip = REQUEST_STATE.PENDING;
      state.error = null;
    });
    builder.addCase(addTripAsync.rejected, (state, action) => {
      state.addTrip = REQUEST_STATE.REJECTED;
      state.error = action.error;
    });

    builder.addCase(deleteTripAsync.fulfilled, (state, action) => {
      state.deleteTrip = REQUEST_STATE.FULFILLED;
      state.trips = state.Trips.filter((trip) => trip.TripId !== trip.payload);
    });
    builder.addCase(deleteTripAsync.pending, (state, action) => {
      state.deleteTrip = REQUEST_STATE.PENDING;
      state.error = null;
    });
    builder.addCase(deleteTripAsync.rejected, (state, action) => {
      state.deleteTrip = REQUEST_STATE.REJECTED;
      state.error = action.error;
    });

    builder.addCase(updateTripAsync.fulfilled, (state, action) => {
      state.updateTrip = REQUEST_STATE.FULFILLED;
      state.trips = state.Trips.map((trip) =>
        trip.TripId === action.payload.TripId ? action.payload : trip
      );
    });
    builder.addCase(updateTripAsync.pending, (state, action) => {
      state.updateTrip = REQUEST_STATE.PENDING;
      state.error = null;
    });
    builder.addCase(updateTripAsync.rejected, (state, action) => {
      state.updateTrip = REQUEST_STATE.REJECTED;
      state.error = action.error;
    });
  },
});

export const {
  addTrip,
  deleteTrip,
  updateTrip,
  getTrips,
  getTripsByUserId,
  getOtherPublicTrips,
  getPOI,
} = TripSlice.actions;
export default TripSlice.reducer;
