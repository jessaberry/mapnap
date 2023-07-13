import { useDispatch, useSelector } from "react-redux";
import { addTrip, deleteTrip } from "../reducers/reducer";
import { useNavigate, Link, Route, Routes, useParams } from "react-router-dom";
import { deleteExperience } from "../../experience/reducers/reducer";
import TripHandler from "./TripHandler";
import TripSingle from "./TripSingle";
import Navbar from "../../Navbar";
import React from "react";

export default function Trip() {
  const trips = useSelector((state) => state.trip.trips);
  const experiences = useSelector((state) => state.exp.experiences);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { tripId } = useParams();

  const handleAddTrip = (trip) => {
    dispatch(addTrip(trip));
  };

  const handleDeleteTrip = (trip) => {
    dispatch(deleteTrip(trip.TripId));
  };

  const handleAddExperience = (tripUUID) => {
    navigate("/experience", { state: { tripUUID } });
  };

  const handleDeleteExperience = (expID) => {
    dispatch(deleteExperience(expID));
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
      <ul>
        {trips.map((trip) => (
          <li key={trip.TripId}>
            <h3>TRIP - {trip.Title}</h3>
            <p>TRIP id: {trip.TripId}</p>
            <Link to={`/trip/${trip.TripId}`}>
              <button>View Trip</button>
            </Link>
          </li>
        ))}
      </ul>
      <Routes>
        <Route path="/trip" element={<Trip trips={trips} />}></Route>
        <Route
          path={`/trip/${tripId}`}
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
