import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
});

const TableIns = ({ children }) => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Paper className={classes.root}>
        <Table className={classes.table} aria-label="simple table">
          {children}
        </Table>
      </Paper>
    </Container>
  );
};

export default TableIns;
