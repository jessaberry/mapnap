import { S3ActionTypes } from "../s3/s3-actions-types.mjs";
import { apiRoot } from "../../common/global.mjs";
import ObjectID from "bson-objectid";

export const getPresignedUploadUrl = async (params) => {
  const userId = params.userid;
  const key = params.key;

  const searchParams = new URLSearchParams();
  searchParams.append("userid", userId);
  searchParams.append("key", key);

  const command =
    apiRoot +
    S3ActionTypes.GET_PRESIGNED_UPLOAD_URL +
    "?" +
    searchParams.toString();

  const response = await fetch(command, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  if (!response.ok) {
    const errorMessage = data?.message;
    throw new Error(errorMessage);
  }

  return data;
};

export default getPresignedUploadUrl;
