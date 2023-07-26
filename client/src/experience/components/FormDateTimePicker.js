import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import TextField from "@mui/material/TextField";

const FormDateTimePicker = ({ value, onChange, label }) => {
  const minDate = label === "dateTo" ? value : undefined;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        label={label}
        value={value}
        onChange={onChange}
        minDate={minDate}
        textField={(props) => <TextField {...props} />}
        sx={{ width: "50%", mb: 2 }}
      />
    </LocalizationProvider>
  );
};

export default FormDateTimePicker;
