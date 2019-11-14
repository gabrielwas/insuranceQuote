import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles({
  paper: {
    width: "100%",
    overflowX: "auto"
  },
  grid: {
    flexGrow: 1
  },
  table: {
    minWidth: 650
  }
});

const TableIns = ({ children, tableName }) => {
  const classes = useStyles();
  return (
    <Grid container key={tableName} className={classes.grid} spacing={4}>
      <Grid item xs={12}>
        <Chip label={tableName} />
      </Grid>

      <Grid item xs={12}>
        <Container maxWidth="md">
          <Paper className={classes.paper}>
            <Table className={classes.table} aria-label="simple table">
              {children}
            </Table>
          </Paper>
        </Container>
      </Grid>
    </Grid>
  );
};

export default TableIns;
