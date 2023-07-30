import TripDetails from "./TripDetails";
import TripExpViewer from "./TripExpViewer";

const TripPublicViewer = ({
  publicTrips,
  poi,
  visible,
  getExperiences,
  showTripDetails,
}) => {
  return (
    <div className="card-container">
      {publicTrips.map((trip) => (
        <div className="trip-item" key={trip.TripId}>
          <h3 className="trip-title">
            TRIP - {trip.Title}{" "}
            <img className="countryFlag"
              src={`https://flaglog.com/codes/official-ratio-120px/${trip.Countries}.png`}
              style={{ width: "40px" }}
              alt="country flag"
            />
          </h3>
          <button onClick={() => showTripDetails(trip.TripId)}>
            {visible === trip.TripId ? "Hide Details" : "View Details"}
          </button>
          {visible === trip.TripId && <TripDetails trip={trip} poi={poi} />}
          {visible === trip.TripId && (
            <TripExpViewer
              trip={trip}
              getExperiences={getExperiences}
              handleDeleteExperience={null}
            />
          )}
        </div>
      ))}
    </div>
  );
};
export default TripPublicViewer;
