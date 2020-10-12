import { PROGRAMS } from "./programmi";

let pgm = (programtag) =>
  PROGRAMS.filter((program) => program.tag === programtag)[0];

export const MONDAY = [
  {
    startDate: "2020-10-04T15:00:00.000Z",
    endDate: "2020-10-04T16:00:00.000Z",
    title: pgm("dischivolandi").title,
    backgroundColor: pgm("dischivolandi").background_color,
    color: pgm("dischivolandi").color,
    hoverColor: pgm("dischivolandi").hover_color,
    backgroundImage: pgm("dischivolandi").background_image,
    rRule: "RRULE:INTERVAL=1;FREQ=WEEKLY;BYDAY=MO",
    room: 1,
  },
  {
    startDate: "2020-10-04T16:00:00.000Z",
    endDate: "2020-10-04T17:00:00.000Z",
    title: PROGRAMS.filter((program) => program.tag === "cosplaylog")[0].title,
    backgroundColor: PROGRAMS.filter(
      (program) => program.tag === "cosplaylog"
    )[0].background_color,
    color: PROGRAMS.filter((program) => program.tag === "cosplaylog")[0].color,
    hoverColor: pgm("cosplaylog").hover_color,
    backgroundImage: pgm("cosplaylog").background_image,
    rRule: "RRULE:INTERVAL=1;FREQ=WEEKLY;BYDAY=MO",
    room: 1,
  },
  {
    startDate: "2020-10-04T17:00:00.000Z",
    endDate: "2020-10-04T18:00:00.000Z",
    title: PROGRAMS.filter((program) => program.tag === "moodcrush")[0].title,
    backgroundColor: PROGRAMS.filter(
      (program) => program.tag === "moodcrush"
    )[0].background_color,
    color: PROGRAMS.filter((program) => program.tag === "moodcrush")[0].color,
    hoverColor: pgm("moodcrush").hover_color,
    backgroundImage: pgm("moodcrush").background_image,
    rRule: "RRULE:INTERVAL=1;FREQ=WEEKLY;BYDAY=MO",
    room: 1,
  },
  {
    startDate: "2020-10-04T18:00:00.000Z",
    endDate: "2020-10-04T19:00:00.000Z",
    title: pgm("cic").title,
    backgroundColor: pgm("cic").background_color,
    color: pgm("cic").color,
    hoverColor: pgm("cic").hover_color,
    backgroundImage: pgm("cic").background_image,
    rRule: "RRULE:INTERVAL=1;FREQ=WEEKLY;BYDAY=MO",
    room: 1,
  },
];

export const TUESDAY = [
  {
    startDate: "2020-10-04T12:00:00.000Z",
    endDate: "2020-10-04T13:00:00.000Z",
    title: pgm("pills").title,
    backgroundColor: pgm("pills").background_color,
    color: pgm("pills").color,
    hoverColor: pgm("pills").hover_color,
    backgroundImage: pgm("pills").background_image,
    rRule: "RRULE:INTERVAL=1;FREQ=WEEKLY;BYDAY=TU",
    room: 1,
  },
  {
    startDate: "2020-10-04T17:00:00.000Z",
    endDate: "2020-10-04T18:00:00.000Z",
    title: pgm("sportingclub").title,
    backgroundColor: pgm("sportingclub").background_color,
    color: pgm("sportingclub").color,
    hoverColor: pgm("sportingclub").hover_color,
    backgroundImage: pgm("sportingclub").background_image,
    rRule: "RRULE:INTERVAL=1;FREQ=WEEKLY;BYDAY=TU",
    room: 1,
  },
];

export const WEDNESDAY = [
  {
    startDate: "2020-10-04T12:00:00.000Z",
    endDate: "2020-10-04T13:00:00.000Z",
    title: pgm("necsttt").title,
    backgroundColor: pgm("necsttt").background_color,
    color: pgm("necsttt").color,
    hoverColor: pgm("necsttt").hover_color,
    backgroundImage: pgm("necsttt").background_image,
    rRule: "RRULE:INTERVAL=1;FREQ=WEEKLY;BYDAY=WE",
    room: 1,
  },
  {
    startDate: "2020-10-04T16:00:00.000Z",
    endDate: "2020-10-04T17:00:00.000Z",
    title: pgm("impreparadio").title,
    backgroundColor: pgm("impreparadio").background_color,
    color: pgm("impreparadio").color,
    hoverColor: pgm("impreparadio").hover_color,
    backgroundImage: pgm("impreparadio").background_image,
    rRule: "RRULE:INTERVAL=1;FREQ=WEEKLY;BYDAY=WE",
    room: 1,
  },
  {
    startDate: "2020-10-04T17:00:00.000Z",
    endDate: "2020-10-04T18:00:00.000Z",
    title: pgm("chain").title,
    backgroundColor: pgm("chain").background_color,
    color: pgm("chain").color,
    hoverColor: pgm("chain").hover_color,
    backgroundImage: pgm("chain").background_image,
    rRule: "RRULE:INTERVAL=1;FREQ=WEEKLY;BYDAY=WE",
    room: 1,
  },
  {
    startDate: "2020-10-04T19:00:00.000Z",
    endDate: "2020-10-04T20:00:00.000Z",
    title: pgm("cosplaylog").title,
    backgroundColor: pgm("cosplaylog").background_color,
    color: pgm("cosplaylog").color,
    hoverColor: pgm("cosplaylog").hover_color,
    backgroundImage: pgm("cosplaylog").background_image,
    rRule: "RRULE:INTERVAL=1;FREQ=WEEKLY;BYDAY=WE",
    room: 1,
  },
];

export const THURSDAY = [
  {
    startDate: "2020-10-04T12:00:00.000Z",
    endDate: "2020-10-04T13:00:00.000Z",
    title: pgm("pills").title,
    backgroundColor: pgm("pills").background_color,
    color: pgm("pills").color,
    hoverColor: pgm("pills").hover_color,
    backgroundImage: pgm("pills").background_image,
    rRule: "RRULE:INTERVAL=1;FREQ=WEEKLY;BYDAY=TH",
    room: 1,
  },
  {
    startDate: "2020-10-04T17:00:00.000Z",
    endDate: "2020-10-04T18:00:00.000Z",
    title: pgm("wannaguess").title,
    backgroundColor: pgm("wannaguess").background_color,
    color: pgm("wannaguess").color,
    hoverColor: pgm("wannaguess").hover_color,
    backgroundImage: pgm("wannaguess").background_image,
    rRule: "RRULE:INTERVAL=1;FREQ=WEEKLY;BYDAY=TH",
    room: 1,
  },
  {
    startDate: "2020-10-04T18:00:00.000Z",
    endDate: "2020-10-04T19:00:00.000Z",
    title: pgm("nerd").title,
    backgroundColor: pgm("nerd").background_color,
    color: pgm("nerd").color,
    hoverColor: pgm("nerd").hover_color,
    backgroundImage: pgm("nerd").background_image,
    rRule: "RRULE:INTERVAL=1;FREQ=WEEKLY;BYDAY=TH",
    room: 1,
  },
  {
    startDate: "2020-10-04T19:00:00.000Z",
    endDate: "2020-10-04T21:00:00.000Z",
    title: pgm("hit40uk").title,
    backgroundColor: pgm("hit40uk").background_color,
    color: pgm("hit40uk").color,
    hoverColor: pgm("hit40uk").hover_color,
    backgroundImage: pgm("hit40uk").background_image,
    rRule: "RRULE:INTERVAL=1;FREQ=WEEKLY;BYDAY=TH",
    room: 1,
  },
];

export const FRIDAY = [
  {
    startDate: "2020-10-04T15:00:00.000Z",
    endDate: "2020-10-04T16:00:00.000Z",
    title: pgm("polyrics").title,
    backgroundColor: pgm("polyrics").background_color,
    color: pgm("polyrics").color,
    hoverColor: pgm("polyrics").hover_color,
    backgroundImage: pgm("polyrics").background_image,
    rRule: "RRULE:INTERVAL=1;FREQ=WEEKLY;BYDAY=FR",
    room: 1,
  },
  {
    startDate: "2020-10-04T16:00:00.000Z",
    endDate: "2020-10-04T17:00:00.000Z",
    title: pgm("icinefili").title,
    backgroundColor: pgm("icinefili").background_color,
    color: pgm("icinefili").color,
    hoverColor: pgm("icinefili").hover_color,
    backgroundImage: pgm("icinefili").background_image,
    rRule: "RRULE:INTERVAL=1;FREQ=WEEKLY;BYDAY=FR",
    room: 1,
  },
  {
    startDate: "2020-10-04T17:00:00.000Z",
    endDate: "2020-10-04T18:00:00.000Z",
    title: pgm("charts").title,
    backgroundColor: pgm("charts").background_color,
    color: pgm("charts").color,
    hoverColor: pgm("charts").hover_color,
    backgroundImage: pgm("charts").background_image,
    rRule: "RRULE:INTERVAL=1;FREQ=WEEKLY;BYDAY=FR",
    room: 1,
  },
];

export const SATURDAY = [
  {
    startDate: "2020-10-04T13:00:00.000Z",
    endDate: "2020-10-04T14:00:00.000Z",
    title: pgm("impreparadio").title,
    backgroundColor: pgm("impreparadio").background_color,
    color: pgm("impreparadio").color,
    hoverColor: pgm("impreparadio").hover_color,
    backgroundImage: pgm("impreparadio").background_image,
    rRule: "RRULE:INTERVAL=1;FREQ=WEEKLY;BYDAY=SA",
    room: 1,
  },
];
