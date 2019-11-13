import React from "react";
import UpperBar from "../basicComponents/UpperBar";
import Sidebar from "./Sidebar";
import { useStylesInsurance } from "../style";
import PageBase from "../pages/PageBase";

const Insurance = () => {
  const classes = useStylesInsurance();

  return (
    <div className={classes.root}>
      <UpperBar name="Insurance Quotation" />

      <Sidebar />

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <PageBase />
      </main>
    </div>
  );
};

export default Insurance;
