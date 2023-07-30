import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import countries from "./countries.js";
/*
Source: https://mui.com/material-ui/react-autocomplete/
with slight modifications
*/

export default function selectCountry({ value, onChange }) {
    const handleCountryChange = (event, newValue) => {
        onChange(newValue);
    };
    return (
        <Autocomplete
            sx={{ width: 300 }}
            options={countries}
            autoHighlight
            value={countries.find((country) => country.code === value) || null}
            onChange={handleCountryChange}
            renderOption={(props, option) => (
                <Box
                    component="li"
                    sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                    {...props}
                >
                    <img
                        loading="lazy"
                        width="20"
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        alt={`${option.label}`}
                    />
                    {option.label}
                </Box>
            )}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Country"
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password", // disable autocomplete and autofill
                    }}
                />
            )}
        />
    );
}