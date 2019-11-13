import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import { isFieldRequired } from "../util";
import { useStateValue } from "../../state/stateInsurance";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    display: "flex",
    minWidth: 120
  }
}));

const FormControlIns = ({ column, children }) => {
  const classes = useStyles();

  const { state } = useStateValue();

  return (
    <FormControl
      required={isFieldRequired(state, column.fieldNames[0])}
      error={state.emptyFields.includes(column.fieldNames[0])}
      className={classes.formControl}
    >
      {children}
    </FormControl>
  );
};

export default FormControlIns;
