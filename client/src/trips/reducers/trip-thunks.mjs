import { createAsyncThunk } from "@reduxjs/toolkit";
import { TripActionTypes } from "../trip-action-types.mjs";
import TripServices from "./trip-services.mjs";

export const selectTripByTripIdAsync = createAsyncThunk(
  TripActionTypes.SELECT_TRIP_BY_TRIP_ID,
  async (tripId) => {
    return await TripServices.selectTripByTripId(tripId);
  }
);

export const getAllTripsAsync = createAsyncThunk(
  TripActionTypes.GET_ALL_TRIPS,
  async () => {
    return await TripServices.getAllTrips();
  }
);

export const getTripByTripIdAsync = createAsyncThunk(
  TripActionTypes.GET_TRIP_BY_TRIP_ID,
  async (tripId) => {
    return await TripServices.getTripByTripId(tripId);
  }
);

export const getTripsByUserIdAsync = createAsyncThunk(
  TripActionTypes.GET_TRIPS_BY_USER_ID,
  async (userId) => {
    return await TripServices.getTripsByUserId(userId);
  }
);

export const getTripsByCountryCodeAsync = createAsyncThunk(
  TripActionTypes.GET_TRIPS_BY_COUNTRY_CODE,
  async (countryCode) => {
    return await TripServices.getTripsByCountryCode(countryCode);
  }
);

export const getTripsByKeywordAsync = createAsyncThunk(
  TripActionTypes.GET_TRIPS_BY_KEYWORD,
  async (searchTerm) => {
    return await TripServices.getTripsByKeyword(searchTerm);
  }
);

export const upsertSingleTripAsync = createAsyncThunk(
  TripActionTypes.UPSERT_SINGLE_TRIP,
  async (trip) => {
    return await TripServices.upsertSingleTrip(trip);
  }
);

export const deleteTripByTripIdAsync = createAsyncThunk(
  TripActionTypes.DELETE_TRIP_BY_TRIP_ID,
  async (tripId) => {
    return await TripServices.deleteTripByTripId(tripId);
  }
);

export const deleteAllTripsAsync = createAsyncThunk(
  TripActionTypes.DELETE_ALL_TRIPS,
  async () => {
    return await TripServices.deleteAllTrips();
  }
);

export const resetAllTripsAsync = createAsyncThunk(
  TripActionTypes.RESET_ALL_TRIPS,
  async () => {
    return await TripServices.resetAllTrips();
  }
);
