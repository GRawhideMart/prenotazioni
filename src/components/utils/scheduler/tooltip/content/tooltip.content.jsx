import { AppointmentTooltip } from "@devexpress/dx-react-scheduler-material-ui";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { NoteSharp } from "@material-ui/icons";

const Content = ({ children, appointmentData, classes, ...restProps }) => (
  <AppointmentTooltip.Content {...restProps} appointmentData={appointmentData}>
    {appointmentData.notes !== "" ? (
      <Grid container alignItems="center">
        <Grid item xs={2} className={classes.textCenter}>
          <NoteSharp className={classes.icon} />
        </Grid>
        <Grid item xs={10}>
          <span>{appointmentData.notes}</span>
        </Grid>
      </Grid>
    ) : null}
  </AppointmentTooltip.Content>
);

export default withStyles(
  (theme) => ({
    icon: {
      color: theme.palette.action.active,
    },
    textCenter: {
      textAlign: "center",
    },
  }),
  { name: "CommandButton" }
)(Content);
