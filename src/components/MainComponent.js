import React, { Component, Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Grid, Container, Typography, Toolbar, makeStyles, useScrollTrigger, Zoom, Fab } from '@material-ui/core';
import { KeyboardArrowUp } from '@material-ui/icons';

import StickyFooter from './FooterComponent';
import Header from './HeaderComponent';
import LatestRents from './LatestRentsComponent';
import TimeScheduler from './SchedulerComponent';
import Studio from './StudioComponent';
import Stanzino from './StanzinoComponent';
import Affitti from './AffittiComponent';

import { SCHEDULERDATA } from '../shared/schedulerData';
import { GROUPING, RESOURCES } from '../shared/rooms';
import { RENTS } from '../shared/latestRents';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schedulerData: SCHEDULERDATA,
            resources: [ RESOURCES ],
            grouping: [ GROUPING ],
            latestRents: RENTS
        }
    }

    render() {
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

        const Home = () => {
            return(
                <Fragment>
                    <Grid container direction='row' justify='space-evenly' alignItems='flex-start'
                        style={{ marginBottom: '16px' }}
                    >
                        <Grid item md={2} xs={0}></Grid>
                        <Grid item md={4} xs={12} direction='column' justify='space-between' alignItems='center'>
                            <Container>
                                <Typography align='center' variant='h2' component='h1' gutterBottom color='textSecondary'>
                                    Occupazione attuale
                                </Typography>
                                <TimeScheduler 
                                    schedulerData={this.state.schedulerData}
                                    resources={this.state.resources}
                                    grouping={this.state.grouping}
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
                            <LatestRents rows={this.state.latestRents} />
                        </Grid>
                        <Grid item md={2} xs={0}></Grid>
                    </Grid>
                    <ScrollTop {...this.props}>
                        <Fab color='primary' size='large' aria-label='scroll back to top'>
                            <KeyboardArrowUp />
                        </Fab>
                    </ScrollTop>
                </Fragment>
            )
        }

        return(
            <Fragment>
                <header>
                    <Header />
                    <Toolbar id="back-to-top-anchor" />
                </header>
                <main>
                    <Switch>
                        <Route path='/' component={Home} />
                        <Route exact path='/studio/' component={<Studio />} />
                        <Route exact path='/stanzino/' component={<Stanzino />} />
                        <Route exact path='/affitti/' component={<Affitti />} />
                        <Redirect to='/' />
                    </Switch>
                </main>
                <footer>
                    <StickyFooter />
                </footer>
            </Fragment>
        );
    }
}

export default Main;