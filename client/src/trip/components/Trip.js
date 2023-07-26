import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTripAsync,
  deleteTripAsync,
  filterTripAsync,
  getTripsAsync,
} from "../reducers/thunksTrip";
import { getExperiencesAsync } from "../../experience/reducers/thunksExperience";
import { useNavigate, Route, Routes } from "react-router-dom";
import TripHandler from "./TripHandler";
import TripSingle from "./TripSingle";
import React from "react";
import { deleteExperienceAsync } from "../../experience/reducers/thunksExperience";
import "./styles.css";
import { PageLayout } from "../../content/template/page-layout.mjs";
import { useAuth0 } from "@auth0/auth0-react";

export default function Trip() {
  const trips = useSelector((state) => state.trip.trips);
  const experiences = useSelector((state) => state.exp.experiences);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(null);
  const { user } = useAuth0();
  const userID = user?.sub;

  const handleAddTrip = (trip) => {
    dispatch(addTripAsync(trip)).then(() => {
      dispatch(getTripsAsync());
    });
  };

  const handleDeleteTrip = (trip) => {
    dispatch(deleteTripAsync(trip.TripId)).then(() => {
      dispatch(getTripsAsync());
    });
  };

  const handleAddExperience = (tripUUID) => {
    navigate("/experience", { state: { tripUUID } });
  };

  const handleDeleteExperience = (expID) => {
    dispatch(deleteExperienceAsync(expID)).then(() => {
      dispatch(getExperiencesAsync());
    });
  };

  const handleFilterTrip = () => {
    if (!userID) {
      console.log("not user");
      return null;
    }
    dispatch(filterTripAsync(userID));
  };

  const showTripDetails = (trip) => {
    setVisible((visibleTrip) => (visibleTrip === trip ? null : trip));
  };

  const getExperiences = (tripID) => {
    return experiences
      .filter((exp) => exp.TripId === tripID)
      .sort(
        (a, b) =>
          new Date(a.StartingLocalDateTime) - new Date(b.StartingLocalDateTime)
      );
  };

  useEffect(() => {
    dispatch(getTripsAsync());
    dispatch(getExperiencesAsync());
    // handleFilterTrip(); // TODO: find out what's wrong with this
  }, [dispatch]);

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
              <button onClick={() => showTripDetails(trip.TripId)}>
                {visible === trip.TripId ? "Hide Details" : "View Details"}
              </button>
              <button onClick={() => handleAddExperience(trip)}>
                Add Experience
              </button>
              <button onClick={() => handleDeleteTrip(trip)}>Delete</button>
              {visible === trip.TripId && (
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
              )}
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
