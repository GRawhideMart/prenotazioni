import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";

import MoreIcon from "@material-ui/icons/MoreVert";

import {
  ViewState,
  GroupingState,
  IntegratedGrouping,
  EditingState,
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  Resources,
  DayView,
  Appointments,
  AppointmentTooltip,
  Toolbar,
  TodayButton,
  DateNavigator,
  AppointmentForm,
  GroupingPanel,
  CurrentTimeIndicator,
  WeekView,
  MonthView,
  ViewSwitcher,
  EditRecurrenceMenu,
  ConfirmationDialog,
} from "@devexpress/dx-react-scheduler-material-ui";
import { Grid, ThemeProvider } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import { schedulerTheme as theme } from "../shared/theme";
import { Title } from "./TitleComponent";

import classNames from "clsx";

const style = ({ palette }) => ({
  icon: {
    color: palette.action.active,
  },
  textCenter: {
    textAlign: "center",
  },
  commandButton: {
    backgroundColor: "rgba(255,255,255,0.65)",
  },
});

const useHeaderImageClasses = makeStyles({
  header: {
    height: "260px",
    backgroundSize: "cover",
  },
  backgroundImage: ({ imageURL }) => ({
    background: `url(${imageURL})`,
  }),
});

const LabelComponent = (props) => {
  if (props.text === "Studio") {
    return null;
  }
  return <AppointmentForm.Label {...props} />;
};

const Appointment = ({ children, style, data, ...restProps }) => (
  <Appointments.Appointment
    {...restProps}
    data={data}
    style={{
      ...style,
      background: `${data.backgroundColor} url(${data.backgroundImage})`,
      backgroundSize: "cover",
      border: "1px solid black",
    }}
  >
    {children}
  </Appointments.Appointment>
);

const AppointmentContent = (props) => {
  const { data, style } = props;

  return (
    <Appointments.AppointmentContent
      style={{
        ...style,
        color: data.color,
        textShadow:
          (data.hoverColor === "" ? "black" : data.hoverColor) + " 1px 1px",
        textAlign: "center",
      }}
      {...props}
    />
  );
};

const Header = ({ children, appointmentData, ...restProps }) => {
  const classes = useHeaderImageClasses({
    imageURL: appointmentData.backgroundImage,
  });
  return (
    <AppointmentTooltip.Header
      {...restProps}
      className={classNames(classes.backgroundImage, classes.header)}
      appointmentData={appointmentData}
      style={{
        background: `${appointmentData.backgroundColor} url(${appointmentData.backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <IconButton
        /* eslint-disable-next-line no-alert */
        onClick={() => alert(JSON.stringify(appointmentData))}
        className={classes.commandButton}
      >
        <MoreIcon />
      </IconButton>
    </AppointmentTooltip.Header>
  );
};

const CommandButton = withStyles(style, {
  name: "CommandButton",
})(({ classes, ...restProps }) => (
  <AppointmentTooltip.CommandButton
    {...restProps}
    className={classes.commandButton}
  />
));

const StudioScheduler = (props) => {
  const [currentViewName, setCurrentViewName] = useState("work-week");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [addedAppointment, setAddedAppointment] = useState({});
  const [appointmentChanges, setAppointmentChanges] = useState({});
  const [editingAppointment, setEditingAppointment] = useState(undefined);

  const currentViewNameChange = (currentViewName) => {
    setCurrentViewName(currentViewName);
  };
  const currentDateChange = (currentDate) => {
    setCurrentDate({ currentDate });
  };

  const changeAddedAppointment = (addedAppointment) => {
    setAddedAppointment({ addedAppointment });
  };

  const changeAppointmentChanges = (appointmentChanges) => {
    setAppointmentChanges({ appointmentChanges });
  };

  const changeEditingAppointment = (editingAppointment) => {
    setEditingAppointment({ editingAppointment });
  };

  const commitChanges = (props) => {
    const { added } = props;
    const { schedulerData } = props;
    if (added) {
      alert("Will add appointment " + JSON.stringify(added));
      props.addBooking(
        added.startDate,
        added.endDate,
        added.title,
        schedulerData[0].room
      );
    }
  };

  const { resources, schedulerData } = props;

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Scheduler data={schedulerData} locale="it-IT" firstDayOfWeek="1">
          <ViewState
            currentDate={currentDate}
            onCurrentDateChange={currentDateChange}
            currentViewName={currentViewName}
            onCurrentViewNameChange={currentViewNameChange}
          />

          <EditingState
            onCommitChanges={commitChanges}
            addedAppointment={addedAppointment}
            onAddedAppointmentChange={changeAddedAppointment}
            appointmentChanges={appointmentChanges}
            onAppointmentChangesChange={changeAppointmentChanges}
            editingAppointment={editingAppointment}
            onEditingAppointmentChange={changeEditingAppointment}
          />

          <DayView
            displayName="Giornaliero"
            startDayHour={9}
            endDayHour={21}
            cellDuration={60}
          />

          <WeekView
            name="work-week"
            displayName="Settimanale"
            excludedDays={[0]}
            startDayHour={9}
            endDayHour={21}
          />
          <MonthView displayName="Mensile" />
          <Toolbar />
          <DateNavigator />
          <TodayButton messages={{ today: "oggi" }} />

          <EditRecurrenceMenu />
          <ConfirmationDialog />
          <Appointments
            appointmentComponent={Appointment}
            appointmentContentComponent={AppointmentContent}
          />
          <AppointmentTooltip
            headerComponent={Header}
            commandButtonComponent={CommandButton}
            showCloseButton
          />
          <Resources data={resources} mainResourceName="room" />

          <AppointmentForm
            resourceEditorComponent={() => null}
            labelComponent={LabelComponent}
          />

          <ViewSwitcher />

          <CurrentTimeIndicator
            shadePreviousAppointments={true}
            shadePreviousCells={true}
            updateInterval={60000}
          />
        </Scheduler>
      </Paper>
    </ThemeProvider>
  );
};

export const SchedulerPresentation = ({
  schedulerData,
  resources,
  name,
  style,
  addBooking,
}) => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{ marginTop: "32px" }}
    >
      <Title style={style} name={name} />
      <Grid item container direction="row">
        <Grid item md={2}></Grid>
        <Grid item md={8}>
          <StudioScheduler
            schedulerData={schedulerData}
            resources={resources}
            addBooking={addBooking}
          />
        </Grid>
        <Grid item md={2}></Grid>
      </Grid>
    </Grid>
  );
};

const HomeScheduler = (props) => {
  const { schedulerData, resources, grouping } = props;
  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Scheduler data={schedulerData} locale="it-IT" firstDayOfWeek="1">
          <ViewState defaultCurrentDate={new Date()} />

          <GroupingState grouping={grouping} />

          <DayView startDayHour={9} endDayHour={21} cellDuration={60} />

          <Appointments
            appointmentComponent={Appointment}
            appointmentContentComponent={AppointmentContent}
          />
          <Resources data={resources} mainResourceName="room" />
          <IntegratedGrouping />

          <AppointmentTooltip
            showCloseButton
            headerComponent={Header}
            commandButtonComponent={CommandButton}
          />
          <Toolbar />
          <DateNavigator />
          <TodayButton messages={{ today: "oggi" }} />

          <GroupingPanel />
          <CurrentTimeIndicator
            shadePreviousAppointments={true}
            shadePreviousCells={true}
            updateInterval={60000}
          />
        </Scheduler>
      </Paper>
    </ThemeProvider>
  );
};

export default HomeScheduler;
