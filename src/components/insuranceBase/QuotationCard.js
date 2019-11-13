import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import CardLineIns from "../basicComponents/CardLineIns";

const QuotationCard = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2" style={{ marginBottom: 30 }}>
          Quotation
        </Typography>

        <CardLineIns label="Basic" value="$$$" margin={14} />

        <CardLineIns label="Extra" value="$$$" margin={50} />

        <CardLineIns label="Total" value="$$$" margin={0} />
      </CardContent>
    </Card>
  );
};

export default QuotationCard;
