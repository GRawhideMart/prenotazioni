import {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
} from "./palinsesto";
export const SCHEDULERDATA = [
  {
    startDate: "2020-10-04T11:00:00.000Z",
    endDate: "2020-10-04T12:00:00.000Z",
    title: "Domani all'Una",
    rRule: "RRULE:INTERVAL=1;FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR",
    room: 1,
  },
  ...MONDAY,
  ...TUESDAY,
  ...WEDNESDAY,
  ...THURSDAY,
  ...FRIDAY,
  ...SATURDAY,
];
