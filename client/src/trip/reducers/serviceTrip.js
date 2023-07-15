import axios from "axios";

axios.defaults.baseURL = 'localhost:4999/';

const tripManager = {
  getTrips: async () => {
    const res = await axios.get("/trips");
    return res.data;
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
};

export default tripManager;
