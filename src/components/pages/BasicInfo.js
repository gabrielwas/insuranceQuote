import React from "react";
import { useStateValue, BASIC_INFO } from "../../state/stateInsurance";
import ButtonIns from "../basicComponents/ButtonIns";
import { CardContent } from "@material-ui/core";
import Fields from "../fieldComponents/Fields";

const BasicInfo = () => {
  const { dispatch } = useStateValue();

  return (
    <CardContent>
      <Fields pageName={BASIC_INFO} />

      <ButtonIns
        label="Next"
        handleClick={() =>
          dispatch({
            type: "nextStep"
          })
        }
      />
    </CardContent>
  );
};

export default BasicInfo;
