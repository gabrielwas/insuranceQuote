import React from "react";
import { useStateValue } from "../../../state/stateInsurance";
import StepsIns from "../../basicComponents/StepsIns";
import { CardContent } from "@material-ui/core";
import StepCarInformation from "./StepCarInformation";
import StepCarCoverage from "./StepCarCoverage";

const CarInsurance = () => {
  const { state } = useStateValue();

  const steps = ["Car Information", "Coverage"];

  return (
    <>
      <StepsIns steps={steps} activeStep={state.activeStep} />

      <CardContent>
        {state.activeStep === 2 ? <StepCarInformation /> : <StepCarCoverage />}
      </CardContent>
    </>
  );
};

export default CarInsurance;
