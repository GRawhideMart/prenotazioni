import React, { useCallback, useEffect, useState } from "react";
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

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import Title from "./utils/title";
import {
  addBooking,
  fetchSchedulerData,
} from "../rtk/slices/schedulerData.slice";
import Header from "./utils/scheduler/header";
import Appointment from "./utils/scheduler/appointment";
import AppointmentContent from "./utils/scheduler/content";
import CommandButton from "./utils/scheduler/commandButton";
import LabelComponent from "./utils/scheduler/label";

const StudioScheduler = ({ name }) => {
  const [currentViewName, setCurrentViewName] = useState("work-week");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [addedAppointment, setAddedAppointment] = useState({});
  const [appointmentChanges, setAppointmentChanges] = useState({});
  const [editingAppointment, setEditingAppointment] = useState(undefined);

  const appointments = useSelector((state) => state.scheduler);
  const schedulerData =
    name === "Studio"
      ? appointments.filter((app) => app.room === 1)
      : appointments.filter((app) => app.room === 2);
  const resources = useSelector((state) => state.resources);
  const dispatch = useDispatch();

  const initFetch = useCallback(() => {
    dispatch(fetchSchedulerData());
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  const currentViewNameChange = (currentViewName) => {
    setCurrentViewName(currentViewName);
  };
  const currentDateChange = (currentDate) => {
    setCurrentDate(currentDate);
  };

  const changeAddedAppointment = (addedAppointment) => {
    setAddedAppointment(addedAppointment);
  };

  const changeAppointmentChanges = (appointmentChanges) => {
    setAppointmentChanges(appointmentChanges);
  };

  const changeEditingAppointment = (editingAppointment) => {
    setEditingAppointment(editingAppointment);
  };

  const history = useHistory();

  const commitChanges = (data) => {
    // const startDateString = added.startDate.toString();
    // const endDateString = added.endDate.toString();
    console.log(data);
    const { added, changed, deleted } = data;
    if (added) {
      alert("Will add appointment " + JSON.stringify(added));
      dispatch(
        addBooking({
          startDate: added.startDate.toString(),
          endDate: added.endDateString,
          title: added.title,
          notes: added.notes,
          room: history.location.pathname === "/studio" ? 1 : 2,
          backgroundImage: "assets/img/image.png",
        })
      );
    } else if (changed) {
      alert("change!");
      console.log(changed);
      alert(JSON.stringify(changed));
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Scheduler data={schedulerData} locale="it-IT" firstDayOfWeek={1}>
          <ViewState
            currentDate={currentDate}
            onCurrentDateChange={currentDateChange}
            currentViewName={currentViewName}
            onCurrentViewNameChange={currentViewNameChange}
          />

          <EditingState
            /*onCommitChanges={commitChanges}
            addedAppointment={addedAppointment}
            onAddedAppointmentChange={changeAddedAppointment}
            /*appointmentChanges={appointmentChanges}
            onAppointmentChangesChange={changeAppointmentChanges}
            editingAppointment={editingAppointment}
            onEditingAppointmentChange={changeEditingAppointment}*/
            onCommitChanges={commitChanges}
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

export const SchedulerPresentation = ({ name }) => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ marginTop: "32px" }}
    >
      <Title name={name} />
      <Grid item container direction="row">
        <Grid item md={2}></Grid>
        <Grid item md={8}>
          <StudioScheduler name={name} />
        </Grid>
        <Grid item md={2}></Grid>
      </Grid>
    </Grid>
  );
};

const HomeScheduler = () => {
  const schedulerData = useSelector((state) => state.scheduler);

  const grouping = useSelector((state) => state.groupings);
  const resources = useSelector((state) => state.resources);

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Scheduler data={schedulerData} locale="it-IT" firstDayOfWeek={1}>
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
