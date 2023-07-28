const TripDetails = ({ trip }) => {
  const image = trip.CoverMediaFileId; // TODO: replace this with Eric's ID
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
      <p>Trip ID: {trip.TripId}</p>
      <p>User ID: {trip.UserId}</p>
      <p>Starting Point of Interest ID: {trip.StartingPointOfInterestId}</p>
      <p>Ending Point of Interest ID: {trip.EndingPointOfInterestId}</p>
      <p>Countries: {trip.Countries}</p>
    </div>
  );
};

export default TripDetails;
