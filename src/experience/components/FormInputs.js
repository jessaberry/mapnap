import FormDateTimePicker from "./FormDateTimePicker";
import FormSelect from "./FormSelect";
import TextField from "@mui/material/TextField";
import "./Experience.css";

const FormInputs = ({ data, handleChange }) => {
  return (
    <>
      <div className="textfield">
        <TextField
          name="name"
          label="Name"
          placeholder="Firstname Lastname"
          value={data.name}
          onChange={handleChange}
          sx={{ width: "50%", mb: 2 }}
        />
      </div>
      <div className="textfield">
        <TextField
          name="email"
          label="Email/URL"
          placeholder="yourhandle@email.com"
          value={data.email}
          onChange={handleChange}
          sx={{ width: "50%", mb: 2 }}
        />
      </div>
      <div className="custom-select">
        <FormSelect
          name="activity"
          value={data.activity}
          onChange={(value) =>
            handleChange({ target: { name: "activity", value: value } })
          }
          label="Activity"
        />
      </div>
      <div className="custom-date-time">
        <FormDateTimePicker
          label="dateFrom"
          value={data.datefrom}
          onChange={(value) =>
            handleChange({ target: { name: "datefrom", value } })
          }
        />
      </div>
      <div className="custom-date-time">
        <FormDateTimePicker
          label="dateTo"
          value={data.dateTo}
          onChange={(value) =>
            handleChange({ target: { name: "dateto", value } })
          }
        />
      </div>
      <div className="textfield">
        <TextField
          name="address"
          label="Address"
          placeholder="1234 Burger St."
          value={data.address}
          onChange={handleChange}
          sx={{ width: "50%", mb: 2 }}
        />
      </div>
      <div className="textfield">
        <TextField
          name="description"
          label="Description"
          placeholder="enter description"
          multiline
          rows={6}
          value={data.description}
          onChange={handleChange}
          sx={{ width: "50%", mb: 2 }}
        />
      </div>
    </>
  );
};

export default FormInputs;
