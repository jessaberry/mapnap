import { Select, MenuItem } from "@mui/material";

const FormSelect = ({ value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <Select value={value} onChange={handleChange}>
      <MenuItem value="Accommodation">Accommodation</MenuItem>
      <MenuItem value="Attraction">Attraction</MenuItem>
      <MenuItem value="Dining">Dining</MenuItem>
      <MenuItem value="Hotel">Hotel</MenuItem>
      <MenuItem value="Other">Other</MenuItem>
    </Select>
  );
};

export default FormSelect;
