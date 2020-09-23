import { createMuiTheme } from "@material-ui/core";
import { DARKERBLUEPOLIRADIO, DARKBLUEPOLIRADIO, BLUEPOLIRADIO, HOVERPOLIRADIO, LIGHTBLUEPOLIRADIO, LIGHTERBLUEPOLIRADIO, LIGHTWHITEPOLIRADIO, WHITEPOLIRADIO } from "./poliradioColors";

export const theme = createMuiTheme({
    palette: {
        primary: {
            dark: DARKERBLUEPOLIRADIO,
            main: BLUEPOLIRADIO,
            light: LIGHTBLUEPOLIRADIO,
            contrastText: LIGHTERBLUEPOLIRADIO
        },
        secondary: {
            main: WHITEPOLIRADIO,
            light: LIGHTWHITEPOLIRADIO
        },
        action: {
            hover: HOVERPOLIRADIO
        },
        text: {
            secondary: WHITEPOLIRADIO
        }
    }
});

export const schedulerTheme = createMuiTheme({
    palette: {
        primary: {
            main: DARKBLUEPOLIRADIO
        },
        text: {
            secondary: BLUEPOLIRADIO
        }
    }
})