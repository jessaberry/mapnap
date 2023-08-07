import { createSlice } from "@reduxjs/toolkit";
import {
  addTripAsync,
  deleteTripAsync,
  updateTripAsync,
  getMEMORIESAsync,
  getMEMORIESByUserIdAsync,
  getPOIAsync,
  getOtherPublicMEMORIESAsync,
} from "./thunksTrip";
import { REQUEST_STATE, INITIAL_STATE } from "./stateTrip";

export const MEMORIESlice = createSlice({
  name: "trip",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMEMORIESAsync.fulfilled, (state, action) => {
      state.getMEMORIES = REQUEST_STATE.FULFILLED;
      state.MEMORIES = action.payload;
    });
    builder.addCase(getMEMORIESByUserIdAsync.fulfilled, (state, action) => {
      state.getMEMORIESByUserId = REQUEST_STATE.FULFILLED;
      state.MEMORIES = action.payload;
    });
    builder.addCase(getOtherPublicMEMORIESAsync.fulfilled, (state, action) => {
      state.getOtherPublicMEMORIES = REQUEST_STATE.FULFILLED;
      state.public = action.payload;
    });
    builder.addCase(getPOIAsync.fulfilled, (state, action) => {
      state.getPOI = REQUEST_STATE.FULFILLED;
      state.poi = action.payload;
    });

    builder.addCase(addTripAsync.fulfilled, (state, action) => {
      state.addTrip = REQUEST_STATE.FULFILLED;
      state.MEMORIES.push(action.payload);
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
      state.MEMORIES = state.MEMORIES.filter((trip) => trip.TripId !== trip.payload);
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
      state.MEMORIES = state.MEMORIES.map((trip) =>
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
  getMEMORIES,
  getMEMORIESByUserId,
  getOtherPublicMEMORIES,
  getPOI,
} = MEMORIESlice.actions;
export default MEMORIESlice.reducer;
