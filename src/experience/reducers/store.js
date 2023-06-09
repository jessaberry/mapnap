import { configureStore } from "@reduxjs/toolkit";
import expReducer from "./reducer";

export default configureStore({
  reducer: {
    exp: expReducer,
  },
});
