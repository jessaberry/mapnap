import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTripAsync, deleteTripAsync, getTripsAsync } from "../reducers/thunksTrip";
import { useNavigate, Link, Route, Routes, useParams } from "react-router-dom";
import TripHandler from "./TripHandler";
import TripSingle from "./TripSingle";
import React from "react";
import { deleteExperienceAsync } from "../../experience/reducers/thunksExperience";
import "./styles.css";
import experienceData from "../../data/experience.json";
import {PageLayout} from "../../content/template/page-layout.mjs";

export default function Trip() {
  const trips = useSelector((state) => state.trip.trips);
  const experiences = experienceData; //STUB
  // const experiences = useSelector((state) => state.exp.experiences);
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
  console.log(trips);
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
</PageLayout>
  );
}