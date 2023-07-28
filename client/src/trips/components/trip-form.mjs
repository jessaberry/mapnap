import { useState } from "react";
import initialTrip from "../reducers/initialTrip";

const TripForm = ({ handleAddTrip }) => {
  const [data, setData] = useState(initialTrip);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tripId = uuidv4();
    const trip = { ...data, TripId: tripId };
    handleAddTrip(trip);
    setData("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="Title"
        value={data.Title}
        onChange={handleChange}
        placeholder="Enter trip name"
      />
      <input
        type="text"
        name="Description"
        value={data.Description}
        onChange={handleChange}
        placeholder="Enter trip description"
      />
      <input
        type="number"
        name="StartingPointOfInterestId"
        value={data.StartingPointOfInterestId}
        onChange={handleChange}
        placeholder="Enter starting point"
      />
      <input
        type="number"
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
      <button type="submit">Add Trip</button>
    </form>
  );
};

export default TripForm;
