import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PageLayout } from "../../content/template/page-layout.mjs";
import { useAuth0 } from "@auth0/auth0-react";
import {
  addTripAsync,
  deleteTripAsync,
  getTripsByUserIdAsync,
  getPOIAsync,
} from "../reducers/thunksTrip";
import {
  getExperiencesAsync,
  deleteExperienceAsync,
} from "../../experience/reducers/thunksExperience";
import { useNavigate, Route, Routes } from "react-router-dom";
import TripHandler from "./TripHandler";
import TripDetails from "./TripDetails";
import "./styles.css";

import TripExpViewer from "./TripExpViewer";

export default function Trip() {
  const experiences = useSelector((state) => state.exp.experiences);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(null);
  const { user } = useAuth0();
  const userID = user?.sub;
  const trips = useSelector((state) => state.trip.trips);
  const poi = useSelector((state) => state.trip.poi);

  const handleAddTrip = (trip) => {
    const tripWithUserID = {
      ...trip,
      UserId: userID,
    };
    dispatch(addTripAsync(tripWithUserID)).then(() => {
      dispatch(getTripsByUserIdAsync(userID));
    });
  };

  const handleDeleteTrip = (trip) => {
    dispatch(deleteTripAsync(trip.TripId)).then(() => {
      dispatch(getTripsByUserIdAsync(userID));
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
    dispatch(getTripsByUserIdAsync(userID));
    dispatch(getExperiencesAsync());
    dispatch(getPOIAsync());
  }, [dispatch, userID]);

  return (
    <PageLayout>
      <div>
        <h2>Dashboard</h2>
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
              {visible === trip.TripId && <TripDetails trip={trip} poi={poi} />}
              {visible === trip.TripId && (
                <TripExpViewer
                  trip={trip}
                  getExperiences={getExperiences}
                  handleDeleteExperience={handleDeleteExperience}
                />
              )}
            </div>
          ))}
        </div>
        <h2>Other people's public trips</h2>
        <Routes>
          <Route path={`/trips/:tripId`} />
        </Routes>
      </div>
    </PageLayout>
  );
}
