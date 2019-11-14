import React from "react";
import Fields from "../../fieldComponents/Fields";
import { CAR_INFORMATION, useStateValue } from "../../../state/stateInsurance";
import ButtonIns from "../../basicComponents/ButtonIns";

const StepCarInformation = () => {
  const { dispatch } = useStateValue();

  const handleClickNext = () => {
    dispatch({
      type: "nextStep"
    });
  };

  return (
    <>
      <Fields pageName={CAR_INFORMATION} />

      <ButtonIns label="Next" handleClick={handleClickNext} />
    </>
  );
};

export default StepCarInformation;
