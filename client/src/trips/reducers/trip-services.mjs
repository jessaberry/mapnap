import {TripActionTypes} from "../trip-action-types.mjs";
import {apiRoot} from "../../common/global.mjs";
import {ObjectId} from "mongoose";

const selectTripByTripId = async(tripId) => {
    const command = apiRoot + TripActionTypes.SELECT_TRIP_BY_TRIP_ID + '/' + tripId;
    const response = await
        fetch(command, {
            method: 'GET'
        });
    return response.json();
}

const getAllTrips = async() => {
    const command = apiRoot + TripActionTypes.GET_ALL_TRIPS;
    const response = await
        fetch(command, {
            method: 'GET'
        });
    return response.json();
}

const getTripByTripId = async(tripId) => {
    const command = apiRoot + TripActionTypes.GET_TRIP_BY_TRIP_ID + '/' + tripId;
    const response = await  fetch(command, {
        method: 'GET',
    })
    return tripId;
}

const getTripsByUserId = async(userId) => {
    const command = apiRoot + TripActionTypes.GET_TRIPS_BY_USER_ID + '/' + userId;
    const response = await fetch(command, {
        method: 'GET'
    });
    return response.json();
}

const getTripsByKeyword = async(searchTerm) => {
    const command = apiRoot + TripActionTypes.GET_TRIPS_BY_KEYWORD + '/' + encodeURI(searchTerm);
    console.log(command);
    const response = await fetch(command, {
        method: 'GET'
    });
    console.log(response);
    return response.json();
}

const getTripsByCountryCode = async(countryCode) => {
    const command = apiRoot + TripActionTypes.GET_TRIPS_BY_COUNTRY_CODE + '/' + countryCode;
    console.log(command);
    const response = await fetch(command, {
        method: 'GET'
    });
    console.log(response);
    return response.json();
}


const upsertSingleTrip = async(trip) => {
    if (!trip._id) {
        trip._id = new ObjectId();
    }
    const command = apiRoot + TripActionTypes.UPSERT_SINGLE_TRIP + '/' + trip._id;
    const response = await fetch(command, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(trip)
    })

    const data = await response.json();
    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }
    return data;
}


const deleteAllTrips = async() => {
    const command = apiRoot + TripActionTypes.DELETE_ALL_TRIPS;
    console.log(command);
    const response = await  fetch(command, {
        method: 'DELETE',
    })
    return response.json();
}

const deleteTripByTripId = async(tripId) => {
    const command = apiRoot + TripActionTypes.DELETE_TRIP_BY_TRIP_ID + '/' + tripId;
    console.log(command);
    const response = await  fetch(command, {
        method: 'DELETE',
    })
    return response.json();
}

const resetAllTrips = async() => {
    const command = apiRoot + TripActionTypes.RESET_ALL_TRIPS
    console.log(command);
    const response = await  fetch(command, {
        method: 'GET',
    })
    console.log(response);
    return response.json();
}

export default {
    selectTripByTripId,

    getAllTrips,
    getTripByTripId,
    getTripsByKeyword,
    getTripsByCountryCode,
    getTripsByUserId,

    upsertSingleTrip,

    deleteTripByTripId,
    deleteAllTrips,

    resetAllTrips
}