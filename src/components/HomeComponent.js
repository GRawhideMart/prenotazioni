import React, { Fragment } from "react";
import PropTypes from "prop-types";

import {
  Grid,
  Container,
  Typography,
  Toolbar,
  Fab,
  Zoom,
  useScrollTrigger,
} from "@material-ui/core";
import { KeyboardArrowUp } from "@material-ui/icons";

import LatestRents from "./LatestRentsComponent";
import HomeScheduler from "./SchedulerComponent";
import Title from "./TitleComponent";
import { useSelector } from "react-redux";

const ScrollTop = ({ children, window }) => {
  const style = useSelector((state) => state.styles);
  const classes = style();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClick}
        role="presentation"
        className={classes.homeRoot}
      >
        {children}
      </div>
    </Zoom>
  );
};

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
};

const Home = (props) => {
  const { styles: style } = useSelector((state) => state);
  const classes = style();
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
      <Toolbar id="back-to-top-anchor" className={classes.backToTopAnchor} />
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
            <HomeScheduler />
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
      <ScrollTop {...props}>
        <Fab color="primary" size="large" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>
    </Fragment>
  );
};

export default Home;
