import { MemoryActionTypes } from "../memory-action-types.mjs";
import { apiRoot } from "../../common/global.mjs";
import { ObjectId } from "mongoose";

const selectMemoryByMemoryId = async (tripId) => {
  const command =
    apiRoot + MemoryActionTypes.SELECT_MEMORY_BY_MEMORY_ID + "/" + tripId;
  const response = await fetch(command, {
    method: "GET",
  });
  return response.json();
};

const getAllMemories = async () => {
  const command = apiRoot + MemoryActionTypes.GET_ALL_MEMORIES;
  const response = await fetch(command, {
    method: "GET",
  });
  return response.json();
};

const getMemoryByMemoryId = async (tripId) => {
  const command = apiRoot + MemoryActionTypes.GET_MEMORY_BY_MEMORY_ID + "/" + tripId;
  const response = await fetch(command, {
    method: "GET",
  });
  return tripId;
};

const getMemoriesByUserId = async (userId) => {
  const command = apiRoot + MemoryActionTypes.GET_MEMORIES_BY_USER_ID + "/" + userId;
  const response = await fetch(command, {
    method: "GET",
  });
  return response.json();
};

const getOtherPublicMemories = async (userId) => {
  const command = apiRoot + MemoryActionTypes.GET_OTHER_PUBLIC_MEMORIES + "/" + userId;
  const response = await fetch(command, {
    method: "GET",
  });
  return response.json();
};

const getMemoriesByTripId = async (tripId) => {
  const command = apiRoot + MemoryActionTypes.GET_MEMORIES_BY_TRIP_ID + "/" + tripId;
  const response = await fetch(command, {
    method: "GET",
  });
  return response.json();
};

const getMemoriesByExperienceId = async (experienceId) => {
  const command = apiRoot + MemoryActionTypes.GET_MEMORIES_BY_EXPERIENCE_ID + "/" + experienceId;
  const response = await fetch(command, {
    method: "GET",
  });
  return response.json();
};



const upsertSingleMemory = async (trip) => {
  if (!trip._id) {
    trip._id = new ObjectId();
  }
  const command = apiRoot + MemoryActionTypes.UPSERT_SINGLE_MEMORY + "/" + trip._id;
  const response = await fetch(command, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(trip),
  });

  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }
  return data;
};

const deleteAllMemories = async () => {
  const command = apiRoot + MemoryActionTypes.DELETE_ALL_MEMORIES;
  console.log(command);
  const response = await fetch(command, {
    method: "DELETE",
  });
  return response.json();
};

const deleteMemoryByMemoryId = async (memoryId) => {
  const command =
    apiRoot + MemoryActionTypes.DELETE_MEMORY_BY_MEMORY_ID + "/" + memoryId;
  console.log(command);
  const response = await fetch(command, {
    method: "DELETE",
  });
  return response.json();
};

const resetAllMemories = async () => {
  const command = apiRoot + MemoryActionTypes.RESET_ALL_MEMORIES;
  console.log(command);
  const response = await fetch(command, {
    method: "GET",
  });
  console.log(response);
  return response.json();
};

export default {
  selectMemoryByMemoryId,

  getAllMemories,
  getMemoryByMemoryId,
  getMemoriesByUserId,
  getMemoriesByTripId,
  getMemoriesByExperienceId,
  getOtherPublicMemories,

  upsertSingleMemory,

  deleteMemoryByMemoryId,
  deleteAllMemories,

  resetAllMemories,
};

