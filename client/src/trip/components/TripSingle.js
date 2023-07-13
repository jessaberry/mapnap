import { useSelector } from "react-redux";
import TripViewer from "./TripViewer";
import poiData from "../../data/poi.json";
import activityData from "../../data/experiencetype.json";
import { useParams } from "react-router-dom";

const TripSingle = ({
  experiences,
  handleAddExperience,
  handleDeleteExperience,
  handleDeleteTrip,
}) => {
  const { tripID } = useParams();
  const trips = useSelector((state) => state.trip.trips) || [];
  const expenses = useSelector((state) => state.exp.expenses) || [];
  const trip = trips.find((trip) => trip.TripId === tripID);

  if (!trip) {
    return <div>This trip does not exist.</div>;
  }

  return (
    <div>
      <h1>{trip.Title}</h1>
      <TripViewer
        trip={trip}
        experiences={experiences}
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
