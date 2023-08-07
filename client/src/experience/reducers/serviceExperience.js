import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_API_SERVER_URL;

const experienceManager = {
  getExperiences: async () => {
    const res = await axios.get("/experiences");
    return res.data;
  },

  getExperiencesByUserId: async (userId) => {
    const res = await axios.get("/experiences/by-user-id/" + userId);
    return res.data;
  },

  addExperience: async (exp) => {
    try {
      const res = await axios.post("/experiences", exp);
      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  deleteExperience: async (expID) => {
    try {
      await axios.delete(`/experiences/${expID}`);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  updateExperience: async (exp) => {
    try {
      const res = await axios.patch(`/experiences/${exp.ExperienceId}`, exp);
      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};
export default experienceManager;
