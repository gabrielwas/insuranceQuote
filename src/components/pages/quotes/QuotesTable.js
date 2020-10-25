import React from "react";
import { useStateValue } from "../../../state/stateInsurance";
import { getSafe, getField } from "../../util";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableIns from "../../basicComponents/TableIns";

const QuotesTable = ({ dataRecords, collectionName }) => {
  const { state } = useStateValue();

  const createField = (
    fieldLabel,
    fieldName,
    fieldIsMultipleCheck,
    fieldChildFieldName
  ) => {
    return {
      label: fieldLabel,
      name: fieldName,
      childFieldName: fieldChildFieldName,
      isCheckboxMultiple: fieldIsMultipleCheck,
    };
  };

  const getfieldLabelsFromPage = () => {
    return state.dataDefinition.dataDefinitionFields
      .map((field) =>
        field.fieldType === "checkbox_multiple"
          ? field.customProperties.options.en_US.map((option) =>
              createField(option.label, field.name, true, option.value)
            )
          : createField(field.label.en_US, field.name, false, undefined)
      )
      .flat(2);
  };

  const getDataRecordValue = (field, dataRecord) => {
    let value = " - ";

    if (getField(state, field.name).fieldType === "checkbox_multiple") {
      if (dataRecord.dataRecordValues[field.name]) {
        value = dataRecord.dataRecordValues[field.name].includes(
          field.childFieldName
        )
          ? "Yes"
          : "No";
      }
    } else {
      value = dataRecord.dataRecordValues[field.name];
    }

    return value.en_US;
  };

  return (
    <TableIns tableName={collectionName}>
      <TableHead>
        <TableRow>
          {getfieldLabelsFromPage().map((field) => (
            <TableCell key={field.label}>{field.label}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {getSafe(() =>
          dataRecords.map((dataRecord) => (
            <TableRow key={dataRecord.id}>
              {getfieldLabelsFromPage().map((field) => (
                <TableCell key={field.childFieldName || field.name}>
                  {getDataRecordValue(field, dataRecord) || " - "}
                </TableCell>
              ))}
            </TableRow>
          ))
        )}
      </TableBody>
    </TableIns>
  );
};

export default QuotesTable;
