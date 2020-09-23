import React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
import { ThemeProvider } from '@material-ui/core';
import { schedulerTheme as theme } from '../shared/theme';

const schedulerData = [
  { startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Meeting' },
  { startDate: '2018-11-01T12:00', endDate: '2018-11-01T13:30', title: 'Go to a gym' },
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
          currentDate={'2020-02-03'}
        />
        <DayView
          startDayHour={9}
          endDayHour={21}
        />
        <Appointments />
      </Scheduler>
    </Paper>
    </ThemeProvider>
  )
}

export default TimeScheduler;