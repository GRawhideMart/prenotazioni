import {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
} from "./palinsesto";

import { PROGRAMS } from './programmi';

export const SCHEDULERDATA = [
  {
    startDate: "2020-10-04T11:00:00.000Z",
    endDate: "2020-10-04T12:00:00.000Z",
    title: PROGRAMS.filter(program => program.tag === 'domanialluna')[0].title,
    backgroundColor: PROGRAMS.filter(program => program.tag === 'domanialluna')[0].background_color,
    color: PROGRAMS.filter(program => program.tag === 'domanialluna')[0].color,
    backgroundImage: PROGRAMS.filter(program => program.tag === 'domanialluna')[0].background_image,
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