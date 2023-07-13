export const REQUEST_STATE = {
  IDLE: "IDLE",
  PENDING: "PENDING",
  FULFILLED: "FULFILLED",
  REJECTED: "REJECTED",
};

export const INITIAL_STATE = {
  trips: [],
  getTrips: REQUEST_STATE.IDLE,
  addTrip: REQUEST_STATE.IDLE,
  deleteTrip: REQUEST_STATE.IDLE,
  updateTrip: REQUEST_STATE.IDLE,
  error: null,
};

export const actions = {
  GET_TRIPS: "trips",
  GET_USERS: "trips/users",
  ADD_TRIP: "trips/addTrip",
  DELETE_TRIP: "trips/deleteTrip",
  UPDATE_TRIP: "trips/updateTrip",
};