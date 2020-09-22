import { Grid, Container, Typography, Toolbar, makeStyles, useScrollTrigger, Zoom, Fab } from '@material-ui/core';
import { KeyboardArrowUp } from '@material-ui/icons';
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import StickyFooter from './FooterComponent';
import Header from './HeaderComponent';
import LatestRents from './LatestRentsComponent';
import TimeScheduler from './SchedulerComponent';

class Main extends Component {
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
            /**
             * Injected by the documentation to work in an iframe.
             * You won't need it on your project.
             */
            window: PropTypes.func,
        };

        return(
            <Fragment>
                <header>
                    <Header />
                    <Toolbar id="back-to-top-anchor" />
                </header>
                <main>
                    <Grid container direction='row' justify='space-evenly' alignItems='flex-start'>
                        <Grid item md={2} xs={0}></Grid>
                        <Grid item md={4} xs={12} direction='column' justify='space-between' alignItems='center' style={{marginTop: '32px'}}>
                            <Container>
                                <Typography align='center' variant='h2' component='h1' gutterBottom color='textSecondary'>
                                    Occupazione attuale
                                </Typography>
                                <TimeScheduler />
                            </Container>
                        </Grid>
                        <Grid item container md={4} xs={12} direction='column' justify='space-between' alignItems='center' style={{marginTop: '32px'}}>
                            <Grid item xs={2}></Grid>
                            <Grid item xs={8}>
                                <Typography variant="h2" component="h1" gutterBottom color='textSecondary'>
                                    Ultimi affitti
                                </Typography>
                            </Grid>
                            <Grid item xs={2}></Grid>
                            <LatestRents />
                        </Grid>
                        <Grid item md={2} xs={0}></Grid>
                    </Grid>
                    <ScrollTop {...this.props}>
                        <Fab color='primary' size='large' aria-label='scroll back to top'>
                            <KeyboardArrowUp />
                        </Fab>
                    </ScrollTop>
                </main>
                <footer>
                    <StickyFooter />
                </footer>
            </Fragment>
        );
    }
}

export default Main;