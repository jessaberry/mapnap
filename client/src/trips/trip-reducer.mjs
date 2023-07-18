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
import {apiRoot, REQUEST_STATE} from "../common/global.mjs";

const defaultSelectedTripId = "632fe308-ec3b-4d86-b2ea-03f2aa936ba7";
const defaultTripList = {};

/*{
Trips: [
    {
        "uniqueId": "632fe308-ec3b-4d86-b2ea-03f2aa936ba7",
        "title": "Redux Himeji Castle - 1-day Tour",
        "TripDescription": "Himeji Castle (姫路城, Himeji-jō) is a hilltop Japanese castle complex situated in the city of Himeji which is located in the Hyōgo Prefecture of Japan. The castle is regarded as the finest surviving example of prototypical Japanese castle architecture, comprising a network of 83 rooms with advanced defensive systems from the feudal period.[7] The castle is frequently known as Hakuro-jō or Shirasagi-jō (\"White Egret Castle\" or \"White Heron Castle\") because of its brilliant white exterior and supposed resemblance to a bird taking flight.",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Himeji_castle_in_may_2015.jpg/2880px-Himeji_castle_in_may_2015.jpg",
        "price": 100,
        "quantity": 50,
        "priceUnit": "per person"
    },
    {
        "uniqueId": "33403526-db1f-4e21-b85d-7106d960b74f",
        "title": "Redux Osaka Castle - 1-day Tour",
        "TripDescription": "Osaka Castle (大坂城 or 大阪城, Ōsaka-jō) is a Japanese castle in Chūō-ku, Osaka, Japan. The castle is one of Japan's most famous landmarks and it played a major role in the unification of Japan during the sixteenth century of the Azuchi-Momoyama period.",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Osaka_Castle_02bs3200.jpg/2880px-Osaka_Castle_02bs3200.jpg",
        "price": 120,
        "quantity": 20,
        "priceUnit": "per person"
    },
    {
        "uniqueId": "d67ae5e0-f6c9-4e09-b174-761efdd9c508",
        "title": "Redux Matsumoto Castle - 1-day Tour",
        "TripDescription": "Matsumoto Castle (松本城, Matsumoto-jō), originally known as Fukashi Castle, is one of Japan's premier historic castles, along with Himeji and Kumamoto.[1] The building is also known as the \"Crow Castle\" (烏城, Karasu-jō) due to its black exterior. It was the seat of Matsumoto Domain under the Edo Period Tokugawa shogunate. It is located in the city of Matsumoto, in Nagano Prefecture.",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Matsumoto_Castle_Keep_Tower.jpg/2880px-Matsumoto_Castle_Keep_Tower.jpg",
        "price": 150,
        "quantity": 67,
        "priceUnit": "per person"
    },
    {
        "uniqueId": "0a6f0b1d-b2d8-483b-8ca1-4c449cd175a9",
        "title": "Redux Nagoya Castle - 1-day Tour",
        "TripDescription": "Nagoya Castle (名古屋城, Nagoya-jō) is a Japanese castle located in Nagoya, Japan.",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Nagoya_Castle_7.jpg/2880px-Nagoya_Castle_7.jpg",
        "price": 90,
        "quantity": 15,
        "priceUnit": "per person"
    }
]
}*/

const initialState = {
    TripList: defaultTripList,

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
    name: 'Trips',
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
                state.TripList = {trips: action.payload};
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