import React from "react";
import SidebarIns from "../basicComponents/SidebarIns";
import ListItemIns from "../basicComponents/ListItemIns";
import Divider from "@material-ui/core/Divider";

import StoreMallDirectory from "@material-ui/icons/StoreMallDirectory";
import DriveEta from "@material-ui/icons/DriveEta";
import Storage from "@material-ui/icons/Storage";
import { useStateValue } from "../../state/stateInsurance";

const Sidebar = () => {
  const { dispatch } = useStateValue();

  const onClick = nextStep => {
    dispatch({
      type: "updateProperty",
      property: "activeStep",
      newValue: nextStep
    });
  };

  return (
    <SidebarIns>
      <ListItemIns
        name="Basic Information"
        nextStep={1}
        icon={<StoreMallDirectory />}
        handleClick={onClick}
      />
      <ListItemIns
        name="Car Insurance"
        nextStep={2}
        icon={<DriveEta />}
        handleClick={onClick}
      />

      <Divider />

      <ListItemIns
        name="Quotes"
        nextStep={4}
        icon={<Storage />}
        handleClick={onClick}
      />
    </SidebarIns>
  );
};

export default Sidebar;
