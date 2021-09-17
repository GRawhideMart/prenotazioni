import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Header from "./HeaderComponent";
import StickyFooter from "./FooterComponent";

import { useSelector } from "react-redux";

import Home from "./HomeComponent";
import Affitti from "./AffittiComponent";
import { SchedulerPresentation } from "./SchedulerComponent";
import { addBooking } from "../redux/ActionCreators";

const Main = () => {
  const { schedulerData } = useSelector((state) => {
    return state;
  });
  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route
            exact
            path="/studio"
            component={() => (
              <SchedulerPresentation
                schedulerData={schedulerData.filter(
                  (event) => event.room === 1 // schedulerData has a field called room: number 1 is studio upstairs, 2 is stanzino
                )}
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
                name="Stanzino"
                addBooking={addBooking}
              />
            )}
          />
          <Route
            path="/attrezzatura"
            component={() => <Affitti name="Attrezzatura" />}
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
