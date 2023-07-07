import { useDispatch, useSelector } from "react-redux";
import { addTrip, deleteTrip } from "../reducers/reducer";
import { useNavigate } from "react-router-dom";
import { deleteExperience } from "../../experience/reducers/reducer";
import TripHandler from "./TripHandler";
import TripViewer from "./TripViewer";
import poiData from "../../data/poi.json";
import activityData from "../../data/experiencetype.json";

export default function Trip() {
  const trips = useSelector((state) => state.trip.trips);
  const experiences = useSelector((state) => state.exp.experiences);
  const expenses = useSelector((state) => state.exp.expenses);
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

  const getExperiences = (tripID) => {
    return experiences
      .filter((exp) => exp.TripId === tripID)
      .sort(
        (a, b) =>
          new Date(a.StartingLocalDateTime) - new Date(b.StartingLocalDateTime)
      );
  };

  // const handleSetTripDate = (tripID, date, type) => {
  //   const updatedTrips = trips.map((trip) => {
  //     if (trip.TripId === tripID) {
  //       switch (type) {
  //         case "start":
  //           return { ...trip, StartingLocalDateTime: date };
  //         case "end":
  //           return { ...trip, EndingDateTime: date };
  //         default:
  //           return trip;
  //       }
  //     }
  //     return trip;
  //   });
  //   dispatch(updateTrip(updatedTrips));
  // };

  // trips.forEach((trip) => {
  //   const tripExperiences = getExperiences(trip.TripId);
  //   if (tripExperiences.length > 0) {
  //     handleSetTripDate(trip.TripId, tripExperiences[0].StartingLocalDateTime, "start");
  //     handleSetTripDate(
  //       trip.TripId,
  //       tripExperiences[tripExperiences.length - 1].EndingDateTime,
  //       "end"
  //     );
  //   }
  // });

  return (
    <div>
      <h1>Trip Manager</h1>
      <TripHandler
        handleAddTrip={handleAddTrip}
        handleAddExperience={handleAddExperience}
      />
      <ul>
        {trips.map((trip) => {
          const tripExperiences = getExperiences(trip.TripId);
          return (
            <TripViewer
              key={trip.TripId}
              trip={trip}
              experiences={tripExperiences}
              expenses={expenses}
              poiData={poiData}
              activityData={activityData}
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
