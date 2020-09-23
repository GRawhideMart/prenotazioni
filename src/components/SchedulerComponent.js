import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState, GroupingState, IntegratedGrouping } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  Resources,
  DayView,
  WeekView,
  MonthView,
  Appointments,
  AppointmentTooltip,
  Toolbar,
  ViewSwitcher,
  TodayButton,
  DateNavigator,
  AppointmentForm,
  GroupingPanel, CurrentTimeIndicator
} from '@devexpress/dx-react-scheduler-material-ui';
import { ThemeProvider } from '@material-ui/core';
import { schedulerTheme as theme } from '../shared/theme';

class TimeScheduler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedulerData: [
        { startDate: '2020-09-23T09:45', endDate: '2020-09-23T11:00', title: 'Meeting', room: 'Studio 1' },
        { startDate: '2020-09-23T12:00', endDate: '2020-09-23T13:30', title: 'Go to a gym', room: 'Studio 2' },
      ],
      resources: [{
        fieldName: 'room',
        title: 'Studio',
        instances: [
          { id: 'Studio 1', text: 'Studio 1' },
          { id: 'Studio 2', text: 'Studio 2 (stanzino)' }
        ]
      }],
      grouping: [{ resourceName: 'room' }] 
    }
  }

  render() {
    const { schedulerData, resources, grouping } = this.state;
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
            <ViewSwitcher />

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
}

export default TimeScheduler;