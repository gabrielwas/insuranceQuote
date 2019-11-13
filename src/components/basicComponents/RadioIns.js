import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";

const useStyles = makeStyles(theme => ({
  radioLabel: {
    textAlign: "left"
  }
}));

const SelectIns = ({ fieldName, label, value, handleChange, items }) => {
  const classes = useStyles();

  return (
    <>
      <FormLabel component="legend" className={classes.radioLabel}>
        {label}
      </FormLabel>
      <RadioGroup
        aria-label={fieldName}
        name={fieldName}
        value={value || "No"}
        onChange={handleChange}
      >
        {items.map(item => (
          <FormControlLabel
            key={item.label}
            value={item.label}
            control={<Radio />}
            label={item.label}
          />
        ))}
      </RadioGroup>
    </>
  );
};

export default SelectIns;
