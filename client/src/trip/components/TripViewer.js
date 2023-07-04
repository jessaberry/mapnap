const getPOI = (poiData, tripPOI) => {
    const poi = poiData.find(
        (data) => data.PointOfInterestId === Number(tripPOI)
    );
    return poi ? poi.Title : "";
};

const getActivity = (activityData, tripActivity) => {
  const activity = activityData.find(
      (data) => data.ExperienceTypeId === Number(tripActivity)
  );
  return activity ? activity.Title : "";
};
  
const TripViewer = ({
    trip,
    poiData,
    activityData,
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
        <p>Experiences</p>
        <ul>
          {experiences
            .filter((exp) => exp.TripId === trip.TripId)
            .map((exp) => (
              <li key={exp.ExperienceId}>
                <h3>EXPERIENCE - {exp.Title}</h3>
                <p>EXPERIENCE ID: {exp.ExperienceId}</p>
                <p>EXPERIENCE activity: {getActivity(activityData, exp.ExperienceTypeId)}</p>
                <p>EXPERIENCE from: {exp.StartingLocalDateTime.toString()}</p>
                <p>EXPERIENCE to: {exp.EndingLocalDateTime.toString()}</p>
                <p>EXPERIENCE address: {getPOI(poiData, trip.StartingPointOfInterestId)}</p>
                <p>EXPERIENCE description: {exp.Description}</p>
                <button
                  type="button"
                  onClick={() => handleDeleteExperience(exp.ExperienceId)}
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
  