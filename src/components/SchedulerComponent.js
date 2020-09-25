import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import {
  ViewState,
  GroupingState,
  IntegratedGrouping,
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
    };
    this.currentViewNameChange = (currentViewName) => {
      this.setState({ currentViewName });
    };
    this.currentDateChange = (currentDate) => {
      this.setState({ currentDate });
    };
  }

  render() {
    const { schedulerData, resources } = this.props;
    const { currentViewName, currentDate } = this.state;
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

            <Appointments />
            <Resources data={resources} mainResourceName="room" />

            <AppointmentTooltip showCloseButton />
            <AppointmentForm readOnly />

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
  style
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
        <Grid item md={2}>
          
        </Grid>
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
          <AppointmentForm readOnly />
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
