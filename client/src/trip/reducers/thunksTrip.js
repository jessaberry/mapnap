import { createAsyncThunk } from "@reduxjs/toolkit";
import TripManager from "./serviceTrip";
import { actions } from "./stateTrip";

export const getTripsAsync = createAsyncThunk(actions.GET_TRIPS, async () => {
  return await TripManager.getTrips();
});

export const addTripAsync = createAsyncThunk(actions.ADD_TRIP, async (trip) => {
  return await TripManager.addTrip(trip);
});

export const deleteTripAsync = createAsyncThunk(
  actions.DELETE_TRIP,
  async (tripID) => {
    return await TripManager.deleteTrip(tripID);
  }
);

export const updateTripAsync = createAsyncThunk(
  actions.UPDATE_TRIP,
  async (trip) => {
    return await TripManager.updateTrip(trip);
  }
);
