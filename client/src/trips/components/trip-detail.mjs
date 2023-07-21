import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { getTripByTripIdAsync } from "../reducers/trip-thunks.mjs";
import {useNavigate, Link, Route, Routes, useParams} from "react-router-dom";
import React from "react";
import {deleteExperienceAsync} from "../../experience/reducers/thunksExperience.js";
import "./styles.css";
import experienceData from "../../data/experience.json";
import {PageLayout} from "../../content/template/page-layout.mjs";
import {getTripByTripId} from "../reducers/trip-reducer.mjs";

export default function TripDetail(tripId) {
    //const trip = useSelector((state) => state.trip.trips);
    const trip = (productList.products && productList.products.length > 0) ? productList.products.find(p => p.uniqueId === selectedProductId) : null;


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {tripId} = useParams();

    useEffect(() => {
        dispatch(getTripByTripIdAsync(tripId));
    }, [dispatch]);

    const handleAddTrip = (trip) => {
        dispatch(addTripAsync(trip));
    };

    const handleDeleteTrip = (trip) => {
        dispatch(deleteTripAsync(trip.TripId));
    };

    const handleAddExperience = (tripUUID) => {
        navigate("/experience", {state: {tripUUID}});
    };

    const handleDeleteExperience = (expID) => {
        dispatch(deleteExperienceAsync(expID));
    };

    const getExperiences = (tripID) => {
        return experiences
            .filter((exp) => exp.TripId === tripID)
            .sort(
                (a, b) =>
                    new Date(a.StartingLocalDateTime) - new Date(b.StartingLocalDateTime)
            );
    };
    console.log(trip);
    return (
            <div>
                <h1>Trip Manager</h1>
                <TripHandler
                    handleAddTrip={handleAddTrip}
                    handleAddExperience={handleAddExperience}
                />
                <div className="card-container">
                    {trips.map((trip) => (
                        <div className="trip-item" key={trip.TripId}>
                            <h3 className="trip-title">TRIP - {trip.Title}</h3>
                            <p className="trip-info">TRIP id: {trip.TripId}</p>
                            <Link to={`/trips/${trip.TripId}`}>
                                <button>View Trip</button>
                            </Link>
                            <button onClick={() => handleDeleteTrip(trip)}>Delete</button>
                            <div className="experience-list">
                                <h4 className="experience-heading">Experiences:</h4>
                                <div className="experience-card-container">
                                    {getExperiences(trip.TripId).map((experience) => (
                                        <div className="experience-card" key={experience.ExperienceId}>
                                            <h5 className="experience-title">{experience.Title}</h5>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Routes>
                    <Route
                        path={`/trips/${tripId}`}
                        element={
                            <TripSingle
                                trips={trips}
                                experiences={getExperiences(tripId)}
                                handleAddExperience={handleAddExperience}
                                handleDeleteExperience={handleDeleteExperience}
                                handleDeleteTrip={handleDeleteTrip}
                            />
                        }
                    />
                </Routes>
            </div>
    );
}