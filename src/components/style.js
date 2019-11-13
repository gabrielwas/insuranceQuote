import { makeStyles } from "@material-ui/core/styles";

export const useStylesInsurance = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  toolbar: theme.mixins.toolbar
}));
