import React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState, GroupingState, IntegratedGrouping } from '@devexpress/dx-react-scheduler';
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
  GroupingPanel, CurrentTimeIndicator
} from '@devexpress/dx-react-scheduler-material-ui';
import { ThemeProvider } from '@material-ui/core';
import { schedulerTheme as theme } from '../shared/theme';

const TimeScheduler = (props) => {
  const { schedulerData, resources, grouping } = props;
  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Scheduler
          data={schedulerData}
          locale='it-IT'
          firstDayOfWeek='1'
        >
          <ViewState
            defaultCurrentDate={new Date()}
          />

          <GroupingState
            grouping={grouping}
          />

          <DayView
            startDayHour={9}
            endDayHour={21}
            cellDuration={60}
          />
    
          <Appointments />
          <Resources
            data={resources}
            mainResourceName='room'
          />
          <IntegratedGrouping />

          <AppointmentTooltip 
            showCloseButton
          />
          <AppointmentForm 
            readOnly
          />
          <Toolbar />
          <DateNavigator />
          <TodayButton />

          <GroupingPanel />
          <CurrentTimeIndicator
            shadePreviousAppointments={true}
            shadePreviousCells={true}
            updateInterval={30000}
          />
        </Scheduler>
      </Paper>
    </ThemeProvider>
  )
}

export default TimeScheduler;