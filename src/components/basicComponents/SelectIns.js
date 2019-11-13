import React from "react";

import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

const SelectIns = ({ fieldName, label, value, handleChange, items }) => {
  return (
    <>
      <InputLabel htmlFor={fieldName}>{label}</InputLabel>
      <Select
        value={value || ""}
        inputProps={{
          name: fieldName,
          id: fieldName
        }}
        onChange={handleChange}
      >
        {items.map(item => (
          <MenuItem key={item.label} value={item.label}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default SelectIns;
