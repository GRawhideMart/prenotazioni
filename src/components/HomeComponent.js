import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Grid, Container, Typography, Toolbar, Fab, Zoom, makeStyles, useScrollTrigger } from '@material-ui/core';
import { KeyboardArrowUp } from '@material-ui/icons';

import LatestRents from './LatestRentsComponent';
import TimeScheduler from './SchedulerComponent';

const useStyles = makeStyles((theme) => ({
    root: {
      position: 'fixed',
      bottom: theme.spacing(8),
      right: theme.spacing(8),
    },
  }));
const ScrollTop = (props) => {
    const { children, window } = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
  
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };
  
    return (
      <Zoom in={trigger}>
        <div onClick={handleClick} role="presentation" className={classes.root}>
          {children}
        </div>
      </Zoom>
    );
}

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
};

const Home = (props) => {
    const { schedulerData, resources, grouping, latestRents } = props;

    return(
        <Fragment>
            <Toolbar id="back-to-top-anchor" />
            <Grid container direction='row' justify='space-evenly' alignItems='flex-start'
                style={{ marginBottom: '64px' }}
            >
                <Grid item md={2} xs={0}></Grid>
                <Grid item md={4} xs={12} direction='column' justify='space-between' alignItems='center'>
                    <Container>
                        <Typography align='center' variant='h2' component='h1' gutterBottom color='textSecondary'>
                            Occupazione attuale
                        </Typography>
                        <TimeScheduler 
                            schedulerData={schedulerData}
                            resources={resources}
                            grouping={grouping}
                        />
                    </Container>
                </Grid>
                <Grid item container md={4} xs={12} direction='column' justify='space-between' alignItems='center'>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                        <Typography variant="h2" component="h1" gutterBottom color='textSecondary'>
                            Ultimi affitti
                        </Typography>
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <LatestRents rows={latestRents} />
                </Grid>
                <Grid item md={2} xs={0}></Grid>
            </Grid>
            <ScrollTop {...props}>
                <Fab color='primary' size='large' aria-label='scroll back to top'>
                    <KeyboardArrowUp />
                </Fab>
            </ScrollTop>
        </Fragment>
    )
}

export default Home;