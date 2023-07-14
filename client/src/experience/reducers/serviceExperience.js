import axios from "axios";

const experienceManager = {
    getExperiences: async () => {
        const res = await axios.get("/exp");
        return res.data;
    },

    addExperience: async (exp) => {
        try {
            const res = await axios.post("/exp", exp);
            return res.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    deleteExperience: async (expID) => {
        try {
            await axios.delete(`/exp/${expID}`);
        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    updateExperience: async (exp) => {
        try {
          const res = await axios.patch(`/trips/${exp.ExperienceId}`, exp);
          return res.data;
        } catch (error) {
          console.log(error);
          throw error;
        }
    },
}
export default experienceManager;