import React from "react";

import FormControlLabel from "@material-ui/core/FormControlLabel";

import Checkbox from "@material-ui/core/Checkbox";
import { getSafe } from "../util";

const CheckboxIns = ({ fieldValue, handleChange, items }) => {
  return (
    <>
          {items.map(item => (
            <FormControlLabel
              key={item.label}
              control={
                <Checkbox
                  checked={
                    getSafe(() => fieldValue[item.value], false) ||
                    false
                  }
                  onChange={e => handleChange(e, item)}
                  value={
                    getSafe(() => fieldValue[item.value], false) ||
                    false
                  }
                  color="primary"
                />
              }
              label={item.label}
            />
          ))}
        </>
  );
};

export default CheckboxIns;
