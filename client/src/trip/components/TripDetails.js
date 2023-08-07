import React from "react";
import countries from "../../helpers/select-country/countries.js";
import "../../styles/App.css";

const TripDetails = ({ trip, poi }) => {
  const image = trip.CoverMediaFileId; // TODO: replace this with Eric's ID
  const getPOI = (poiID) => {
    return poi.find((item) => item.PointOfInterestId === poiID) || null;
  };
  const startPOI = getPOI(trip.StartingPointOfInterestId);
  const country = countries.find((country) => country.code === trip.Countries);

  return (
    <div className="trip-details-container">
      <div className="trip-details-info">
        <a href={image} target="_blank" rel="noreferrer">
          <img
            src={image}
            alt="Cover Media File"
            className="trip-details-image"
          />
        </a>
        <div className="trip-details-text">
          <p className="trip-details-line">Notes: {trip.Description}</p>
          <p className="trip-details-line">
            Location: {country.label} - {startPOI ? startPOI.Title : "N/A"}
          </p>
          <p className="trip-details-line">
            Description: {startPOI ? startPOI.Description : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TripDetails;
