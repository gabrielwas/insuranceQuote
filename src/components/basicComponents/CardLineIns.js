import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const CardLineIns = ({ label, value, margin }) => {
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      style={{ marginBottom: margin }}
    >
      <Grid item xs={3}>
        <Typography color="textSecondary">{label}</Typography>
      </Grid>

      <Grid item xs={3}>
        <Typography variant="body2" component="p">
          $ {value}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CardLineIns;
