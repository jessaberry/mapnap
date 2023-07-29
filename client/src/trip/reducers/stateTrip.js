export const REQUEST_STATE = {
  IDLE: "IDLE",
  PENDING: "PENDING",
  FULFILLED: "FULFILLED",
  REJECTED: "REJECTED",
};

export const INITIAL_STATE = {
  trips: [],
  poi: [],
  getTrips: REQUEST_STATE.IDLE,
  getTripsByUserId: REQUEST_STATE.IDLE,
  getPOI: REQUEST_STATE.IDLE,
  addTrip: REQUEST_STATE.IDLE,
  deleteTrip: REQUEST_STATE.IDLE,
  updateTrip: REQUEST_STATE.IDLE,
  filterTrip: REQUEST_STATE.IDLE,
  error: null,
};

export const actions = {
  GET_TRIPS: "trips/get-all",
  GET_TRIPS_BY_USER_ID: "trips/by-user-id",
  GET_USERS: "trips/getUsers",
  ADD_TRIP: "trips/addTrip",
  DELETE_TRIP: "trips/deleteTrip",
  UPDATE_TRIP: "trips/updateTrip",
  FILTER_TRIP: "trips/filterTrip",
  GET_POI: "points-of-interest",
};
