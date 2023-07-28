import TripViewer from "./TripViewer";
import poiData from "../../data/poi.json";
import activityData from "../../data/experiencetype.json";
import { useParams } from "react-router-dom";
import expenseData from "../../data/expenses.json";
import tripData from "../../data/trip.json";

const TripSingle = ({
  experiences,
  handleAddExperience,
  handleDeleteExperience,
  handleDeleteTrip,
}) => {
  const { tripID } = useParams();
  const expenses = expenseData;
  const trip = tripData.find((trip) => trip.TripId === tripID);

  if (!trip) {
    return (
      <div>
        <div>This trip does not exist.</div>
      </div>
    );
  }

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
      <h1>{trip.Title}</h1>
      <TripViewer
        trip={trip}
        experiences={getExperiences(trip.TripId)}
        expenses={expenses}
        poiData={poiData}
        activityData={activityData}
        handleDeleteExperience={handleDeleteExperience}
        handleAddExperience={handleAddExperience}
        handleDeleteTrip={handleDeleteTrip}
      />
    </div>
  );
};

export default TripSingle;
