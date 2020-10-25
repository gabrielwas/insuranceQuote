import React, { useEffect } from "react";
import UpperBar from "../basicComponents/UpperBar";
import Sidebar from "./Sidebar";
import { useStylesInsurance } from "../style";
import PageBase from "../pages/PageBase";
import { getDataDefinitionsBySiteId } from "../client";
import {
  StateContext,
  reducer,
  initialState,
} from "../../state/stateInsurance";

const Insurance = () => {
  const classes = useStylesInsurance();

  const [state, dispatch] = React.useReducer(reducer, initialState);

  useEffect(() => {
    getDataDefinitionsBySiteId().then((items) => {
      items.length === 1 &&
        dispatch({
          type: "updateProperty",
          property: "dataDefinition",
          newValue: items[0],
        });
    });
  }, [state.dataDefinitionKey, state.dataLayoutKey]);

  return (
    <div className={classes.root}>
      <StateContext.Provider value={{ state, dispatch }}>
        <UpperBar name="Liferay App Builder Entries" />

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
