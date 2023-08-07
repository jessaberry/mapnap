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
  handleEditTrip,
  handleDeleteTrip,
}) => {
  return (
    <div className="card-container">
      {trips.map((trip) => (
        <div className="trip-item" key={trip.TripId}>
          <h3 className="trip-title">
            TRIP - {trip.Title}{" "}
            <img
              className="countryFlag"
              src={`https://flaglog.com/codes/official-ratio-120px/${trip.Countries}.png`}
              style={{ width: "40px" }}
              alt="country flag"
            />
          </h3>
          <button onClick={() => showTripDetails(trip.TripId)}>
            {visible === trip.TripId ? "Hide Details" : "View Details"}
          </button>
          {visible === trip.TripId && (
            <button onClick={() => handleEditTrip(trip)}>Edit Trip</button>
          )}
          {visible === trip.TripId && (
            <button onClick={() => handleDeleteTrip(trip)}>Delete Trip</button>
          )}
          {/* <div>
            {visible === trip.TripId && (
              <button onClick={() => handleAddExperience(trip)}>
                Add An Experience
              </button>
            )}
          </div> */}
          {visible === trip.TripId && <TripDetails trip={trip} poi={poi} />}
          {visible === trip.TripId && (
            <TripExpViewer
              trip={trip}
              poi={poi}
              getExperiences={getExperiences}
              handleAddExperience={handleAddExperience}
              handleDeleteExperience={handleDeleteExperience}
            />
          )}
        </div>
      ))}
    </div>
  );
};
export default TripPersonalViewer;
