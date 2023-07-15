import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTripAsync, deleteTripAsync, getTripsAsync } from "../reducers/thunksTrip";
import { useNavigate, Link, Route, Routes, useParams } from "react-router-dom";
import TripHandler from "./TripHandler";
import TripSingle from "./TripSingle";
import Navbar from "../../Navbar";
import React from "react";
import { deleteExperienceAsync } from "../../experience/reducers/thunksExperience";
import "./styles.css";

export default function Trip() {
  const trips = useSelector((state) => state.trip.trips);
  const experiences = useSelector((state) => state.exp.experiences);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { tripId } = useParams();

  useEffect(() => {
    dispatch(getTripsAsync());
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

  const getExperiences = (tripID) => {
    return experiences
      .filter((exp) => exp.TripId === tripID)
      .sort(
        (a, b) =>
          new Date(a.StartingLocalDateTime) - new Date(b.StartingLocalDateTime)
      );
  };

  return (
    <div>
      <Navbar />
      <h1>Trip Manager</h1>
      <TripHandler
        handleAddTrip={handleAddTrip}
        handleAddExperience={handleAddExperience}
      />
      <div className="card-container"> {/* Apply the card container style */}
        {trips.map((trip) => (
          <div className="trip-item" key={trip.TripId}> {/* Apply the trip item card style */}
            <h3 className="trip-title">TRIP - {trip.Title}</h3>
            <p className="trip-info">TRIP id: {trip.TripId}</p>
            <Link to={`/trips/${trip.TripId}`}>
              <button>View Trip</button>
            </Link>
          </div>
        ))}
      </div>
      <Routes>
        <Route
          path={`/trips/${tripId}`}
          element={
            <TripSingle
              tripID={tripId}
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
