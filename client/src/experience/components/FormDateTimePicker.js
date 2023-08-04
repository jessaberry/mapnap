import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";

const FormDateTimePicker = ({ value, onChange, label }) => {
  const dateValue = value instanceof Date ? value : new Date(value);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        label={label}
        value={dateValue}
        onChange={(newValue) =>
          onChange({ target: { name: label, value: newValue.toISOString() } })
        }
        sx={{ width: "50%", mb: 2 }}
      />
    </LocalizationProvider>
  );
};
export default FormDateTimePicker;
