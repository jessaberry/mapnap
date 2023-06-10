import { configureStore } from "@reduxjs/toolkit";
import expReducer from "../experience/reducers/reducer"
import memoryReducer from "../memories/reducers/reducer";

export default configureStore({
  reducer: {
    exp: expReducer,
    mem: memoryReducer,
  },
});
