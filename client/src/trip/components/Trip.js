import { useDispatch, useSelector } from "react-redux";
import { addTrip, deleteTrip } from "../reducers/reducer";
import { useNavigate } from "react-router-dom";
import { deleteExperience } from "../../experience/reducers/reducer";
import TripHandler from "./TripHandler";
import TripViewer from "./TripViewer";
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
      <TripHandler
        handleAddTrip={handleAddTrip}
        handleAddExperience={handleAddExperience}
      />
      <ul>
        {trips.map((trip) => (
          <TripViewer
            key={trip.TripId}
            trip={trip}
            poiData={poiData}
            experiences={experiences}
            handleDeleteExperience={handleDeleteExperience}
            handleAddExperience={handleAddExperience}
            handleDeleteTrip={handleDeleteTrip}
          />
        ))}
      </ul>
    </div>
  );
}
