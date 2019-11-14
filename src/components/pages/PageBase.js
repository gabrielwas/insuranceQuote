import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import QuotationCard from "../insuranceBase/QuotationCard";
import BasicInfo from "./BasicInfo";
import CarInsurance from "./carInsurance/CarInsurance";

const QuotationStep = ({ children, stepTitle }) => {
  return (
    <>
      <Grid item xs={7}>
        <Card>
          <CardHeader title={stepTitle} subheader="Insurance" />
          {children}
        </Card>
      </Grid>
      <Grid item xs={3}>
        <QuotationCard />
      </Grid>
    </>
  );
};

const PageStep = ({ step }) => {
  switch (step) {
    case 1:
      return (
        <QuotationStep stepTitle="Basic Information">
          <BasicInfo />
        </QuotationStep>
      );
    case 2:
    case 3:
      return (
        <QuotationStep stepTitle="Car Insurance">
          <CarInsurance />
        </QuotationStep>
      );
    case 4:
    //Quotes
    default:
      break;
  }
};

const PageBase = ({ step }) => {
  return (
    <Grid
      container
      spacing={4}
      alignItems="flex-start"
      style={{ minHeight: "100vh" }}
      justify="center"
    >
      <PageStep step={step} />
    </Grid>
  );
};

export default PageBase;
