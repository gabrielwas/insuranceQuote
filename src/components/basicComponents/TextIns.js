import React from "react";
import TextField from "@material-ui/core/TextField";

const TextIns = ({ fieldName, label, value, handleChange }) => {
  return (
    <TextField
      id={fieldName}
      label={label}
      value={value || ""}
      margin="normal"
      fullWidth
      onChange={handleChange}
    />
  );
};

export default TextIns;
