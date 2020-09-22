import { createMuiTheme } from "@material-ui/core";
import { BLUEPOLIRADIO, HOVERPOLIRADIO, LIGHTBLUEPOLIRADIO, LIGHTWHITEPOLIRADIO, WHITEPOLIRADIO } from "./poliradioColors";

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: BLUEPOLIRADIO,
            light: LIGHTBLUEPOLIRADIO
        },
        secondary: {
            main: WHITEPOLIRADIO,
            light: LIGHTWHITEPOLIRADIO
        },
        action: {
            hover: HOVERPOLIRADIO
        }
    }
});