import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import initialTrip from "../reducers/initialTrip";
import { TextField } from "@mui/material";
import SelectCountry from "./TripFormCountry";

const TripForm = ({ handleAddTrip }) => {
  const [data, setData] = useState(initialTrip);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((data) => ({ ...data, [name]: value }));
  };

  const handleCountrySelect = (country) => {
    console.log(country);
    console.log(country.code);
    setData((data) => ({ ...data, Countries: country.code }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tripId = uuidv4();
    const trip = { ...data, TripId: tripId };
    handleAddTrip(trip);
    setData(initialTrip);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        type="text"
        name="Title"
        value={data.Title}
        onChange={handleChange}
        placeholder="Enter trip name"
      />
      <TextField
        type="text"
        name="Description"
        value={data.Description}
        onChange={handleChange}
        placeholder="Enter trip description"
      />
      <TextField
        type="number"
        name="StartingPointOfInterestId"
        value={data.StartingPointOfInterestId}
        onChange={handleChange}
        placeholder="Enter starting point"
      />
      <TextField
        type="number"
        name="EndingPointOfInterestId"
        value={data.EndingPointOfInterestId}
        onChange={handleChange}
        placeholder="Enter ending point"
      />
      <SelectCountry
        name="Countries"
        value={data.Countries}
        onChange={handleCountrySelect}
        placeholder="Enter country"
      />
      <TextField
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
