import { Grid, Container } from '@material-ui/core';
import React, { Component, Fragment } from 'react';
import Header from './HeaderComponent';
import LatestRents from './LatestRentsComponent';
import TimeScheduler from './SchedulerComponent';

class Main extends Component {
    render() {
        return(
            <Fragment>
                <Header />
                <Grid container direction='row' justify='space-evenly' alignItems='flex-start'>
                    <Grid item xs={6}>
                        <Container>
                            <TimeScheduler />
                        </Container>
                    </Grid>
                    <Grid item xs={6}>
                        <Container>
                            <h1>Ultimi affitti</h1>
                            <LatestRents />
                        </Container>
                    </Grid>
                </Grid>
            </Fragment>
        )
    }
}

export default Main;