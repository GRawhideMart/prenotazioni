import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { useSelector } from "react-redux";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link color="inherit" href="https://membri.poliradio.it/">
        POLI.RADIO
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export const StickyFooter = () => {
  const style = useSelector((state) => state.styles);
  const classes = style();

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
