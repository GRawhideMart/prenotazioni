import React, { useCallback, useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState, EditingState } from "@devexpress/dx-react-scheduler";
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
  createAppointment,
  deleteAppointment,
  fetchSchedulerData,
  removeAppointment,
  updateAppointment,
} from "../rtk/slices/schedulerData.slice";
import Header from "./utils/scheduler/header";
import Appointment from "./utils/scheduler/appointment";
import AppointmentContent from "./utils/scheduler/content";
//import CommandButton from "./utils/scheduler/commandButton";
import LabelComponent from "./utils/scheduler/label";

const StudioScheduler = ({ name }) => {
  const [state, setState] = useState({
    currentViewName: "work-week",
    currentDate: new Date(),
  });

  const appointments = useSelector((state) => state.scheduler);
  let schedulerData =
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
    setState({ ...state, currentViewName });
  };
  const currentDateChange = (currentDate) => {
    setState({ ...state, currentDate });
  };

  const history = useHistory();

  const commitChanges = (data) => {
    // console.log(data);
    const { added, changed, deleted } = data;

    if (added) {
      const startingAddedId =
        appointments.length > 0
          ? appointments[appointments.length - 1].id + 1
          : 0;
      dispatch(
        createAppointment({
          id: startingAddedId,
          startDate: added.startDate.toString(),
          endDate: added.endDate.toString(),
          title: added.title,
          notes: added.notes,
          room: history.location.pathname === "/studio" ? 1 : 2,
          backgroundImage: "https://www.poliradio.it/images/logo-fb.png",
          //backgroundColor: theme.palette.primary.main,
          rRule: added.rRule || "",
          exDate: "",
        })
      );
      // console.log("After: ", appointments);
    }
    if (changed) {
      // console.log(changed);
      // appointments.map(
      //   (appointment) => {
      //     //console.log(changed);
      //     return changed[appointment.id]
      //       ? { ...appointment, ...changed[appointment.id] }
      //       : appointment;
      //   }

      // );
      const id = Number(Object.keys(changed)[0]);
      console.log(changed[id]);
      dispatch(updateAppointment(id, changed[id]))
        .then(console.log("done"))
        .catch((e) => console.error(e));
      // console.log({ ...changed[Object.keys(changed)[0]] });
    }
    if (deleted !== undefined) {
      console.log(deleted);
      console.log(
        schedulerData.filter((appointment) => appointment.id !== deleted)
      );
      dispatch(removeAppointment(deleted));
    }
    return data;
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Scheduler data={schedulerData} locale="it-IT" firstDayOfWeek={1}>
          <ViewState
            currentDate={state.currentDate}
            onCurrentDateChange={currentDateChange}
            currentViewName={state.currentViewName}
            onCurrentViewNameChange={currentViewNameChange}
          />

          <EditingState onCommitChanges={commitChanges} />

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
            //commandButtonComponent={CommandButton}
            recurringIconComponent={() => <div />}
            showDeleteButton
            onDeleteButtonClick={commitChanges}
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
