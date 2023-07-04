import { useDispatch, useSelector } from "react-redux";
import { addTrip, deleteTrip } from "../reducers/reducer";
import { useNavigate } from "react-router-dom";
import { deleteExperience } from "../../experience/reducers/reducer";
import TripHandler from "./TripHandler";
import TripViewer from "./TripViewer";
import tripData from "../../data/trip.json";
import poiData from "../../data/poi.json";
import expData from "../../data/experience.json";
import activityData from "../../data/experiencetype.json";

export default function Trip() {
  const trips = useSelector((state) => state.trip.trips) || tripData;
  const experiences = useSelector((state) => state.exp.experiences) || expData;
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
        {trips.map((trip) => {
          const filteredExperiences = experiences
            .filter((exp) => exp.TripId === trip.TripId)
            .sort((a, b) => new Date(a.StartingLocalDateTime) - new Date(b.StartingLocalDateTime));
          return (
            <TripViewer
              key={trip.TripId}
              trip={trip}
              poiData={poiData}
              activityData={activityData}
              experiences={filteredExperiences}
              handleDeleteExperience={handleDeleteExperience}
              handleAddExperience={handleAddExperience}
              handleDeleteTrip={handleDeleteTrip}
            />
          );
        })}
      </ul>
    </div>
  );
}
