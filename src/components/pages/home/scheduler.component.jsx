import { useDispatch, useSelector } from "react-redux";
import { schedulerTheme as theme } from "../../../shared/theme";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import Paper from "@material-ui/core/Paper";
import {
  GroupingState,
  IntegratedGrouping,
  ViewState,
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
  GroupingPanel,
  CurrentTimeIndicator,
} from "@devexpress/dx-react-scheduler-material-ui";

import Appointment from "../../utils/scheduler/appointment";
import Header from "../../utils/scheduler/tooltip/header";
import AppointmentContent from "../../utils/scheduler/content";
import CommandButton from "../../utils/scheduler/commandButton";
import Loading from "../../utils/spinner";

import { useCallback, useEffect } from "react";
import { fetchSchedulerData } from "../../../rtk/slices/schedulerData.slice";

const HomeScheduler = () => {
  const schedulerData = useSelector((state) => state.scheduler.schedulerData);
  const isLoading = useSelector((state) => state.scheduler.loading);

  const grouping = useSelector((state) => state.groupings);
  const resources = useSelector((state) => state.resources);

  const dispatch = useDispatch();

  const initFetch = useCallback(() => {
    dispatch(fetchSchedulerData());
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  return (
    <ThemeProvider theme={theme}>
      {isLoading && <Loading />}
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
