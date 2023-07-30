import FormDateTimePicker from "./FormDateTimePicker";
import FormSelect from "./FormSelect";
import TextField from "@mui/material/TextField";
import "./Experience.css";

const ExperienceForm = ({ data, handleChange }) => {
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
        <TextField
          name="StartingPointOfInterestId"
          label="Starting POI"
          placeholder="1234 Burger St."
          value={data.StartingPointOfInterestId}
          onChange={handleChange}
          sx={{ width: "50%", mb: 2 }}
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
