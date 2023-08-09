import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import initialTrip from "../reducers/initialTrip";
import { TextField } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import SelectCountry from "../../helpers/select-country/select-country.js";
import { useAuth0 } from "@auth0/auth0-react";
import { Autocomplete } from "@mui/material";

const TripForm = ({ handleAddTrip, poi }) => {
  const [data, setData] = useState({ ...initialTrip, IsPublic: true });
  const { user } = useAuth0();
  const userId = user.sub;
  const startPOI =
    poi.find(
      (item) => item.PointOfInterestId === data.StartingPointOfInterestId
    ) || null;
  const endPOI =
    poi.find(
      (item) => item.PointOfInterestId === data.EndingPointOfInterestId
    ) || null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((data) => ({
      ...data,
      [name]: value,
      IsPublic: !data.IsPublic,
    }));
  };

  const handleCountrySelect = (country) => {
    setData((data) => ({ ...data, Countries: country.code }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tripId = uuidv4();
    const trip = { ...data, TripId: tripId, UserId: userId };
    handleAddTrip(trip);
    setData({ ...initialTrip, IsPublic: true });
  };

  const handleStartChange = (event, newValue) => {
    setData((prevData) => ({
      ...prevData,
      StartingPointOfInterestId: newValue ? newValue.PointOfInterestId : "",
    }));
  };

  const handleEndChange = (event, newValue) => {
    setData((prevData) => ({
      ...prevData,
      EndingPointOfInterestId: newValue ? newValue.PointOfInterestId : "",
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        required
        type="text"
        name="Title"
        label="Title"
        value={data.Title}
        onChange={handleChange}
        placeholder="Enter trip name"
      />
      <TextField
        type="text"
        name="Description"
        label="Description"
        value={data.Description}
        onChange={handleChange}
        placeholder="Enter trip description"
      />
      <div className="textfield">
        <Autocomplete
          options={poi}
          getOptionLabel={(option) => option.Title}
          value={startPOI}
          onChange={handleStartChange}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Start Point"
              placeholder="1234 Burger St."
              sx={{ width: "50%", mb: 2 }}
            />
          )}
        />
      </div>
      <div className="textfield">
        <Autocomplete
          options={poi}
          getOptionLabel={(option) => option.Title}
          value={endPOI}
          onChange={handleEndChange}
          renderInput={(params) => (
            <TextField
              {...params}
              label="End Point"
              placeholder="1234 Burger St."
              sx={{ width: "50%", mb: 2 }}
            />
          )}
        />
      </div>
      <SelectCountry
        name="Countries"
        value={data.Countries}
        onChange={handleCountrySelect}
        placeholder="Enter country"
      />
      <TextField
        type="text"
        name="CoverMediaFileId"
        label="Cover Image"
        value={data.CoverMediaFileId}
        onChange={handleChange}
        placeholder="Enter image"
      />
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={!data.IsPublic}
              onChange={handleChange}
              name="IsPublic"
            />
          }
          label="Set Private"
        />
      </FormGroup>
      <button type="submit">Add Trip</button>
    </form>
  );
};

export default TripForm;
