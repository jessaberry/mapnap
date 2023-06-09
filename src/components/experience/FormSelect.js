import { Select, MenuItem } from '@mui/material';

const FormSelect = ({ value, onChange }) => {
  return (
    <Select
      value={value}
      onChange={onChange}
    >
      <MenuItem value="Accommodation">Accommodation</MenuItem>
      <MenuItem value="Attraction">Attraction</MenuItem>
      <MenuItem value="Dining">Dining</MenuItem>
      <MenuItem value="Hotel">Hotel</MenuItem>
      <MenuItem value="Other">Other</MenuItem>
    </Select>
  );
};

export default FormSelect;
