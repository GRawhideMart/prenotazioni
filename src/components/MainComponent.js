import { Grid, Container, Typography } from '@material-ui/core';
import React, { Component, Fragment } from 'react';
import StickyFooter from './FooterComponent';
import Header from './HeaderComponent';
import LatestRents from './LatestRentsComponent';
import TimeScheduler from './SchedulerComponent';

class Main extends Component {
    render() {
        return(
            <Fragment>
                <header>
                    <Header />
                </header>
                <main>
                    <Grid container direction='row' justify='space-evenly' alignItems='flex-start'>
                        <Grid item md={2} xs={0}></Grid>
                        <Grid item md={4} xs={12}>
                            <Container>
                                <TimeScheduler />
                            </Container>
                        </Grid>
                        <Grid item container md={4} xs={12} direction='column' justify='space-between' alignItems='center' style={{marginTop: '32px'}}>
                            <Grid item xs={2}></Grid>
                            <Grid item xs={8}>
                                <Typography variant="h2" component="h1" gutterBottom>
                                    Ultimi affitti
                                </Typography>
                            </Grid>
                            <Grid item xs={2}></Grid>
                            <LatestRents />
                        </Grid>
                        <Grid item md={2} xs={0}></Grid>
                    </Grid>
                </main>
                <footer>
                    <StickyFooter />
                </footer>
            </Fragment>
        );
    }
}

export default Main;