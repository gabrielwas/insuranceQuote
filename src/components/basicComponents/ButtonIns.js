import React from "react";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(2)
  }
}));

const ButtonIns = ({ label, handleClick }) => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleClick}
      className={classes.button}
    >
      {label}
    </Button>
  );
};

export default ButtonIns;
