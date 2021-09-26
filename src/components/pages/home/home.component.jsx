import { Fragment } from "react";
import ScrollTop from "./scrollTop.component";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";

import Scheduler from "./scheduler.component";
import LatestRents from "../../LatestRentsComponent";

import { useCustomStyles } from "../../../shared/useStyles";
import Title from "../../utils/title";

import Fab from "@material-ui/core/Fab";
import KeyboardArrowUp from "@material-ui/icons/KeyboardArrowUpSharp";

const Home = () => {
  const classes = useCustomStyles();
  const toolbarId = "back-to-top-anchor";
  return (
    <Fragment>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ marginTop: "32px" }}
      >
        <Title name="Homepage" />
      </Grid>
      <Toolbar id={toolbarId} className={classes.backToTopAnchor} />
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="flex-start"
        style={{ marginBottom: "64px" }}
      >
        <Grid item md={2} xs={false}></Grid>
        <Grid
          item
          container
          md={4}
          xs={12}
          direction="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <Container>
            <Typography
              align="center"
              variant="h2"
              component="h1"
              gutterBottom
              color="textSecondary"
            >
              Occupazione attuale
            </Typography>
            <Scheduler />
          </Container>
        </Grid>
        <Grid
          item
          container
          md={4}
          xs={12}
          direction="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              color="textSecondary"
            >
              Ultimi affitti
            </Typography>
          </Grid>
          <Grid item xs={2}></Grid>
          <LatestRents />
        </Grid>
        <Grid item md={2} xs={false}></Grid>
      </Grid>
      <ScrollTop toolbarId={toolbarId}>
        <Fab color="primary" size="large" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>
    </Fragment>
  );
};

export default Home;
