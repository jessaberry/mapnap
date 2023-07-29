import { createAsyncThunk } from "@reduxjs/toolkit";
import TripManager from "./serviceTrip";
import { actions } from "./stateTrip";

export const getTripsAsync = createAsyncThunk(actions.GET_TRIPS, async () => {
  return await TripManager.getTrips();
});

export const getTripsByUserIdAsync = createAsyncThunk(
  actions.GET_TRIPS_BY_USER_ID,
  async (userId) => {
    return await TripManager.getTripsByUserId(userId);
  }
);

export const getOtherPublicTripsAsync = createAsyncThunk(
  actions.GET_OTHER_PUBLIC_TRIPS,
  async (userId) => {
    return await TripManager.getOtherPublicTrips(userId);
  }
);

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

export const filterTripAsync = createAsyncThunk(
  actions.FILTER_TRIP,
  async (userID) => {
    return await TripManager.filterTrip(userID);
  }
);

export const getPOIAsync = createAsyncThunk(actions.GET_POI, async () => {
  return await TripManager.getPOI();
});
