import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTripAsync,
  deleteTripAsync,
  filterTripAsync,
  getTripsAsync,
} from "../reducers/thunksTrip";
import { getExperiencesAsync } from "../../experience/reducers/thunksExperience";
import { useNavigate, Link, Route, Routes } from "react-router-dom";
import TripHandler from "./TripHandler";
import TripSingle from "./TripSingle";
import React from "react";
import { deleteExperienceAsync } from "../../experience/reducers/thunksExperience";
import "./styles.css";
import { PageLayout } from "../../content/template/page-layout.mjs";

export default function Trip() {
  const trips = useSelector((state) => state.trip.trips);
  const experiences = useSelector((state) => state.exp.experiences);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTripsAsync());
    dispatch(getExperiencesAsync());
  }, [dispatch]);

  const handleAddTrip = (trip) => {
    dispatch(addTripAsync(trip));
  };

  const handleDeleteTrip = (trip) => {
    dispatch(deleteTripAsync(trip.TripId));
  };

  const handleAddExperience = (tripUUID) => {
    navigate("/experience", { state: { tripUUID } });
  };

  const handleDeleteExperience = (expID) => {
    dispatch(deleteExperienceAsync(expID));
  };

  const handleFilterTrip = (tripUUID) => {
    const trip = trips.find((trip) => trip.TripId === tripUUID);
    dispatch(filterTripAsync(tripUUID));
    navigate(`/trips/${trip.TripId}`, { state: { tripUUID } });
  };

  const getExperiences = (tripID) => {
    return experiences
      .filter((exp) => exp.TripId === tripID)
      .sort(
        (a, b) =>
          new Date(a.StartingLocalDateTime) - new Date(b.StartingLocalDateTime)
      );
  };

  return (
    <PageLayout>
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
              <div className="trip-info">TRIP id: {trip.TripId}</div>
              <Link to={`/trips/${trip.TripId}`}>
                <button onClick={() => handleFilterTrip(trip.TripId)}>
                  View Details
                </button>
              </Link>
              <button onClick={() => handleAddExperience(trip)}>
                Add Experience
              </button>
              <button onClick={() => handleDeleteTrip(trip)}>Delete</button>
              <div className="experience-list">
                <div className="experience-card-container">
                  {getExperiences(trip.TripId).map((experience) => (
                    <div
                      className="experience-card"
                      key={experience.ExperienceId}
                    >
                      <h5 className="experience-title">{experience.Title}</h5>
                      <p>Experience ID: {experience.ExperienceId}</p>
                      <button
                        onClick={() =>
                          handleDeleteExperience(experience.ExperienceId)
                        }
                      >
                        Delete Experience
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <Routes>
          <Route path={`/trips/:tripId`} element={<TripSingle />} />
        </Routes>
      </div>
    </PageLayout>
  );
}
