import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import CardLineIns from "../basicComponents/CardLineIns";
import { useStateValue } from "../../state/stateInsurance";

const QuotationCard = () => {
  const { state } = useStateValue();

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2" style={{ marginBottom: 30 }}>
          Quotation
        </Typography>

        <CardLineIns
          label="Basic"
          value={state.quotationInfo.basicPrice}
          margin={14}
        />

        <CardLineIns
          label="Extra"
          value={state.quotationInfo.extraPrice}
          margin={50}
        />

        <CardLineIns
          label="Total"
          value={
            state.quotationInfo.basicPrice + state.quotationInfo.extraPrice
          }
          margin={0}
        />
      </CardContent>
    </Card>
  );
};

export default QuotationCard;
