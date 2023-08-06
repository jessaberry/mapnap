import { createAsyncThunk } from "@reduxjs/toolkit";
import { S3ActionTypes } from "./s3-actions-types.mjs";
import getPresignedUploadUrl from "./s3-services.mjs";

export const getPresignedUploadUrlAsync = createAsyncThunk(
  S3ActionTypes.GET_PRESIGNED_UPLOAD_URL,
  async (params) => {
    return await getPresignedUploadUrl(params);
  }
);

export default getPresignedUploadUrlAsync;
