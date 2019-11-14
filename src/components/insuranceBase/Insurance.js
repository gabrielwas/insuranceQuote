import React, { useEffect } from "react";
import UpperBar from "../basicComponents/UpperBar";
import Sidebar from "./Sidebar";
import { useStylesInsurance } from "../style";
import PageBase from "../pages/PageBase";
import { getDataDefinitionByKey, getDataLayoutByKey } from "../client";
import {
  StateContext,
  reducer,
  initialState
} from "../../state/stateInsurance";

const Insurance = () => {
  const classes = useStylesInsurance();

  const [state, dispatch] = React.useReducer(reducer, initialState);

  useEffect(() => {
    getDataDefinitionByKey(state.dataDefinitionKey).then(dataDefinition =>
      dispatch({
        type: "updateProperty",
        property: "dataDefinition",
        newValue: dataDefinition
      })
    );

    getDataLayoutByKey(state.dataLayoutKey).then(dataLayout =>
      dispatch({
        type: "updateProperty",
        property: "dataLayout",
        newValue: dataLayout
      })
    );
  }, [state.dataDefinitionKey, state.dataLayoutKey]);

  return (
    <div className={classes.root}>
      <StateContext.Provider value={{ state, dispatch }}>
        <UpperBar name="Insurance Quotation" />

        <Sidebar />

        <main className={classes.content}>
          <div className={classes.toolbar} />
          <PageBase step={state.activeStep} />
        </main>
      </StateContext.Provider>
    </div>
  );
};

export default Insurance;
