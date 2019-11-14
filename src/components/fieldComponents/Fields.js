import React from "react";
import { useStateValue } from "../../state/stateInsurance";
import {
  layoutVisitor,
  isNotEmpty,
  getFieldType,
  getFieldOptions
} from "../util";
import Field from "./Field";
import Grid from "@material-ui/core/Grid";
import FormControlIns from "../basicComponents/FormControlIns";

const Fields = ({ pageName }) => {
  const { state } = useStateValue();

  return (
    <Grid container justify="flex-start" spacing={3}>
      {layoutVisitor(state, pageName, (row, i, column, j) => (
        <Grid item xs={column.columnSize} key={i + "" + j}>
          {isNotEmpty(column) ? (
            <FormControlIns column={column}>
              <Field
                fieldType={getFieldType(state, column.fieldNames[0])}
                fieldName={column.fieldNames[0]}
                page={pageName}
                items={getFieldOptions(state, column.fieldNames[0])}
              />
            </FormControlIns>
          ) : (
            <></>
          )}
        </Grid>
      ))}
    </Grid>
  );
};

export default Fields;
