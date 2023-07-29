const TripDetails = ({ trip, poi }) => {
  const image = trip.CoverMediaFileId; // TODO: replace this with Eric's ID
  const getPOI = (poiID) => {
    const pointOfInterest = poi.find(
      (item) => item.PointOfInterestId === poiID
    );
    return pointOfInterest;
  };
  return (
    <div>
      <p> </p>
      <a href={image} target="_blank" rel="noreferrer">
        <img
          src={image}
          alt="Cover Media File"
          style={{ width: "200px", height: "auto" }}
        />
      </a>
      <p> </p>
      {/* <p>Trip ID: {trip.TripId}</p>
      <p>User ID: {trip.UserId}</p> */}
      <p>Notes: {trip.Description}</p>
      <p>Location: {getPOI(trip.StartingPointOfInterestId).Title}</p>
      <p>{getPOI(trip.StartingPointOfInterestId).Description}</p>
      {/* <p>Ending location:   {getTitle(trip.EndingPointOfInterestId)}</p> */}
      <p>Country: {trip.Countries}</p>
    </div>
  );
};

export default TripDetails;
