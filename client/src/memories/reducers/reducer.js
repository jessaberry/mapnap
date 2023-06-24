import { createSlice } from "@reduxjs/toolkit";
import init from "./init";

export const expSlice = createSlice({
  name: "mem",
  initialState: init,
  reducers: {
    add: (state, action) => {
      state.memories = [...state.memories, action.payload];
    },
    del: (state, action) => {
      state.memories = state.memories.filter(
        (memories) => memories.id !== action.payload
      );
    },
    edit: (state, action) => {
      const { id, key, value } = action.payload;
      const memories = state.experiences.find((memories) => memories.id === id);
      if (memories) {
        memories[key] = value;
      }
    },
  },
});

export const { add, del, edit } = expSlice.actions;
export default expSlice.reducer;
