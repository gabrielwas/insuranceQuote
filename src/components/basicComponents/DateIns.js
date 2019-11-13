import React from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const DateIns = ({ fieldName, label, value, handleChange }) => {
  const [openStatus, setOpenStatus] = React.useState(false);
  const [closePermission, setClosePermission] = React.useState(false);

  const handleOnOpen = () => {
    setOpenStatus(true);
    setClosePermission(false);
  };

  const handlePickDay = (_, e) => {
    handleChange(e);
    if (closePermission) setOpenStatus(false);
  };

  const onYear = () => {
    setClosePermission(true);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        id={fieldName}
        label={label}
        openTo="year"
        onYearChange={onYear}
        open={openStatus}
        onOpen={handleOnOpen}
        disableFuture={true}
        value={value || new Date()}
        onChange={handlePickDay}
        KeyboardButtonProps={{
          "aria-label": "change date"
        }}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DateIns;
