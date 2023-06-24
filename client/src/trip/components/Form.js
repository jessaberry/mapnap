import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ handleAddTrip }) => {
  const [data, setData] = useState("");
  const [showInput, setShowInput] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((data) => ({ ...data, [name]: value }));
  };

  const handleShowTrip = (e) => {
    e.preventDefault();
    setShowInput(true);
  };

  const handleAddNewTrip = (e) => {
    e.preventDefault();
    const tripId = uuidv4();
    const trip = { ...data, TripId: tripId };
    handleAddTrip(trip);
    setShowInput(false);
    setData("");
  };

  return (
    <div>
      <form>
        <button type="button" onClick={handleShowTrip}>
          Make New Trip
        </button>
        {showInput && (
          <>
            <input
              type="text"
              name="UserId"
              value={data.UserId}
              onChange={handleChange}
              placeholder="Enter user ID or login"
            />
            <input
              type="text"
              name="Title"
              value={data.Title}
              onChange={handleChange}
              placeholder="Enter trip title"
            />
            <input
              type="text"
              name="Description"
              value={data.Description}
              onChange={handleChange}
              placeholder="Enter trip description"
            />
            <input
              type="text"
              name="StartingPointOfInterestId"
              value={data.StartingPointOfInterestId}
              onChange={handleChange}
              placeholder="Enter starting point"
            />
            <input
              type="text"
              name="EndingPointOfInterestId"
              value={data.EndingPointOfInterestId}
              onChange={handleChange}
              placeholder="Enter ending point"
            />
            <input
              type="text"
              name="Countries"
              value={data.Countries}
              onChange={handleChange}
              placeholder="Enter country"
            />
            <input
              type="text"
              name="CoverMediaFileId"
              value={data.CoverMediaFileId}
              onChange={handleChange}
              placeholder="Enter image"
            />
            <button type="submit" onClick={handleAddNewTrip}>
              Add Trip
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default Form;
