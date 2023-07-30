import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PageLayout } from "../../content/template/page-layout.mjs";
import { useAuth0 } from "@auth0/auth0-react";
import {
  addTripAsync,
  deleteTripAsync,
  getTripsByUserIdAsync,
  getPOIAsync,
  getOtherPublicTripsAsync,
} from "../reducers/thunksTrip";
import {
  getExperiencesAsync,
  deleteExperienceAsync,
} from "../../experience/reducers/thunksExperience";
import { useNavigate } from "react-router-dom";
import TripHandler from "./TripHandler";
import "./styles.css";

export default function Trip() {
  const experiences = useSelector((state) => state.exp.experiences);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(null);
  const { user } = useAuth0();
  const userID = user?.sub;
  const trips = useSelector((state) => state.trip.trips);
  const publicTrips = useSelector((state) => state.trip.public);
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
    dispatch(getOtherPublicTripsAsync(userID));
    dispatch(getExperiencesAsync());
    dispatch(getPOIAsync());
  }, [dispatch, userID]);

  return (
    <PageLayout>
      <div>
        <h2>Dashboard</h2>
        <TripHandler
          trips={trips}
          publicTrips={publicTrips}
          poi={poi}
          visible={visible}
          getExperiences={getExperiences}
          handleAddTrip={handleAddTrip}
          handleDeleteTrip={handleDeleteTrip}
          handleAddExperience={handleAddExperience}
          handleDeleteExperience={handleDeleteExperience}
          showTripDetails={showTripDetails}
        />
      </div>
    </PageLayout>
  );
}
