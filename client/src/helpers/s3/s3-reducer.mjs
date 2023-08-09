import { createSlice, configureStore } from "@reduxjs/toolkit";
import { apiRoot, REQUEST_STATE } from "../../common/global.mjs";
import getPresignedUploadUrlAsync from "./s3-thunks.mjs";

const defaultUploadUrl = "";

const initialState = {
  uploadUrl: defaultUploadUrl,
  getPresignedUploadUrlAsync: REQUEST_STATE.IDLE,
  getPresignedUploadUrl: REQUEST_STATE.IDLE,
  error: null,
};

export const s3Reducer = createSlice({
  name: "s3",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPresignedUploadUrlAsync.pending, (state) => {
        state.getPresignedUploadUrl = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(getPresignedUploadUrlAsync.fulfilled, (state, action) => {
        state.getPresignedUploadUrl = REQUEST_STATE.FULFILLED;
        state.uploadUrl = action.payload;
      })
      .addCase(getPresignedUploadUrlAsync.rejected, (state, action) => {
        state.getPresignedUploadUrl = REQUEST_STATE.REJECTED;
        state.error = action.error;
      });
  },
});

export default s3Reducer.reducer;
