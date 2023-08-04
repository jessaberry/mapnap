import FormDateTimePicker from "./FormDateTimePicker";
import FormSelect from "./FormSelect";
import TextField from "@mui/material/TextField";
import { Autocomplete } from "@mui/material";
import "./Experience.css";

const ExperienceForm = ({
  data,
  poi,
  handleChange,
  handleStartChange,
  handleEndChange,
}) => {
  const startPOI =
    poi.find(
      (item) => item.PointOfInterestId === data.StartingPointOfInterestId
    ) || null;
  const endPOI =
    poi.find(
      (item) => item.PointOfInterestId === data.EndingPointOfInterestId
    ) || null;
  return (
    <>
      <div className="textfield">
        <TextField
          name="TripId"
          label="Trip"
          value={data.TripId}
          onChange={handleChange}
          sx={{ width: "50%", mb: 2 }}
          InputProps={{ readOnly: true }}
        />
      </div>
      <div className="textfield">
        <TextField
          required
          name="Title"
          label="Name of experience"
          placeholder="Petting Zoo"
          value={data.Title}
          onChange={handleChange}
          sx={{ width: "50%", mb: 2 }}
        />
      </div>
      <div className="custom-select">
        <FormSelect
          required
          name="ExperienceTypeId"
          value={data.ExperienceTypeId}
          onChange={(value) =>
            handleChange({ target: { name: "ExperienceTypeId", value: value } })
          }
          label="Activity"
        />
      </div>
      <div className="custom-date-time">
        <FormDateTimePicker
          label="dateFrom"
          value={data.StartingLocalDateTime}
          onChange={(value) =>
            handleChange({ target: { name: "StartingLocalDateTime", value } })
          }
        />
      </div>
      <div className="custom-date-time">
        <FormDateTimePicker
          label="dateTo"
          value={data.EndingLocalDateTime}
          onChange={(value) =>
            handleChange({ target: { name: "EndingLocalDateTime", value } })
          }
        />
      </div>
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
      <div className="textfield">
        <TextField
          required
          name="Cost"
          label="Cost"
          placeholder="enter cost"
          value={data.Cost}
          onChange={handleChange}
          sx={{ width: "50%", mb: 2 }}
        />
      </div>
      <div className="textfield">
        <TextField
          name="Description"
          label="description"
          placeholder="enter description"
          multiline
          rows={6}
          value={data.Description}
          onChange={handleChange}
          sx={{ width: "50%", mb: 2 }}
        />
      </div>
    </>
  );
};

export default ExperienceForm;
