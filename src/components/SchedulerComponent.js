import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
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
import { schedulerTheme as theme } from "../shared/theme";
import { Title } from "./TitleComponent";

class StudioScheduler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentViewName: "work-week",
      currentDate: new Date(),
      schedulerData: this.props.schedulerData,
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

  commitChanges({ added, changed, deleted }) {
    this.setState((state) => {
      let { schedulerData } = state;
      if (added) {
        /*const startingAddedId =
          schedulerData.length > 0 ? schedulerData[schedulerData.length - 1].id + 1 : 0;
        schedulerData = [...schedulerData, { id: startingAddedId, ...added }];*/
        alert('Will add appointment ' + JSON.stringify(added))
      }
      if (changed) {
        schedulerData = schedulerData.map((appointment) =>
        changed[appointment.id]
        ? { ...appointment, ...changed[appointment.id] }
        : appointment
        );
      }
      if (deleted !== undefined) {
        schedulerData = schedulerData.filter((appointment) => appointment.id !== deleted);
      }
      return { schedulerData };
    });

  }

  render() {
    const { resources } = this.props;
    const {
      currentViewName,
      currentDate,
      addedAppointment,
      appointmentChanges,
      editingAppointment,
      schedulerData,
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
              excludedDays={[0, 6]}
              startDayHour={9}
              endDayHour={21}
            />
            <MonthView displayName="Mensile" />
            <Toolbar />
            <DateNavigator />
            <TodayButton messages={{ today: "oggi" }} />

            <EditRecurrenceMenu />
            <ConfirmationDialog />
            <Appointments />
            <Resources data={resources} mainResourceName="room" />

            <AppointmentTooltip showCloseButton />
            <AppointmentForm />

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

          <Appointments />
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
