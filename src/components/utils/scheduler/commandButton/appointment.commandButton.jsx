import { AppointmentTooltip } from "@devexpress/dx-react-scheduler-material-ui";
import { withStyles } from "@material-ui/core/styles";

const CommandButton = ({ classes, ...restProps }) => (
  <AppointmentTooltip.CommandButton
    {...restProps}
    className={classes.commandButton}
  />
);

export default withStyles(
  (theme) => ({
    icon: {
      color: theme.palette.action.active,
    },
    textCenter: {
      textAlign: "center",
    },
    commandButton: {
      backgroundColor: "rgba(255,255,255,0.65)",
    },
  }),
  {
    name: "CommandButton",
  }
)(CommandButton);
