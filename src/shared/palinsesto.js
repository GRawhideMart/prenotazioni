import { PROGRAMS } from './programmi';

let pgm = (programtag) => (PROGRAMS.filter(program => program.tag === programtag)[0])

export const MONDAY = [
  {
    startDate: "2020-10-04T15:00:00.000Z",
    endDate: "2020-10-04T16:00:00.000Z",
    title: PROGRAMS.filter(program => program.tag === 'dischivolandi')[0].title,
    backgroundColor: PROGRAMS.filter(program => program.tag === 'dischivolandi')[0].background_color,
    color: PROGRAMS.filter(program => program.tag === 'dischivolandi')[0].color,
    rRule: "RRULE:INTERVAL=1;FREQ=WEEKLY;BYDAY=MO",
    room: 1,
  },
  {
    startDate: "2020-10-04T16:00:00.000Z",
    endDate: "2020-10-04T17:00:00.000Z",
    title: PROGRAMS.filter(program => program.tag === 'cosplaylog')[0].title,
    backgroundColor: PROGRAMS.filter(program => program.tag === 'cosplaylog')[0].background_color,
    color: PROGRAMS.filter(program => program.tag === 'cosplaylog')[0].color,
    rRule: "RRULE:INTERVAL=1;FREQ=WEEKLY;BYDAY=MO",
    room: 1,
  },
  {
    startDate: "2020-10-04T17:00:00.000Z",
    endDate: "2020-10-04T18:00:00.000Z",
    title: PROGRAMS.filter(program => program.tag === 'moodcrush')[0].title,
    backgroundColor: PROGRAMS.filter(program => program.tag === 'moodcrush')[0].background_color,
    color: PROGRAMS.filter(program => program.tag === 'moodcrush')[0].color,
    rRule: "RRULE:INTERVAL=1;FREQ=WEEKLY;BYDAY=MO",
    room: 1,
  },
  {
    startDate: "2020-10-04T18:00:00.000Z",
    endDate: "2020-10-04T19:00:00.000Z",
    title: pgm('cic').title,
    backgroundColor: pgm('cic').background_color,
    color: pgm('cic').color,
    rRule: "RRULE:INTERVAL=1;FREQ=WEEKLY;BYDAY=MO",
    room: 1,
  },
];

export const TUESDAY = [
  {
    startDate: "2020-10-04T12:00:00.000Z",
    endDate: "2020-10-04T13:00:00.000Z",
    title: pgm('pills').title,
    backgroundColor: pgm('pills').background_color,
    color: pgm('pills').color,
    rRule: "RRULE:INTERVAL=1;FREQ=WEEKLY;BYDAY=TU",
    room: 1,
  },
  {
    startDate: "2020-10-04T17:00:00.000Z",
    endDate: "2020-10-04T18:00:00.000Z",
    title: pgm('sportingclub').title,
    backgroundColor: pgm('sportingclub').background_color,
    color: pgm('sportingclub').color,
    rRule: "RRULE:INTERVAL=1;FREQ=WEEKLY;BYDAY=TU",
    room: 1,
  },
];

export const WEDNESDAY = [
  {
    startDate: "2020-10-04T12:00:00.000Z",
    endDate: "2020-10-04T13:00:00.000Z",
    title: pgm('necsttt').title,
    backgroundColor: pgm('necsttt').background_color,
    color: pgm('necsttt').color,
    rRule: "RRULE:INTERVAL=1;FREQ=WEEKLY;BYDAY=WE",
    room: 1,
  },
  {
    startDate: "2020-10-04T16:00:00.000Z",
    endDate: "2020-10-04T17:00:00.000Z",
    title: pgm('impreparadio').title,
    backgroundColor: pgm('impreparadio').background_color,
    color: pgm('impreparadio').color,
    rRule: "RRULE:INTERVAL=1;FREQ=WEEKLY;BYDAY=WE",
    room: 1,
  },
  {
    startDate: "2020-10-04T17:00:00.000Z",
    endDate: "2020-10-04T18:00:00.000Z",
    title: pgm('chain').title,
    backgroundColor: pgm('chain').background_color,
    color: pgm('chain').color,
    rRule: "RRULE:INTERVAL=1;FREQ=WEEKLY;BYDAY=WE",
    room: 1,
  },
  {
    startDate: "2020-10-04T19:00:00.000Z",
    endDate: "2020-10-04T20:00:00.000Z",
    title: pgm('cosplaylog').title,
    backgroundColor: pgm('cosplaylog').background_color,
    color: pgm('cosplaylog').color,
    rRule: "RRULE:INTERVAL=1;FREQ=WEEKLY;BYDAY=WE",
    room: 1,
  },
];

export const THURSDAY = [
  {
    startDate: "2020-10-04T12:00:00.000Z",
    endDate: "2020-10-04T13:00:00.000Z",
    title: pgm('pills').title,
    backgroundColor: pgm('pills').background_color,
    color: pgm('pills').color,
    rRule: "RRULE:INTERVAL=1;FREQ=WEEKLY;BYDAY=TH",
    room: 1,
  },
  {
    startDate: "2020-10-04T17:00:00.000Z",
    endDate: "2020-10-04T18:00:00.000Z",
    title: pgm('wannaguess').title,
    backgroundColor: pgm('wannaguess').background_color,
    color: pgm('wannaguess').color,
    rRule: "RRULE:INTERVAL=1;FREQ=WEEKLY;BYDAY=TH",
    room: 1,
  },
  {
    startDate: "2020-10-04T18:00:00.000Z",
    endDate: "2020-10-04T19:00:00.000Z",
    title: pgm('nerd').title,
    backgroundColor: pgm('nerd').background_color,
    color: pgm('nerd').color,
    rRule: "RRULE:INTERVAL=1;FREQ=WEEKLY;BYDAY=TH",
    room: 1,
  },
  {
    startDate: "2020-10-04T19:00:00.000Z",
    endDate: "2020-10-04T21:00:00.000Z",
    title: pgm('hit40uk').title,
    backgroundColor: pgm('hit40uk').background_color,
    color: pgm('hit40uk').color,
    rRule: "RRULE:INTERVAL=1;FREQ=WEEKLY;BYDAY=TH",
    room: 1,
  },
];

export const FRIDAY = [
  {
    startDate: "2020-10-04T15:00:00.000Z",
    endDate: "2020-10-04T16:00:00.000Z",
    title: pgm('polyrics').title,
    backgroundColor: pgm('polyrics').background_color,
    color: pgm('polyrics').color,
    rRule: "RRULE:INTERVAL=1;FREQ=WEEKLY;BYDAY=FR",
    room: 1,
  },
  {
    startDate: "2020-10-04T16:00:00.000Z",
    endDate: "2020-10-04T17:00:00.000Z",
    title: pgm('icinefili').title,
    backgroundColor: pgm('icinefili').background_color,
    color: pgm('icinefili').color,
    rRule: "RRULE:INTERVAL=1;FREQ=WEEKLY;BYDAY=FR",
    room: 1,
  },
  {
    startDate: "2020-10-04T17:00:00.000Z",
    endDate: "2020-10-04T18:00:00.000Z",
    title: pgm('charts').title,
    backgroundColor: pgm('charts').background_color,
    color: pgm('charts').color,
    rRule: "RRULE:INTERVAL=1;FREQ=WEEKLY;BYDAY=FR",
    room: 1,
  },
];

export const SATURDAY = [
  {
    startDate: "2020-10-04T13:00:00.000Z",
    endDate: "2020-10-04T14:00:00.000Z",
    title: pgm('impreparadio').title,
    backgroundColor: pgm('impreparadio').background_color,
    color: pgm('impreparadio').color,
    rRule: "RRULE:INTERVAL=1;FREQ=WEEKLY;BYDAY=SA",
    room: 1,
  },
];