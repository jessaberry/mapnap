import { createSlice } from "@reduxjs/toolkit";
import initialState from "../../reducers/initialState";

export const expSlice = createSlice({
  name: "exp",
  initialState: initialState,
  reducers: {
    addExperience: (state, action) => {
      state.experiences = [...state.experiences, action.payload];
    },
    deleteExperience: (state, action) => {
      state.experiences = state.experiences.filter(
        (experiences) => experiences.id !== action.payload
      );
    },
    editExperience: (state, action) => {
      const { id, key, value } = action.payload;
      const experience = state.experiences.find(
        (experience) => experience.id === id
      );
      if (experience) {
        experience[key] = value;
      }
    },
  },
});

export const { addExperience, deleteExperience, editExperience } =
  expSlice.actions;
export default expSlice.reducer;
