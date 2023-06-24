import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrip, deleteTrip } from "../reducers/reducer";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
import { deleteExperience } from "../../experience/reducers/reducer";

export default function Trip() {
  const trips = useSelector((state) => state.trip.trips);
  const experiences = useSelector((state) => state.exp.experiences);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddTrip = (trip) => {
    dispatch(addTrip(trip));
  };

  const handleDeleteTrip = (trip) => {
    dispatch(deleteTrip(trip.uuid));
  };

  const handleAddExperience = (tripUUID) => {
    navigate("/experience", { state: { tripUUID } });
  };

  const handleDeleteExperience = (expID) => {
    dispatch(deleteExperience(expID));
  };

  return (
    <div>
      <h1>Add a Trip</h1>
      <Form
        handleAddTrip={handleAddTrip}
        handleAddExperience={handleAddExperience}
      />
      <ul>
        {trips.map((trip) => (
          <li key={trip.uuid}>
            <h3>TRIP name: {trip.title}</h3>
            <p>TRIP id: {trip.uuid}</p>
            <p>TRIP user: {trip.userID}</p>
            <p>TRIP description: {trip.description}</p>
            <p>TRIP isPublic: {trip.isPublic}</p>
            <p>Experiences:</p>
            <ul>
              {experiences
                .filter((exp) => exp.tripID === trip.uuid)
                .map((exp) => (
                  <li key={exp.uuid}>
                    <h3>EXPERIENCE name: {exp.name}</h3>
                    <p>EXPERIENCE image: {exp.image}</p>
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
                onClick={() => handleAddExperience(trip.uuid)}
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
