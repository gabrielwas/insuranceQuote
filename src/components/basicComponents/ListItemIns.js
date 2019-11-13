import React from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";

const ListItemIns = ({ name, nextStep, icon, handleClick }) => {
  return (
    <ListItem button key={name} onClick={() => handleClick(nextStep)}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={name} />
    </ListItem>
  );
};

export default ListItemIns;
