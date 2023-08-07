import {createSlice} from "@reduxjs/toolkit";
import {
    selectMemoryByMemoryIdAsync,
    getAllMemoriesAsync,
    getMemoryByMemoryIdAsync,
    getMemoriesByUserIdAsync,
    getMemoriesByTripIdAsync,
    getMemoriesByExperienceIdAsync,
    getMemoriesByKeywordAsync,
    upsertSingleMemoryAsync,
    deleteAllMemoriesAsync,
    deleteMemoryByMemoryIdAsync,
    resetAllMemoriesAsync,
} from "./memory-thunks.mjs";
import {apiRoot, REQUEST_STATE} from "../../common/global.mjs";

const defaultSelectedMemoryId = "632fe308-ec3b-4d86-b2ea-03f2aa936ba7";
const defaultMemoryList = {};

const initialState = {
    MemoryList: [],

    selectMemoryByMemoryId: defaultSelectedMemoryId,

    getAllMemories: REQUEST_STATE.IDLE,

    getMemoryByMemoryId: REQUEST_STATE.IDLE,

    getMemoriesByUserId: REQUEST_STATE.IDLE,
    getMemoriesByTripId: REQUEST_STATE.IDLE,
    getMemoriesByExperienceId: REQUEST_STATE.IDLE,
    getMemoriesSByKeyword: REQUEST_STATE.IDLE,

    upsertSingleMemory: REQUEST_STATE.IDLE,

    deleteSingleMemory: REQUEST_STATE.IDLE,
    deleteAllMemories: REQUEST_STATE.IDLE,

    resetAllMemories: REQUEST_STATE.IDLE,

    error: null,
};

export const memoryReducer = createSlice({
    name: "Memories",
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
                state.MemoryList = action.payload;
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
                state.MemoryList = {Memories: action.payload};
            })
            .addCase(getMemoryByMemoryIdAsync.rejected, (state, action) => {
                state.getMemoryByMemoryId = REQUEST_STATE.REJECTED;
                state.error = action.error;
            });


        builder
            .addCase(getMemoriesByKeywordAsync.pending, (state) => {
                state.getMemoriesByKeyword = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(getMemoriesByKeywordAsync.fulfilled, (state, action) => {
                state.getMemoriesByKeyword = REQUEST_STATE.FULFILLED;
                state.MemoryList = {Memories: action.payload};
            })
            .addCase(getMemoriesByKeywordAsync.rejected, (state, action) => {
                state.getMemoriesByKeyword = REQUEST_STATE.REJECTED;
                state.error = action.error;
            });

        builder
            .addCase(getMemoriesByUserIdAsync.pending, (state) => {
                state.getMemoriesByUserId = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(getMemoriesByUserIdAsync.fulfilled, (state, action) => {
                state.getMemoriesByUserId = REQUEST_STATE.FULFILLED;
                state.MemoryList = {Memories: action.payload};
            })
            .addCase(getMemoriesByUserIdAsync.rejected, (state, action) => {
                state.getMemoriesByUserId = REQUEST_STATE.REJECTED;
                state.error = action.error;
            });


        builder
            .addCase(getMemoriesByTripIdAsync.pending, (state) => {
                state.getMemoriesByTripId = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(getMemoriesByTripIdAsync.fulfilled, (state, action) => {
                state.getMemoriesByTripId = REQUEST_STATE.FULFILLED;
                state.MemoryList = {Memories: action.payload};
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
                state.MemoryList = {Memories: action.payload};
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
                state.MemoryList = {Memories: action.payload};
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
                state.MemoryList = {Memories: action.payload};
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
                state.MemoryList = {};
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
                state.MemoryList = defaultMemoryList;
            })
            .addCase(resetAllMemoriesAsync.rejected, (state, action) => {
                state.resetAllMemories = REQUEST_STATE.REJECTED;
                state.error = action.error;
            });
    },
});

export const {
    selectMemoryByMemoryId,
    getAllMemories,
    getMemoryByMemoryId,
    getMemoriesByUserId,
    getMemoriesByTripId,
    getMemoriesByExperienceId,
    getMemoriesByKeyword,
    upsertSingleMemory,
    deleteMemoryByMemoryId,
    deleteAllMemories,
    resetAllMemories,
} = memoryReducer.actions;
export default memoryReducer.reducer;
