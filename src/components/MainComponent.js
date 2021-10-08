import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Header from "./utils/header";
import Footer from "./utils/footer";

import Home from "./pages/home";
import Affitti from "./pages/rentals";
import Inventario from "./pages/inventory";

import Scheduler from "./pages/scheduler";
import Add from "./pages/forms/addItem/addItem.component";
import Login from "./pages/login";

const Main = () => {
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
              <Scheduler name="Studio" resource="room-studio1" />
            )}
          />
          <Route
            exact
            path="/stanzino"
            component={() => (
              <Scheduler name="Stanzino" resource="room-studio2" />
            )}
          />
          <Route
            path="/attrezzatura"
            component={() => <Affitti name="Attrezzatura" />}
          />
          <Route
            path="/inventario"
            component={() => <Inventario name="Gestione Inventario" />}
          />
          <Route exact path="/_login" component={Login} />
          <Redirect to="/" />
        </Switch>
      </main>
      <footer>
        <Footer copyright="POLI.RADIO" />
      </footer>
    </Fragment>
  );
};

export default Main;
