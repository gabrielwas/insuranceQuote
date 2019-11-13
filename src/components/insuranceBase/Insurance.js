import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import UpperBar from "../basicComponents/UpperBar"
import Sidebar from './Sidebar';

const useStyles = makeStyles(theme => ({
    root: {
      display: "flex"
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    },
    toolbar: theme.mixins.toolbar
  }));

const Insurance = () => {

    const classes = useStyles();

    return ( 
        <div className={classes.root}>
            <UpperBar name="Insurance Quotation"/>

            <Sidebar/>
        </div>
     );
}
 
export default Insurance;