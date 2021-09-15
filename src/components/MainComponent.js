import React, { Fragment, useState } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";

import Header from "./HeaderComponent";
import StickyFooter from "./FooterComponent";

import { connect, useSelector } from "react-redux";
import { actions } from "react-redux-form";

import Home from "./HomeComponent";
import Affitti from "./AffittiComponent";
import { SchedulerPresentation } from "./SchedulerComponent";
import { GROUPING, RESOURCES } from "../shared/rooms";
import { addBooking } from "../redux/ActionCreators";

const Main = (props) => {
  const [resources, setResources] = useState([RESOURCES]);
  const [grouping, setGrouping] = useState([GROUPING]);
  const { schedulerData, latestRents, inventary, styles } = useSelector(
    (state) => {
      console.log(state);
      return state;
    }
  );
  return (
    <Fragment>
      <header>
        <Header />
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
              />
            )}
          />
          <Route
            exact
            path="/studio"
            component={() => (
              <SchedulerPresentation
                schedulerData={schedulerData.filter(
                  (event) => event.room === 1 // schedulerData has a field called room: number 1 is studio upstairs, 2 is stanzino
                )}
                resources={resources}
                grouping={grouping}
                name="Studio"
                addBooking={addBooking}
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
                addBooking={addBooking}
              />
            )}
          />
          <Route
            path="/attrezzatura"
            component={() => (
              <Affitti inventary={inventary} name="Attrezzatura" />
            )}
          />
          <Redirect to="/" />
        </Switch>
      </main>
      <footer>
        <StickyFooter />
      </footer>
    </Fragment>
  );
};

export default Main;
