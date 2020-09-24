import React, { Component, Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Header from './HeaderComponent';
import StickyFooter from './FooterComponent';

import Home from './HomeComponent';
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
        const { schedulerData, resources, grouping, latestRents } = this.state;
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
                        <Route path='/studio' component={Studio} />
                        <Route path='/stanzino' component={Stanzino} />
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

export default Main;