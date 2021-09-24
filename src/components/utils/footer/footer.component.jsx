import { useCustomStyles } from "../../../shared/useStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import Copyright from "./copyright.component";

const StickyFooter = () => {
  const classes = useCustomStyles();

  return (
    <div className={classes.footerRoot}>
      <CssBaseline />

      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">Servizio prenotazioni</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
};

export default StickyFooter;
