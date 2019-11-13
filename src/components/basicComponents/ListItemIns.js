import React from "react";
import { useStateValue } from "../stateInsurance";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";

const ListItemIns = ({ name, nextStep, icon }) => {
  const { dispatch } = useStateValue();

  return (
    <ListItem
      button
      key={name}
      onClick={() =>
        dispatch({
          type: "updateProperty",
          property: "activeStep",
          newValue: nextStep
        })
      }
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={name} />
    </ListItem>
  );
};

export default ListItemIns;
