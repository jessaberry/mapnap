import {createSlice} from "@reduxjs/toolkit";
import {
    selectTripByTripIdAsync,

    getAllTripsAsync,
    getTripByTripIdAsync,
    getTripsByCountryCodeAsync,
    getTripsByUserIdAsync,
    getTripsByKeywordAsync,

    upsertSingleTripAsync,

    deleteAllTripsAsync,
    deleteTripByTripIdAsync,

    resetAllTripsAsync
} from "./trip-thunks.mjs";
import {apiRoot, REQUEST_STATE} from "../../common/global.mjs";

const defaultSelectedTripId = "632fe308-ec3b-4d86-b2ea-03f2aa936ba7";
const defaultTripList = {};


const initialState = {
    TripList: [],

    selectTripByTripId: defaultSelectedTripId,

    getAllTrips: REQUEST_STATE.IDLE,
    getTripByTripId: REQUEST_STATE.IDLE,
    getTripsByUserId: REQUEST_STATE.IDLE,
    getTripsByKeyword: REQUEST_STATE.IDLE,
    getTripsByCountryCode: REQUEST_STATE.IDLE,

    upsertSingleTrip: REQUEST_STATE.IDLE,

    deleteSingleTrip: REQUEST_STATE.IDLE,
    deleteAllTrips: REQUEST_STATE.IDLE,

    resetAllTrips: REQUEST_STATE.IDLE,

    error: null
}

export const tripReducer = createSlice({
    name: 'trips',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {

        builder
            .addCase(selectTripByTripIdAsync.pending, (state) => {
                state.selectTripByTripId = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(selectTripByTripIdAsync.fulfilled, (state, action) => {
                state.selectTripByTripId = REQUEST_STATE.FULFILLED;
                state.selectTripByTripId = action.payload;
            })
            .addCase(selectTripByTripIdAsync.rejected, (state, action) => {
                state.selectTripByTripId = REQUEST_STATE.REJECTED;
                state.error = action.error;
            });

        builder
            .addCase(getAllTripsAsync.pending, (state) => {
                state.getAllTrips = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(getAllTripsAsync.fulfilled, (state, action) => {
                state.getAllTrips = REQUEST_STATE.FULFILLED;
                state.TripList = action.payload;
            })
            .addCase(getAllTripsAsync.rejected, (state, action) => {
                state.getAllTrips = REQUEST_STATE.REJECTED;
                state.error = action.error;
            });


        builder
            .addCase(getTripByTripIdAsync.pending, (state) => {
                state.getTripByTripId = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(getTripByTripIdAsync.fulfilled, (state, action) => {
                state.getTripByTripId = REQUEST_STATE.FULFILLED;
                state.TripList = {trips: action.payload};
            })
            .addCase(getTripByTripIdAsync.rejected, (state, action) => {
                state.getTripByTripId = REQUEST_STATE.REJECTED;
                state.error = action.error;
            });

        builder
            .addCase(getTripsByCountryCodeAsync.pending, (state) => {
                state.getTripsByCountryCode = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(getTripsByCountryCodeAsync.fulfilled, (state, action) => {
                state.getTripsByCountryCode = REQUEST_STATE.FULFILLED;
                state.TripList = {trips: action.payload};
            })
            .addCase(getTripsByCountryCodeAsync.rejected, (state, action) => {
                state.getTripsByCountryCode = REQUEST_STATE.REJECTED;
                state.error = action.error;
            });


        builder
            .addCase(getTripsByKeywordAsync.pending, (state) => {
                state.getTripsByKeyword = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(getTripsByKeywordAsync.fulfilled, (state, action) => {
                state.getTripsByKeyword = REQUEST_STATE.FULFILLED;
                state.TripList = {trips: action.payload};
            })
            .addCase(getTripsByKeywordAsync.rejected, (state, action) => {
                state.getTripsByKeyword = REQUEST_STATE.REJECTED;
                state.error = action.error;
            });


        builder
            .addCase(getTripsByUserIdAsync.pending, (state) => {
                state.getTripsByUserId = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(getTripsByUserIdAsync.fulfilled, (state, action) => {
                state.getTripsByUserId = REQUEST_STATE.FULFILLED;
                state.TripList = {trips: action.payload};
            })
            .addCase(getTripsByUserIdAsync.rejected, (state, action) => {
                state.getTripsByUserId = REQUEST_STATE.REJECTED;
                state.error = action.error;
            });


        builder.addCase(upsertSingleTripAsync.pending, (state) => {
            state.upsertSingleTrip = REQUEST_STATE.PENDING;
            state.error = null;
        })
            .addCase(upsertSingleTripAsync.fulfilled, (state, action) => {
                state.upsertSingleTrip = REQUEST_STATE.FULFILLED;
                state.TripList = {trips: action.payload};
            })
            .addCase(upsertSingleTripAsync.rejected, (state, action) => {
                state.upsertSingleTrip = REQUEST_STATE.REJECTED;
                state.error = action.error;
            });


        builder.addCase(deleteTripByTripIdAsync.pending, (state) => {
            state.deleteTripByTripId = REQUEST_STATE.PENDING;
            state.error = null;
        })
            .addCase(deleteTripByTripIdAsync.fulfilled, (state, action) => {
                state.deleteTripByTripId = REQUEST_STATE.FULFILLED;
                state.TripList = {trips: action.payload};
            })
            .addCase(deleteTripByTripIdAsync.rejected, (state, action) => {
                state.deleteTripByTripId = REQUEST_STATE.REJECTED;
                state.error = action.error;
            });

        builder.addCase(deleteAllTripsAsync.pending, (state) => {
            state.deleteAllTrips = REQUEST_STATE.PENDING;
            state.error = null;
        })
            .addCase(deleteAllTripsAsync.fulfilled, (state, action) => {
                state.deleteAllTrips = REQUEST_STATE.FULFILLED;
                state.TripList = {};
            })
            .addCase(deleteAllTripsAsync.rejected, (state, action) => {
                state.deleteAllTrips = REQUEST_STATE.REJECTED;
                state.error = action.error;
            });


        builder.addCase(resetAllTripsAsync.pending, (state) => {
            state.resetAllTrips = REQUEST_STATE.PENDING;
            state.error = null;
        })
            .addCase(resetAllTripsAsync.fulfilled, (state, action) => {
                state.resetAllTrips = REQUEST_STATE.FULFILLED;
                state.TripList = defaultTripList;
            })
            .addCase(resetAllTripsAsync.rejected, (state, action) => {
                state.resetAllTrips = REQUEST_STATE.REJECTED;
                state.error = action.error;
            });


    }
});


export const {
    selectTripByTripId,
    getAllTrips,
    getTripByTripId,
    getTripsByUserId,
    getTripsByCountryCode,
    getTripsByKeyword,
    upsertSingleTrip,
    deleteTripByTripId,
    deleteAllTrips,
    resetAllTrips
} = tripReducer.actions
export default tripReducer.reducer;