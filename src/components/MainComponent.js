import React, { Component, Fragment } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';

import Header from './HeaderComponent';
import StickyFooter from './FooterComponent';

import { connect } from 'react-redux';

import Home from './HomeComponent';
import Affitti from './AffittiComponent';
import { SchedulerPresentation } from './SchedulerComponent';

import { SCHEDULERDATA } from '../shared/schedulerData';
import { GROUPING, RESOURCES } from '../shared/rooms';
import { RENTS } from '../shared/latestRents';

const mapStateToProps = state => ({
    schedulerData: state.schedulerData,
    resources: state.resources,
    grouping: state.grouping,
    latestRents: state.latestRents,
})

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { schedulerData, resources, grouping, latestRents } = this.props;

        return(
            <Fragment>
                <header>
                    <Header />
                    
                </header>
                <main>
                    <Switch>
                        <Route exact path='/' component={() => <Home 
                                                                    schedulerData={schedulerData}
                                                                    resources={resources}
                                                                    grouping={grouping}
                                                                    latestRents={latestRents}
                                                                />
                                                        }
                        />
                        <Route exact path='/studio' component={() => <SchedulerPresentation
                                                                    schedulerData={schedulerData.filter(event => event.room === 1)}
                                                                    resources={resources}
                                                                    grouping={grouping}
                                                                    latestRents={latestRents}
                                                                    name='Studio'
                                                                />
                                                        }
                        />
                        <Route exact path='/stanzino' component={() => <SchedulerPresentation
                                                                    schedulerData={schedulerData.filter(event => event.room === 2)}
                                                                    resources={resources}
                                                                    grouping={grouping}
                                                                    latestRents={latestRents}
                                                                    name='Stanzino'
                                                                />
                                                        }
                        />
                        <Route path='/affitti' component={Affitti} />
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

export default withRouter(connect(mapStateToProps)(Main));