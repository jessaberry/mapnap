const getPOI = (poiData, tripPOI) => {
    const startingPOI = poiData.find(
        (data) => data.PointOfInterestId === Number(tripPOI)
    );
    return startingPOI ? startingPOI.Title : "";
};
  
const TripViewer = ({
    trip,
    poiData,
    experiences,
    handleDeleteExperience,
    handleAddExperience,
    handleDeleteTrip,
  }) => {
    return (
      <li key={trip.TripId} className="trip-item">
        <h3>TRIP - {trip.Title}</h3>
        <p>TRIP description: {trip.Description}</p>
        <p>TRIP starting POI: {getPOI(poiData, trip.StartingPointOfInterestId)}</p>
        <p>TRIP ending POI: {getPOI(poiData, trip.EndingPointOfInterestId)}</p>
        <p>TRIP start date: </p>
        <p>TRIP end date: </p>
        <p>TRIP countries: {trip.Countries}</p>
        <p>Experiences:</p>
        <ul>
          {experiences
            .filter((exp) => exp.tripID === trip.TripId)
            .map((exp) => (
              <li key={exp.uuid}>
                <h3>EXPERIENCE name: {exp.name}</h3>
                <p>EXPERIENCE activity: {exp.activity}</p>
                <p>EXPERIENCE from: {exp.datefrom.toString()}</p>
                <p>EXPERIENCE to: {exp.dateto.toString()}</p>
                <p>EXPERIENCE address: {exp.address}</p>
                <p>EXPERIENCE description: {exp.description}</p>
                <button
                  type="button"
                  onClick={() => handleDeleteExperience(exp.uuid)}
                >
                  Delete Experience
                </button>
              </li>
            ))}
        </ul>
        <div>
          <button
            type="button"
            onClick={() => handleAddExperience(trip.TripId)}
          >
            Add Experience
          </button>
        </div>
        <div>
          <button type="button" onClick={() => handleDeleteTrip(trip)}>
            Delete Trip
          </button>
        </div>
      </li>
    );
  };
  
  export default TripViewer;
  