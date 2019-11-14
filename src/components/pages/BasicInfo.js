import React from "react";
import { useStateValue } from "../../state/stateInsurance";
import ButtonIns from "../basicComponents/ButtonIns";
import { CardContent } from "@material-ui/core";

const BasicInfo = () => {
  const { dispatch } = useStateValue();

  return (
    <CardContent>
      {/* Render the fields here */}

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
