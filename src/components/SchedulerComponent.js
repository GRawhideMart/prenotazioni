import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";

import MoreIcon from "@material-ui/icons/MoreVert";
import Room from '@material-ui/icons/Room';

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
import { withStyles } from '@material-ui/core/styles';

import { schedulerTheme as theme } from "../shared/theme";
import { Title } from "./TitleComponent";

const style = ({ palette }) => ({
  icon: {
    color: palette.action.active
  }
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
      backgroundColor: data.backgroundColor,
      textShadow: data.color,
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
        backgroundImage: data.backgroundImage
      }}
      {...props}
    />
  );
};

class StudioScheduler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentViewName: "work-week",
      currentDate: new Date(),
      addedAppointment: {},
      appointmentChanges: {},
      editingAppointment: undefined,
    };

    this.currentViewNameChange = (currentViewName) => {
      this.setState({ currentViewName });
    };
    this.currentDateChange = (currentDate) => {
      this.setState({ currentDate });
    };

    this.commitChanges = this.commitChanges.bind(this);
    this.changeAddedAppointment = this.changeAddedAppointment.bind(this);
    this.changeAppointmentChanges = this.changeAppointmentChanges.bind(this);
    this.changeEditingAppointment = this.changeEditingAppointment.bind(this);
  }

  changeAddedAppointment(addedAppointment) {
    this.setState({ addedAppointment });
  }

  changeAppointmentChanges(appointmentChanges) {
    this.setState({ appointmentChanges });
  }

  changeEditingAppointment(editingAppointment) {
    this.setState({ editingAppointment });
  }

  commitChanges(props) {
    const { added } = props;
    const { schedulerData } = this.props;
    if (added) {
      alert("Will add appointment " + JSON.stringify(added));
      this.props.addBooking(
        added.startDate,
        added.endDate,
        added.title,
        schedulerData[0].room
      );
    }
  }

  render() {
    const { resources, schedulerData } = this.props;
    const {
      currentViewName,
      currentDate,
      addedAppointment,
      appointmentChanges,
      editingAppointment,
    } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <Paper>
          <Scheduler data={schedulerData} locale="it-IT" firstDayOfWeek="1">
            <ViewState
              currentDate={currentDate}
              onCurrentDateChange={this.currentDateChange}
              currentViewName={currentViewName}
              onCurrentViewNameChange={this.currentViewNameChange}
            />

            <EditingState
              onCommitChanges={this.commitChanges}
              addedAppointment={addedAppointment}
              onAddedAppointmentChange={this.changeAddedAppointment}
              appointmentChanges={appointmentChanges}
              onAppointmentChangesChange={this.changeAppointmentChanges}
              editingAppointment={editingAppointment}
              onEditingAppointmentChange={this.changeEditingAppointment}
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
            <Appointments appointmentComponent={Appointment} appointmentContentComponent={AppointmentContent} />
            <AppointmentTooltip />
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
  }
}

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

          <Appointments appointmentComponent={Appointment} />
          <Resources data={resources} mainResourceName="room" />
          <IntegratedGrouping />

          <AppointmentTooltip showCloseButton />
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
