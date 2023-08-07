import { createAsyncThunk } from "@reduxjs/toolkit";
import { MemoryActionTypes } from "../memory-action-types.mjs";
import MemoriesServices from "./memory-services.mjs";

export const selectMemoryByMemoryIdAsync = createAsyncThunk(
  MemoryActionTypes.SELECT_MEMORY_BY_MEMORY_ID,
  async (tripId) => {
    return await MemoriesServices.selectMemoryByMemoryId(memoryId);
  }
);

export const getAllMemoriesAsync = createAsyncThunk(
  MemoryActionTypes.GET_ALL_Memories,
  async () => {
    return await MemoriesServices.getAllMemories();
  }
);

export const getMemoryByMemoryIdAsync = createAsyncThunk(
  MemoryActionTypes.GET_MEMORIES_BY_MEMORY_ID,
  async (tripId) => {
    return await MemoriesServices.getMemoryByMemoryId(memoryID);
  }
);

export const getMemoriesByTripIdAsync = createAsyncThunk(
    MemoryActionTypes.GET_MEMORIES_BY_TRIP_ID,
    async (tripId) => {
        return await MemoriesServices.getMemoriesByTripId(tripID);
    }
);

export const getMemoriesByUserIdAsync = createAsyncThunk(
  MemoryActionTypes.GET_MEMORIES_BY_USER_ID,
  async (userId) => {
    return await MemoriesServices.getMemoriesByUserId(userId);
  }
);

export const getMemoriesByExperienceIdAsync = createAsyncThunk(
    MemoryActionTypes.GET_MEMORIES_BY_EXPERIENCE_ID,
    async (tripId) => {
        return await MemoriesServices.getMemoriesByExperienceId(experienceId);
    }
);

export const getMemoriesByKeywordAsync = createAsyncThunk(
  MemoryActionTypes.GET_MEMORIES_BY_KEYWORD,
  async (searchTerm) => {
    return await MemoriesServices.getMemoriesByKeyword(searchTerm);
  }
);

export const upsertSingleMemoryAsync = createAsyncThunk(
  MemoryActionTypes.UPSERT_SINGLE_MEMORY,
  async (trip) => {
    return await MemoriesServices.upsertSingleMemory(trip);
  }
);

export const deleteMemoryByMemoryIdAsync = createAsyncThunk(
  MemoryActionTypes.DELETE_MEMORY_BY_MEMORY_ID,
  async (tripId) => {
    return await MemoriesServices.deleteMemoryByMemoryId(tripId);
  }
);

export const deleteAllMemoriesAsync = createAsyncThunk(
  MemoryActionTypes.DELETE_ALL_MEMORIES,
  async () => {
    return await MemoriesServices.deleteAllMemories();
  }
);

export const resetAllMemoriesAsync = createAsyncThunk(
  MemoryActionTypes.RESET_ALL_MEMORIES,
  async () => {
    return await MemoriesServices.resetAllMemories();
  }
);
