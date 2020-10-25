import React from "react";
import SidebarIns from "../basicComponents/SidebarIns";
import ListItemIns from "../basicComponents/ListItemIns";

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
        name="Entries"
        nextStep={4}
        icon={<Storage />}
        handleClick={onClick}
      />
    </SidebarIns>
  );
};

export default Sidebar;
