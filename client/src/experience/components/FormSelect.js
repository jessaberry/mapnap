import { Select, MenuItem } from "@mui/material";
import types from "../../data/experiencetype.json";

const FormSelect = ({ value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <Select value={value} onChange={handleChange} sx={{ width: "50%", mb: 2 }}>
      {types.map((item) => (
        <MenuItem key={item.ExperienceTypeId} value={item.ExperienceTypeId}>
          {item.Title}
        </MenuItem>
      ))}
    </Select>
  );
};

export default FormSelect;
