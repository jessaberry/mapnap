const TripDetails = ({ trip }) => {
  return (
    <div>
      <p> </p>
      <p>Trip ID: {trip.TripId}</p>
      <p>User ID: {trip.UserId}</p>
      <p>Starting Point of Interest ID: {trip.StartingPointOfInterestId}</p>
      <p>Ending Point of Interest ID: {trip.EndingPointOfInterestId}</p>
      <p>Countries: {trip.Countries}</p>
      <p>Cover Media File: {trip.CoverMediaFileId}</p>
    </div>
  );
};

export default TripDetails;
