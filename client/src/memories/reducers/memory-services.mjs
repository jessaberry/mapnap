import { MemoryActionTypes } from "../memory-action-types.mjs";
import { apiRoot } from "../../common/global.mjs";
import ObjectID from "bson-objectid";

export const selectMemoryByMemoryId = async (memoryId) => {
  const command =
    apiRoot + MemoryActionTypes.SELECT_MEMORY_BY_MEMORY_ID + "/" + memoryId;
  const response = await fetch(command, {
    method: "GET",
  });
  return response.json();
};

export const getAllMemories = async () => {
  const command = apiRoot + MemoryActionTypes.GET_ALL_MEMORIES;
  const response = await fetch(command, {
    method: "GET",
  });
  return response.json();
};

export const getMemoryByMemoryId = async (memoryId) => {
  const command =
    apiRoot + MemoryActionTypes.GET_MEMORY_BY_MEMORY_ID + "/" + memoryId;
  await fetch(command, {
    method: "GET",
  });
  return memoryId;
};

export const getMemoriesByUserId = async (userId) => {
  const command =
    apiRoot + MemoryActionTypes.GET_MEMORIES_BY_USER_ID + "/" + userId;
  const response = await fetch(command, {
    method: "GET",
  });
  return response.json();
};

export const getOtherPublicMemories = async (userId) => {
  const command =
    apiRoot + MemoryActionTypes.GET_OTHER_PUBLIC_MEMORIES + "/" + userId;
  const response = await fetch(command, {
    method: "GET",
  });
  return response.json();
};

export const getMemoriesByTripId = async (tripId) => {
  const command =
    apiRoot + MemoryActionTypes.GET_MEMORIES_BY_TRIP_ID + "/" + tripId;
  const response = await fetch(command, {
    method: "GET",
  });
  return response.json();
};

export const getMemoriesByExperienceId = async (experienceId) => {
  const command =
    apiRoot +
    MemoryActionTypes.GET_MEMORIES_BY_EXPERIENCE_ID +
    "/" +
    experienceId;
  const response = await fetch(command, {
    method: "GET",
  });
  return response.json();
};

export const upsertSingleMemory = async (memory) => {
  const memoryId = memory["_id"] ? memory["_id"] : new ObjectID();
  const command =
    apiRoot + MemoryActionTypes.UPSERT_SINGLE_MEMORY + "/" + memoryId;
  const response = await fetch(command, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(memory),
  });

  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }
  return data;
};

export const deleteAllMemories = async () => {
  const command = apiRoot + MemoryActionTypes.DELETE_ALL_MEMORIES;
  console.log(command);
  const response = await fetch(command, {
    method: "DELETE",
  });
  return response.json();
};

export const deleteMemoryByMemoryId = async (memoryId) => {
  const command =
    apiRoot + MemoryActionTypes.DELETE_MEMORY_BY_MEMORY_ID + "/" + memoryId;
  console.log(command);
  const response = await fetch(command, {
    method: "DELETE",
  });
  return response.json();
};

export const resetAllMemories = async () => {
  const command = apiRoot + MemoryActionTypes.RESET_ALL_MEMORIES;
  console.log(command);
  const response = await fetch(command, {
    method: "GET",
  });
  console.log(response);
  return response.json();
};
