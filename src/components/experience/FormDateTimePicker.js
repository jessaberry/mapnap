import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';

const FormDateTimePicker = ({ value, onChange }) => {
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          value={value}
          onChange={onChange}
          renderInput={(props) => <TextField {...props} />}
        />
      </LocalizationProvider>
    );
  };
export default FormDateTimePicker;