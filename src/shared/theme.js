import { createMuiTheme } from "@material-ui/core";
import {
  DARKERBLUEPOLIRADIO,
  DARKBLUEPOLIRADIO,
  BLUEPOLIRADIO,
  HOVERPOLIRADIO,
  LIGHTBLUEPOLIRADIO,
  LIGHTERBLUEPOLIRADIO,
  LIGHTWHITEPOLIRADIO,
  WHITEPOLIRADIO,
} from "./poliradioColors";

export const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "IBM Plex Sans Arabic",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    primary: {
      dark: DARKERBLUEPOLIRADIO,
      main: BLUEPOLIRADIO,
      light: LIGHTBLUEPOLIRADIO,
      contrastText: LIGHTERBLUEPOLIRADIO,
    },
    secondary: {
      main: WHITEPOLIRADIO,
      light: LIGHTWHITEPOLIRADIO,
    },
    action: {
      hover: HOVERPOLIRADIO,
    },
    text: {
      secondary: WHITEPOLIRADIO,
    },
  },
});

export const schedulerTheme = createMuiTheme({
  typography: {
    fontFamily: [
      "IBM Plex Sans Arabic",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    primary: {
      main: DARKBLUEPOLIRADIO,
    },
    text: {
      secondary: BLUEPOLIRADIO,
    },
  },
});
