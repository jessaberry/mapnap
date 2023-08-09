import { createSlice } from "@reduxjs/toolkit";
import {
  selectMemoryByMemoryIdAsync,
  getAllMemoriesAsync,
  getMemoryByMemoryIdAsync,
  getMemoriesByUserIdAsync,
  getMemoriesByTripIdAsync,
  getMemoriesByExperienceIdAsync,
  upsertSingleMemoryAsync,
  deleteAllMemoriesAsync,
  deleteMemoryByMemoryIdAsync,
  resetAllMemoriesAsync,
  getOtherPublicMemoriesAsync,
} from "./memory-thunks.mjs";
import { REQUEST_STATE } from "../../common/global.mjs";

const defaultSelectedMemoryId = "632fe308-ec3b-4d86-b2ea-03f2aa936ba7";
const defaultMemoryList = [
  {
    _id: "64c528f6923e14cb89686877",
    url: "https://mapnap.s3.us-west-2.amazonaws.com/yatsusankan/bar-1920.jpg",
    width: 1920,
    height: 1080,
    latitude: 36.2330294,
    longitude: 137.1856322,
    title: "Yatsusankan - Bar",
    userId: "auth0|64b26b8d76736ff2b0a188a6",
    tripId: "",
    experienceId: "",
  },
  {
    _id: "64c52926b02ae71c5dd6b047",
    url: "https://mapnap.s3.us-west-2.amazonaws.com/yatsusankan/drinks-1920-1080.jpg",
    width: 1920,
    height: 1080,
    latitude: 36.2330294,
    longitude: 137.1856322,
    title: "Yatsusankan - Drinks",
    userId: "auth0|64b26b8d76736ff2b0a188a6",
    tripId: "",
    experienceId: "",
  },
  {
    _id: "64c52970b1e99aafa54d4fca",
    url: "https://mapnap.s3.us-west-2.amazonaws.com/yatsusankan/front-entrance-1920.jpg",
    width: 1920,
    height: 1080,
    latitude: 36.2330294,
    longitude: 137.1856322,
    title: "Yatsusankan - Front Entrance",
    userId: "auth0|64b26b8d76736ff2b0a188a6",
    tripId: "",
    experienceId: "",
  },
  {
    _id: "64c5295f3d3f3b707352f930",
    url: "https://mapnap.s3.us-west-2.amazonaws.com/yatsusankan/guest-room-1920.jpg",
    width: 1920,
    height: 1080,
    latitude: 36.2330294,
    longitude: 137.1856322,
    title: "Yatsusankan - Guestroom",
    userId: "auth0|64b26b8d76736ff2b0a188a6",
    tripId: "",
    experienceId: "",
  },
  {
    _id: "64c5295f3d3f3b707352f930",
    url: "https://mapnap.s3.us-west-2.amazonaws.com/yatsusankan/onsen-1920.jpg",
    width: 1920,
    height: 1080,
    latitude: 36.2330294,
    longitude: 137.1856322,
    title: "Yatsusankan - Onsen",
    userId: "auth0|64b26b8d76736ff2b0a188a6",
    tripId: "",
    experienceId: "",
  },
  {
    _id: "64c5295f3d3f3b707352f930",
    url: "https://mapnap.s3.us-west-2.amazonaws.com/yatsusankan/relax-room-1920.jpg",
    width: 1920,
    height: 1080,
    latitude: 36.2330294,
    longitude: 137.1856322,
    title: "Yatsusankan - Relax Room",
    userId: "auth0|64b26b8d76736ff2b0a188a6",
    tripId: "",
    experienceId: "",
  },
  {
    _id: "64c5295f3d3f3b707352f930",
    url: "https://mapnap.s3.us-west-2.amazonaws.com/yatsusankan/wakashi-1920.jpg",
    width: 1920,
    height: 1080,
    latitude: 36.2330294,
    longitude: 137.1856322,
    title: "Yatsusankan - Wakashi",
    userId: "auth0|64b26b8d76736ff2b0a188a6",
    tripId: "",
    experienceId: "",
  },
  {
    _id: "64c5295f3d3f3b707352f930",
    url: "https://source.unsplash.com/epcsn8Ed8kY/1200x1600",
    width: 1200,
    height: 1600,
    latitude: 35.4379577,
    longitude: 136.7724739,
    title: "Tagajo",
    userId: "auth0|64b26b8d76736ff2b0a188a6",
    tripId: "",
    experienceId: "",
  },
  {
    _id: "64c52954cbdc2be148685704",
    url: "https://source.unsplash.com/NQSWvyVRIJk/1600x1200",
    width: 1600,
    height: 1200,
    latitude: 39.720009,
    longitude: 140.10257,
    title: "Akita",
    userId: "auth0|64b26b8d76736ff2b0a188a6",
    tripId: "",
    experienceId: "",
  },
  {
    _id: "64c5294c59753e35bb4ad6d0",
    url: "https://source.unsplash.com/zh7GEuORbUw/1200x1600",
    width: 1200,
    height: 1600,
    latitude: 35.652832,
    longitude: 139.839478,
    title: "Tokyo",
    userId: "auth0|64b26b8d76736ff2b0a188a6",
    tripId: "",
    experienceId: "",
  },
  {
    _id: "64c52945c82ec6d59a8ea58e",
    url: "https://source.unsplash.com/PpOHJezOalU/1600x1200",
    width: 1600,
    height: 1200,
    latitude: 35.443707,
    longitude: 139.638031,
    title: "Yokohama",
    userId: "auth0|64b26b8d76736ff2b0a188a6",
    tripId: "",
    experienceId: "",
  },
  {
    _id: "64c52933ba8060b5cb67e54f",
    url: "https://source.unsplash.com/I1ASdgphUH4/1600x1200",
    width: 1600,
    height: 1200,
    latitude: 42.923901,
    longitude: 143.196106,
    title: "Obihiro",
    userId: "auth0|64b26b8d76736ff2b0a188a6",
    tripId: "",
    experienceId: "",
  },
];
const initialState = {
  memories: defaultMemoryList,
  otherPublicMemories: defaultMemoryList,

  selectMemoryByMemoryId: defaultSelectedMemoryId,

  getAllMemories: REQUEST_STATE.IDLE,

  getMemoryByMemoryId: REQUEST_STATE.IDLE,

  getMemoriesByUserId: REQUEST_STATE.IDLE,
  getMemoriesByTripId: REQUEST_STATE.IDLE,
  getOtherPublicMemories: REQUEST_STATE.IDLE,
  getMemoriesByExperienceId: REQUEST_STATE.IDLE,

  upsertSingleMemory: REQUEST_STATE.IDLE,

  deleteSingleMemory: REQUEST_STATE.IDLE,
  deleteAllMemories: REQUEST_STATE.IDLE,

  resetAllMemories: REQUEST_STATE.IDLE,

  error: null,
};

export const memoryReducer = createSlice({
  name: "mem",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(selectMemoryByMemoryIdAsync.pending, (state) => {
        state.selecMemoryByMemoryId = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(selectMemoryByMemoryIdAsync.fulfilled, (state, action) => {
        state.selectMemoryByMemoryId = REQUEST_STATE.FULFILLED;
        state.selectMemoryByMemoryId = action.payload;
      })
      .addCase(selectMemoryByMemoryIdAsync.rejected, (state, action) => {
        state.selectMemoryByMemoryId = REQUEST_STATE.REJECTED;
        state.error = action.error;
      });

    builder
      .addCase(getAllMemoriesAsync.pending, (state) => {
        state.getAllMemories = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(getAllMemoriesAsync.fulfilled, (state, action) => {
        state.getAllMemories = REQUEST_STATE.FULFILLED;
        state.memories = action.payload;
      })
      .addCase(getAllMemoriesAsync.rejected, (state, action) => {
        state.getAllMemories = REQUEST_STATE.REJECTED;
        state.error = action.error;
      });

    builder
      .addCase(getMemoryByMemoryIdAsync.pending, (state) => {
        state.getMemoryByMemoryId = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(getMemoryByMemoryIdAsync.fulfilled, (state, action) => {
        state.getMemoryByMemoryId = REQUEST_STATE.FULFILLED;
        state.memories = action.payload;
      })
      .addCase(getMemoryByMemoryIdAsync.rejected, (state, action) => {
        state.getMemoryByMemoryId = REQUEST_STATE.REJECTED;
        state.error = action.error;
      });

    builder
      .addCase(getMemoriesByUserIdAsync.pending, (state) => {
        state.getMemoriesByUserId = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(getMemoriesByUserIdAsync.fulfilled, (state, action) => {
        state.getMemoriesByUserId = REQUEST_STATE.FULFILLED;
        state.memories = action.payload;
      })
      .addCase(getMemoriesByUserIdAsync.rejected, (state, action) => {
        state.getMemoriesByUserId = REQUEST_STATE.REJECTED;
        state.error = action.error;
      });

    builder
      .addCase(getOtherPublicMemoriesAsync.pending, (state) => {
        state.getOtherPublicMemories = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(getOtherPublicMemoriesAsync.fulfilled, (state, action) => {
        state.getOtherPublicMemories = REQUEST_STATE.FULFILLED;
        state.otherPublicMemories = action.payload;
      })
      .addCase(getOtherPublicMemoriesAsync.rejected, (state, action) => {
        state.getOtherPublicMemories = REQUEST_STATE.REJECTED;
        state.error = action.error;
      });

    builder
      .addCase(getMemoriesByTripIdAsync.pending, (state) => {
        state.getMemoriesByTripId = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(getMemoriesByTripIdAsync.fulfilled, (state, action) => {
        state.getMemoriesByTripId = REQUEST_STATE.FULFILLED;
        state.memories = action.payload;
      })
      .addCase(getMemoriesByTripIdAsync.rejected, (state, action) => {
        state.getMemoriesByTripId = REQUEST_STATE.REJECTED;
        state.error = action.error;
      });

    builder
      .addCase(getMemoriesByExperienceIdAsync.pending, (state) => {
        state.getMemoriesByExperienceId = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(getMemoriesByExperienceIdAsync.fulfilled, (state, action) => {
        state.getMemoriesByExperienceId = REQUEST_STATE.FULFILLED;
        state.memories = action.payload;
      })
      .addCase(getMemoriesByExperienceIdAsync.rejected, (state, action) => {
        state.getMemoriesByExperienceId = REQUEST_STATE.REJECTED;
        state.error = action.error;
      });

    builder
      .addCase(upsertSingleMemoryAsync.pending, (state) => {
        state.upsertSingleMemory = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(upsertSingleMemoryAsync.fulfilled, (state, action) => {
        state.upsertSingleMemory = REQUEST_STATE.FULFILLED;
        state.memories.push(action.payload);
      })
      .addCase(upsertSingleMemoryAsync.rejected, (state, action) => {
        state.upsertSingleMemory = REQUEST_STATE.REJECTED;
        state.error = action.error;
      });

    builder
      .addCase(deleteMemoryByMemoryIdAsync.pending, (state) => {
        state.deleteMemoryByMemoryId = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(deleteMemoryByMemoryIdAsync.fulfilled, (state, action) => {
        state.deleteMemoryByMemoryId = REQUEST_STATE.FULFILLED;
        state.memories = { Memories: action.payload };
      })
      .addCase(deleteMemoryByMemoryIdAsync.rejected, (state, action) => {
        state.deleteMemoryByMemoryId = REQUEST_STATE.REJECTED;
        state.error = action.error;
      });

    builder
      .addCase(deleteAllMemoriesAsync.pending, (state) => {
        state.deleteAllMemories = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(deleteAllMemoriesAsync.fulfilled, (state, action) => {
        state.deleteAllMemories = REQUEST_STATE.FULFILLED;
        state.memories = {};
      })
      .addCase(deleteAllMemoriesAsync.rejected, (state, action) => {
        state.deleteAllMemories = REQUEST_STATE.REJECTED;
        state.error = action.error;
      });

    builder
      .addCase(resetAllMemoriesAsync.pending, (state) => {
        state.resetAllMemories = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(resetAllMemoriesAsync.fulfilled, (state, action) => {
        state.resetAllMemories = REQUEST_STATE.FULFILLED;
        state.memories = defaultMemoryList;
      })
      .addCase(resetAllMemoriesAsync.rejected, (state, action) => {
        state.resetAllMemories = REQUEST_STATE.REJECTED;
        state.error = action.error;
      });
  },
});

export default memoryReducer.reducer;
