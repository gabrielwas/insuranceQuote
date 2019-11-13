import React from "react";
import { useStateValue } from "../stateInsurance";

import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

const StepsIns = ({steps}) => {
  const { state } = useStateValue();

  return (
    <Stepper activeStep={state.activeStep - 2}>
      {steps.map(label => {
        return (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
};

export default StepsIns;
