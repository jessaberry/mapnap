import countries from "../../point-of-interest/countries";

const TripDetails = ({ trip, poi }) => {
  const image = trip.CoverMediaFileId; // TODO: replace this with Eric's ID
  const getPOI = (poiID) => {
    return poi.find((item) => item.PointOfInterestId === poiID) || null;
  };
  const startPOI = getPOI(trip.StartingPointOfInterestId);
  // const endPOI = getPOI(trip.EndingPointOfInterestId);

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
      <p>Notes: {trip.Description}</p>
      <p>Location: {startPOI ? startPOI.Title : "N/A"}</p>
      <p>{startPOI ? startPOI.Description : "N/A"}</p>
      {/* <p>Ending location:   {getTitle(trip.EndingPointOfInterestId)}</p> */}
    </div>
  );
};

export default TripDetails;
