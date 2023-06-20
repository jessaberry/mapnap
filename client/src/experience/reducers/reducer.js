import { createSlice } from "@reduxjs/toolkit";
import init from "./init";

export const expSlice = createSlice({
  name: "exp",
  initialState: init,
  reducers: {
    add: (state, action) => {
      state.experiences = [...state.experiences, action.payload];
    },
    del: (state, action) => {
      state.experiences = state.experiences.filter(
        (experiences) => experiences.id !== action.payload
      );
    },
    edit: (state, action) => {
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

export const { add, del, edit } = expSlice.actions;
export default expSlice.reducer;
