import React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
import { makeStyles } from '@material-ui/core';

const currentDate = '2018-11-01';
const schedulerData = [
  { startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Meeting' },
  { startDate: '2018-11-01T12:00', endDate: '2018-11-01T13:30', title: 'Go to a gym' },
];

const useStyle = makeStyles((theme) => ({
  schedulerContainer: {
    marginTop: '32px',
    marginBottom: '32px'
  },
  timeScheduler: {
    color: theme.palette.primary.main
    
  }
}));

const TimeScheduler = () => {
  const classes = useStyle();

  return (
    <Paper className={classes.schedulerContainer}>
      <Scheduler
        data={schedulerData}
        locale='it-IT'
        firstDayOfWeek='1'
        title='Prenotazioni di oggi'
      >
        <ViewState
          currentDate={currentDate}
        />
        <DayView
          startDayHour={9}
          endDayHour={21}
        />
        <Appointments />
      </Scheduler>
    </Paper>
  )
}

export default TimeScheduler;