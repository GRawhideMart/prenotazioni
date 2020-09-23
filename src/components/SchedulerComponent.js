import React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
  WeekView,
  Toolbar,
  ViewSwitcher,
  MonthView,
  TodayButton,
  DateNavigator,
  AppointmentTooltip,
  AppointmentForm
} from '@devexpress/dx-react-scheduler-material-ui';
import { ThemeProvider } from '@material-ui/core';
import { schedulerTheme as theme } from '../shared/theme';

const schedulerData = [
  { startDate: '2020-09-23T09:45', endDate: '2020-09-23T11:00', title: 'Meeting' },
  { startDate: '2020-09-23T12:00', endDate: '2020-09-23T13:30', title: 'Go to a gym' },
];

const TimeScheduler = () => {

  return (
    <ThemeProvider theme={theme}>
    <Paper>
      <Scheduler
        data={schedulerData}
        locale='it-IT'
        firstDayOfWeek='1'
        title='Prenotazioni di oggi'
      >
        <ViewState
          defaultCurrentDate={new Date()}
        />
        <DayView
          startDayHour={9}
          endDayHour={21}
          cellDuration={60}
        />
        <WeekView
          startDayHour={9}
          endDayHour={21}
        />
        <WeekView
            name="work-week"
            displayName="Work Week"
            excludedDays={[0, 6]}
            startDayHour={9}
            endDayHour={21}
        />
        <MonthView />
        <Toolbar />
        <DateNavigator />
        <TodayButton />
        <ViewSwitcher />
        <Appointments />
        <AppointmentTooltip 
          showCloseButton
          
        />
        <AppointmentForm 
          
        />
      </Scheduler>
    </Paper>
    </ThemeProvider>
  )
}

export default TimeScheduler;