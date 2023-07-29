import axios from "axios";

axios.defaults.baseURL = "https://mapnap-backend.onrender.com/";

const tripManager = {
  getTrips: async () => {
    const res = await axios.get("/trips/get-all/");
    console.log(res.data);
    return res.data;
  },

  getTripsByUserId: async (userID) => {
    try {
      const res = await axios.get(`/trips/by-user-id/${userID}`);
      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  getOtherPublicTrips: async (userID) => {
    try {
      const res = await axios.get(`/trips/get-other-public-trips/${userID}`);
      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  addTrip: async (trip) => {
    try {
      const res = await axios.post("/trips", trip);
      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  deleteTrip: async (tripID) => {
    try {
      const res = await axios.delete(`/trips/${tripID}`);
      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  updateTrip: async (trip) => {
    try {
      const res = await axios.patch(`/trips/${trip.TripId}`, trip);
      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  getPOI: async () => {
    try {
      const res = await axios.get("/points-of-interest");
      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};

export default tripManager;
