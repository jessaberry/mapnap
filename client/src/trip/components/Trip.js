import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrip, deleteTrip } from "../reducers/reducer";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
import { deleteExperience } from "../../experience/reducers/reducer";
import tripData from "../../data/trip.json";
import poiData from "../../data/poi.json";

export default function Trip() {
  const trips = useSelector((state) => state.trip.trips) || tripData;
  const experiences = useSelector((state) => state.exp.experiences);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  return (
    <div>
      <h1>Trip Manager</h1>
      <Form
        handleAddTrip={handleAddTrip}
        handleAddExperience={handleAddExperience}
      />
      <ul className="trip-list">
        {trips.map((trip) => (
          <li key={trip.TripId} className="trip-item">
            <h3>TRIP name: {trip.Title}</h3>
            <p>TRIP description: {trip.Description}</p>
            <p>
              TRIP starting point of interest:{" "}
              {
                poiData.find(
                  (poi) =>
                    poi.PointOfInterestId === trip.StartingPointOfInterestId
                )?.Title
              }
            </p>
            <p>
              TRIP ending point of interest:{" "}
              {
                poiData.find(
                  (poi) =>
                    poi.PointOfInterestId === trip.EndingPointOfInterestId
                )?.Title
              }
            </p>
            <p>TRIP countries: {trip.Countries}</p>
            <p>Experiences:</p>
            <ul>
              {experiences
                .filter((exp) => exp.tripID === trip.TripId)
                .map((exp) => (
                  <li key={exp.uuid}>
                    <h3>EXPERIENCE name: {exp.name}</h3>
                    <p>EXPERIENCE activity: {exp.activity}</p>
                    <p>EXPERIENCE from: {exp.datefrom.toString()}</p>
                    <p>EXPERIENCE to: {exp.dateto.toString()}</p>
                    <p>EXPERIENCE address: {exp.address}</p>
                    <p>EXPERIENCE description: {exp.description}</p>
                    <button
                      type="button"
                      onClick={() => handleDeleteExperience(exp.uuid)}
                    >
                      Delete Experience
                    </button>
                  </li>
                ))}
            </ul>
            <div>
              <button
                type="button"
                onClick={() => handleAddExperience(trip.TripId)}
              >
                Add Experience
              </button>
            </div>
            <div>
              <button type="button" onClick={() => handleDeleteTrip(trip)}>
                Delete Trip
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
