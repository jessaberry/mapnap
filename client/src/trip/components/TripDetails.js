const TripDetails = ({ trip }) => {
  const image = trip.CoverMediaFileId; // TODO: replace this with Eric's ID
  return (
    <div>
      <p> </p>
      Cover Media File:{" "}
      <a href={image} target="_blank" rel="noopener noreferrer">
        <img src={image} alt="Cover Media File" />
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
