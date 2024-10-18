import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  IconButton,
  InputAdornment,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const UniversalDropdown = ({
  label,
  value,
  options,
  onChange,
  fullWidth = true,
  minWidth = 200,
}) => {
  // Handler to clear the dropdown value
  const handleClear = () => {
    onChange({ target: { value: "" } }); // Clears the value
  };

  return (
    <FormControl fullWidth={fullWidth} variant="outlined" sx={{ minWidth }}>
      <InputLabel id={`${label}-label`}>{label}</InputLabel>
      <Select
        labelId={`${label}-label`}
        value={value}
        onChange={onChange}
        label={label}
        endAdornment={
          value && (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                onClick={handleClear}
                aria-label="clear selection"
                size="small"
              >
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          )
        }
      >
        {options?.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default UniversalDropdown;
