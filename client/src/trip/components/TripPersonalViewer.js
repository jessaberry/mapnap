import TripDetails from "./TripDetails";
import TripExpViewer from "./TripExpViewer";

const TripPersonalViewer = ({
  trips,
  poi,
  visible,
  showTripDetails,
  getExperiences,
  handleAddExperience,
  handleDeleteExperience,
  handleDeleteTrip,
}) => {
  return (
    <div className="card-container">
      {trips.map((trip) => (
        <div className="trip-item" key={trip.TripId}>
          <h3 className="trip-title">
            TRIP - {trip.Title}{" "}
            <img
              src={`https://flaglog.com/codes/official-ratio-120px/${trip.Countries}.png`}
              style={{ width: "40px" }}
              alt="country flag"
            />
          </h3>
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
  );
};
export default TripPersonalViewer;
