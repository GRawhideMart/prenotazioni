import React, { Component, Fragment } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";

import Header from "./HeaderComponent";
import StickyFooter from "./FooterComponent";

import { connect } from "react-redux";

import Home from "./HomeComponent";
import Affitti from "./AffittiComponent";
import { SchedulerPresentation } from "./SchedulerComponent";

const mapStateToProps = (state) => ({
  schedulerData: state.schedulerData,
  resources: state.resources,
  grouping: state.grouping,
  latestRents: state.latestRents,
  inventary: state.inventary,
  styles: state.styles
});

class Main extends Component {
  render() {
    const {
      schedulerData,
      resources,
      grouping,
      latestRents,
      inventary,
      styles
    } = this.props;

    return (
      <Fragment>
        <header>
          <Header style={styles} />
        </header>
        <main>
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <Home
                  schedulerData={schedulerData}
                  resources={resources}
                  grouping={grouping}
                  latestRents={latestRents}
                  style={styles}
                />
              )}
            />
            <Route
              exact
              path="/studio"
              component={() => (
                <SchedulerPresentation
                  schedulerData={schedulerData.filter(
                    (event) => event.room === 1
                  )}
                  resources={resources}
                  grouping={grouping}
                  name="Studio"
                  style={styles}
                />
              )}
            />
            <Route
              exact
              path="/stanzino"
              component={() => (
                <SchedulerPresentation
                  schedulerData={schedulerData.filter(
                    (event) => event.room === 2
                  )}
                  resources={resources}
                  grouping={grouping}
                  name="Stanzino"
                  style={styles}
                />
              )}
            />
            <Route
              path="/affitti"
              component={() => <Affitti inventary={inventary} style={styles} name="Inventario" />}
            />
            <Redirect to="/" />
          </Switch>
        </main>
        <footer>
          <StickyFooter style={styles}/>
        </footer>
      </Fragment>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
