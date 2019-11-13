import React from 'react';
import SidebarIns from '../basicComponents/SidebarIns';
import ListItemIns from '../basicComponents/ListItemIns';
import Divider from '@material-ui/core/Divider';

import StoreMallDirectory from "@material-ui/icons/StoreMallDirectory";
import DriveEta from "@material-ui/icons/DriveEta";
import Storage from "@material-ui/icons/Storage";


const Sidebar = () => {
    return ( 
        <SidebarIns>
            <ListItemIns name="Basic Information" nextStep={1} icon={<StoreMallDirectory/>}/>
            <ListItemIns name="Car Insurance" nextStep={2} icon={<DriveEta/>}/>

            <Divider/>

            <ListItemIns name="Quotes" nextStep={4} icon={<Storage/>} />
        </SidebarIns>
     );
}
 
export default Sidebar;