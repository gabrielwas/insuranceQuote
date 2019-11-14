import React from "react";
import { useStateValue } from "../../state/stateInsurance";
import { Grid } from "@material-ui/core/Grid";
import { layoutVisitor, isNotEmpty } from "../util";

const Fields = ({ pageName }) => {
  const { state } = useStateValue();

  return (
    <Grid container justify="flex-start" spacing={3}>
      {layoutVisitor(state, pageName, (row, i, column, j) => {
        <Grid item xs={column.columnSize} key={i + "" + j}>
          {isNotEmpty(column) ? <></> : <></>}
        </Grid>;
      })}
    </Grid>
  );
};

export default Fields;
