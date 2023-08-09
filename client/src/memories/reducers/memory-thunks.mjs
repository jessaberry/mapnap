import { createAsyncThunk } from "@reduxjs/toolkit";
import { MemoryActionTypes } from "../memory-action-types.mjs";
import {
  deleteAllMemories,
  deleteMemoryByMemoryId,
  getAllMemories,
  getMemoriesByExperienceId,
  getMemoriesByUserId,
  getOtherPublicMemories,
  resetAllMemories,
  selectMemoryByMemoryId,
  upsertSingleMemory,
  getMemoriesByTripId,
  getMemoryByMemoryId,
} from "./memory-services.mjs";

export const selectMemoryByMemoryIdAsync = createAsyncThunk(
  MemoryActionTypes.SELECT_MEMORY_BY_MEMORY_ID,
  async (memoryId) => {
    return await selectMemoryByMemoryId(memoryId);
  }
);

export const getAllMemoriesAsync = createAsyncThunk(
  MemoryActionTypes.GET_ALL_MEMORIES,
  async () => {
    return await getAllMemories();
  }
);

export const getMemoryByMemoryIdAsync = createAsyncThunk(
  MemoryActionTypes.GET_MEMORY_BY_MEMORY_ID,
  async (memoryId) => {
    return await getMemoryByMemoryId(memoryId);
  }
);

export const getMemoriesByTripIdAsync = createAsyncThunk(
  MemoryActionTypes.GET_MEMORIES_BY_TRIP_ID,
  async (tripId) => {
    return await getMemoriesByTripId(tripId);
  }
);

export const getMemoriesByUserIdAsync = createAsyncThunk(
  MemoryActionTypes.GET_MEMORIES_BY_USER_ID,
  async (userId) => {
    return await getMemoriesByUserId(userId);
  }
);

export const getOtherPublicMemoriesAsync = createAsyncThunk(
  MemoryActionTypes.GET_OTHER_PUBLIC_MEMORIES,
  async (userId) => {
    return await getOtherPublicMemories(userId);
  }
);

export const getMemoriesByExperienceIdAsync = createAsyncThunk(
  MemoryActionTypes.GET_MEMORIES_BY_EXPERIENCE_ID,
  async (experienceId) => {
    return await getMemoriesByExperienceId(experienceId);
  }
);

export const upsertSingleMemoryAsync = createAsyncThunk(
  MemoryActionTypes.UPSERT_SINGLE_MEMORY,
  async (memory) => {
    return await upsertSingleMemory(memory);
  }
);

export const deleteMemoryByMemoryIdAsync = createAsyncThunk(
  MemoryActionTypes.DELETE_MEMORY_BY_MEMORY_ID,
  async (memoryId) => {
    return await deleteMemoryByMemoryId(memoryId);
  }
);

export const deleteAllMemoriesAsync = createAsyncThunk(
  MemoryActionTypes.DELETE_ALL_MEMORIES,
  async () => {
    return await deleteAllMemories();
  }
);

export const resetAllMemoriesAsync = createAsyncThunk(
  MemoryActionTypes.RESET_ALL_MEMORIES,
  async () => {
    return await resetAllMemories();
  }
);
