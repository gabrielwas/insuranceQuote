import React from "react";
import UpperBar from "../basicComponents/UpperBar";
import Sidebar from "./Sidebar";
import { useStylesInsurance } from "../style";
import PageBase from "../pages/PageBase";
import {
  StateContext,
  reducer,
  initialState
} from "../../state/stateInsurance";

const Insurance = () => {
  const classes = useStylesInsurance();

  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <div className={classes.root}>
      <StateContext.Provider value={{ state, dispatch }}>
        <UpperBar name="Insurance Quotation" />

        <Sidebar />

        <main className={classes.content}>
          <div className={classes.toolbar} />
          <PageBase />
        </main>
      </StateContext.Provider>
    </div>
  );
};

export default Insurance;
