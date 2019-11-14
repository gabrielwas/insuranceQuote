import React from "react";
import TextIns from "../basicComponents/TextIns";
import { getLabel } from "../util";
import { useStateValue } from "../../state/stateInsurance";
import DateIns from "../basicComponents/DateIns";
import RadioIns from "../basicComponents/RadioIns";
import SelectIns from "../basicComponents/SelectIns";
import CheckboxIns from "../basicComponents/CheckboxIns";

const Field = ({ fieldType, fieldName, page, items }) => {
  const { state, dispatch } = useStateValue();

  const pageCapital = page.charAt(0).toUpperCase() + page.slice(1);

  const onChangeField = e => {
    dispatch({
      type: "update" + pageCapital,
      fieldName: fieldName,
      info: e.target.value
    });
  };

  const onChangeCheckboxField = (e, item) => {
    dispatch({
      type: "update" + pageCapital,
      parentFieldName: fieldName,
      childFieldName: item.value,
      info: e.target.checked
    });
  };

  const onChangeDateField = e => {
    dispatch({
      type: "update" + pageCapital,
      fieldName: fieldName,
      info: e
    });
  };

  switch (fieldType) {
    case "text":
    case "numeric":
      return (
        <TextIns
          fieldName={fieldName}
          label={getLabel(state, fieldName)}
          value={state[page][fieldName]}
          handleChange={onChangeField}
        />
      );

    case "date":
      return (
        <DateIns
          fieldName={fieldName}
          label={getLabel(state, fieldName)}
          value={state[page][fieldName]}
          handleChange={onChangeDateField}
        />
      );

    case "select":
      return (
        <SelectIns
          fieldName={fieldName}
          label={getLabel(state, fieldName)}
          value={state[page][fieldName]}
          handleChange={onChangeField}
          items={items}
        />
      );

    case "radio":
      return (
        <RadioIns
          fieldName={fieldName}
          label={getLabel(state, fieldName)}
          value={state[page][fieldName]}
          handleChange={onChangeField}
          items={items}
        />
      );

    case "checkbox_multiple":
      return (
        <CheckboxIns
          fieldValue={state[page][fieldName]}
          handleChange={onChangeCheckboxField}
          items={items}
        />
      );

    default:
      return <></>;
  }
};

export default Field;
